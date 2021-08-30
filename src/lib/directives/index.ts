let global_observer: IntersectionObserver | undefined = undefined

const getObserver = () => {
  if (!global_observer) {
    let options = {
      threshold: 0.5,
    }

    global_observer = new IntersectionObserver((entries, observer) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.dispatchEvent(new CustomEvent('inscreen'))
          observer.unobserve(e.target)
        }
      }
    }, options)
  }
  return global_observer as IntersectionObserver
}

export const inscreen = node => {
  const ob = getObserver()
  ob.observe(node)
}
