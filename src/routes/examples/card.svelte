<script lang="ts">
  import { inscreen } from '../../lib/directives/index'
  let hidden = true

  let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
    id: i,
    hidden: true,
  }))

  const onDisplayed = element => () => {
    console.log('displayed', element.id)
    element.hidden = false
    elements = elements
  }
</script>

{#each elements as el}
  <div
    class="portfolio-card card"
    class:hidden={el.hidden}
    on:inscreen={onDisplayed(el)}
    use:inscreen
  >
    <p>
      Lorem fistrum qué dise usteer caballo blanco caballo negroorl torpedo a peich diodenoo a
      gramenawer. Hasta luego Lucas.
    </p>
  </div>
{/each}

<style>
  .card {
    margin: 30px;
    max-width: 300px;
    transform: perspective(100px) rotateY(-3deg);
    transition: transform 2s ease-out 1s, opacity 1s linear 0s;
  }
  .hidden {
    opacity: 0;
    transform: perspective(100px);
  }
</style>
