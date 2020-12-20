import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import Wellcom from '../screens/Wellcom';
import Login from '../screens/Login';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';
import Product from '../screens/Product';
import Forgot from '../screens/Forgot';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();
export default class index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Wellcom"
          screenOptions={{
            headerShown: true,
            headerTitle: null,
            headerLeft: () => (
              <HeaderBackButton
                onPress={(props) => this.props.navigation.goBack()}
              />
            ),
          }}>
          <Stack.Screen
            name="Wellcom"
            component={Wellcom}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Browse" component={Browse} />
          <Stack.Screen name="Explpre" component={Explore} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Forgot" component={Forgot} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
