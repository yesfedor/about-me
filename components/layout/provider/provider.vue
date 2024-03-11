<template>
  <div class="app-layout-provider">
    <slot :content-classes="contentClasses" />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const contentClasses = computed(() => {
  const pageName = `--${String(router.currentRoute.value.name)}`.split('__')[0]
  return {
    [pageName]: true,
  }
})
</script>

<style lang="scss">
.app-layout-provider {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: var(--theme-background);
}
.app-layout {
  min-height: 100vh;
  z-index: 1;
}
</style>
