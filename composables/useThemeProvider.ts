export default function useThemeProvider() {
  enum ThemeNames {
    light = 'light',
    dark = 'dark'
  }

  const name = useCookie<string>('app-theme-name', {
    maxAge: 365 * 24 * 60 * 60,
    path: '/',
    watch: true,
  })

  const change = (theme: keyof typeof ThemeNames) => {
    if (ThemeNames[theme]) {
      name.value = theme
    }
  }

  const bind = computed(() => {
    return {
      'data-theme': name.value,
    }
  })

  const setDefault = () => {
    name.value = ThemeNames.light
  }

  if (!name.value) {
    setDefault()
  }

  return {
    names: ThemeNames,
    name,
    change,
    bind,
  }
}
