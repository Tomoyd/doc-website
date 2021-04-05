import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useEffect } from "react";
import sidebars from "../../sidebars";
import ReactSwiper from "../components/swiper";
import styles from "./styles.module.scss";
import axios from "axios";
import wx from "weixin-js-sdk";

const bars = sidebars.someSidebar;
const keys = Object?.keys(bars);
const features = [
  {
    title: "JS",
    imageUrl: "img/javascript.svg",
    description: <>JavaScript，CSS，H5，前端框架Vue，React</>,
    to: "docs/",
  },
  {
    title: "TS",
    imageUrl: "img/typescript.svg",
    description: <>JavaScript，CSS，H5，前端框架Vue，React</>,
    to: "docs/ts/base",
  },
  {
    title: "React",
    imageUrl: "img/react.svg",
    description: <>前端工程化建设，webpack等技术</>,
    to: "docs/react",
  },
  {
    title: "vue",
    imageUrl: "img/vue.svg",
    description: <>一些有趣的文章杂谈.</>,
    to: "docs/vue",
  },
  {
    title: "前端工程",
    imageUrl: "img/Webpack.svg",
    description: <>一些有趣的文章杂谈.</>,
    to: "docs/mdx",
  },
  {
    title: "CSS",
    imageUrl: "img/css3.svg",
    description: <>css.</>,
    to: "docs/css",
  },
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
  useEffect(() => {
    axios
      .get("http://159.75.43.219/api/jswechat", {
        params: {
          url: encodeURIComponent(location.origin + location.pathname),
        },
      })
      .then((res) => {
        const { appId, nonceStr, signature, timestamp } = res.data;
        // @ts-ignore
        console.log("wx :>> ", wx);
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appId, // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名
          jsApiList: ["updateAppMessageShareData"], // 必填，需要使用的JS接口列表
        });
        wx.ready(function () {
          wx.updateAppMessageShareData({
            title: "hello", // 分享标题
            desc: "tomo", // 分享描述
            link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: "", // 分享图标
            success: function () {
              // 设置成功
              console.log("object :>> 设置成功");
            },
          });
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        wx.error(function () {
          console.log("error :>> ");
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        console.log("res :>> ", { appId, nonceStr, signature, timestamp });
      });
  }, []);
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
                styles.getStarted,
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
            <ReactSwiper className={styles.row}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </ReactSwiper>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
