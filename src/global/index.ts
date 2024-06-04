import { App } from 'vue'
import { registerElement, registerIcons } from './register-element'
import { registerSvg } from './register-svg'

export function globalRegister(app: App<Element>): void {
  app.use(registerElement).use(registerIcons).use(registerSvg)
}
