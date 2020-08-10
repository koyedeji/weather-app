import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface InfoCardProps {
  message: string;
}

export const InfoCard = ({ message }: InfoCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    fontSize: 20,
    color: 'white',
  },
});
