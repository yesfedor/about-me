export function generateId () {
  return `${Date.now().toString(32)}-${Math.random().toString(32)}`
}
