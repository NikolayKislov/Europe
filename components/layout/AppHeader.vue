<template>
  <div class="flex flex-row items-center justify-between p-4">
    <NuxtLink to="/" class="flex items-center gap-1.5">
      <img v-if="theme.value === 'dark'" src="@/assets/images/icons/logo.svg" alt="logo of company">
      <img v-if="theme.value === 'light'" src="@/assets/images/icons/logo-light.svg" alt="logo of company">
    </NuxtLink>
    <UNavigationMenu arrow :items="navItems" content-orientation="vertical" class="md:block hidden"/>
    <div class="flex items-center gap-1.5">
      <ThemeSwitcher />
      <UPopover class="md:hidden">
        <UButton
            icon="i-lucide-menu"
            size="xl"
            color="primary"
            variant="solid"
        />

        <template #content>
          <div class="p-4">
            <UNavigationMenu arrow :items="navItems" orientation="vertical"/>
          </div>
        </template>
      </UPopover>
    </div>

  </div>
  <USeparator />
</template>

<script setup>
import ThemeSwitcher from "~/components/layout/ThemeSwitcher.vue";
const theme = useColorMode()

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: "i-heroicons-home"
  },
  {
    label: "Services",
    to: "/",
    icon: "i-heroicons-wrench-screwdriver",
    defaultOpen: true,
    children: [
      {
        label: "Development",
        to: "/",
        icon: "i-lucide-code"
      },
      {
        label: "Consulting",
        to: "/",
        icon: "i-lucide-messages-square"
      },
      {
        label: "Training",
        to: "/",
        icon: "i-lucide-graduation-cap"
      }
    ]
  },
  {
    label: "About",
    to: "/",
    icon: "i-heroicons-information-circle"
  },
  {
    label: "Contact",
    to: "/",
    icon: "i-heroicons-envelope"
  }
];
</script>

<style scoped>
:deep(.enter-active) {
  transition: all 0.2s ease-out;
}

:deep(.leave-active) {
  transition: all 0.15s ease-in;
}

:deep(.enter-from),
:deep(.leave-to) {
  opacity: 0;
  transform: translateY(-5px);
}
</style>