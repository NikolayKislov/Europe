<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-12">
      <div class="flex justify-between lg:flex-row flex-col">
        <!-- Logo and company info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img v-if="theme.value === 'dark'" src="@/assets/images/icons/logo.svg" alt="logo of company">
            <img v-if="theme.value === 'light'" src="@/assets/images/icons/logo-light.svg" alt="logo of company">
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Providing top-notch services for your business needs.
          </p>
          <div class="flex space-x-4">
            <UButton
                v-for="social in socialLinks"
                :key="social.name"
                :icon="social.icon"
                color="gray"
                variant="ghost"
                :to="social.url"
                target="_blank"
            />
          </div>
        </div>

        <!-- Navigation links -->
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:gap-8 mt-4 lg:mt-0 gap-2">
        <div v-for="item in footerItems" :key="item.label" class="space-y-3">
          <ul class="space-y-2 sm:pt-3">
            <li v-if="!item.children">
              <ULink
                  :to="item.to"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {{ item.label }}
              </ULink>
            </li>
            <template v-else>
              <li v-for="child in item.children" :key="child.label">
                <ULink
                    :to="child.to"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {{ child.label }}
                </ULink>
              </li>
            </template>
          </ul>
        </div>
      </div>
      </div>

      <!-- Bottom copyright -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          © {{ new Date().getFullYear() }} Europe. All rights reserved.
        </p>
        <div class="flex items-center space-x-6">
          <ULink
              v-for="link in legalLinks"
              :key="link.label"
              :to="link.to"
              class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            {{ link.label }}
          </ULink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
const theme = useColorMode()
const navItems = [
  {
    label: "Home",
    to: "/",
    icon: "i-heroicons-home"
  },
  {
    label: "Services",
    to: "/services",
    icon: "i-heroicons-wrench-screwdriver",
    defaultOpen: true,
    children: [
      {
        label: "Development",
        to: "/services/web",
        icon: "i-lucide-code"
      },
      {
        label: "Consulting",
        to: "/services/consulting",
        icon: "i-lucide-messages-square"
      },
      {
        label: "Training",
        to: "/services/training",
        icon: "i-lucide-graduation-cap"
      }
    ]
  },
  {
    label: "About",
    to: "/about",
    icon: "i-heroicons-information-circle"
  },
  {
    label: "Contact",
    to: "/contact",
    icon: "i-heroicons-envelope"
  }
];

// Transform navItems for footer display
const footerItems = navItems.map(item => ({
  label: item.label,
  to: item.to,
  children: item.children || null
}));

const socialLinks = [
  {
    name: 'Twitter',
    icon: 'i-lucide-globe',
    url: '#'
  },
  {
    name: 'GitHub',
    icon: 'i-lucide-github',
    url: '#'
  },
  {
    name: 'LinkedIn',
    icon: 'i-lucide-linkedin',
    url: '#'
  },
  {
    name: 'Facebook',
    icon: 'i-lucide-facebook',
    url: '#'
  }
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' }
];
</script>