import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center'
  }
});

export default Login;
