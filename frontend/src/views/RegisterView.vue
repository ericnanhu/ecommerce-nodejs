<script></script>

<template>
  <main class="flex flex-col gap-4 justify-center md:flex-row md:gap-8">
    <form class="md:w-1/4 flex flex-col gap-4">
      <h2 class="font-semibold underline text-xl text-primary-dark">
        Register
      </h2>
      <div class="flex flex-col">
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          class="form-input rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-input rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-input rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label for="confirmPassword">Confirm Your Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          class="form-input rounded-md"
        />
      </div>
      <button
        type="submit"
        class="border border-primary-dark p-2 rounded-md focus:ring-2 focus:ring-primary-light"
      >
        Register
      </button>
    </form>
    <form class="md:w-1/4 flex flex-col gap-4">
      <h2 class="font-semibold underline text-xl text-primary-dark">Log In</h2>
      <div class="flex flex-col">
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-input rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-input rounded-md"
        />
      </div>
      <button
        type="submit"
        class="border border-primary-dark p-2 rounded-md focus:ring-2 focus:ring-primary-light"
      >
        Log In
      </button>
    </form>
  </main>
</template>
