<script>
  export let formData;
  export let options;

  function setAllFormValues(object, value) {
    const keys = Object.keys(object);
    keys.forEach(key => {
      if (typeof object[key] === "object") {
        setAllFormValues(object[key], value);
      } else {
        object[key] = value;
      }
    });
    formData = { ...formData };
  }

  function handleFormStubmit(event) {
    event.preventDefault;
  }
</script>

<style>
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-group {
    border: 1px black solid;
    padding: 1rem;
    width: 25%;
    margin-bottom: 10px;
  }

  .form-group-title > p {
    margin-top: 0;
    font-weight: bold;
  }

  .input-group {
    display: flex;
  }

  input {
    margin-right: 10px;
  }

  h1 {
    text-align: center;
  }

  div.container {
    background-color: rgba(0, 0, 0, 0.1);
    width: 80vw;
    height: 75vh;
    padding: 10px;
    overflow-y: auto;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 700px) {
    .form-group {
      width: 75%;
    }

    .container-header {
      flex-direction: column;
    }

    form {
      justify-content: center;
    }
  }
</style>

<div class="container">
  <h1>Search Options</h1>

  <div class="container-header">
    <div class="button-container">
      <button on:click={setAllFormValues(formData, true)}>
        Turn on all options
      </button>
      <button on:click={setAllFormValues(formData, false)}>
        Turn off all options
      </button>
    </div>

    <div class="form-group" id="allow-item-removal">
      <div class="input-group">
        <input
          type="checkbox"
          name="allow-item-removal"
          bind:checked={formData.allowItemRemoval} />
        <label for="allow-item-removal">Allow Ingredient Removal</label>
      </div>
    </div>
  </div>

  <form on:submit={handleFormStubmit}>

    <div class="form-group" id="categories">
      <div class="form-group-title">
        <p>Categories</p>
      </div>
      {#each options.categories as category}
        <div class="input-group">
          <input
            type="checkbox"
            name={category}
            bind:checked={formData.categories[category.toLowerCase()]} />
          <label for={category}>{category}</label>
        </div>
      {/each}
    </div>

    <div class="form-group" id="addons">
      <div class="form-group-title">
        <p>Addons</p>
      </div>
      {#each options.addons as addon}
        <div class="input-group">
          <input
            type="checkbox"
            name={addon}
            bind:checked={formData.addons[addon.toLowerCase()]} />
          <label for={addon}>{addon}</label>
        </div>
      {/each}
    </div>

    <div class="form-group" id="sauces">
      <div class="form-group-title">
        <p>Sauces</p>
      </div>
      {#each options.sauces as sauce}
        <div class="input-group">
          <input
            type="checkbox"
            name={sauce}
            bind:checked={formData.sauces[sauce.toLowerCase()]} />
          <label for={sauce}>{sauce}</label>
        </div>
      {/each}
    </div>

  </form>
</div>
