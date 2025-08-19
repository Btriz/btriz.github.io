import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-purple-dark bg-opacity-90 overflow-hidden">

      <h1 className="text-center leading-tight mb-3 md:mb-6  ">
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-lavender font-shrikhand">
          a viagem de
        </div>

        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-oi text-blue-200 pointer-events-none px-4">
          Beatriz
        </div>
      </h1>

      <p className="text-m sm:text-xl md:text-2xl lg:text-3xl text-center text-lavender font-serif mb-25 max-w-3xl px-4">
        Explore minha jornada no mudo do desenvolvimento web
        <br />
        de carona em um disco voador!
      </p>

      <button
        onClick={() => navigate('/Home')}
        className="btn-neon text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        EXPLORAR
      </button>
    </div>
  );
};
export default Welcome;
