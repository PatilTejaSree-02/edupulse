import * as React from "react";
import "./button.css";

const Button = React.forwardRef(({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  disabled = false,
  onClick,
  children,
  type = 'button',
  style,
  ...props 
}, ref) => {
  const variantClass = `button-${variant}`;
  const sizeClass = size === 'default' ? 'button-default-size' : `button-${size}`;
  const classes = `button ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button 
      className={classes}
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
