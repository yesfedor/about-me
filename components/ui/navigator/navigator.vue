<template>
  <nav class="ui-navigator">
    <NuxtLink
      v-for="item in links"
      :key="item.name"
      :to="item.to"
      class="ui-navigator__item"
    >
      <ui-icon
        :name="item.name"
        class="ui-navigator__item-icon"
      />
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import type { TUiIconNames } from '#build/types/ui-icon'

const createIconLink = (name: TUiIconNames, link: string, external = false) => {
  return {
    name,
    to: {
      path: link,
    },
  }
}

const links = [
  createIconLink('JamHome', '/'),
  createIconLink('JamUserSquare', '/about'),
  createIconLink('JamLink', '/cv'),
]
</script>

<style lang="scss">
.ui-navigator {
  display: none;

  @include bp-desktop {
    padding: 20rem 0;
    display: flex;
    flex-direction: column;
    background: var(--theme-header-background);
    border-radius: 40rem;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70rem;
      height: 50rem;

      &-icon {
        font-size: 30rem;
        transition: color 200ms;
      }

      &.router-link-active {
        .ui-navigator__item-icon {
          color: var(--theme-primary);
        }
      }
    }
  }
}
</style>
