<template>
  <button
    :class="{
      '--show': isShow,
    }"
    class="ui-menu-toggle"
    @click="toggle"
  >
    <ui-icon
      :name="isShow ? 'JamClose' : 'JamAlignJustify'"
      class="ui-menu-toggle__icon"
    />
  </button>
</template>

<script lang="ts" setup>
const conditionStore = useConditionStore()

const { width } = useSSRWindowSize()
const isShow = computed(() => {
  return conditionStore.headerMenu
})

watch(width, () => {
  if (width.value > 1199) {
    conditionStore.hideHeaderMenu()
  }
})

const toggle = () => {
  if (isShow.value) {
    conditionStore.hideHeaderMenu()
  } else {
    conditionStore.openHeaderMenu()
  }
}
</script>

<style lang="scss">
.ui-menu-toggle {
  padding: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 12rem;
  right: 12rem;
  z-index: 11;
  box-shadow: unset !important;
  outline: 0 !important;
  border: unset !important;
  border-radius: 100%;
  background: var(--theme-header-background);

  &__icon {
    color: var(--theme-text);
    font-size: 32rem;
    line-height: 28rem;
  }

  &.--show {
    background: var(--theme-panel-background);
  }

  @include bp-desktop {
    display: none;
  }
}
</style>
