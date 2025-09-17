import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Magnetic, NeonButton } from '../components';
import Curve from '../components/Layout/Curve';
import { useNextRoute } from '../context/NextRouteContext';
import HomeBg from '../components/ShaderGradient/WelcomeBg';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setNextRoute } = useNextRoute();

  return (
    <Curve>
      <HomeBg />

      <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-3">

        <h1 className="text-center mb-3 md:mb-6 drop-shadow-xl drop-shadow-neutral-950/30">
          <Trans i18nKey="welcome.title">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-lavender font-shrikhand">
            the trip of
            </span>

            <br />

            <span
              className={`
                text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                font-oi tracking-wider bg-clip-text text-transparent
                bg-radial from-blue-200 via-green-200 to-green-500
              `}
            >
            Beatriz
            </span>
          </Trans>
        </h1>

        <p className={'paragraph-welcome whitespace-pre-line text-center text-white'}>
          {<Trans i18nKey="welcome.subtitle">
          Explore my journey in the world of web development
            <br />
          hitchhiking on a flying saucer!
          </Trans>}
        </p>

        <Magnetic>
          <NeonButton
            text={t('welcome.explore', { defaultValue: 'EXPLORE' })}
            onClick={() => {
              const route = '/home';
              setNextRoute(route);
              navigate(route);
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
          />
        </Magnetic>
      </div>

    </Curve>
  );
};
export default Welcome;
