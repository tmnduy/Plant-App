import React, {Component} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {
  Animated,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {theme} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFocus: new Animated.Value(0.6),
      searchString: null,
    };
  }

  handleSearchFocus(status) {
    Animated.timing(this.state.searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
    }).start();
  }

  renderSearch() {
    const {searchString, searchFocus} = this.state;
    const isEditing = searchFocus && searchString;
    return (
      <View animated middle style={styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={theme.colors.gray2}
          style={styles.searchInput}
          onFocus={() => this.handleSearchFocus(true)}
          onBlur={() => this.handleSearchFocus(false)}
          onChangeText={(text) => this.setState({searchString: text})}
          value={searchString}
          onRightPress={() =>
            isEditing ? this.setState({searchString: null}) : null
          }
          rightStyle={styles.searchRight}
          rightLabel={
            <Icon
              name={isEditing ? 'close' : 'search'}
              size={16 / 1.6}
              color="gray"
              style={styles.searchIcon}
            />
          }
        />
      </View>
    );
  }

  renderImage(img, index) {
    const {navigation} = this.props;
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - theme.sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 60 ? fullWidth : sizes.width * 1;

    return (
      <TouchableOpacity
        key={`img-${index}`}
        onPress={() => navigation.navigate('Product')}>
        <Image
          source={img}
          style={[styles.image, {minWidth: imgWidth, maxWidth: imgWidth}]}
        />
      </TouchableOpacity>
    );
  }

  renderExplore() {
    const {navigation, explore} = this.props;
    const mainImage = explore[0];

    return (
      <View style={{marginBottom: height / 3}}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          onPress={() => navigation.navigate('Product')}>
          <Image source={mainImage} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          {explore.slice(1).map((img, index) => this.renderImage(img, index))}
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <LinearGradient
        style={styles.footer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#10B2AC', '#15BA9F', '#25C77C']}>
        <TouchableOpacity style={styles.footer__Touchable}>
          <Text style={styles.footer__Text}>Filter</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.header_Text}>Explore</Text>
          {this.renderSearch()}
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
          {this.renderExplore()}
        </ScrollView>

        {this.renderFooter()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {explore: state.explore};
};

export default connect(mapStateToProps)(Explore);

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2,
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: 'rgba(142, 142, 147, 0.06)',
    borderColor: 'rgba(142, 142, 147, 0.06)',
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    position: 'absolute',
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6,
  },
  explore: {
    marginHorizontal: theme.sizes.padding * 1.25,
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - theme.sizes.padding * 2.5,
    marginBottom: theme.sizes.base,
    borderRadius: 4,
  },
  mainImage: {
    minWidth: width - theme.sizes.padding * 2.5,
    minHeight: width - theme.sizes.padding * 2.5,
  },
  footer: {
    width: width / 2.678,
    height: height / 15,
    position: 'absolute',
    bottom: 30,
    left: '30%',
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  footer__Touchable: {
    width: width / 2.678,
    height: height / 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer__Text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  header_Text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
