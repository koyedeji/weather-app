import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';

interface weatherDetailProps {
  location: string;
  weather: string;
  temperature: string;
}

export const WeatherDetails = ({
  location,
  weather,
  temperature,
}: weatherDetailProps): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
      <View
        style={{
          ...styles.container,
          flexDirection: 'row',
        }}
      >
        <Text style={[styles.textStyle, styles.largeText]}>{`${Math.round(
          Number(temperature)
        )}°`}</Text>
        <Text style={[styles.textStyle, styles.smallText]}>{weather}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },

  smallText: {
    fontSize: 24,
  },
  largeText: {
    fontSize: 40,
    marginRight: 10,
  },
});
