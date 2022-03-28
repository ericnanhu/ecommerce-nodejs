<script></script>

<template>
  <main class="flex flex-col">
    <div class="rounded-md shadow-md w-full p-8">
      <h2 class="font-bold text-2xl">Shops</h2>
      <div class="divider"></div>
      <div class="overflow-x-auto my-8">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>1</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="showShop" class="btn">Details</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <input type="checkbox" id="showShop" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="showShop"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Show Shop</h3>
        <div class="divider"></div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius
          beatae officiis blanditiis placeat maiores dolore! Pariatur quaerat
          corporis sunt assumenda quas tempore veniam deserunt animi neque
          ducimus quam ut vel, reprehenderit aliquid libero. Ut incidunt
          perferendis quas sint quod. Cumque alias fugiat perspiciatis culpa,
          ratione et eligendi iste molestias cupiditate quasi quaerat voluptas
          labore quod sequi optio esse autem aperiam magni voluptatem! Maiores,
          saepe nobis labore dolores facilis fuga amet laboriosam deleniti illum
          alias quaerat aliquam perspiciatis minima non doloremque quos cum
          eligendi maxime commodi obcaecati nihil veritatis architecto nesciunt!
          Nemo ad vel dignissimos minima atque vitae natus expedita.
        </div>
        <div class="modal-action">
          <label for="my-modal" class="btn btn-primary">Yay!</label>
        </div>
      </div>
    </div>

    <input type="checkbox" id="updateRole" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateRole"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Role</h3>
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
  </main>
</template>
