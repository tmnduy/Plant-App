const categories = [
  {
    id: 'plant',
    name: 'Plant',
    tags: ['Product', 'Inspirations', 'Plant'],
    count: 1000,
    image: require('../assets/icon/plant.png'),
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['Product', 'Seeds', 'Shop'],
    count: 180,
    image: require('../assets/icon/seeds.jpg'),
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['Product', 'Inspirations', 'Flowers'],
    count: 678,
    image: require('../assets/icon/flower.jpg'),
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['Product', 'Sprayers', 'Shop'],
    count: 371,
    image: require('../assets/icon/sprayers.jpg'),
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['Product', 'Inspirations', 'Pots'],
    count: 448,
    image: require('../assets/icon/pot.jpg'),
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    tags: ['Product', 'Fertilizers', 'Shop'],
    count: 602,
    image: require('../assets/icon/fertilizers.jpg'),
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
const profile = {
  username: 'Haley',
  location: 'West',
  email: 'contact@assa.com',
  avatar: require('../assets/images/avatar.jpg'),
  budget: 10000,
  monthly_cap: 2000,
  notification: true,
  newletter: false,
};
const explore = [
  // images
  require('../assets/images/explore/explore_1.png'),
  require('../assets/images/explore/explore_2.png'),
  require('../assets/images/explore/explore_3.png'),
  require('../assets/images/explore/explore_4.png'),
  require('../assets/images/explore/explore_5.png'),
  require('../assets/images/explore/explore_6.png'),
  require('../assets/images/explore/explore1.jpg'),
  require('../assets/images/explore/explore2.jpg'),
  require('../assets/images/explore/explore3.jpg'),
];
export default {categories, product, profile, explore};
