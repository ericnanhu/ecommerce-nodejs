<script>
import axios from "axios";
import ImageSlideShow from "@/components/ImageSlideShow.vue";

export default {
  components: { ImageSlideShow },

  data() {
    return {
      product: {},
      dataLoaded: false,
    };
  },

  async created() {
    try {
      const product = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "main/product/show",
        params: {
          productID: this.$route.params.productID,
        },
      });
      this.product = product.data;

      console.table(this.product);

      this.dataLoaded = true;
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    trimText(text = "", n = 20) {
      return text.substring(0, n) + "...";
    },
  },

  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<template>
  <main class="flex flex-col space-y-4 mx-2 md:mx-0">
    <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div class="basis-3/4">
        <ImageSlideShow
          v-if="this.dataLoaded == true"
          :images="this.product.images"
        ></ImageSlideShow>
      </div>
      <div class="basis-1/4 flex flex-col space-y-8">
        <h2 class="font-bold uppercase text-2xl">
          {{ this.product.name }}
        </h2>
        <div class="flex">
          <div class="rating mr-2">
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
          <a class="hover:underline hover:text-primary">7 Reviews</a>
        </div>
        <p>
          {{ this.product.description }}
        </p>
        <div class="form-control">
          <div class="input-group">
            <button class="btn btn-square btn-outline btn-primary">-</button>
            <input
              type="text"
              placeholder="Choose the amount..."
              class="input input-bordered w-full"
            />
            <button class="btn btn-square btn-outline btn-primary">+</button>
          </div>
        </div>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col space-y-8">
      <h2 class="font-bold text-2xl">Reviews</h2>
      <div class="flex flex-col space-y-2">
        <div class="flex space-x-4 items-center">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <p class="font-semibold text-lg">username</p>
          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quo
          nulla. Reprehenderit velit molestiae adipisci, impedit quae soluta
          commodi dicta nulla accusamus suscipit eligendi a repellat non
          quisquam culpa quidem. Veniam, doloremque obcaecati repellendus
          corporis eos odio nisi. Perferendis quasi cupiditate nulla modi quas
          alias nostrum rem labore quaerat quisquam.
        </p>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex space-x-4 items-center">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <p class="font-semibold text-lg">username</p>
          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quo
          nulla. Reprehenderit velit molestiae adipisci, impedit quae soluta
          commodi dicta nulla accusamus suscipit eligendi a repellat non
          quisquam culpa quidem. Veniam, doloremque obcaecati repellendus
          corporis eos odio nisi. Perferendis quasi cupiditate nulla modi quas
          alias nostrum rem labore quaerat quisquam.
        </p>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex space-x-4 items-center">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <p class="font-semibold text-lg">username</p>
          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quo
          nulla. Reprehenderit velit molestiae adipisci, impedit quae soluta
          commodi dicta nulla accusamus suscipit eligendi a repellat non
          quisquam culpa quidem. Veniam, doloremque obcaecati repellendus
          corporis eos odio nisi. Perferendis quasi cupiditate nulla modi quas
          alias nostrum rem labore quaerat quisquam.
        </p>
      </div>
    </div>
  </main>
</template>
