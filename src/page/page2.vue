<template>
  <div>
    <top-head :goBack="true" :pageTitle="'我是page2'"></top-head>
    <div class="test pt44">
      <button>我是page2</button>
    </div>
  </div>
</template>
<script>
import TopHead from '../components/topHead'
export default {
  data () {
    return {
    }
  },
  components: {
    TopHead
  }
}
</script>
