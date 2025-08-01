type WelcomeProps = {
  handleEnter: () => void;
};

const Welcome = ({ handleEnter }: WelcomeProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 transition-all">
      <h1 className="text-4xl text-white mb-6">Boas vindas!</h1>

      <p className="text-white mb-8">Informações iniciais...</p>

      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600"
        onClick={handleEnter}
      >
          Entrar
      </button>
    </div>

  );
};

export default Welcome;
