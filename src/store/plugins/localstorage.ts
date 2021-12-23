import { PiniaPluginContext } from 'pinia'

export const localStoragePlugin = ({ store }: PiniaPluginContext) => {
  const itemName = ['pinia', store.$id].filter(Boolean).join('.')

  const item = localStorage.getItem(itemName)
  const savedState = item ? JSON.parse(item) : null

  if (savedState) {
    store.$patch(savedState)
  }

  store.$subscribe((_, state) => {
    localStorage.setItem(itemName, JSON.stringify(state))
  })
}
