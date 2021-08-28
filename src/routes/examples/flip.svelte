<script lang="ts">
  let right = false
  const onClick = () => right = !right
</script>

<svelte:head>
	<title>Flip</title>
</svelte:head>

<div class="container">
  <div class="box" class:right on:click={onClick}/>
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