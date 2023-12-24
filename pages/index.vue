<script setup>
useHead({
  title: "Home",
});

const rooms = ref([
  {
    image: "images/rooms/room-1.jpg",
  },
  {
    image: "images/rooms/room-2.jpg",
  },
  {
    image: "images/rooms/room-3.jpg",
  },
  {
    image: "images/rooms/room-4.jpg",
  },
]);

const { width: clientWidth } = useWindowSize();

const carouselWidth = computed(() => {
  return clientWidth.value >= 768 ? 600 : 300;
});

const carouselHeight = computed(() => {
  return clientWidth.value >= 768 ? "400" : "200";
});
</script>

<template>
  <section class="bg-banner mt-n16 relative">
    <div class="bg-overlay" />
    <ElementShape :class="'bottom'" />

    <v-container class="mt-16 text-white d-flex flex-column banner">
      <h1 class="text-6xl mb-2">Welcome to The Hotel</h1>
      <p class="w-80">
        Nestled in the heart of breathtaking natural, our hotel offers a truly
        enchanting experience that caters to every aspect of your stay.
      </p>
    </v-container>
  </section>

  <section class="mt-n16">
    <div class="container mx-auto bg-white relative shadow-lg py-8 px-4">
      <FormBook />
    </div>
  </section>

  <section class="pt-24 pb-16">
    <div
      class="container mx-auto d-flex justify-center flex-column items-center"
    >
      <img src="/images/materials/star.png" alt="image" class="w-14 mb-4" />
      <h2 class="md:text-5xl text-3xl">HOTELLER & RESORT</h2>
      <p class="py-6 md:w-2/5 text-center">
        On the present site of our hotel feet in the water, there used to be an
        establishment composed of a restaurant and dormitories. We have kept the
        name and noble materials before revisiting.
      </p>
      <button
        type="button"
        class="border py-2 px-4 border-black hover:border-black"
      >
        Learn more
      </button>
    </div>
  </section>

  <section class="relative bg-slate-700 pt-28 pb-2">
    <ElementShape :class="'top'" />
    <div
      class="container mx-auto text-white d-flex justify-between items-center px-4"
    >
      <div>
        <p class="text-xl mb-2">Enchanted with elegance</p>
        <h3 class="text-5xl">
          <span class="text-slate-100 opacity-25">Our </span>Rooms
        </h3>
      </div>
      <router-link
        to="/room"
        class="border-2 rounded-full py-3 px-6 border-white"
        >View All rooms</router-link
      >
    </div>
  </section>

  <section class="bg-slate-700 pb-28 relative">
    <v-sheet class="mx-auto carousel" max-width="100%">
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-group-item v-for="n in rooms" :key="n">
          <v-card
            color="grey-lighten-1"
            :height="carouselHeight"
            :width="carouselWidth"
            class="ma-4"
          >
            <div class="d-flex fill-height align-center justify-center">
              <img
                :src="n.image"
                alt="room image"
                class="w-100 h-100 object-cover"
              />
              <v-scale-transition />
            </div>
            <p>123</p>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <ElementShape :class="'bottom'" />
  </section>
</template>

<style scoped>
.bg-banner {
  background-image: url("/images/banner/banner.jpg");
  height: 90vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-overlay {
  position: absolute;
  width: 100%;
  height: 90vh;
  background: #000;
  opacity: 0.3;
}

.v-container.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(90vh - 120px);
  position: relative;
  z-index: 10;
}

.v-card {
  border-radius: 0;
}

.v-sheet.carousel {
  background-color: transparent;
}

:deep(.v-icon--size-default) {
  font-size: 30px;
  background-color: #fff;
  border-radius: 30px;
}
</style>
