import React from "react";
import ToggleText from "../../components/toggleText";
import styles from "./index.module.scss";
const DemoPage = () => {
  return (
    <div className={styles.demo}>
      <ToggleText>
        hello worldhello worldhello worldhello worldhello worldhello worldhello
        worldhello worldhello worldhello worldhello worldhello worldhello
        worldhello world
      </ToggleText>
    </div>
  );
};

export default DemoPage;
