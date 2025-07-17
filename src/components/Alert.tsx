type AlertProps = {
  type: 'success' | 'danger';
  text: string;
};

const Alert = ({ type, text }: AlertProps) => {
  const isDangerType = type === 'danger';

  return (
    <div className="absolute top-15 left-10 right-0 flex justify-center items-center">
      <div
        className={`${isDangerType ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center text-xs`}
        role="alert"
      >
        <p className={`${isDangerType ? 'bg-red-500' : 'bg-blue-500'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}>
          {isDangerType ? 'Failed' : 'Success'}
        </p>

        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
export type { AlertProps };
