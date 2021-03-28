module.exports = {
  title: "Tomoyd ",
  tagline: "前端世界",
  url: "https://tomoyd.github.io",
  organizationName: "tomoyd", // Usually your GitHub org/user name.
  projectName: "tomoyd.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/tomo.ico",
  themes: ["@docusaurus/theme-live-codeblock"],
  // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Tomoyd",
      logo: {
        alt: "My Site Logo",
        src: "img/tomo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        { to: "blog", label: "博客", position: "left" },
        {
          to: "demo/",
          label: "demo",
          position: "right",
        },
        {
          href: "https://github.com/Tomoyd",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "demo",
              to: "demo/",
            },
            {
              label: "关于我",
              to: "aboutme/",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Tomoyd/my-blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tomoyd, Inc. Built with Docusaurus.`,
    },
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Tomoyd/doc-website/tree/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Tomoyd/doc-website/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
