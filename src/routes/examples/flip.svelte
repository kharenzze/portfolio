<script lang="ts">
  import { flip } from 'svelte/animate'
  import { crossfade } from 'svelte/transition'
  let right = false
  const onClick = () => {
    right = !right
  }

  const [send, receive] = crossfade({
    fallback: (node, params) => ({ delay: 0 }),
    duration: 1000,
  })
</script>

<svelte:head>
  <title>Flip</title>
</svelte:head>

<div class="container">
  {#key right}
    <div
      class="box"
      class:right
      on:click={onClick}
      in:send={{ key: right }}
      out:receive={{ key: right }}
    />
  {/key}
</div>

<style>
  .container {
    width: 100%;
    height: 40px;
    position: relative;
  }
  .box {
    background-color: red;
    height: 40px;
    width: 40px;
    position: absolute;
  }
  .right {
    right: 0;
  }
</style>
