const NeonButton = ({
  text,
  onClick,
  icon,
  className = '',
}: {
    text: string;
    onClick: () => void;
    icon?: React.ReactElement;
    className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-neon ${className} ${icon && 'with-icon'}`}
    >
      <div className="text">
        {text}
      </div>

      { icon ? (
        <div className="btn-neon-bg-icon">
          <div className="background-icon flex">
            {icon}
          </div>
        </div>
      )
        : (
          <div className="btn-neon-bg">
            <div className="background" />
          </div>
        )
      }

      <div className="sticky-element se-big" />
    </button>
  );
};

export default NeonButton;
