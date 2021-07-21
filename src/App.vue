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
#app {
  font-family: verdana;
  text-align: center;
}

.navbar {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
      // color: $primary; // TODO!
    }
  }
}
</style>
