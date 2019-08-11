import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Settings</Text>
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

export default SettingsScreen;
