import menuService from './taco-bell-menu.service';

const menuOptionsService = {
  getOptions: async () => ({
    categories: (await menuService.getCategories()).categories,
    addons: (await menuService.getAddons()).addons,
    sauces: (await menuService.getSauces()).sauces
  })
}

export default menuOptionsService;