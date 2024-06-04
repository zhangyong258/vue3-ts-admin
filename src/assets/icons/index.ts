import SvgIcon from '@/components/SvgIcon/index.vue'
/**
 * 导入所有 SVG文件
 */
export const svgRequire = require.context('./svg', false, /\.svg$/)

/**
 * 全局注册SvgIcon
 */
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
// console.log(svgRequire)
export default (app: any) => {
  app.component('svg-icon', SvgIcon)
}
