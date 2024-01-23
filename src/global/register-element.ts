import 'element-plus/dist/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElTabs,
  ElTabPane
} from 'element-plus'
import { App } from 'vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElTabs,
  ElTabPane
]

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function registerElement(app: App<Element>): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

export function registerIcons(app: App<Element>): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
