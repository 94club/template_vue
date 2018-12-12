import Toast from './toast.vue'
let instance = null
let timer = null
var toastPlugin = {}

// 插件必须要有一个install方法
toastPlugin.install = function (Vue, options = {}) {
  const ToastConstructor = Vue.extend(Toast)
  // 实现toast的关闭方法
  ToastConstructor.prototype.close = function () {
    this.visible = false
    this.$el.addEventListener('transitionend', this.destroyeInstance.bind(this))
  }

  ToastConstructor.prototype.destroyeInstance = function () {
    instance = null
    this.$destroy(true)
    this.$el.removeEventListener('transitionend', this.destroyeInstance)
    this.$el.parentNode.removeChild(this.$el)
  }

  // 在Vue原型实现toast的DOM挂载、以及功能实现
  // 用户可以在Vue实例（Vue单文件就是一个Vue实例）通过this.$toast来访问以下内容
  Vue.prototype.$toast = (option = {msg: '默认信息', visiable: true, time: 2000}) => {
    if (instance) {
      instance.visible = option.visiable
      instance.msg = option.msg
      instance.time = option.time
      if (timer) {
        clearInterval(timer)
      }
      instance.$el.removeEventListener('transitionend', instance.destroyeInstance)
    } else {
      // https://cn.vuejs.org/v2/api/#vm-mount
      instance = new ToastConstructor({
        el: document.createElement('div'),
        propsData: {
          msg: option.msg,
          visible: true,
          time: 2000
        }
      })
      document.body.appendChild(instance.$el)
    }
    Vue.nextTick(() => {
      instance.visible = true
      timer = setTimeout(() => {
        instance.close()
      }, 2000)
    })
  }
}

// 最后将以上内容导出，即可在其他地方进行使用
export default toastPlugin
