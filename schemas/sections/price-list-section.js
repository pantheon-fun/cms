export const priceListSection = {
  title: 'Price list section',
  name: 'priceListSection',
  type: 'document',
  fields: [
    {
      title: 'Цены',
      name: 'prices',
      type: 'array',
      of: [
        {
          type: 'price',
        },
      ],
    },
    {
      title: 'Акции',
      name: 'specialOffers',
      type: 'array',
      of: [
        {
          type: 'specialOffer',
        },
      ],
    },
    {
      title: 'Детали для цен',
      description: 'Одна строка (в формате MarkDown)',
      name: 'priceDetails',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
