<template>
  <UContainer class="py-16 md:py-24 lg:py-22">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text content -->
      <div class="space-y-6">
        <UBadge variant="subtle" color="primary" class="w-fit">
          <span class="text-sm font-semibold">{{mainAbout?.badgeText}}</span>
        </UBadge>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {{mainAbout.h1First}} <span class="text-primary">{{mainAbout.h1Second}}</span> {{mainAbout.h1Third}}
        </h1>

        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{mainAbout.description}}
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <UButton
              size="xl"
              color="primary"
              :label="mainAbout.buttonLabel1"
              :trailing-icon="mainAbout.buttonIcon1"
              class="px-8 w-full md:w-fit"
          />
          <UButton
              size="xl"
              variant="outline"
              :label="mainAbout.buttonLabel2"
              :trailing-icon="mainAbout.buttonIcon2"
              class="px-8 w-full md:w-fit"
          />
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 md:grid-cols-3 gap-4 pt-8">
          <div v-for="stat in mainAbout.stats" :key="stat.label" class="space-y-1 flex flex-col lg:items-start items-center ">
            <h3 class="text-3xl font-bold text-primary">{{ stat.value }}+</h3>
            <p class="text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Image content -->
      <div class="relative">
        <div class="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl">
          <img
              :src="mainAbout.image"
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
                :name="mainAbout.cardIcon"
                class="w-12 h-12 text-primary"
            />
            <div>
              <h3 class="font-bold text-lg">{{mainAbout.cardTitle}}</h3>
              <p class="text-gray-500 text-sm">
                {{mainAbout.cardDescription}}
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

const { data: mainAbout } = await useAsyncData('mainAbout', () => queryCollection('mainAbout').first())
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