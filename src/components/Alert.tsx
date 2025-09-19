type AlertProps = {
  type: 'success' | 'danger';
  text: string;
};

const Alert = ({ type, text }: AlertProps) => {
  const isDangerType = type === 'danger';

  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-20 flex justify-center items-center font-handjet text-xl z-10">
      <div
        className={`${isDangerType ? 'bg-pink-800/50' : 'bg-emerald-800/50'} backdrop-blur-xs p-2 text-indigo-100 leading-none flex lg:inline-flex items-center`}
        role="alert"
      >
        <p className={`${isDangerType ? 'bg-pink-500/50' : 'bg-emerald-500/50'} flex uppercase px-2 py-1 mr-3`}>
          {isDangerType ? 'Failed' : 'Success'}
        </p>

        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
export type { AlertProps };
