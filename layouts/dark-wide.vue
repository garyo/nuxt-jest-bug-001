<template>
  <DefaultLayout :wide="wide" theme="dark" />
</template>

<script>
import DefaultLayout from '@/components/default-layout.vue'

export default {
  components: {
    DefaultLayout
  },
  data: () => {
    return {
      wide: true
    }
  }
}
</script>
