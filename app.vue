<template>
  <div class="app-root" v-bind="themeProvider.bind.value">
    <NuxtPwaManifest />

    <NuxtLayout fallback="default">
      <NuxtPage />
    </NuxtLayout>

    <CommonScope />
  </div>
</template>

<script setup lang="ts">
const themeProvider = useThemeProvider()
</script>
