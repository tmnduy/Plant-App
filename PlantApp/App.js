import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Navigation from './navigation/Index';
import {Provider} from 'react-redux';
import mocks from './constants/mocks';

const images = [
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
// import {reducerName} from './reducer';
import {createStore} from 'redux';

const store = createStore((state = mocks, action) => {
  console.log(state.categories);
  return state;
});
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
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
