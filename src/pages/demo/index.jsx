import Layout from "@theme/Layout";
import React from "react";
import Tab from "../../components/tab";
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
        <Tab
          initIndex={0}
          indictorHeight={2}
          tabs={[
            { key: 1, text: "tab1" },
            { key: 2, text: "tab2" },
            { key: 3, text: "tab3" },
            { key: 4, text: "tab4" }
          ]}
        ></Tab>
      </div>
    </Layout>
  );
};

export default DemoPage;
