import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { picture } from './components/picture';
import { gameCard } from './components/game-card';
import { link } from './components/link';
import { qa } from './components/qa';
import { pricePlus } from './components/price-plus';
import { specialOffer } from './components/special-offer';
import { price } from './components/price';

import { references } from './pages/references';
import { privacyPolicy } from './pages/privacy-policy';

import { mainSection } from './sections/main-section';
import { aboutUsSection } from './sections/about-us-section';
import { gamesSection } from './sections/games-section';
import { gallerySection } from './sections/gallery-section';
import { faqSection } from './sections/faq-section';
import { priceSection } from './sections/price-section';
import { priceListSection } from './sections/price-list-section';

const components = [picture, gameCard, link, qa, pricePlus, specialOffer, price];
const pages = [references, privacyPolicy];
const sections = [
  mainSection,
  aboutUsSection,
  gamesSection,
  gallerySection,
  faqSection,
  priceSection,
  priceListSection,
];

export default createSchema({
  name: 'mySchema',
  types: [...schemaTypes, ...components, ...pages, ...sections],
});
