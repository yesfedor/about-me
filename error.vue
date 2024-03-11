<template>
  <div class="app-root app-root--error" v-bind="themeProvider.bind.value">
    <NuxtPwaManifest />

    <NuxtLayout name="default">
      <pre>
        {{ error.message }}
      </pre>
    </NuxtLayout>

    <CommonScope />
  </div>
</template>

<script lang="ts" setup>
const error = useError()
const themeProvider = useThemeProvider()
</script>
