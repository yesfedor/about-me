<template>
  <layout-provider v-slot="{ contentClasses }">
    <div class="app-layout app-layout-default">
      <layout-header class="app-layout-default__header" />
      <ui-menu-toggle />

      <div
        :class="contentClasses"
        class="app-layout__content app-layout-default__content"
      >
        <div class="app-layout-default__scroll">
          <slot />
        </div>
      </div>

      <div class="app-layout-default__nav">
        <ui-navigator />
      </div>
    </div>
  </layout-provider>
</template>

<script setup lang="ts">
const nuxt = useNuxtApp()
const config = nuxt.$config

useSeoMeta({
  ogType: 'profile',
  ogTitle: 'Фёдор Гаранин (@yesfedor) - Веб-разработчик',
  ogDescription: 'Фёдор Гаранин - ведущий разработчик программного обеспечения. Работает в сфере веб-разработки.',
  ogUrl: config.public.BASE_URL,
  ogImageUrl: `${config.public.BASE_URL}/me.png`,
  profileGender: 'male',
  profileUsername: 'yesfedor',
  profileFirstName: 'Фёдор',
  profileLastName: 'Гаранин',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: 'Фёдор Гаранин (@yesfedor) - Веб-разработчик',
  ogLocale: 'ru',
})
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

  &__scroll {
    padding: 24rem 10rem;
    min-height: 100vh;
    height: 100vh;
    position: relative;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4rem;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5rem;
      background: var(--theme-header-background);
    }

    &::-webkit-scrollbar-track {
      border-radius: 5rem;
      background: var(--theme-panel-background);
    }
  }

  &__content {
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

    &__scroll {
      padding: 60rem 24rem 48rem 60rem;
      min-height: 80vh;
      height: 80vh;
    }

    &__content {
      padding-right: 32rem;
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
