import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';

type LanguageSelectorProps = {
  className?: string;
  onChangeLanguage?: () => void;
};

const LanguageSelector = ({ className, onChangeLanguage }: LanguageSelectorProps) => {
  const { i18n, t } = useTranslation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    onChangeLanguage?.();
  };

  return (
    <div
      className=
        {`w-full md:w-[25%] flex md:justify-center gap-5
        text-lavender text-lg font-tiny5 ${className}`}
    >
      <Magnetic>
        <button
          className={`${i18n.language === 'pt' && 'text-neon'}`}
          onClick={() => handleChange('pt')}
          aria-label={t('navbar.language.pt', { defaultValue: 'Switch to portuguese' })}
        >
          POR
        </button>
      </Magnetic>

      <Magnetic>
        <button
          className={`${i18n.language === 'en' && 'text-neon'}`}
          onClick={() => handleChange('en')}
          aria-label={t('navbar.language.en', { defaultValue: 'Switch to english' })}
        >
          ENG
        </button>
      </Magnetic>
    </div>
  );
};

export default LanguageSelector;
