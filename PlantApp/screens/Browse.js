import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Browse extends Component {
  render() {
    return (
      <View>
        <Text> Browse </Text>
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      </View>
    );
  }
}
