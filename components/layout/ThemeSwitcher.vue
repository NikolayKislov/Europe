<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()

const themes = [
  { label: 'Light', value: 'light', icon: 'i-lucide-sun' },
  { label: 'Dark', value: 'dark', icon: 'i-lucide-moon' },
]

const items = computed<DropdownMenuItem[]>(() =>
    themes.map((theme) => ({
      label: theme.label,
      icon: theme.icon,
      onClick: () => {colorMode.preference = theme.value},
      class: colorMode.preference === theme.value ? 'bg-gray-100 dark:bg-gray-800' : ''
    }))
)
</script>

<template>
  <UDropdownMenu
      :items="items"
      :content="{
      align: 'start',
      side: 'bottom',
      sideOffset: 8
    }"
      :ui="{
      content: 'w-48'
    }"
  >
    <UButton
        :label="colorMode.preference === 'system'
        ? 'System'
        : colorMode.preference === 'dark'
          ? 'Dark'
          : 'Light'"
        :icon="colorMode.preference === 'system'
        ? 'i-lucide-monitor'
        : colorMode.preference === 'dark'
          ? 'i-lucide-moon'
          : 'i-lucide-sun'"
        color="neutral"
        variant="outline"
    />
  </UDropdownMenu>
</template>