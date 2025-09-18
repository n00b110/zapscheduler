<script>
    let email = '';
    let password = '';

    function handleLogin() {
        // Replace with your login logic
        alert(`Logging in with ${email}`);
    }
</script>

<main class="max-w-md mx-auto mt-8 p-8 border border-gray-200 rounded-lg shadow bg-white flex justify-center arrange-center">
    <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
    <form on:submit|preventDefault={handleLogin} class="space-y-4">
        <label class="block">
            <span class="block text-sm font-medium text-gray-700">Email:</span>
            <input
                type="email"
                bind:value={email}
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </label>
        <label class="block">
            <span class="block text-sm font-medium text-gray-700">Password:</span>
            <input
                type="password"
                bind:value={password}
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </label>
        <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
        >
            Login
        </button>
    </form>
</main>
