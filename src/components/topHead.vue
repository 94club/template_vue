<template>
  <div class="top-head">
    <slot name="leftInfo" />
    <div v-if="goBack" class="back" @click="back"><span class="iconfont icon-back"></span>返回</div>
    <div v-if="pageTitle" class="title">{{pageTitle}}</div>
    <div v-if="isSearch" class="right-search"><span class="iconfont icon-search"></span></div>
  </div>
</template>
<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default () {
        return ''
      }
    },
    goBack: {
      type: Boolean,
      default () {
        return false
      }
    },
    isSearch: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import '../style/px2rem.scss';
.top-head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: px2rem(88);
  line-height: px2rem(88);
  font-size: px2rem(28);
  .title, .site-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: PingFangSC-Semibold;
    font-size: px2rem(36);
  }
  .left-info {
    position: absolute;
    left: px2rem(24);
    height: px2rem(40);
    span:nth-of-type(1) {
      padding: px2rem(2) px2rem(8);
    }
    span:nth-of-type(2) {
      padding: px2rem(2) px2rem(8);
    }
  }
  .right-search {
    position: absolute;
    right: px2rem(32);
    top: 0;
    .icon-search {
      font-size: px2rem(40);
    }
  }
  .back {
    position: absolute;
  }
  .icon-back {
    padding: 0 px2rem(12) 0 px2rem(24)
  }
}
</style>
