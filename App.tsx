import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, View } from 'react-native';
import WeatherApp from './src/weather-app';
import TimerApp from './src/timer-app';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <TimerApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
