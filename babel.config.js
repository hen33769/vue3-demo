module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // 按需引入elementPlus组件
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
      },
    ],
  ],
};
