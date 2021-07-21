<script>
  export let item;

  function titleCase(input) {
    const words = input.split(/\s|-/);
    const titleCasedWords = [];
    words.forEach(word => titleCasedWords.push(word[0].toUpperCase() + word.substring(1)));
    return titleCasedWords.join(' ');
  }
</script>

<div>
  <h1>{item.title}</h1>
  <h2>Menu Category: {titleCase(item.category)}</h2>

  <h3>Item Ingredients</h3>
  <ul id="default-items">
    {#each item.includedItems as includedItem}
      <li class="kept">{includedItem}</li>
    {/each}

    {#each item.removedItems as removedItem}
      <li class="removed">{removedItem}</li>
    {/each}
  </ul>

  <h3>Addons</h3>
  <ul id="addons">
    {#each item.addons as addon}
      <li>{addon}</li>
    {/each}
  </ul>

  <h3>Sauces</h3>
  <ul id="sauces">
    {#each item.sauces as sauce}
      <li>{sauce}</li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style: none;
    padding-left: 1em;
  }

  h1 {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h2 {
    margin-top: 0;
    padding-top: 0;
  }

  li.kept::before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em;
    background-image: url(/images/icons/baseline_done_black_18dp.png);
    background-image: url(/images/icons/done-24px.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;  
  }

  li.removed {
    color: red;
  }

  ul#default-items > li.removed::before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em;
    background-image: url(/images/icons/fticon-v1_minus.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
  }

  ul#addons {
    color: green;
  }

  ul#addons > li::before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em;
    background-image: url(/images/icons/round_add_black_18dp.png);
    background-image: url(/images/icons/add-24px.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;  
  }

  ul#sauces {
    color: green;
  }

  ul#sauces > li::before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em;
    background-image: url(/images/icons/round_add_black_18dp.png);
    background-image: url(/images/icons/add-24px.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
  }

  div {
    padding: 3rem;
    background-color: rgba(255, 255, 255, .3);
  }

  @media screen and (min-width: 800px) {
    div {
      border: 1px black solid;
    }
  }

</style>