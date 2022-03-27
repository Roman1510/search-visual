export const generateBoard = (size) => {
  return [...Array((size * size) / 400)].map((_, i) => {
    return { index: i, isActive: false }
  })
}
