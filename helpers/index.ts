// a function that returns a random rgb color
const randomColor = () => {
  const o = Math.round,
    r = Math.random,
    s = 255
  return `rgb(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}

export const randomColorArray = (length: number) => {
  const colors = []
  for (let i = 0; i < length; i++) {
    colors.push(randomColor())
  }
  return colors
}

// a function that returns a random number between 0 and a given number
export const randomNumber = (max: number) => {
  return Math.floor(Math.random() * max)
}