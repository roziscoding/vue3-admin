import { createPinia } from 'pinia'
import { localStoragePlugin } from './plugins/localstorage'

export const pinia = createPinia()
pinia.use(localStoragePlugin)
