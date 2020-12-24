import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import styles from "./index.module.scss";
const ReactSlider = ({ children }) => {
  return <div className={clsx("swiper-slide", styles.slide)}>{children}</div>;
};
const ReactSwiper = ({ children, className }) => {
  const ref = useRef();
  useEffect(() => {
    const swiper = new Swiper(ref.current, {
      // updateOnWindowResize: true,
      updateOnWindowResize: true,
      initialSlide: 0,
      slidesPerView: "auto",
      spaceBetween: 15
      //   autoplay: true,
      //   loop: true
    });
    return () => {
      swiper?.destroy();
    };
  }, []);
  return (
    <div ref={ref} className={styles.container}>
      <div className={clsx("swiper-wrapper", styles.row, className)}>
        {Array.isArray(children) ? (
          children.map((e, index) => (
            <ReactSlider key={e + index}>{e}</ReactSlider>
          ))
        ) : (
          <ReactSlider>{children}</ReactSlider>
        )}
      </div>
    </div>
  );
};

export default ReactSwiper;
