<template>
  <div>
    <AppHeader />
    <UApp>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UApp>
    <AppFooter />
  </div>
</template>
<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>