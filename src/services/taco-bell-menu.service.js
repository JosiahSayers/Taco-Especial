const menuService = {
  getRandomItem: async() => {
    return await fetch('localhost:3000/random/single');
  },

  randomItemWithParams: async(formData) => {
    const body = {
      categories: [],
      alwaysIncludeAddons: [],
      alwaysIncludeSauces: [],
      excludeAddons: [],
      excludeSauces: [],
      allowItemRemoval: formData.allowItemRemoval
    };
    
    const categories = Object.keys(formData.categories);
    categories.forEach(category => {
      if (formData.categories[category]) {
        body.categories.push(category);
      }
    });

    const addons = Object.keys(formData.addons);
    addons.forEach(addon => {
      if (formData.addons[addon]) {
        body.alwaysIncludeAddons.push(addon);
      } else {
        body.excludeAddons.push(addon);
      }
    });

    const sauces = Object.keys(formData.sauces);
    sauces.forEach(sauce => {
      if (formData.sauces[sauce]) {
        body.alwaysIncludeSauces.push(sauce);
      } else {
        body.excludeSauces.push(sauce);
      }
    });

    return fetch('/random/single', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}

export default menuService;