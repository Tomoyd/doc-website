const transformToValidPageId = (ids, dir) =>
  dir ? ids.map((i) => `${dir}/${i}`) : ids;

const FRONT_BASE = "front_base";
module.exports = {
  someSidebar: {
    开始: ["home"],
    前端技术: [
      { 前端基础: transformToValidPageId(["js", "css", "html5"], FRONT_BASE) },
      "React",
      "Vue"
    ],
    前端工程: ["mdx"],
    杂谈: ["speaking"]
  }
};
