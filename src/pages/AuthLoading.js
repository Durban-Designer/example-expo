import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  textStyle: {
    marginTop: 400,
    textAlign: 'center'
  }
});

export default AuthLoading;
