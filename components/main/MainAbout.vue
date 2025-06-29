<template>
  <UContainer class="py-16 md:py-24 lg:py-22">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text content -->
      <div class="space-y-6">
        <UBadge variant="subtle" color="primary" class="w-fit">
          <span class="text-sm font-semibold">Digital Innovators</span>
        </UBadge>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          We Build <span class="text-primary">Digital Experiences</span> That Matter
        </h1>

        <p class="text-lg text-gray-600 dark:text-gray-300">
          Transforming ideas into powerful digital solutions. Our team of expert developers crafts websites and applications that drive results and elevate your brand.
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <UButton
              size="xl"
              color="primary"
              label="Meet our team"
              trailing-icon="i-heroicons-arrow-right-20-solid"
              class="px-8 w-full md:w-fit"
          />
          <UButton
              size="xl"
              variant="outline"
              label="Our Portfolio"
              trailing-icon="i-heroicons-eye-20-solid"
              class="px-8 w-full md:w-fit"
          />
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 md:grid-cols-3 gap-4 pt-8">
          <div v-for="stat in stats" :key="stat.label" class="space-y-1 flex flex-col lg:items-start items-center ">
            <h3 class="text-3xl font-bold text-primary">{{ stat.value }}+</h3>
            <p class="text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Image content -->
      <div class="relative">
        <div class="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl">
          <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team working on web development"
              class="object-cover w-full h-full"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/20"/>
        </div>

        <!-- Floating card -->
        <UCard
            class="absolute -bottom-6 -right-6 w-3/4 shadow-lg"
            :ui="{ body: { padding: 'p-4 sm:p-6' } }"
        >
          <div class="flex items-center gap-4">
            <UIcon
                name="i-heroicons-check-badge"
                class="w-12 h-12 text-primary"
            />
            <div>
              <h3 class="font-bold text-lg">Trusted by Industry Leaders</h3>
              <p class="text-gray-500 text-sm">
                Award-winning web solutions since 2012
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const stats = [
  { value: "250", label: "Projects" },
  { value: "98", label: "Clients" },
  { value: "15", label: "Awards" },
];
</script>

<style scoped>
/* Custom animations */
.enter-from-bottom {
  view-timeline-name: --enter;
  view-timeline-axis: block;

  animation-timeline: --enter;
  animation-name: enter;

  animation-range: entry 25% cover 50%;
  animation-fill-mode: both;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>