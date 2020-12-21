import clsx from "clsx";
import React from "react";

const Icon = ({ className = "", type = "" }) => {
  return <span className={clsx("iconfont", type, className)}></span>;
};

export default Icon;
