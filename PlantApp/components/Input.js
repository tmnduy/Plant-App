import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleSecure: false,
    };
  }

  renderLabel() {
    const {label, error} = this.props;

    return (
      <View style={{flex: 1}}>
        {label ? (
          <Text style={{color: error ? 'red' : 'gray'}}>{label}</Text>
        ) : null}
      </View>
    );
  }

  renderToggle() {
    const {secure, rightLabel} = this.props;
    const {toggleSecure} = this.state;

    if (!secure) return null;

    return (
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => this.setState({toggleSecure: !toggleSecure})}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color="gray"
            size={20}
            name={!toggleSecure ? 'eye' : 'eye-slash'}
          />
        )}
      </TouchableOpacity>
    );
  }

  renderRight() {
    const {rightLabel, rightStyle, onRightPress} = this.props;

    if (!rightLabel) return null;

    return (
      <TouchableOpacity
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </TouchableOpacity>
    );
  }

  render() {
    const {email, phone, number, secure, error, style, ...props} = this.props;

    const {toggleSecure} = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && {borderColor: '#F3534A'},
      style,
    ];

    const inputType = email
      ? 'email-address'
      : number
      ? 'numeric'
      : phone
      ? 'phone-pad'
      : 'default';

    return (
      <View style={{margin: 16}}>
        {this.renderLabel()}
        <TextInput
          style={(inputStyles, styles.input)}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
        {this.renderToggle()}
        {this.renderRight()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    height: 48,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: 32,
    height: 32,
    top: 16,
    right: 0,
  },
});
