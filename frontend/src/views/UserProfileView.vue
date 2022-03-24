<script></script>

<template>
  <main class="flex flex-col space-y-4 mx-2 md:mx-0 items-center">
    <div class="avatar">
      <div
        class="w-24 sm:w-36 md:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img src="https://api.lorem.space/image/face?hash=3174" />
      </div>
    </div>
    <div>
      <p class="font-bold text-3xl">User Name</p>
      <p class="text-sm text-gray-500">@username</p>
    </div>
    <div class="rounded-md shadow-md w-full p-8">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">My Information</h2>
        <label for="updateUserInfo" class="btn btn-primary modal-button"
          >Update Information</label
        >
      </div>
      <div class="divider"></div>
      <div class="sm:columns-2 md:columns-3">
        <p><span class="font-bold">Phone:</span> <span>1234567890</span></p>
        <p>
          <span class="font-bold">Email:</span> <span>example@gmail.com</span>
        </p>
        <p>
          <span class="font-bold">Address:</span> <span>Some Location</span>
        </p>
        <p><span class="font-bold">City:</span> <span>City Name</span></p>
        <p>
          <span class="font-bold">Province:</span> <span>Province Name</span>
        </p>
        <p><span class="font-bold">Country</span>: <span>Country Name</span></p>
      </div>
    </div>

    <div class="rounded-md shadow-md w-full p-8">
      <h2 class="font-bold text-2xl">My Orders</h2>
      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>1</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
            <tr class="hover">
              <th>2</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
            <tr class="hover">
              <th>3</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
            <tr class="hover">
              <th>4</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
            <tr class="hover">
              <th>5</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
            <tr class="hover">
              <th>6</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
            <tr class="hover">
              <th>7</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$ 999</td>
              <td>Mar 23, 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <input type="checkbox" id="updateUserInfo" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateUserInfo"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Your Information</h3>
        <div class="divider"></div>
        <form action="POST">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 1</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 2</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 3</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 4</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 5</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 6</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 7</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
        </form>
        <div class="modal-action">
          <label for="my-modal" class="btn btn-primary">Yay!</label>
        </div>
      </div>
    </div>
  </main>
</template>
