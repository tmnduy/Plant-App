import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        username: 'Haley',
        location: 'West',
        email: 'contact@assa.com',
        avatar: require('../assets/images/avatar.jpg'),
        budget: 800,
        monthly_cap: 2000,
        notification: true,
        newletter: false,
      },
      budgets: 850,
      monthly: 1700,
      notifications: true,
      newsletter: false,
      editing: null,
    };
  }
  handleSwitch = () => {
    this.setState({notification: !this.state.notification});
  };

  render() {
    const {profile} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header__title}> Settings </Text>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Settings');
              }}>
              <Image style={styles.header__avatar} source={profile.avatar} />
            </TouchableOpacity>
          </View>
          <View style={styles.fomat}>
            <Text style={{color: 'gray', fontSize: 17}}> UserName</Text>
            <View flexDirection="row" justifyContent="space-between">
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                  paddingHorizontal: 5,
                }}>
                {profile.username}
              </Text>
              <TouchableOpacity>
                <Text style={styles.touchableEdit__text}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fomat}>
            <Text style={{color: 'gray', fontSize: 17}}> Location</Text>
            <View flexDirection="row" justifyContent="space-between">
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                  paddingHorizontal: 5,
                }}>
                {profile.location}
              </Text>
              <TouchableOpacity>
                <Text style={styles.touchableEdit__text}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fomat}>
            <Text style={{color: 'gray', fontSize: 17}}> E-mail</Text>
            <View flexDirection="row" justifyContent="space-between">
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                  paddingHorizontal: 5,
                }}>
                {profile.email}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.titleSlider}>Budget</Text>
            <Slider
              style={{height: 20, marginHorizontal: 20}}
              step={50}
              minimumValue={200}
              maximumValue={2000}
              minimumTrackTintColor="#2BDA8E"
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={profile.budget}
              thumbTintColor="#2BDA8E"
              onValueChange={(value) => {
                this.setState({budgets: value});
              }}
            />
            <Text style={styles.textSlider}> $ {this.state.budgets}</Text>
          </View>
          <View>
            <Text style={styles.titleSlider}>Monthly Cap</Text>
            <Slider
              style={{height: 20, marginHorizontal: 20}}
              step={100}
              minimumValue={200}
              maximumValue={5000}
              minimumTrackTintColor="#2BDA8E"
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={profile.monthly_cap}
              thumbTintColor="#2BDA8E"
              onValueChange={(value) => {
                this.setState({monthly: value});
              }}
            />
            <Text style={styles.textSlider}> $ {this.state.monthly}</Text>
          </View>
          <View
            justifyContent="space-between"
            style={{marginHorizontal: 30, marginVertical: 20}}>
            <Text style={styles.titleSwitch}>Notification</Text>
            <Switch
              style={{marginTop: -20}}
              trackColor={{false: '#C0C0C0', true: '#2BDA8E'}}
              thumbColor="#ffffff"
              ios_backgroundColor="#3e3e3e"
              value={this.state.notifications}
              onValueChange={(value) => this.setState({notifications: value})}
            />
          </View>
          <View justifyContent="space-between" style={{marginHorizontal: 30}}>
            <Text style={styles.titleSwitch}>Newsletter</Text>
            <Switch
              style={{marginTop: -20}}
              trackColor={{false: '#C0C0C0', true: '#2BDA8E'}}
              thumbColor="#ffffff"
              ios_backgroundColor="#3e3e3e"
              value={this.state.newletter}
              onValueChange={(value) => this.setState({newletter: value})}
            />
          </View>
        </View>
      </ScrollView>
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
  fomat: {
    marginHorizontal: 30,
    marginVertical: 10,
    textAlign: 'left',
  },
  touchableEdit__text: {
    fontSize: 20,
    color: '#2BDA8E',
  },
  textSlider: {
    textAlign: 'right',
    marginRight: '5%',
    fontSize: 20,
    color: 'gray',
    letterSpacing: 0.5,
  },
  titleSlider: {
    marginHorizontal: 30,
    paddingBottom: 20,
    fontSize: 20,
    color: 'gray',
  },
  titleSwitch: {
    fontSize: 18,
    letterSpacing: 0.2,
  },
});
