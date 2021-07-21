<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <!-- тут cols="6" немного мешает, но не стал менять -->
                <v-col
                    cols="6"
                    class="py-12 text-left"
                >
                    <div class="navbar links mb-4" justify="left">
                        <router-link to="/">Products</router-link> |
                        <router-link to="/total">Total</router-link>
                    </div>
                    <div class="views">
                        <router-view/>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<style lang="scss">
.v-application {
  .navbar {
    a {
      color: var(--v-primary-base);
      &.router-link-exact-active {
        color: $navbar-link;
      }
    }
  }
}
</style>
