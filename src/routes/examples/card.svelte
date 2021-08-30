<script lang="ts">
  import { inscreen } from '../../lib/directives/index'
  let hidden = true

  const end = () => {
    console.log('end')
  }

  setTimeout(() => {
    hidden = false
  }, 500)
</script>

{#key hidden}
  <div
    class="portfolio-card card"
    class:hidden
    on:introend={end}
    use:inscreen
  >
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
