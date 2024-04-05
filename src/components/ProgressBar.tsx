import React from 'react';

interface ProgressBarProps {
  percentage: number,
  className: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  className
}) => {

  return (
    <div className={`${className} block w-full h-[10px] bg-gray-200 rounded`}>
      <div
        className={`block h-[10px] bg-rose-500 rounded`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

ProgressBar.defaultProps = {
  percentage: 0,
  className: ''
}

export default ProgressBar;
