import { useEffect } from "react";

interface SampleInf {
  count: number;
  startTimer: () => void;
  endTimer: () => void;
}

const SampleTimer = ({ count, startTimer, endTimer }: SampleInf) => {
  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (count === 6) {
      endTimer();
    }
  }, [count, endTimer]);

  return <p>{count}</p>;
};

export default SampleTimer;
