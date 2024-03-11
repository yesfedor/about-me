<template>
  <div class="app-root app-root--error" v-bind="themeProvider.bind.value">
    <NuxtPwaManifest />

    <NuxtLayout name="default">
      <layout-page-provider name="error">
        <ui-icon name="404" filled />
      </layout-page-provider>
    </NuxtLayout>

    <CommonScope />
  </div>
</template>

<script lang="ts" setup>
const error = useError()
const themeProvider = useThemeProvider()
</script>

<style lang="scss">
.app-page-error {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @include bp-desktop {
    min-height: 100%;
  }

  .ui-icon {
    font-size: 320rem;

    @include bp-tablet {
      font-size: 680rem;
    }
  }
}
</style>
