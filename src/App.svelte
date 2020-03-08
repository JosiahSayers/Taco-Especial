<script>
  import Item from './Item.svelte';
  import Options from './Options.svelte';
  import { fly, fade } from 'svelte/transition';
  import menuService from './services/taco-bell-menu.service.js';

  let randomItem;
  let displayOptions = false;

  let formData = {
    categories: {},
    addons: {},
    sauces: {}
  };

  async function fetchRandomItem() {
    const res = await menuService.randomItemWithParams(formData);
    const json = await res.json();
    await new Promise(resolve => setTimeout(() => resolve(), 500));

    if (res.ok) {
      return json;
    } else {
      throw new Error();
    }
  }

  async function handleClick() {
    displayOptions = false;
    console.log(formData);
    randomItem = fetchRandomItem()
  }

  function toggleOptions() {
    displayOptions = !displayOptions;
  }
</script>

<div class="overlay">
  {#await randomItem}
    <div class="image-container" in:fade out:fade>
      <img src="images/taco.png" class="spin" alt="taco" />
    </div>
  {:then item}
    {#if item && !displayOptions}
      <div class="item-container" in:fly={{ x: 500 }} out:fly={{ x: -300 }}>
        <Item item={item} />
      </div>
    {/if}
  {:catch error}
    <p>An error occurd while grabbing this item. Please try again!</p>
  {/await}

  {#if displayOptions}
    <div class="options-container" in:fade out:fade>
      <Options formData={formData}></Options>
    </div>
  {/if}

  <div class="buttons">
    <button id="random-single-button" on:click={handleClick}>
      Generate Random Menu Item
    </button>
    <button id="options-button" on:click={toggleOptions}>Search Options</button>
  </div>
</div>

<style>
  :global(body) {
    background-image: url('/images/background.jpg');
    background-repeat: repeat;
    padding: 0;
  }

  .overlay {
    background-color: rgba(255, 255, 255, 0.35);
    width: 100vw;
    height: 100vh;
  }

  .image-container {
    width: 250px;
    margin: auto auto;
    position: fixed;
    top: calc(50vh - 125px);
    left: calc(50vw - 125px);
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

  .item-container {
    padding: 25px;
    margin: 0 0 10vh 0;
    overflow-y: auto;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .options-container {
    width: 80vw;
    height: 75vh;
    margin: auto auto;
    position: fixed;
    top: 7.5vh;
    left: 10vw;
  }

  div.buttons {
    height: 7vh;
    position: fixed;
    bottom: 0;
    margin: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  #random-single-button {
    width: 75%;
    cursor: pointer;
    margin: 0;

    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(66, 184, 221);
    border: 0 transparent;
  }

  #options-button {
    width: 20%;
    cursor: pointer;
    margin: 0;

    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(66,184,221);
    border: 0 transparent;
  }

  @media screen and (min-width: 800px) {
    .item-container {
      justify-content: center;
    }
  }
</style>