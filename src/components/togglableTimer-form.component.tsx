import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button as ToggleButton } from './buttons.component';
import { TimerForm } from './timer-form.component';

export const TogglableTimerForm = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleFormToggle = (): void => setOpen((prev) => !prev);

  return (
    <View style={styles.container}>
      {!isOpen ? (
        <ToggleButton onPress={handleFormToggle} />
      ) : (
        <TimerForm onCancel={handleFormToggle} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
