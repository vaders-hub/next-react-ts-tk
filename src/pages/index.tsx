import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../features/counter/counterSlice";

import SampleTimer from "@/components/SampleTimer";
import withTimer from "@/components/hocs/withTimer";
import SampleInfo from "@/components/SampleInfo";
import withExtraInfo from "@/components/hocs/withExtraInfo";
import SampleCounter from "@/components/SampleCounter";
import withCounter from "@/components/hocs/withCounter";
import TestIntv from "@/components/TestIntv";

import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const SampleWithTimer = withTimer(SampleTimer);
  const SampleWithInfo = withExtraInfo(SampleInfo);
  const SampleWithCounter = withCounter(SampleCounter);

  return (
    <>
      <h1>Redux toolkit</h1>
      <h2>
        The current number is
        <span> {count}</span>
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
      <Link href="/kanye">kanye</Link>
      <SampleWithTimer />
      <SampleWithInfo extraData={"extraData"} />
      <SampleWithCounter defaultValue={0} />
      {/* <TestIntv/> */}
    </>
  );
};

export default IndexPage;
