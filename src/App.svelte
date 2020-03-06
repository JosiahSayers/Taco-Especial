<script>
  import Item from './Item.svelte';
  import { fly, fade } from 'svelte/transition';

  let randomItem;

  async function fetchRandomItem() {
    const res = await fetch('http://localhost:3000/random/single');
    const json = await res.json();

    if (res.ok) {
      return json;
    } else {
      throw new Error();
    }
  }

  function handleClick() {
    randomItem = fetchRandomItem()
  }
</script>

<button on:click={handleClick}>
	generate random menu item
</button>

{#await randomItem}
  <div class="image-container" in:fade out:fade>
    <img src="images/taco.png" class="spin" alt="taco" />
  </div>
{:then item}
  {#if item}
    <div class="container" in:fly={{ x: 500 }} out:fly={{ x: -300 }}>
      <Item item={item} />
    </div>
  {/if}
{:catch error}
  <p>An error occurd while grabbing this item. Please try again!</p>
{/await}

<style>
  .image-container {
    width: 80vw;
    margin: 0 auto;
    position: fixed;
    top: 10vh;
    left: 10vw;
  }

  .image-container img {
    width: 100%;
  }

  .spin {
    animation-duration: 5s;
    animation-delay: -0.5s;
    animation-name: spin;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>