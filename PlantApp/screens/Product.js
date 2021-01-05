import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {theme, mocks} from '../constants';

const {width, height} = Dimensions.get('window');

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: 1,
        name: '16 Best Plants That Thrive In Your Bedroom',
        description:
          'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
        tags: ['Interior', '27 m²', 'Ideas'],
        images: [
          require('../assets/images/plant/plant.jpg'),
          require('../assets/images/plant/plant1.jpg'),
          require('../assets/images/plant/plant2.jpg'),

          require('../assets/images/plant/plant3.jpg'),
          require('../assets/images/plant/plant4.jpg'),
          require('../assets/images/plant/plant5.jpg'),
        ],
      },
    };
  }

  renderGallery() {
    const {product} = this.state;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{width: width, height: height / 2.8, marginTop: 10}}
          />
        )}
      />
    );
  }
  render() {
    const {product} = this.state;

    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderGallery()}

          <View style={styles.product}>
            <Text style={{fontSize: theme.sizes.h2, fontWeight: 'bold'}}>
              {product.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {product.tags.map((tag) => (
                <Text key={`tag-${tag}`} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
            <View style={{marginVertical: theme.sizes.base * 0.5}}>
              <Text style={{color: theme.colors.gray}}>
                {product.description}
              </Text>
            </View>

            {/* <Divider margin={[theme.sizes.padding * 0.9, 0]} /> */}

            <View>
              <Text
                style={{fontWeight: '500', paddingVertical: 10, fontSize: 19}}>
                Gallery
              </Text>
              <View style={{flexDirection: 'row'}}>
                {product.images.slice(1, 3).map((image, index) => (
                  <Image
                    key={`gallery-${index}`}
                    source={image}
                    style={styles.image}
                  />
                ))}
                <TouchableOpacity>
                  <View style={styles.more}>
                    <Text gray>+{product.images.slice(3).length}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
    marginVertical: theme.sizes.base * 1.5,
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
    fontSize: theme.sizes.caption,
    color: theme.colors.gray,
    marginVertical: theme.sizes.base * 0.5,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.sizes.radius,
    backgroundColor: '#EEEEEE',
    color: 'rgba(197,204,214,0.20)',
  },
});
