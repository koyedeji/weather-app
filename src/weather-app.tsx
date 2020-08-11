import React, { useEffect } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SearchInput, WeatherDetails, InfoCard } from './components';
import { useWeather } from './hooks/useWeather';
import { getWeatherImage } from './utils';

const Weather = (): JSX.Element => {
  const {
    isLoading,
    error,
    weather,
    temperature,
    location,
    handleLocationChange,
  } = useWeather();

  useEffect(() => {
    handleLocationChange('london');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    img: {
      flex: 1,
      resizeMode: 'cover',
    },
    imgContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    contentWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingBottom: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

  const hasError = !isLoading && error;

  return (
    <KeyboardAvoidingView behavior='height' style={[styles.container]}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        style={styles.imgContainer}
        imageStyle={[styles.img]}
        source={getWeatherImage(weather)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.contentWrapper]}>
            <ActivityIndicator
              animating={isLoading}
              color='white'
              size='large'
            />
            {hasError && (
              <InfoCard message="We can't find weather result for location. please enter another city" />
            )}

            {!error && (
              <WeatherDetails
                location={location}
                weather={weather}
                temperature={temperature}
              />
            )}
            <SearchInput
              placeholder='Search city'
              onSubmit={handleLocationChange}
            />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Weather;
