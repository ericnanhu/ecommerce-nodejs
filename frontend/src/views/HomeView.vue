<script></script>

<template>
  <main class="flex flex-col space-y-4 p-2 md:p-0">
    <!-- Image Carousel -->
    <div
      class="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-md h-fit"
    >
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
          class="rounded-md"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
          class="rounded-md"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
          class="rounded-md"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
          class="rounded-md"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7"
          class="rounded-md"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094"
          class="rounded-md"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
          class="rounded-md"
        />
      </div>
    </div>
    <!-- Recent Products -->
    <div class="flex flex-row flex-wrap justify-between gap-4">
      <div class="card bg-base-100 shadow-md rounded-md md:w-96">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veritatis veniam sequi similique laborum, harum aut saepe
            aspernatur? Neque itaque corrupti nesciunt eaque hic. Ipsam!
          </p>
          <div class="card-actions justify-start">
            <router-link to="/product" class="btn btn-primary"
              >View Details</router-link
            >
            <button class="btn btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md rounded-md md:w-96">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veritatis veniam sequi similique laborum, harum aut saepe
            aspernatur? Neque itaque corrupti nesciunt eaque hic. Ipsam!
          </p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">View Details</button>
            <button class="btn btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md rounded-md md:w-96">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veritatis veniam sequi similique laborum, harum aut saepe
            aspernatur? Neque itaque corrupti nesciunt eaque hic. Ipsam!
          </p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">View Details</button>
            <button class="btn btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="hero bg-neutral py-20 rounded-md shadow-md">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-white">Hello there</h1>
          <p class="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <!-- Shops -->
    <div class="flex flex-row flex-wrap gap-4 justify-between">
      <div class="card w-96 bg-base-100 image-full shadow-md">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <router-link to="/shop" class="btn btn-primary"
              >Visit Shop</router-link
            >
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 image-full shadow-md">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Visit Shop</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 image-full shadow-md">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Visit Shop</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
