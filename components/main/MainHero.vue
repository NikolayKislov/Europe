<template>
  <div class="container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row items-stretch gap-8">
      <div class="w-full md:w-1/2 flex"> <!-- Added flex -->
        <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Web development illustration"
            class="w-full h-auto rounded-lg shadow-xl object-cover"
        >
      </div>

      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Your Vision, Our Expertise – Seamless Web Development, Globally
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            We transform your ideas into powerful digital experiences with our global team of experts.
          </p>
          <UButton size="xl">Get Started</UButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>