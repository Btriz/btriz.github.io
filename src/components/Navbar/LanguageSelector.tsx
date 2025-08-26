import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';

const LanguageSelector = ({ className }: {className?: string}) => {
  const { i18n, t } = useTranslation();

  return (
    <div
      className=
        {`w-[50%] md:w-[25%] items-center md:items-end justify-center
        flex gap-3 sm:gap-5 md:gap-1 md:flex-col
        text-lavender text-lg font-tiny5 ${className}`}
    >
      <Magnetic>
        <button
          className={`${i18n.language === 'pt' && 'text-neon'}`}
          onClick={() => i18n.changeLanguage('pt')}
          aria-label={t('navbar.language.pt', { defaultValue: 'Switch to portuguese' })}
        >
          POR
        </button>
      </Magnetic>

      <Magnetic>
        <button
          className={`${i18n.language === 'en' && 'text-neon'}`}
          onClick={() => i18n.changeLanguage('en')}
          aria-label={t('navbar.language.en', { defaultValue: 'Switch to english' })}
        >
          ENG
        </button>
      </Magnetic>
    </div>
  );
};

export default LanguageSelector;
