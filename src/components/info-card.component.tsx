import React, { useRef, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface InfoCardProps {
  message: string;
  delay?: number;
  action?: () => void;
}

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

export const InfoCard = ({
  message,
  action,
  delay = 5000,
}: InfoCardProps): JSX.Element => {
  const timerID = useRef<number>();

  const countDownCb = useCallback(() => {
    if (action) {
      timerID.current = setTimeout(action, delay);
    }
  }, [action, delay]);

  useEffect(() => {
    countDownCb();

    return () => {
      clearTimeout(timerID.current);
    };
  }, [message, countDownCb]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};
