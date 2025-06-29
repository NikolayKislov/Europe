<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Our Web Development Services?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard
            v-for="(card, index) in cards"
            :key="index"
            class="h-full hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-transparent"
            :ui="{
            header: 'md:pt-4 md:pb-2',
            base: 'h-full flex flex-col',
            body: { base: 'grow' },
            footer: ['md:py-6', { base: 'flex items-center justify-center ' }]
          }"
            variant="subtle"
        >
          <template #header>
            <div class="flex items-start gap-4">
              <div :class="`text-2xl`">
                <UIcon :name="card.icon" />
              </div>
              <h3 class="text-xl font-semibold">{{ card.title }}</h3>
            </div>
          </template>

          <p class="mb-4">
            {{ card.description }}
          </p>

          <template #footer>
            <div class="flex items-center justify-center">
              <UButton
                  variant="soft"
                  :label="card.buttonText"
                  size="xl"
                  class="w-full flex items-center justify-center"
              />
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: "Expert Development",
    description: "Our team consists of senior developers with 5+ years experience in modern web technologies like Vue, Nuxt, React, and Node.js.",
    icon: "i-heroicons-code-bracket",
    buttonText: "Meet our team"
  },
  {
    title: "Cost Efficiency",
    description: "Save up to 60% compared to in-house hiring with our flexible engagement models. No recruitment or infrastructure costs - just results.",
    icon: "i-heroicons-currency-dollar",
    buttonText: "See pricing"
  },
  {
    title: "Fast Delivery",
    description: "We follow agile methodologies to deliver MVPs within 4-6 weeks and scale quickly based on your business needs - fast, reliable, and efficient.",
    icon: "i-heroicons-clock",
    buttonText: "Our process"
  },
  // Add more cards here as needed
]
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>