import React, { ComponentType, useState, useEffect } from "react";

type ExtraInfoType = {
  extraInfo: string;
  elses: number;
};

export default function withExtraInfo<P>(
  WrappedComponent: ComponentType<P & ExtraInfoType>
) {
  const [extraInfo, setExtraInfo] = useState("");

  useEffect(() => {
    setExtraInfo("important data.");
  }, []);

  const ComponentWithExtraInfo = (props: P) => {
    return <WrappedComponent {...props} extraInfo={extraInfo} elses={1} />;
  };
  return ComponentWithExtraInfo;
}
