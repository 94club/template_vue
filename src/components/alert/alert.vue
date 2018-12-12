<template>
  <section class="alert" :class="[visible ? '': 'hide']">
    <div class="alert-content">
      <span class="iconfont icon-close" @click="close" v-show="closeShow"></span>
      <span v-if="type === 'success'" class="iconfont icon-success"></span>
      <h5 class="alert-content-title" v-else>{{ title }}</h5>
      <div class="alert-content-msg" v-if="msg">{{ msg }}</div>
      <div class="alert-content-msg" v-if="htmlMsg" v-html="htmlMsg"></div>
      <div v-show="type === 'info'" class="alert-content-btns">
        <div class="btn2" @click="confirm">确定</div>
      </div>
      <div v-show="type === 'warning'" class="alert-content-btns">
        <div v-show="leftMsg" class="btn1" @click="cancel">{{leftMsg}}</div>
        <div class="btn2" @click="confirm">{{rightMsg}}</div>
      </div>
      <div v-show="type === 'success'" class="alert-content-btns">
        <div v-show="leftMsg" class="btn1" @click="cancel">{{leftMsg}}</div>
        <div class="btn2" @click="confirm">{{rightMsg}}</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      type: 'info',
      title: '',
      msg: '',
      htmlMsg: '',
      leftMsg: '',
      rightMsg: '确定',
      onConfirm: false,
      onCancel: false,
      onClose: false,
      visible: false,
      closeShow: true,
      configJson: ''
    }
  },
  methods: {
    confirm () {
      this.visible = false
      if (typeof this.onConfirm === 'function') {
        this.onConfirm()
      }
    },
    cancel () {
      this.visible = false
      if (typeof this.onCancel === 'function') {
        this.onCancel()
      }
    },
    close () {
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../style/px2rem.scss';
.alert {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.8);
  .alert-content {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    width: px2rem(692);
    height: px2rem(360);
    border-radius: 4px;
    background: #4A4A4A;
    animation: show 1s ease;
    text-align: center;
    .alert-content-title {
      margin-top: px2rem(24);
      height: px2rem(40);
      line-height: px2rem(40);
      color: #c5c5c5;
      font-size: px2rem(28);
    }
    .icon-close {
      position: absolute;
      right: px2rem(20);
      top: px2rem(20);
      color: #999;
      font-size: px2rem(32);
    }
    .icon-success {
      display: inline-block;
      margin-top: px2rem(40);
      color: #78B831;
      font-size: px2rem(96);
    }
    .alert-content-msg {
      margin-top: px2rem(56);
      font-size: px2rem(28);
      color: #fff;
      p {
        line-height: px2rem(40);
      }
    }
    .alert-content-btns {
      position: absolute;
      bottom: px2rem(32);
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      width: 100%;
      .btn1 {
        width: px2rem(288);
        height: px2rem(68);
        line-height: px2rem(68);
        border: px2rem(2) solid;
        border-radius: 4px;
        font-size: px2rem(28);
      }
      .btn2 {
        width: px2rem(292);
        height: px2rem(72);
        line-height: px2rem(72);
        border-radius: 4px;
        font-size: px2rem(28);
      }
    }
  }
}
@keyframes show {
  0% {
    top: 10%;
    opacity: 0.6;
  }
  100% {
    top: 20%;
    opacity: 1;
  }
}
.hide {
  display: none;
}
</style>
