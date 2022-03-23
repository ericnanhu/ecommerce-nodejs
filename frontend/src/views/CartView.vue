<script></script>

<template>
  <main class="flex flex-col space-y-4 mx-2 md:mx-0">
    <div class="overflow-x-auto">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Number</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover">
            <th>1</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>2</td>
            <td>$ 25</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>2</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>3</td>
            <td>$ 70</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>3</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>1</td>
            <td>$ 15</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>4</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>5</td>
            <td>$ 125</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>6</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>1</td>
            <td>$ 90</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>7</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>5</td>
            <td>$ 257</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>8</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>2</td>
            <td>$ 20</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
          <tr class="hover">
            <th>9</th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>4</td>
            <td>$ 75</td>
            <td class="flex space-x-2">
              <button class="btn btn-outline btn-error">Delete</button>
              <button class="btn">Update Number</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Totals</th>
            <th></th>
            <th>20</th>
            <th>$ 800</th>
            <th><button class="btn btn-primary w-full">Check Out</button></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </main>
</template>
