import { useEffect, useRef, useState } from "react";

export default function TestIntv() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);
  }, [count]);
  return (
    <>
      <div>test {count}</div>
    </>
  );
}
