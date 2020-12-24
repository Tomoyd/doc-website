import clsx from "clsx";
import React from "react";
/**
 *
 * @param {{
 *  type:"react"|"html"|"Vue"|"Webpack"|"typescript"|"JavaScript"|"quweizatan"|"css"
 * }} param0
 */

const Icon = ({ className = "", type = "", size }) => {
  return (
    <span
      className={clsx("iconfont", `icon${type}`, className)}
      style={{ fontSize: size + "px" }}
    ></span>
  );
};

export default Icon;
