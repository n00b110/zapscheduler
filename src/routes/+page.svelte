<script>
  // You can later add props or load data here if needed
</script>

<nav
  class="w-full to-white text-white px-6 py-4 flex justify-between items-center bg-gray-50"
>
  <a href="/" class="font-bold text-xl">ZapScheduler</a>
  <div class="flex gap-4">
    <a href="/signup" class="hover:underline">Sign Up</a>
    <a href="/login" class="hover:underline">Login</a>
    <a href="/schedule" class="hover:underline">Schedule</a>
  </div>
</nav>

<section class="min-h-screen flex flex-col">
  <!-- Hero Section -->
  <div class="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 text-center">
    <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
      ZapScheduler ⚡
    </h1>
    <p class="text-lg text-gray-600 max-w-xl mb-8">
      Automate your social media scheduling with ease.  
      Focus on creating — we’ll handle the timing.
    </p>
    <div class="flex gap-4">
      <a href="/signup" 
         class="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
        Get Started
      </a>
      <a href="/demo"
         class="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
        Watch Demo
      </a>
    </div>
  </div>

  <!-- Features -->
  <div class="py-16 bg-gray-50">
    <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 class="text-xl font-bold mb-2">⚡ Fast Scheduling</h3>
        <p class="text-gray-600">Set up posts in seconds with a clean, simple interface.</p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">📊 Analytics</h3>
        <p class="text-gray-600">Track engagement and optimize your posting times.</p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">🌍 Multi-Platform</h3>
        <p class="text-gray-600">Publish to Twitter, Instagram, LinkedIn and more from one dashboard.</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="py-6 text-center text-gray-500 border-t">
    © {new Date().getFullYear()} ZapScheduler. All rights reserved.
  </footer>
</section>
