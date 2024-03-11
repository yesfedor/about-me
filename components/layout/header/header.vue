<template>
  <header
    class="app-header"
    :class="{
      '--show': isShow,
    }"
  >
    <div class="app-header__image-wrapper">
      <img src="/me.png" class="app-header__image" />
    </div>

    <span class="app-header__title">
      Фёдор Гаранин
    </span>

    <span class="app-header__subtitle">
      CEO, Developer
    </span>

    <div class="app-header__menu">
      <NuxtLink
        v-for="item in menu"
        :key="item.to"
        class="app-header__menu-item"
      >
        {{ item.label }}
      </NuxtLink>
    </div>

    <div class="app-header__links">
      <a
        v-for="item in links"
        :key="item.name"
        :href="item.link"
        target="_blank"
        class="app-header__links-item"
      >
        <ui-icon :name="item.name" class="app-header__links-icon" />
      </a>
    </div>

    <a href="/cv-ru.pdf" target="_blank" class="app-header__button">
      Посмотреть резюме
    </a>

    <span class="app-header__copy">
      © {{ year }} Все права защищены.
    </span>
  </header>
</template>

<script lang="ts" setup>
import type { TUiIconNames } from '#build/types/ui-icon'

const conditionStore = useConditionStore()
const isShow = computed(() => {
  return conditionStore.headerMenu
})

const year = (new Date()).getFullYear()

const createLink = (label: string, toName: string) => {
  return {
    label,
    to: {
      path: toName,
    },
  }
}

const createIconLink = (name: TUiIconNames, link: string) => {
  return {
    name,
    link,
  }
}

const menu = [
  createLink('Главная', '/'),
  createLink('Обо мне', '/about'),
  createLink('Резюме', '/cv'),
]

const links = [
  createIconLink('JamGithub', 'https://github.com/yesfedor'),
  createIconLink('JamTelegram', 'https://t.me/yesfedor'),
  createIconLink('JamLink', 'https://linktr.ee/yesfedor'),
]
</script>

<style lang="scss">
.app-header {
  width: 0;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 10;
  transition: width .2s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  &__image-wrapper {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      opacity: 0.3;
      top: 7%;
      left: 7%;
      border-radius: 300px;
      height: calc(100% + 0px);
      width: calc(100% + 0px);
      background-image: -webkit-repeating-radial-gradient(center center, #fff, #fff 2rem, transparent 0, transparent 100%);
      background-size: 6rem 6rem;
      visibility: visible;
      z-index: -1;
    }
  }

  &__image {
    width: 130rem;
    height: 130rem;
    border-radius: 100%;
    border: 4rem solid var(--theme-image-border);

    @include bp-desktop {
      width: 180rem;
      height: 180rem;
    }
  }

  &__title {
    margin-top: 28rem;
    font-size: 24rem;
    font-weight: 600;

    @include bp-desktop {
      margin-top: 36rem;
      font-size: 36rem;
      font-weight: 700;
    }
  }

  &__subtitle {
    margin-top: 18rem;
    font-size: 16rem;

    @include bp-desktop {
      margin-top: 24rem;
      font-size: 20rem;
    }
  }

  &.--show {
    padding: 30rem;
    width: 360rem;
  }

  &__menu {
    margin-top: 28rem;
    display: flex;
    flex-direction: column;

    &-item {
      text-align: center;
      padding: 12rem 0;
      color: var(--theme-heading);
      font-size: 16rem;
    }
  }

  &__links {
    margin-top: 24rem;
    display: flex;
    gap: 0 10rem;

    &-item {
      padding: 8rem;
    }

    &-icon {
      font-size: 20rem;
    }
  }

  &__button {
    margin-top: 28rem;
    padding: 14rem 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--theme-heading);
    background: transparent;
    outline: 0;
    box-shadow: unset;
    border-radius: 12rem;
    border: 1rem solid var(--theme-heading);
    transition: background 200ms, color 200ms;

    &:hover {
      color: var(--theme-link-disabled);
      background: var(--theme-heading);
      text-decoration: unset;
    }

    @include bp-desktop {
      margin-top: 48rem;
    }
  }

  &__copy {
    margin-top: auto;
    font-size: 0.85em;
  }

  @include bp-desktop {
    padding: 32rem;
    width: 100%;
    position: relative;
    z-index: 0;
    transition: width 0s;

    &__menu {
      display: none;
    }

    &.--show {
      padding: 0;
      width: auto;
    }
  }
}
</style>
