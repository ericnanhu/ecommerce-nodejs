<script></script>

<template>
  <main class="flex flex-col mx-2 md:mx-0">
    <div>
      <div class="flex space-x-4 items-center justify-between">
        <h2 class="font-bold text-2xl flex flex-col space-y-4">My Shop</h2>
        <label for="createShop" class="btn btn-primary">Create New Shop</label>
      </div>

      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Products</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <td>Shop Name</td>
              <td>20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateShop" class="btn">Update</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <input type="checkbox" id="createShop" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="createShop"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Create Shop</h3>
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

    <input type="checkbox" id="updateShop" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateShop"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Shop</h3>
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
    <div>
      <div class="flex space-x-4 items-center justify-between">
        <h2 class="font-bold text-2xl flex flex-col space-y-4">My Products</h2>
        <label for="createProduct" class="btn btn-primary"
          >Create New Product</label
        >
      </div>
      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <td>1</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>2</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>3</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>4</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>5</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>6</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>7</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>8</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>9</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>10</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="btn-group mx-auto my-10">
      <button class="btn btn-outline">«</button>
      <button class="btn btn-outline">1</button>
      <button class="btn btn-outline btn-active">2</button>
      <button class="btn btn-outline">3</button>
      <button class="btn btn-outline">4</button>
      <button class="btn btn-outline">»</button>
    </div>

    <input type="checkbox" id="createProduct" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="createProduct"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Create Product</h3>
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

    <input type="checkbox" id="updateProduct" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateProduct"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Product</h3>
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
