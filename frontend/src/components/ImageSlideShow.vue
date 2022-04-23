<script>
export default {
  props: {
    images: Array,
  },

  data() {
    return {
      slideIndex: 0,
    };
  },

  methods: {
    next() {
      this.slideIndex += 1;
    },

    prev() {
      this.slideIndex -= 1;
    },
  },

  computed: {
    currentImage() {
      return this.images[Math.abs(this.slideIndex) % this.images.length];
    },
  },
};
</script>

<template>
  <div
    class="relative m-auto w-full h-fit bg-neutral rounded-md shadow-md"
    id="imageSlides"
  >
    <transition-group name="fade" tag="div">
      <div v-for="i in [this.slideIndex]" :key="i">
        <img :src="currentImage" class="rounded-md"/>
      </div>
    </transition-group>

    <a
      @click="this.prev()"
      class="cursor-pointer absolute top-1/2 w-auto -mt-6 p-4 text-white font-bold text-lg hover:bg-gray-900"
      >&#10094;</a
    >
    <a
      @click="this.next()"
      class="cursor-pointer absolute top-1/2 w-auto -mt-6 p-4 text-white font-bold text-lg right-0 hover:bg-gray-900"
      >&#10095;</a
    >
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
