const menuService = {
  getRandomItem: async() => {
    return await fetch('localhost:3000/random/single');
  }
}

export default menuService;