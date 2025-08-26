import React from 'react';

type MenuButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  open?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const MenuButton = ({ className = '', open = false, ref, ...props }: MenuButtonProps) => {
  return (
    <button
      ref={ref}
      className={`metal-btn flex flex-col gap-1 items-center justify-center ${className}`}
      aria-label="Abrir menu"
      {...props}
    >
      <span
        className={
          `block w-5 h-1 bg-neon rounded transition-all duration-300
          ${open ? 'rotate-45 translate-y-2' : ''}`
        }
      />

      <span
        className={
          `block w-5 h-1 bg-neon rounded transition-all duration-300
          ${open ? 'opacity-0' : 'opacity-100'}`
        }
      />

      <span
        className={
          `block w-5 h-1 bg-neon rounded transition-all duration-300
          ${open ? '-rotate-45 -translate-y-2' : ''}`
        }
      />
    </button>
  );
};

export default MenuButton;
