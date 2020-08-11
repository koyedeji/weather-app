import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherApp from './src/weather-app';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <WeatherApp />
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
