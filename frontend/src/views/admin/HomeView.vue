<script></script>

<template>
  <main class="flex flex-col space-y-8">
    <div class="rounded-md shadow-md w-full p-8">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">Site Info</h2>
        <label for="updateSiteInfo" class="btn btn-primary modal-button"
          >Update Site</label
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
      <input type="checkbox" id="updateSiteInfo" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <label
            for="updateSiteInfo"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <h3 class="font-bold text-lg">Update Website Information</h3>
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
          </form>
          <div class="modal-action">
            <label for="my-modal" class="btn btn-primary">Yay!</label>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-md shadow-md w-full p-8">
      <h2 class="font-bold text-2xl">Management</h2>

      <div class="divider"></div>
      <div class="flex flex-row flex-wrap gap-4 justify-start">
        <div class="card w-96 bg-base-100 shadow-md rounded-md">
          <div class="card-body">
            <h2 class="card-title">Role Management</h2>
            <p>Create, Read, Update and Delete Roles.</p>
            <div class="card-actions justify-end">
              <router-link to="/admin/role" class="btn btn-primary"
                >Go</router-link
              >
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-md rounded-md">
          <div class="card-body">
            <h2 class="card-title">User Management</h2>
            <p>Read and Delete Users.</p>
            <div class="card-actions justify-end">
              <router-link to="/admin/user" class="btn btn-primary"
                >Go</router-link
              >
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-md rounded-md">
          <div class="card-body">
            <h2 class="card-title">Shop Management</h2>
            <p>Read and Delete Shops.</p>
            <div class="card-actions justify-end">
              <router-link to="/admin/shop" class="btn btn-primary"
                >Go</router-link
              >
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-md rounded-md">
          <div class="card-body">
            <h2 class="card-title">Product Management</h2>
            <p>Read and Delete Products.</p>
            <div class="card-actions justify-end">
              <router-link to="/admin/product" class="btn btn-primary"
                >Go</router-link
              >
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-md rounded-md">
          <div class="card-body">
            <h2 class="card-title">Review Management</h2>
            <p>Read and Delete Reviews.</p>
            <div class="card-actions justify-end">
              <router-link to="/admin/review" class="btn btn-primary"
                >Go</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
