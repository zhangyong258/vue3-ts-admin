import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
/**
 * 导入所有 SVG文件
 */
export const svgRequire = require.context('@/assets/icons/svg', false, /\.svg$/)
/**
 * 全局注册SvgIcon
 */
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
console.log('🚀 ~ svgRequire:', svgRequire.keys())
export function registerSvg(app: App<Element>): void {
  app.component('svg-icon', SvgIcon)
}
