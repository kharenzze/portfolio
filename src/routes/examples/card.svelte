<script lang="ts">
  import { quadOut } from 'svelte/easing'
  let hidden = true
  const animation = (node, { duration = 700 }) => {
    return {
      duration,
      delay: 100,
      css: t => {
        const et = quadOut(t)
        console.log(et)

        return `
          opacity: ${et};
          transform: perspective(${400 - et * 300}px) rotateY(-3deg);
        `
      },
    }
  }

  const end = () => {
    console.log('end')
  }

  setTimeout(() => {
    hidden = false
  }, 500)
</script>

{#key hidden}
  <div class="portfolio-card card" in:animation={{ duration: 2000 }} class:hidden on:introend={end}>
    <p>
      Lorem fistrum qué dise usteer caballo blanco caballo negroorl torpedo a peich diodenoo a
      gramenawer. Hasta luego Lucas.
    </p>
  </div>
{/key}

<style>
  .card {
    max-width: 300px;
    transform: perspective(100px) rotateY(-3deg);
  }
  .hidden {
    opacity: 0;
  }
</style>
