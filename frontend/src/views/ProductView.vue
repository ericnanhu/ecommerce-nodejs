<script></script>

<template>
  <main class="flex flex-col">
    <div class="flex flex-col md:flex-row">
      <div class="basis-3/4 md:mr-2">
        <div
          class="carousel carousel-center w-full p-4 space-x-2 bg-neutral rounded-md"
        >
          <div id="slide1" class="carousel-item relative w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=400&hash=8B7BCDC2"
              class="w-full rounded-md"
            />
            /
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide4" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=400&hash=500B67FB"
              class="w-full rounded-md"
            />
            /
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=400&hash=A89D0DE6"
              class="w-full rounded-md"
            />
            /
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=400&hash=225E6693"
              class="w-full rounded-md"
            />
            /
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/4 md:ml-2 flex flex-col">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        <div>
          <div class="rating">
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
        <p>7 Reviews</p>
      </div>
    </div>
    <div></div>
  </main>
</template>
