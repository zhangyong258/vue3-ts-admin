// 自定义ref 输入防抖
import { customRef } from 'vue'
type valueType = string | number
type timeoutType = string | number | NodeJS.Timeout | undefined
export default function (value: valueType, _delay: number) {
  let timer: timeoutType
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: valueType) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger()
        }, _delay)
      }
    }
  })
}
