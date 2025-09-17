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
  const hasIcon = !!icon;

  const backgroundContainerClass = `
    absolute overflow-hidden -z-1 w-full h-full flex items-center
    ${hasIcon ? 'right-0 pr-[1em] justify-end' : 'justify-center'}
  `;

  const backgroundClass = hasIcon
    ? 'background-icon flex transition-transform duration-500 ease-out text-neon-light'
    : 'background bg-neon-light w-[1em] h-[1em] rounded-full text-neon-light';

  return (
    <button
      onClick={onClick}
      className={`
        btn-neon backdrop-blur-xs
        relative flex justify-center items-center
        w-full h-full py-[.5em] px-[1em]
        border-3 border-neon-light drop-shadow-2xl drop-shadow-neon-light/50
        transition-colors duration-500 delay-0
        font-64 text-neon-light/80 uppercase
        hover:text-purple-light will-change-auto
        hover:transition-colors hover:duration-500 hover:delay-0
        ${hasIcon && 'has-icon pr-[3em]'}
        ${className}
      `}
    >
      <div className="text transition-transform duration-500 ease-out">
        {text}
      </div>

      <div className={backgroundContainerClass} aria-hidden="true">
        <div className={backgroundClass}>
          {icon}
        </div>
      </div>

      <div className="sticky-element se-big" />
    </button>
  );
};

export default NeonButton;
