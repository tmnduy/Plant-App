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
import {connect} from 'react-redux';

import {theme, mocks} from '../constants';

const {width, height} = Dimensions.get('window');

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    };
  }

  renderImg = (edit) => {
    const {product} = this.props;
    if (edit) {
      return product.gallery
        .slice(3)
        .map((image, index) => (
          <Image key={`gallery-${index}`} source={image} style={styles.image} />
        ));
    } else {
      return (
        <Text style={{marginTop: theme.sizes.base}} gray>
          +{product.gallery.slice(3).length}
        </Text>
      );
    }
  };

  renderGallery() {
    const {product} = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.gallery}
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
    const {product} = this.props;

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
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: 10,
                }}>
                {product.gallery.slice(1, 3).map((image, index) => (
                  <Image
                    key={`gallery-${index}`}
                    source={image}
                    style={styles.image}
                  />
                ))}
                <TouchableOpacity onPress={() => this.setState({edit: true})}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    {this.renderImg(this.state.edit)}
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

const mapStateToProps = (state) => {
  return {product: state.product};
};

export default connect(mapStateToProps)(Product);

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
    width: width / 3,
    height: width / 3,
    marginRight: theme.sizes.base,
    marginTop: theme.sizes.base,
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
