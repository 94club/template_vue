import Vue from 'vue'
import AlertComponent from './alert.vue'
let AlertConstructor = Vue.extend(AlertComponent)

let instance

const Alert = (options) => {
  if (Vue.prototype.$isServer) {
    return
  }
  if (instance) {
    instance.title = options.title
    instance.msg = options.msg
    instance.type = options.type
    instance.closeShow = options.closeShow
    instance.htmlMsg = options.htmlMsg
    instance.leftMsg = options.leftMsg
    instance.rightMsg = options.rightMsg
    instance.onConfirm = options.onConfirm
    instance.onCancel = options.onCancel
    instance.onClose = options.onClose
    instance.visible = options.visible
  } else {
    instance = new AlertConstructor({
      data: options
    })
  }
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = 9999
}

export default Alert
