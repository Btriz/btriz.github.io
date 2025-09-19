import type { IconType } from 'react-icons/lib';

const NeonButton = ({
  text,
  icon,
  className = '',
  ...props
}: {
    text: string;
    icon?: IconType;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const hasIcon = !!icon;
  const Icon = icon;

  const backgroundContainerClass = `
    absolute overflow-hidden -z-1 w-full h-full flex items-center
    ${hasIcon ? 'right-0 pr-[1em] justify-end' : 'justify-center'}
  `;

  const backgroundClass = hasIcon
    ? 'background-icon flex transition-transform duration-500 ease-out text-neon-light'
    : 'background bg-neon-light w-[1em] h-[1em] rounded-full text-neon-light';

  return (
    <button
      {...props}
      className={`
        btn-neon backdrop-blur-xs cursor-pointer
        relative flex justify-center items-center
        w-fit h-fit py-[.5em] px-[1em]
        border-3 border-neon-light drop-shadow-2xl drop-shadow-neon-light/50
        transition-colors duration-500 delay-0
        font-64 text-neon-light uppercase
        hover:text-purple-light will-change-auto hover:animate-none
        hover:transition-colors hover:duration-500 hover:delay-0
        ${hasIcon && 'has-icon pr-[3.5em]'}
        ${className}
      `}
    >
      <div className="text transition-transform duration-500 ease-out translate-y-0.5">
        {text}
      </div>

      <div className={backgroundContainerClass} aria-hidden="true">
        <div className={backgroundClass}>
          {Icon && <Icon color="#65f5afdb" className="h-6 w-6" />}
        </div>
      </div>

      <div className="sticky-element se-big" />
    </button>
  );
};

export default NeonButton;
