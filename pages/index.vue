<template>
  <div>
    <div class="text-xs-center">
      <logo />
    </div>
    <v-card>
      <v-card-title class="headline">
        Vision
      </v-card-title>
      <v-card-text class="body">
        Lorem ipsum
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'dark',
  components: {
    Logo
  }
}
</script>

<style>
.body {
    font-size: 18px;
    font-weight: 300;
}
.body a {
    color: #a0a0ff!important;   /*shouldn't need this but we do*/
}
</style>
