import ElementPlus from "element-plus";
// 全局引入elementPlus
// import "element-plus/lib/theme-chalk/index.css";

/**
 * 按需引入elementPlus
 * 在babel.config.js 配置
 * @import 样式
 * @import 按需引入组件
 */
import "element-plus/packages/theme-chalk/src/base.scss";
import { ElButton, ElInput } from "element-plus";

const components = [ElButton, ElInput];

const plugins: any = [];

export default (app: any) => {
  // app.use(ElementPlus); 全局引入
  console.log(components, plugins);
  components.forEach((component) => {
    app.component(component.name, component);
  });

  plugins.forEach((plugin: any) => {
    app.component(plugin);
  });
};
