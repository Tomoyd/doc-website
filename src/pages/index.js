import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import sidebars from "../../sidebars";
import styles from "./styles.module.scss";

console.log("icons", Logo);
const bars = sidebars.someSidebar;
const keys = Object.keys(bars);
const features = [
  {
    title: "前端技术",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: <>JavaScript，CSS，H5，前端框架Vue，React</>,
    to: "docs/"
  },
  {
    title: "前端工程",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: <>前端工程化建设，webpack等技术</>,
    to: "docs/" + bars[keys[1]][0]
  },
  {
    title: "杂谈",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: <>一些有趣的文章杂谈.</>,
    to: "docs/" + bars[keys[2]][0]
  }
];

function Feature({ imageUrl, title, description, to }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link to={useBaseUrl(to)}>
        {imgUrl && (
          <div className='text--center'>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
      </Link>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description='Tomoyd的個人網站'>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
