import 'element-plus/dist/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption
} from 'element-plus'
import { App } from 'vue'

const components = [ElButton, ElForm, ElFormItem, ElInput, ElSelect, ElOption]

export default function (app: App<Element>): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
