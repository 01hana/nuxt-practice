<script setup></script>

<template>
  <section class="bg-banner mt-n16">
    <div class="bg-overlay" />

    <v-container class="mt-16 text-white d-flex flex-column">
      <h1 class="text-6xl mb-2">Rooms</h1>
      <p class="w-80">
        Nestled in the heart of breathtaking natural, our hotel offers a truly
        enchanting experience that caters to every aspect of your stay.
      </p>
    </v-container>
  </section>
</template>

<style scoped>
.bg-banner {
  background-image: url("/images/banner/banner-room.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 0.3;
}

.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  position: relative;
  z-index: 10;
}
</style>
