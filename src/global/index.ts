import { App } from 'vue'
import { registerElement, registerIcons } from './register-element'

export function globalRegister(app: App<Element>): void {
  app.use(registerElement).use(registerIcons)
}
