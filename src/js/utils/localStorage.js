export const loadData = (item) => {
  try {
    const data = localStorage.getItem(item)
    if (data === null) {
      return undefined
    }

    return JSON.parse(data)
  } catch (err) {
    return undefined
  }
}

export const saveData = (key, state) => {
  try {
    const data = JSON.stringify(state)
    localStorage.setItem(key, data)
  } catch (err) {
    // 💀
  }
}
