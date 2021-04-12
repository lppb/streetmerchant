import {Store} from './store';

export const GameEs: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    // Captcha: {
    // 	container: 'body',
    // 	text: [
    // 		'geben sie die unten angezeigten zeichen ein',
    // 		'geben sie die zeichen unten ein'
    // 	]
    // },
    inStock: {
        container: '.buy--btn.btn.btn-new.btn-circle.icon-wrap.buy-button',
        text: ['Comprar'],
      },
    maxPrice: {
      container: '.buy--price',
      euroFormat: true,
    },
    outOfStock: {
        container:
          '.buy--type',
        text: ['Producto no disponible'],
      },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.game.es/VIDEOJUEGOS/DEPORTES/PLAYSTATION-5/FIFA-21-NEXT-LEVEL-EDITION/185273',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.game.es/consola-playstation-5-playstation-5-183224',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.game.es/OFERTAS/PACK/PACKS/XBOX-SERIES-X-CONTROLLER-XBOX/P03362',
    },
  ],
  name: 'game-es',
};
