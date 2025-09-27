<script>
  let email = "";
  let password = "";

  function handleLogin() {
    // Replace with your login logic
    alert(`Logging in with ${email}`);
  }
</script>

<nav
  class="w-full bg-blue-600 text-gray-900 px-6 py-4 flex justify-between items-center"
>
  <a href="/" class="font-bold text-xl">ZapScheduler</a>
  <div class="flex gap-4">
    <a href="/signup" class="hover:underline">Sign Up</a>
    <a href="/login" class="hover:underline">Login</a>
    <a href="/schedule" class="hover:underline">Schedule</a>
  </div>
</nav>

<section class="relative min-h-screen flex items-center justify-center">
  <div class="animated-bg"></div>
  <main
    class="relative z-10 max-w-md w-full mx-auto p-8 border border-gray-200 rounded-xl shadow-lg bg-white flex flex-col justify-center items-center"
  >
    <h1 class="text-3xl font-extrabold mb-6 text-center text-blue-600">
      Login
    </h1>
    <form on:submit|preventDefault={handleLogin} class="space-y-6 w-full">
      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Email:</span>
        <input
          type="email"
          bind:value={email}
          required
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </label>
      <label class="block">
        <span class="block text-sm font-medium text-gray-700">Password:</span>
        <input
          type="password"
          bind:value={password}
          required
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </label>
      <button
        type="submit"
        class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow"
      >
        Login
      </button>
    </form>
    <p class="mt-6 text-sm text-gray-500">
      Don't have an account? <a
        href="/signup"
        class="text-blue-600 hover:underline">Sign Up</a
      >
    </p>
  </main>
</section>

<style>
  .animated-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(270deg, #60a5fa, #818cf8, #f472b6, #fbbf24);
    background-size: 800% 800%;
    animation: gradientMove 10s ease infinite;
  }
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
