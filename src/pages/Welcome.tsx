import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Magnetic } from '../components';
import Curve from '../components/Layout/Curve';
import { useNextRoute } from '../context/NextRouteContext';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setNextRoute } = useNextRoute();

  return (
    <Curve>
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-purple-dark bg-opacity-90 overflow-hidden px-3">

        <h1 className="text-center leading-tight mb-3 md:mb-6  ">
          <Trans i18nKey="welcome.title">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-lavender font-shrikhand">
            the trip of
            </span>

            <br />

            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-oi text-blue-200">
            Beatriz
            </span>
          </Trans>
        </h1>

        <p className="whitespace-pre-line text-m sm:text-xl md:text-2xl lg:text-3xl text-center text-lavender font-serif mb-25 max-w-3xl">
          {<Trans i18nKey="welcome.subtitle">
          Explore my journey in the world of web development
            <br />
          hitchhiking on a flying saucer!
          </Trans>}
        </p>

        <Magnetic>
          <button
            onClick={() => {
              const route = '/home';
              setNextRoute(route);
              navigate(route);
            }}
            className="btn-neon text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            { t('welcome.explore', { defaultValue: 'EXPLORE' })}

            <div className="sticky-element" />
          </button>
        </Magnetic>
      </div>
    </Curve>
  );
};
export default Welcome;
