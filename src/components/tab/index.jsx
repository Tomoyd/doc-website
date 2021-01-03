import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
const TabItem = ({ children, onClick, active }) => {
  const cur = useRef();
  const scroll = () => {
    cur.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center"
    });
  };

  const handleClick = () => {
    scroll();
    if (onClick) {
      onClick(cur.current.offsetLeft + cur.current.scrollWidth / 2);
    }
  };

  useEffect(() => {
    if (active) {
      scroll();
      onClick(cur.current.offsetLeft + cur.current.scrollWidth / 2);
    }
  }, []);
  return (
    <div
      ref={cur}
      onClick={handleClick}
      className={clsx(styles.tabItem, { [styles.active]: active })}
    >
      {children}
    </div>
  );
};

const Tab = ({ tabs, initIndex, onChange, indictorHeight = 2 }) => {
  const [activeIndex, setIndex] = useState(initIndex);
  const [offset, setOffset] = useState(0);
  const handleClick = (item, index) => {
    if (onChange) {
      onChange(item);
    }
    setIndex(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        {tabs.map((item, index) => {
          return (
            <TabItem
              key={item.key}
              onClick={(value) => {
                setOffset(value);
                handleClick(item, index);
              }}
              active={index === activeIndex}
            >
              {item.text}
            </TabItem>
          );
        })}

        <div
          className={styles.tabIndictor}
          style={{
            transform: `translateX(${offset}px) translate(-50%)`,
            height: `${indictorHeight}px`
          }}
        ></div>
      </div>
      <div
        className={styles.indictorHeight}
        style={{ height: `${indictorHeight}px` }}
      ></div>
    </div>
  );
};

export default Tab;
