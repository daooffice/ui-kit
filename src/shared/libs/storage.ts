export type StorageName = 'localStorage' | 'sessionStorage'

export const getStorageValue = (
  storage: StorageName,
  key: string,
  initValue: string | null = null
) => {
  if (typeof window === 'undefined') {
    return initValue
  }
  try {
    // Get from local storage by key
    const item = window[storage].getItem(key)
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : initValue
  } catch (error) {
    // If error also return initialValue
    console.log(error)
    return initValue
  }
}
