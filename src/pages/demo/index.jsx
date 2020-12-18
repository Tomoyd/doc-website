import Layout from "@theme/Layout";
import React from "react";
import ToggleText from "../../components/toggleText";
import styles from "./index.module.scss";
const DemoPage = () => {
  return (
    <Layout title='demo' description='Tomoyd的個人網站'>
      <div className={styles.demo}>
        <ToggleText>
          hello worldhello worldhello worldhello worldhello worldhello
          worldhello worldhello worldhello worldhello worldhello worldhello
          worldhello worldhello world
        </ToggleText>
      </div>
    </Layout>
  );
};

export default DemoPage;
