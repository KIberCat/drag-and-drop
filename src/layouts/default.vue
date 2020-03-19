<template lang="pug">
  .layout-default
    vHeader
    h1 Layout default
    router-view
</template>

<script>
import vHeader from '@/components/header'

export default {
  name: 'default-layout',
  components: {
    vHeader
  }
}
</script>
