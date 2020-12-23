import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const {profile} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header__title}> Settings </Text>
          {profile.map((profile) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Settings');
              }}>
              <Image style={styles.header__avatar} source={profile.avatar} />
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  header__avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
