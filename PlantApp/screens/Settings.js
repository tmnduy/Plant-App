import React, {Component} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {connect} from 'react-redux';
class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgets: 2000,
      monthly: 1700,
      notifications: true,
      newsletter: false,
      editName: false,
      editLocation: false,
      textName: '',
      textLocation: '',
    };
  }
  renderEdit = (edit, name) => {
    const {profile} = this.props;
    const {username, location} = this.props.profile;
    if (edit) {
      return (
        <View style={styles.open_Edit}>
          <TextInput
            style={styles.edit__TextInput}
            placeholder={name}
            onChangeText={(text) => {
              if (name === 'User Name') {
                this.state.textName = text;
              }
              if (name === 'Location') {
                this.state.textLocation = text;
              }
            }}
          />
          <View style={styles.edit__Button}>
            <Button
              title="Save"
              onPress={() => {
                Alert.alert(
                  `Edit ${name}`,
                  `Edit ${name} success`,
                  [
                    {
                      text: 'OK',
                      onPress: () => {
                        if (name === 'User Name') {
                          this.setState({editName: false});
                          this.state.textName.length === 0
                            ? profile.username
                            : (profile.username = this.state.textName);
                          this.setState({username});
                        }
                        if (name === 'Location') {
                          this.setState({editLocation: false});
                          this.state.textLocation.length === 0
                            ? profile.location
                            : (profile.location = this.state.textLocation);
                          this.setState({location});
                        }
                      },
                    },
                  ],
                  {
                    cancelable: false,
                  },
                );
              }}
            />
            <Button
              title="Cancel"
              onPress={() => {
                if (name === 'User Name') {
                  this.setState({editName: false});
                }
                if (name === 'Location') {
                  this.setState({editLocation: false});
                }
              }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.close_Edit}>
          <TouchableOpacity
            onPress={() => {
              if (name === 'User Name') {
                this.setState({editName: true});
              }
              if (name === 'Location') {
                this.setState({editLocation: true});
              }
            }}>
            <Text style={styles.text_TouchableOpacity}>Edit</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    const {profile} = this.props;
    const {notification, newletter} = this.props.profile;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerSettings}>
            <Text style={styles.headerSettings__Title}> Settings </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Settings');
              }}>
              <Image
                style={styles.headerSettings__Avatar}
                source={profile.avatar}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.Info}>
            <Text style={styles.Info__Title}> UserName</Text>
            <View style={styles.Info__Content}>
              <Text style={styles.Info__Content__Text}>{profile.username}</Text>
              <View style={styles.Info__Content__Edit}>
                {this.renderEdit(this.state.editName, 'User Name')}
              </View>
            </View>
          </View>
          <View style={styles.Info}>
            <Text style={styles.Info__Title}> Location</Text>
            <View style={styles.Info__Content}>
              <Text style={styles.Info__Content__Text}>{profile.location}</Text>
              <View style={styles.Info__Content__Edit}>
                {this.renderEdit(this.state.editLocation, 'Location')}
              </View>
            </View>
          </View>
          <View style={styles.Info}>
            <Text style={styles.Info__Title}> E-mail</Text>
            <View style={styles.Info__Content}>
              <Text style={styles.Info__Content__Text}>{profile.email}</Text>
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.slider__Title}>Budget</Text>
            <Slider
              style={styles.slider}
              step={50}
              minimumValue={200}
              maximumValue={profile.budget}
              minimumTrackTintColor="#2BDA8E"
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={this.state.budgets}
              thumbTintColor="#2BDA8E"
              onValueChange={(value) => {
                this.setState({budgets: value});
              }}
            />
            <Text style={styles.slider__Text}> $ {this.state.budgets}</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.slider__Title}>Monthly Cap</Text>
            <Slider
              style={styles.slider}
              step={100}
              minimumValue={200}
              maximumValue={profile.monthly_cap}
              minimumTrackTintColor="#2BDA8E"
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={this.state.monthly}
              thumbTintColor="#2BDA8E"
              onValueChange={(value) => {
                this.setState({monthly: value});
              }}
            />
            <Text style={styles.slider__Text}> $ {this.state.monthly}</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchContainer__Title}>Notification</Text>
            <Switch
              style={styles.switchContainer__Switch}
              trackColor={{false: '#C0C0C0', true: '#2BDA8E'}}
              thumbColor="#ffffff"
              ios_backgroundColor="#3e3e3e"
              value={this.state.notifications}
              onValueChange={(value) => {
                this.setState({notifications: value});
                profile.notification = this.state.notifications;
                this.setState({notification});
              }}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchContainer__Title}>Newsletter</Text>
            <Switch
              style={styles.switchContainer__Switch}
              trackColor={{false: '#C0C0C0', true: '#2BDA8E'}}
              thumbColor="#ffffff"
              ios_backgroundColor="#3e3e3e"
              value={this.state.newsletter}
              onValueChange={(value) => {
                this.setState({newsletter: value});
                profile.newletter = this.state.newsletter;
                this.setState({newletter});
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {profile: state.profile};
};

export default connect(mapStateToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Style Header

  headerSettings: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSettings__Title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  headerSettings__Avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  // Style Info

  Info: {
    marginHorizontal: 30,
    marginVertical: 10,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  Info__Title: {
    color: 'gray',
    fontSize: 17,
  },
  Info__Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Info__Content__Text: {
    fontSize: 20,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  Info__Content__Edit: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  // Style Text TouchableOpacity

  text_TouchableOpacity: {
    fontSize: 20,
    color: '#2BDA8E',
    textAlign: 'right',
  },

  // Style Slider

  slider: {
    height: 20,
    marginHorizontal: 20,
  },
  slider__Text: {
    textAlign: 'right',
    marginRight: '5%',
    fontSize: 20,
    color: 'gray',
    letterSpacing: 0.5,
  },
  slider__Title: {
    marginHorizontal: 30,
    paddingBottom: 20,
    fontSize: 20,
    color: 'gray',
  },

  // Style SwitchContainer

  switchContainer__Title: {
    fontSize: 18,
    letterSpacing: 0.2,
  },
  switchContainer__Switch: {
    marginTop: -20,
  },
  switchContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: 'space-between',
  },

  // Style Edit

  edit__TextInput: {
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 6,
    paddingLeft: 10,
  },
  edit__Button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  open_Edit: {
    flex: 1,
  },
});
