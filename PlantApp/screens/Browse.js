import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import mocks from '../constants/mocks';
import {generateShadow} from 'react-native-shadow-generator';

class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Product',
      categories: [
        {
          id: 'plant',
          name: 'Plant',
          tags: ['Product', 'Plant', 'Shop'],
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
          tags: ['Product', 'Flower', 'Shop'],
          count: 678,
          image: require('../assets/icon/flower.jpg'),
        },
        {
          id: 'sprayers',
          name: 'Sprayers',
          tags: ['Product', 'Sprayers', 'Shop'],
          count: 1870,
          image: require('../assets/icon/sprayers.jpg'),
        },
        {
          id: 'pots',
          name: 'Pots',
          tags: ['Product', 'Pots', 'Shop'],
          count: 1253,
          image: require('../assets/icon/pot.jpg'),
        },
        {
          id: 'fertilizers',
          name: 'Fertilizers',
          tags: ['Product', 'Fertilizers', 'Shop'],
          count: 982,
          image: require('../assets/icon/fertilizers.jpg'),
        },
      ],
      profile: [
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
      ],
    };
  }

  renderTab(tab) {
    const {active} = this.state;
    const isActive = active == tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.setState({active: tab})}
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text style={[styles.nav, {color: !isActive ? 'gray' : '#2BDA8E'}]}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {navigation} = this.props;
    const {categories, profile} = this.state;
    const tabs = ['Product', 'Inspirations', 'Shop'];
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header__title}> Browse </Text>
          {profile.map((profile) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Settings');
              }}>
              <Image style={styles.header__avatar} source={profile.avatar} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tabs}>
          {tabs.map((tab) => this.renderTab(tab))}
        </View>
        <ScrollView
          shouldCancelWhenOutside={false}
          style={{paddingVertical: 32}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 32,
              marginHorizontal: 10,
              marginRight: 30,
            }}>
            {categories.map((category) => (
              <View style={{width: '50%'}} key={category.id}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Explore', {category})}>
                  <View style={styles.card}>
                    <View style={styles.card__item}>
                      <Image
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 50,
                        }}
                        source={category.image}
                      />
                      <Text
                        style={{
                          letterSpacing: 1,
                          fontSize: 18,
                          fontWeight: 'bold',
                          padding: 3,
                        }}>
                        {category.name}
                      </Text>
                      <Text style={{fontSize: 12, color: 'gray'}}>
                        {category.count} product
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
Browse.defaultProps = {
  // profile: mocks.profile,
  // categories: mocks.categories,
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header__avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomColor: '#C5CCD6',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 32,
    marginVertical: 16,
  },
  tab: {
    marginLeft: 20,
    paddingBottom: 16,
  },
  nav: {
    fontSize: 20,
    letterSpacing: 1,
  },
  active: {
    borderBottomColor: '#2BDA8E',
    borderBottomWidth: 3,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    marginBottom: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    ...generateShadow(4),
  },
  card__item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
