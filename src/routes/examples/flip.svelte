<script module="ts">
  let x = 1;
  const onClick = () => 
    console.log('x', x)
</script>

<svelte:head>
	<title>Flip</title>
</svelte:head>

<div class="box" on:click={onClick}/>

<style>
  .box {
    background-color: red;
    height: 40px;
    width: 40px;
  }
</style>