<template lang="pug">
  #app
    components(:is="selectLayout")
      router-view
</template>

<script>
import DefaultLayout from '@/layouts/default'
import AuthLayout from '@/layouts/auth'

export default {
  components: {
    DefaultLayout,
    AuthLayout
  },
  computed: {
    selectLayout () {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/index.scss';
</style>
