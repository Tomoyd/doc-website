const transformToValidPageId = (ids, dir) =>
  dir ? ids.map((i) => `${dir}/${i}`) : ids;

const FRONT_BASE = "front_base";
const TS = "ts";
const DEPLOY = "deploy";
module.exports = {
  someSidebar: {
    开始: ["home"],
    前端技术: [
      { 前端基础: transformToValidPageId(["js", "css", "html5"], FRONT_BASE) },
      "React",
      "Vue",
      { TS: transformToValidPageId(["base"], TS) }
    ],
    部署: transformToValidPageId(["nginx", "webHook"], DEPLOY),
    前端工程: ["mdx"],
    杂谈: ["speaking"]
  }
};
