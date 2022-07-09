/// <reference path="../../interface/HocInf.d.ts" />

import { ComponentType, useCallback, useState } from "react";

export default function withTimer<T>(Component: ComponentType<T>) {
  const TimerComp = (hocProps: Omit<T, keyof HocInf.SampleInf>) => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState<NodeJS.Timer | number>(-1);

    const startTimer = useCallback(() => {
      const timer = setInterval(
        () =>
          setCount((previous) => {
            return previous + 1;
          }),
        1000
      );
      setTimer(timer);
    }, []);

    const endTimer = useCallback(() => {
      clearInterval(timer);
      setCount(0);
    }, [timer]);

    return (
      <Component
        {...(hocProps as T)}
        startTimer={startTimer}
        endTimer={endTimer}
        count={count}
      />
    );
  };

  return TimerComp;
}
