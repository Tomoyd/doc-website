import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const toggleMapText = {
  true: "收起",
  false: "展开"
};

const parseSecondContent = (target, content) => {
  const dom = target || {};
  const contentStr = content || "";
  let i = 3;
  dom.innerText = contentStr.substr(0, i);
  while (i <= contentStr.length && dom.scrollHeight <= 20) {
    i += 1;
    dom.innerText = contentStr.substr(0, i);
  }
  dom.innerText = contentStr.substr(0, i - 1);
  return i - 1;
};

const ToggleText = ({ children }) => {
  const [hasMore, setHasMore] = useState(false);
  const [isExpanded, serExpanded] = useState(false);
  const [secStr, setSecondStr] = useState("");
  const content = useRef();

  useEffect(() => {
    const handleResize = () => {
      const dom = content.current.firstChild;
      dom.innerText = children;
      if (dom.scrollHeight > 40) {
        setHasMore(true);
        const secStart = parseSecondContent(dom, children);
        setSecondStr(children.substr(secStart));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);
  return (
    <div ref={content} className={styles.text}>
      <div className={styles.content}>{children}</div>
      {hasMore && (
        <div className={clsx({ [styles.flex]: !isExpanded })}>
          <div
            className={clsx(styles.content, { [styles.ellipsis]: !isExpanded })}
          >
            {secStr}
          </div>
          <div
            onClick={() => {
              serExpanded(!isExpanded);
            }}
            className={clsx(styles.moreText, {
              [styles.expended]: isExpanded,
              [styles.folded]: !isExpanded
            })}
          >
            {[toggleMapText[isExpanded]]}
            <span className={styles.arrow}>{">"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleText;
