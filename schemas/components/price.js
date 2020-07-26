export const price = {
  title: 'Price',
  name: 'price',
  type: 'document',
  fields: [
    {
      title: 'Заголовок цены',
      name: 'priceTitle',
      type: 'string',
    },
    {
      title: 'Цена за 1 час',
      name: 'priceOneHour',
      type: 'number',
    },
    {
      title: 'Цена за 2 час',
      name: 'priceTwoHours',
      type: 'number',
    },
    {
      title: 'Цена за доп. час',
      name: 'pricePlusHour',
      type: 'number',
    },
  ],
};
