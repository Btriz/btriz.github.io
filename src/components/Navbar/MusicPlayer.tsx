import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

import { music, radio } from '../../assets/sounds';
import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';

const MusicPlayer = () => {
  const { t } = useTranslation();
  const musicTitle = 'Disco Voador - Rita Lee';
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isRadioPlaying, setIsRadioPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(
    (() => {
      const audio = new Audio(music);
      audio.volume = 0.3;
      audio.loop = true;
      return audio;
    })(),
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (isAudioPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isAudioPlaying]);

  const handleToggleAudio = () => {
    setIsRadioPlaying((prev) => !prev);
    const radioEffect = new Audio(radio);
    radioEffect.volume = 0.8;
    radioEffect.play();

    radioEffect.onended = () => {
      setIsAudioPlaying((prev) => !prev);
      setIsRadioPlaying(false);
    };

    if (isAudioPlaying) {
      audioRef.current.pause();
    }
  };

  return (
    <div
      className="flex items-center"
      role="region"
      aria-label={t('navbar.music.container', { defaultValue: 'Music player' })}
    >
      <Magnetic>
        <button
          className="metal-btn"
          onClick={handleToggleAudio}
          aria-label={isAudioPlaying
            ? t('music.pause', { defaultValue: 'Pause music' })
            : t('music.play', { defaultValue: 'Play music' })}
        >
          {(isRadioPlaying || isAudioPlaying)
            ? <MdMusicNote className={`${isRadioPlaying && 'animate-pulse-fast '} text-neon hover:text-neon-light`} />
            : <MdMusicOff className="text-gray-300 hover:text-neon-light" />}

          <div className="sticky-element" />
        </button>
      </Magnetic>

      <span aria-live="polite" className="sr-only">
        {isAudioPlaying && musicTitle}
      </span>

      <AnimatePresence>
        {(isRadioPlaying || isAudioPlaying) && (
          <motion.div
            className="flex-col items-center gap-2 text-neon px-2"
            exit={{ opacity: 0 }}
            transition={ { opacity: { duration: 0.3 } } }
          >
            <div className="opacity-70 flex items-center gap-2 ">
              <svg className="size-5"fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M4 5H2v14h18v-4h2V9h-2V5H4zm14 2v10H4V7h14zM6 9h2v6H6V9zm6 0h-2v6h2V9z" fill="currentColor" /> </svg>

              <svg className="size-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z" fill="currentColor" /> </svg>
            </div>

            <div className=" overflow-hidden whitespace-nowrap w-40 md:w-60">
              <motion.div
                aria-hidden="true"
                className="font-handjet text-base md:text-xl select-none leading-tight"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: -150 }}
                transition={{

                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 15,
                    ease: 'linear',
                  },
                }}
              >
                {isRadioPlaying
                  ? '•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••'
                  : `${musicTitle} • ${musicTitle} • ${musicTitle}`}

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
