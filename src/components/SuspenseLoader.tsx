const SuspenseLoader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
      <div className="w-[10vw] h-[10vw] rounded-full">
        <div
          className="w-full h-full border-4 border-t-blue-500
          border-opacity-20 border-blue-500
          rounded-full animate-spin"
        />
      </div>
    </div>
  );
};

export default SuspenseLoader;
