import { useEffect } from "react";

type ExtraInfoType = {
  extraInfo: string;
  elses: number;
};

const SampleInfo = ({ extraInfo, elses }: ExtraInfoType) => {
  return (
    <p>
      {extraInfo} {elses}
    </p>
  );
};

export default SampleInfo;
