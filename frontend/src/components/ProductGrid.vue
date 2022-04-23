<script>
export default {
  props: {
    products: Object,
  },

  methods: {
    trimText(text = "", n = 20) {
      return text.substring(0, n) + "...";
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div
      v-for="(product, key) in this.products"
      :key="key"
      class="card bg-base-100 shadow-md rounded-md"
    >
      <figure>
        <img :src="product.images[0]" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>
          {{ trimText(product.description, 250) }}
        </p>
        <div class="card-actions justify-start">
          <router-link :to="'/product/' + product._id" class="btn btn-primary"
            >View Details</router-link
          >
          <button class="btn btn-outline">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
