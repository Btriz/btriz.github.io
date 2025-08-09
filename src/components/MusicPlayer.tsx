import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

import { music, radio } from '../assets/sounds';

const MusicPlayer = () => {
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
    <div className="fixed bottom-3 left-3 flex items-center z-500">
      <motion.button
        className="
          w-14 h-14 rounded-full
          bg-gradient-to-br from-gray-400 via-gray-600 to-gray-300 border-2 border-gray-500
          flex items-center justify-center
          active:scale-95
          transition-all
          duration-200
          shadow-[-1px_0_4px_#c9c9c9_inset]
          hover:shadow-[0_0_40px_#22c55e]
          hover:border-2 border-gray-400
          hover:scale-105
          focus:outline-none
        "
        onClick={handleToggleAudio}
        aria-label={isAudioPlaying ? 'Pause music' : 'Play music'}
      >
        {(isRadioPlaying || isAudioPlaying)
          ? <MdMusicNote size={40} color="#22c55e" />
          : <MdMusicOff size={40} color="white" />}
      </motion.button>

      <AnimatePresence>
        {(isRadioPlaying || isAudioPlaying) && (
          <div className="absolute left-18 overflow-hidden whitespace-nowrap w-60">
            <motion.div
              className="text-white font-mono text-[18px] select-none"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: -240 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 10,
                  ease: 'linear',
                },
              }}
            >
              {isRadioPlaying
                ? '•••••••••••••••••••••••••••••••••••••••••••••'
                : `${musicTitle} • ${musicTitle}`}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
