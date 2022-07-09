import React from "react";

export interface WrappedProps {
  value: number;
  isBlack: boolean;
  onClick: () => void;
}

const SampleCounter = ({ value, isBlack, onClick }: WrappedProps) => {
  const color = isBlack ? "black" : "green";
  return (
    <div style={{ color: color }} onClick={onClick}>
      {value}
    </div>
  );
};

export default SampleCounter;
