import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SpeedometerGauge from 'react-native-speedometer-gauge';

export default class App extends Component {
  render() {
    return (
      <View style={styles.App}>
        <SpeedometerGauge size={300} width={70} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
});
