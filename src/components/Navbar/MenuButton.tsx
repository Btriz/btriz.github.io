import React, { forwardRef } from 'react';

const MenuButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`metal-btn flex-col ${className}`}
        {...props}
      >
        <span className="block w-5 h-0.5 bg-neon mb-1"></span>

        <span className="block w-5 h-0.5 bg-neon mb-1"></span>

        <span className="block w-5 h-0.5 bg-neon"></span>
      </button>
    );
  },
);

export default MenuButton;
