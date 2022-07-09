import React, { ComponentType, useState, useEffect } from "react";

type ExtraInfoType = {
  extraData: string;
};

export default function withExtraInfo<P>(WrappedComponent: ComponentType<P>) {
  const [extraInfo, setExtraInfo] = useState("");

  useEffect(() => {
    setExtraInfo("important data.");
  }, []);

  const ComponentWithExtraInfo = ({ extraData, ...props }: ExtraInfoType) => {
    return (
      <WrappedComponent
        {...(props as P)}
        extraData={extraData}
        extraInfo={extraInfo}
      />
    );
  };
  return ComponentWithExtraInfo;
}
