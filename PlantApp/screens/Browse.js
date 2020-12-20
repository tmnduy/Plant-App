import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Browse extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header__ttile}> Browse </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Settings');
            }}>
            <Image
              style={styles.header__avatar}
              source={require('../assets/images/avatar.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  header: {
    flex: 0.1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__ttile: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header__avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
