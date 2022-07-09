import { useEffect } from "react";

type ExtraInfoType = {
  extraInfo: string;
  extraData: string;
};

const SampleInfo = (props: ExtraInfoType) => {
  const { extraInfo, extraData } = props;
  return (
    <p>
      {extraInfo} with {extraData}
    </p>
  );
};

export default SampleInfo;
