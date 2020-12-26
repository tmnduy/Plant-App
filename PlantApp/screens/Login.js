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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: [],
      loading: false,
    };
  }
  handleLogin = () => {
    const {navigation} = this.props;
    const {email, password} = this.state;
    const errors = [];
    Keyboard.dismiss();
    this.setState({loading: true});

    setTimeout(() => {
      if (email != VALID_EMAIL) {
        errors.push('email');
      }
      if (password != VALID_PASSWORD) {
        errors.push('password');
      }
      if (!errors.length) {
        this.setState({errors, loading: false});
        Alert.alert(
          'Error',
          'Your Email or Password fail',
          [{text: 'Try again'}],
          {cancelable: false},
        );
      } else {
        this.setState({loading: false});
        navigation.navigate('Browse');
      }
    }, 1000);
  };

  render() {
    const {loading, errors} = this.state;
    const hasErrors = (key) => {
      errors.includes(key) ? styles.hasErrors : null;
    };
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Login </Text>
        <View style={styles.input}>
          <Input
            style={(styles.textInput, hasErrors('email'))}
            placeholder="Email"
            defaultValue={VALID_EMAIL}
            onChangeText={(text) => this.setState({email: text})}
          />
          <Input
            secure
            style={[styles.textInput, hasErrors('password')]}
            defaultValue={VALID_PASSWORD}
            placeholder="Passwords"
            onChangeText={(text) => this.setState({password: text})}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <LinearGradient
              style={styles.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#10B2AC', '#15BA9F', '#25C77C']}>
              <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => this.handleLogin()}>
                {loading ? (
                  <ActivityIndicator size="small" colors="white" />
                ) : (
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      marginTop: -10,
                      fontWeight: 'bold',
                      letterSpacing: 1,
                    }}>
                    Login
                  </Text>
                )}
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text
                style={{
                  paddingTop: 10,
                  color: 'gray',
                  textDecorationLine: 'underline',
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
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
  },
  hasErrors: {
    borderBottomColor: 'red',
  },
});
