import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation/Index';
import * as constants from './constants';
import {Block} from './components';
import {Apploading, Asset} from 'react-native';

const images = [
  require('./assets/icon/back.png'),
  require('./assets/icon/fertilizers.jpg'),
  require('./assets/icon/flower.jpg'),
  require('./assets/icon/plan.jpg'),
  require('./assets/icon/pot.jpg'),
  require('./assets/icon/seed.jpg'),
  require('./assets/icon/sprayers.jpg'),

  require('./assets/images/plant/plant.jpg'),
  require('./assets/images/plant/plant1.jpg'),
  require('./assets/images/plant/plant2.jpg'),
  require('./assets/images/plant/plant3.jpg'),
  require('./assets/images/plant/plant4.jpg'),
  require('./assets/images/plant/plant5.jpg'),

  require('./assets/images/explore/explore1.jpg'),
  require('./assets/images/explore/explore2.jpg'),
  require('./assets/images/explore/explore3.jpg'),
  require('./assets/images/explore/explore4.jpg'),
  require('./assets/images/explore/explore5.jpg'),
  require('./assets/images/explore/explore6.jpg'),

  require('./assets/images/avatar.jpg'),
];

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };
  handleResourcesAsync = async () => {
    const cacheImages = images.map((img) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  render() {
    return <Navigation />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
