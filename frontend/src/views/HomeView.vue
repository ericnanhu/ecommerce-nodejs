<script></script>

<template>
  <main class="flex flex-col md:divide-x md:flex-row">
    <div class="order-last md:order-1 md:flex md:flex-col md:basis-1/5 md:pr-4">
      <h2 class="underline font-semibold text-xl">Categories</h2>
      <ul class="text-b divide-y mt-4 columns-2 sm:columns-3 md:columns-1">
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem, ipsum dolor.</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem, ipsum dolor.</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem, ipsum dolor.</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
        <li class="py-2">
          <a href="#" class="hover:underline text-primary-dark"
            >Lorem ipsum dolor sit amet</a
          >
        </li>
      </ul>
    </div>
    <div class="md:order-2 md:basis-4/5 md:pl-4">
      <h2 class="underline font-semibold text-xl">Recent Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div class="border rounded-md shadow-md">
          <img src="/File 1.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit amet
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <router-link
                to="/product"
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                View Detail</router-link
              ><button
                class="my-2 border border-secondary-dark rounded-md p-2 text-secondary-dark focus:ring focus:ring-secondary-light"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md">
          <img src="/File 2.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <router-link
                to="/product"
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                View Detail</router-link
              ><button
                class="my-2 border border-secondary-dark rounded-md p-2 text-secondary-dark focus:ring focus:ring-secondary-light"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md">
          <img src="/File 3.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <router-link
                to="/product"
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                View Detail</router-link
              ><button
                class="my-2 border border-secondary-dark rounded-md p-2 text-secondary-dark focus:ring focus:ring-secondary-light"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md">
          <img src="/File 4.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <router-link
                to="/product"
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                View Detail</router-link
              ><button
                class="my-2 border border-secondary-dark rounded-md p-2 text-secondary-dark focus:ring focus:ring-secondary-light"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md">
          <img src="/File 5.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">Product Number 1</h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <router-link
                to="/product"
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                View Detail</router-link
              ><button
                class="my-2 border border-secondary-dark rounded-md p-2 text-secondary-dark focus:ring focus:ring-secondary-light"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 class="underline font-semibold text-xl">Recent Shops</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="border rounded-md shadow-md">
          <img src="/File 6.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit amet
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <button
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md">
          <img src="/File 7.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <button
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md">
          <img src="/File 8.jpeg" alt="" class="object-contain rounded-t-md" />
          <div class="m-2">
            <h3 class="underline font-medium text-lg my-2">
              Lorem ipsum dolor sit
            </h3>
            <p class="text-sm text-gray-500 my-2 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dicta? Sapiente, atque? Itaque quia aut omnis laborum expedita
              consequatur, molestiae, sit reprehenderit repudiandae iure harum
              corporis suscipit fugit quasi eligendi. Eligendi atque commodi
              doloremque sapiente.
            </p>
            <div class="flex gap-2">
              <button
                class="my-2 border border-primary-dark rounded-md p-2 bg-primary-dark text-white focus:ring focus:ring-primary-light"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
