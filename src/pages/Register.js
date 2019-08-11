import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Register</Text>
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

export default Register;
