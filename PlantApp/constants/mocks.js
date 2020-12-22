const categories = [
  {
    id: 'plant',
    name: 'Plant',
    tags: ['Product', 'Plant', 'Shop'],
    count: 1000,
    image: require('../assets/images/plant/plant.jpg'),
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['Product', 'Seeds', 'Shop'],
    count: 180,
    image: require('../assets/images/seeds/seed.jpg'),
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['Product', 'Flower', 'Shop'],
    count: 678,
    image: require('../assets/images/flowers/flower.jpg'),
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['Product', 'Sprayers', 'Shop'],
    count: 1000,
    image: require('../assets/images/sprayers/sprayers.jpg'),
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['Product', 'Pots', 'Shop'],
    count: 1000,
    image: require('../assets/images/pots/pots.jpg'),
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    tags: ['Product', 'Fertilizers', 'Shop'],
    count: 1000,
    image: require('../assets/images/fertilizers/fertilizers.jpg'),
  },
];
const product = [
  {
    id: 1,
    name: 'Legacy',
    description:
      'Aut sed quos harum. Aspernatur rerum omnis quia est molestiae et. Saepe suscipit et cumque.',
    tags: ['Interior', '27 m²', 'Ideas'],
    gallery: [
      require('../assets/images/plant/plant.jpg'),
      require('../assets/images/plant/plant1.jpg'),
      require('../assets/images/plant/plant2.jpg'),

      require('../assets/images/plant/plant3.jpg'),
      require('../assets/images/plant/plant4.jpg'),
      require('../assets/images/plant/plant5.jpg'),
    ],
  },
];
const profile = [
  {
    username: 'Haley',
    location: 'West',
    email: 'contact@assa.com',
    avatar: require('../assets/images/avatar.jpg'),
    budget: 10000,
    monthly_cap: 2000,
    notification: true,
    newletter: false,
  },
];
const explore = [
  // images
  require('../assets/images/explore/explore1.jpg'),
  require('../assets/images/explore/explore2.jpg'),
  require('../assets/images/explore/explore3.jpg'),
  require('../assets/images/explore/explore4.jpg'),
  require('../assets/images/explore/explore5.jpg'),
  require('../assets/images/explore/explore6.jpg'),
  require('../assets/images/explore/explore7.jpg'),
  require('../assets/images/explore/explore8.jpg'),
  require('../assets/images/explore/explore9.jpg'),
  require('../assets/images/explore/explore10.jpg'),
  require('../assets/images/explore/explore11.jpg'),
  require('../assets/images/explore/explore12.jpg'),
  require('../assets/images/explore/explore13.jpg'),
  require('../assets/images/explore/explore14.jpg'),
  require('../assets/images/explore/explore15.jpg'),
];
export default {categories, product, profile, explore};
