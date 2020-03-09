<template>
  <v-app>
    <v-app-bar
      dense
      app
    >
      <v-toolbar-title class="mx-2" v-text="title" />
      <v-btn to="/" router exact nuxt class="mx-2">
        Home
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container class="content-container">
        <!-- don't use "column" in the v-layout; it makes everything full-width -->
        <v-layout
          justify-center
          align-center
        >
          <v-flex
            :sm8="!wide"
            xs12
          >
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- v-footer: "app" sets "fixed" mode (always on screen). Don't want that. -->
    <v-footer>
      <div style="display: flex; flex-grow: 1" />
      <a
        href="https://www.facebook.com/darkstarsys/"
        target="_blank"
        class="social-button"
      >
        <font-awesome-layers>
          <font-awesome-icon :icon="['fas', 'square']" color="white" transform="shrink-1" />
          <font-awesome-icon :icon="['fab', 'facebook']" color="#3b5998" />
        </font-awesome-layers>
      </a>
      <a
        href="https://linkedin.com/in/garyoberbrunner"
        target="_blank"
        class="social-button"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" color="0077b5" />
      </a>
      <div class="caption">&copy; {{ new Date().getFullYear() }} Dark Star Systems, Inc.</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    theme: { type: String, default: 'light' },
    wide: { type: Boolean, default: false }
  },
  data() {
    return {
      clipped: false,
      title: 'Dark Star Systems'
    }
  },
  created() {
    this.$vuetify.theme.dark = this.theme === 'dark'
  }
}
</script>

<style scoped>
  .v-footer {
    background: transparent;
  }
  .v-footer div {
    color: 0xaaaaaa;
  }
  .v-btn--active {
      border-bottom: 2px solid #ff8888;
      text-shadow: 0 0 5px white;
  }
  .social-button {
      padding-left: 0px;
      padding-right: 5px;
      width: 24px;
      font-size: 20px;
  }
</style>
