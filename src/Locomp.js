import React from "react";
import Hocomp from "./Hocomp";

const Locomp = ({ wrapperName }) => {
  // const wrapperName = props.wrapperName;
//   const { wrapperName } = props;
  return <div>{wrapperName}</div>;
};

export default Hocomp(Locomp);
