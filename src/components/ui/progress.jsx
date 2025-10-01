import * as React from "react";
import "./progress.css";

const Progress = React.forwardRef(({ className = '', value = 0, ...props }, ref) => {
  const transform = `translateX(-${100 - (value || 0)}%)`;
  
  return (
    <div ref={ref} className={`progress ${className}`.trim()} {...props}>
      <div 
        className="progress-indicator" 
        style={{ transform }}
      />
    </div>
  );
});

Progress.displayName = "Progress";

export { Progress };
