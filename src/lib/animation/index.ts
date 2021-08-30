import { quadOut } from 'svelte/easing'

export const perspective = (node, { duration = 700 }) => {
  return {
    duration,
    delay: 100,
    css: t => {
      const et = quadOut(t)
      return `
          opacity: ${et};
          transform: perspective(${400 - et * 300}px) rotateY(-3deg);
        `
    },
  }
}
