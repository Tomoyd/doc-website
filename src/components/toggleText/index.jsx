import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const toggleMapText = {
  true: "收起",
  false: "展开"
};
const ToggleText = ({ children }) => {
  const [hasMore, setHasMore] = useState(false);
  const [isExpanded, serExpanded] = useState(false);
  const content = useRef();

  useEffect(() => {
    console.log(
      "content.current.scrollHeight :>> ",
      content.current.scrollHeight
    );
    if (content.current.scrollHeight > 32) {
      setHasMore(true);
    }
  }, []);
  return (
    <div className={styles.text}>
      <div
        ref={content}
        className={clsx(styles.content, { [styles.ellipsis]: !isExpanded })}
      >
        {children}
      </div>
      {hasMore && (
        <div
          onClick={() => {
            serExpanded(!isExpanded);
          }}
          className={clsx(styles.moreText, {
            [styles.expended]: isExpanded,
            [styles.folded]: !isExpanded
          })}
        >
          {!isExpanded && <span className={styles.dot}>...</span>}
          {[toggleMapText[isExpanded]]}
          <span className={styles.arrow}>{">"}</span>
        </div>
      )}
    </div>
  );
};

export default ToggleText;
