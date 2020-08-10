import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TogglableTimerForm } from './components';

const TimerApp = () => {
  return (
    <SafeAreaView style={[styles.safeAreaStyle]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Timer</Text>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.container]}>
            <TogglableTimerForm />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },
  titleText: {
    fontSize: 20,
    fontWeight: Platform.OS == 'android' ? 'bold' : '600',
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

export default TimerApp;
