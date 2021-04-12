import {Store} from './store';

export const FnacEs: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    inStock: {
      container: '.ff-button.ff-button--block.ff-button--medium.ff-button--orange.js-ProductBuy-add',
      text: ['Añadir a la cesta'],
    },
    maxPrice: {
      container: '.f-priceBox-price.f-priceBox-price--reco.checked',
      euroFormat: true,
    },
    outOfStock: {
        container: '.f-buyBox-availability.f-buyBox-availabilityStatus-unavailable',
        text: ['Agotado'],
      },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.fnac.es/Altavoz-Inteligente-Google-Nest-Mini-2%C2%AA-Generacion-Tiza-Altavoce-Surround-Altavoces/a7009673',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.fnac.es/Consola-PlayStation-5-Videoconsola-Consola/a7724798',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.fnac.es/Consola-Xbox-Series-X-1TB-Negro-Videoconsola-Consola/a7732201',
    },
  ],
  name: 'fnac-es',
};
