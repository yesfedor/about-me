<template>
  <slot name="before" />

  <section class="app-page" :class="pageClasses">
    <slot />
  </section>

  <slot name="after" />
</template>

<script lang="ts" setup>
interface Props {
  name: string
}

const props = defineProps<Props>()
const {
  name,
} = toRefs(props)

const pageClasses = computed(() => {
  return {
    [`app-page-${name.value.toLowerCase()}`]: true,
  }
})
</script>
