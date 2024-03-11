<template>
  <layout-page-provider name="index">
    <h1 class="app-page-index__title">Фёдор Гаранин</h1>
    <p class="app-page-index__subtitle">Frontend Developer</p>
  </layout-page-provider>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.app-page-index {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__subtitle {
    margin-top: 20rem;
  }
}
</style>
