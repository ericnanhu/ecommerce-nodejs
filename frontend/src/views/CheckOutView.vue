<script></script>

<template>
  <main
    class="card w-full md:w-1/2 bg-base-100 shadow-md rounded-md my-10 mx-auto"
  >
    <div class="card-body space-y-8">
      <h2 class="card-title">You are almost there!</h2>
      <div class="overflow-scroll">
        <table class="table w-full table-compact">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Number</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>2</td>
              <td>$ 25</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>3</td>
              <td>$ 70</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>1</td>
              <td>$ 15</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>5</td>
              <td>$ 125</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>1</td>
              <td>$ 90</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>5</td>
              <td>$ 257</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>2</td>
              <td>$ 20</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Lorem ipsum dolor sit amet</td>
              <td>4</td>
              <td>$ 75</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Totals</th>
              <th></th>
              <th>20</th>
              <th>$ 800</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="card-actions flex-col">
        <p class="font-medium">Pay with:</p>
        <div
          class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
        >
          <button class="btn btn-outline btn-primary">Paypal</button>
          <button class="btn btn-outline btn-primary">
            Credit / Debit Card
          </button>
          <button class="btn btn-outline btn-primary">Other Methods</button>
          <button class="btn btn-outline btn-primary">...</button>
        </div>
      </div>
    </div>
  </main>
</template>
