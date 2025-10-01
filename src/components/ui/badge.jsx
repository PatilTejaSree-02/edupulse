import * as React from "react";
import "./badge.css";

const Badge = ({ className = '', variant = 'default', ...props }) => {
  const variantClass = `badge-${variant}`;
  const classes = `badge ${variantClass} ${className}`.trim();
  
  return <div className={classes} {...props} />;
};

export { Badge };
