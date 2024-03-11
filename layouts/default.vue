<template>
  <layout-provider v-slot="{ contentClasses }">
    <div class="app-layout app-layout-default">
      <layout-header class="app-layout-default__header" />
      <ui-menu-toggle />

      <div
        :class="contentClasses"
        class="app-layout__content app-layout-default__content"
      >
        <slot />
      </div>

      <div class="app-layout-default__nav">
        <ui-navigator />
      </div>
    </div>
  </layout-provider>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.app-layout-default {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &__header {
    min-height: 100%;
    background: var(--theme-header-background);
  }

  &__content {
    padding: 24rem;
    min-height: 100vh;
    background: var(--theme-panel-background);
  }

  @include bp-desktop {
    padding: 10vh 0;
    display: grid;
    grid-template-columns: 380rem 900rem 90rem;
    grid-template-rows: 1fr;
    gap: 0;
    grid-template-areas:
      'header content nav';
    align-items: center;
    justify-content: center;

    &__header {
      height: 80vh;
      grid-area: header;
      border-radius: 32rem 0 0 32rem;
    }

    &__content {
      padding: 32rem;
      min-height: 80vh;
      height: 80vh;
      position: relative;
      grid-area: content;
      border-radius: 32rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 50%;
        bottom: 0;
        background: var(--theme-header-background);
        z-index: -1;
      }
    }

    &__nav {
      margin-left: 20rem;
      grid-area: nav;
      height: 100%;
    }
  }
}
</style>
