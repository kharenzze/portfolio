<script module="ts">
  import Box from '../../lib/Box.svelte'
  let x = 1;
  console.log('x', x)
</script>

<svelte:head>
	<title>Flip</title>
</svelte:head>

<p>Hola</p>
<Box/>

<style>
  p {
    color: red;
  }
</style>