<script>
  let selectedDate = '';
  let postContent = '';
  let days = Array.from({ length: 31 }, (_, i) => i + 1);

  function schedulePost() {
    alert(`Scheduled post for ${selectedDate}: ${postContent}`);
  }
</script>

<section class="max-w-2xl mx-auto py-12">
  <h1 class="text-3xl font-bold mb-6 text-center">Schedule a Post</h1>
  <div class="mb-8">
    <h2 class="text-xl font-semibold mb-2">Calendar</h2>
    <div class="grid grid-cols-7 gap-2 bg-gray-50 p-4 rounded-lg">
      {#each days as day}
        <button
          class="py-2 rounded hover:bg-blue-100 focus:bg-blue-300 focus:outline-none"
          class:selected={selectedDate === day}
          on:click={() => selectedDate = day}
        >
          {day}
        </button>
      {/each}
    </div>
    <p class="mt-2 text-sm text-gray-500">Select a day to schedule your post.</p>
  </div>
  <form on:submit|preventDefault={schedulePost} class="space-y-4">
    <label class="block">
      <span class="block text-sm font-medium text-gray-700">Post Content:</span>
      <textarea
        bind:value={postContent}
        rows="3"
        required
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </label>
    <button
      type="submit"
      class="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
      disabled={!selectedDate}
    >
      Schedule Post
    </button>
  </form>
</section>
