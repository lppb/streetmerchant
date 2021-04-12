import {Store} from './store';

export const MediamarktEs: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'p',
      text: ['demasiado rápido'],
    },
    inStock: {
      container: '#pdp-add-to-cart-button',
      text: ['Añadir al carrito'],
    },
    maxPrice: {
      container: 'span[font-family="price"]',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '#root',
        text: ['Este artículo no está disponible actualmente.'],
      },
      {
        container: '#root',
        text: ['No disponible'],
      },
      {
        container: '#root',
        text: ['Este artículo está agotado temporalmente'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.mediamarkt.es/es/product/_reproductor-multimedia-amazon-fire-tv-stick-lite-2020-mando-por-voz-alexa-8-gb-negro-1487510.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.mediamarkt.es/es/product/_consola-sony-ps5-825-gb-4k-hdr-blanco-1487016.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.mediamarkt.es/es/product/_consola-sony-ps5-digital-edition-825-gb-4k-hdr-blanco-1487015.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.mediamarkt.es/es/product/_consola-microsoft-xbox-series-x-1-tb-ssd-negro-1487615.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.mediamarkt.es/es/product/_consola-microsoft-xbox-series-s-512-gb-ssd-blanco-1487616.html',
    },
  ],
  name: 'mediamarkt-es',
};
