// src: https://dev.to/dimer191996/nuxt-js-smooth-scrolling-with-hash-links-94a
const findEl = async (hash, x = 0) => {
  return (
    document.querySelector(hash) ||
    new Promise((resolve) => {
      if (x > 50) {
        return resolve(document.querySelector('#app'))
      }
      setTimeout(() => {
        resolve(findEl(hash, ++x || 1))
      }, 100)
    })
  )
}

export default async function (to, from, savedPosition) {
  // const scrollState = window.$nuxt.$store.getters['scroll/getScroll']
  // const { x, y } = scrollState
  // console.log('>>scroll behaviour check...')
  // console.log(to, from, savedPosition, { x, y }, scrollState)

  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    let el = await findEl(to.hash)
    // doesn't work because of locomotiveScroll
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    } else {
      return window.scrollTo(0, el.offsetTop)
    }
  }

  return { x: 0, y: 0 }
}
