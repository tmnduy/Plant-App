import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/Input';

const VALID_EMAIL = 'plantapp@gmail.com';
const VALID_PASSWORD = 'plantapp';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userName: '',
      errors: [],
      loading: false,
    };
  }
  handleSignup = () => {
    const {navigation} = this.props;
    const {email, password, userName} = this.state;
    const errors = [];
    Keyboard.dismiss();
    this.setState({loading: true});

    // setTimeout(() => {
    if (email.length && password.length && userName.length) {
      Alert.alert(
        'Success',
        'Your account has been created',
        [
          {
            text: 'Continue',
            onPress: () => {
              navigation.navigate('Login');
              console.log(this.state);
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Error',
        'Please enter the full information',
        [{text: 'Try again'}],
        {cancelable: false},
      );
    }
    // }, 1000);
  };
  render() {
    const {loading, errors} = this.state;
    const hasErrors = (key) => {
      errors.includes(key) ? styles.hasErrors : null;
    };
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Signup </Text>
        <View style={styles.input}>
          <Input
            style={(styles.textInput, hasErrors('email'))}
            placeholder="Email"
            defaultValue={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
          />
          <Input
            style={(styles.textInput, hasErrors('userName'))}
            placeholder="UserName"
            defaultValue={this.state.userName}
            onChangeText={(text) => this.setState({userName: text})}
          />
          <Input
            secure
            style={(styles.textInput, hasErrors('password'))}
            placeholder="Password"
            defaultValue={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
          />
          <LinearGradient
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#10B2AC', '#15BA9F', '#25C77C']}>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => this.handleSignup()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginTop: -10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={{
                paddingTop: 10,
                color: 'gray',
                textDecorationLine: 'underline',
              }}>
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    padding: 25,
    fontSize: 34,
  },
  textInput: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: '#C5CCD6',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    paddingBottom: 200,
  },
  TouchableOpacity: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  linearGradient: {
    borderRadius: 5,
    width: '90%',
    marginLeft: '5%',
  },
  hasErrors: {
    borderBottomColor: 'red',
  },
});
