<script setup>
import { Menus } from "~/source/navigation/menu";

const { width: clientWidth } = useWindowSize();

const menuItems = Menus;
const menuOpen = ref(false);

const menuToggle = () => (menuOpen.value = !menuOpen.value);
</script>

<template>
  <v-toolbar prominent color="transparent" class="text-white">
    <v-app-bar-nav-icon v-if="clientWidth <= 991" @click="menuToggle" />

    <template v-if="clientWidth > 991">
      <v-list-item
        v-for="item in menuItems"
        :to="`/${item.name}`"
        :title="item.title"
      />
    </template>

    <v-spacer />

    <v-toolbar-title>
      <router-link to="/">
        <img src="/images/logo/logo-white.png" alt="logo" class="w-50" />
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <nuxt-link to="/auth/signin">
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </nuxt-link>

    <v-btn icon>
      <v-icon>mdi-import</v-icon>
    </v-btn>
  </v-toolbar>

  <v-navigation-drawer v-model="menuOpen" location="left" temporary>
    <v-btn
      variant="text"
      icon="mdi-close"
      class="float-right mt-2 me-2"
      @click="menuToggle"
    />

    <v-list class="clear-both w-100 d-flex flex-column align-center">
      <v-list-item
        v-for="item in menuItems"
        :to="`/${item.name}`"
        :title="item.title"
        class="w-75"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-toolbar {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
}
.v-toolbar-title {
  flex: none;
}

.v-list-item:hover,
.v-list-item--active {
  border-radius: 2rem;
}

:deep(.v-list-item-title) {
  font-weight: 600;
}

@media screen and (max-width: 992px) {
  .router-link-active.router-link-exact-active {
    display: flex;
    justify-content: center;
  }
}
</style>
