<script></script>

<template>
  <main>
    <form class="form-control w-full max-w-xs mx-auto my-40 gap-4">
      <div>
        <label class="label">
          <span class="label-text">Email:</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Password:</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>

      <button type="submit" class="btn btn-outline btn-primary w-full">
        Log In
      </button>

      <small class="text-right text-xs"
        >Don't have an account? Register
        <router-link to="/register" class="text-primary hover:underline"
          >Here</router-link
        >.</small
      >
    </form>
  </main>
</template>
