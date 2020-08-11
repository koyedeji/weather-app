import { useState, useCallback } from 'react';

import * as API from '../api/weather-api';

interface WeatherState {
  isLoading: boolean;
  error: boolean;
  weather: string;
  temperature: string;
  location: string;
  handleLocationChange: (term: string) => void;
}

export const useWeather = (): WeatherState => {
  const [state, setState] = useState<
    Omit<WeatherState, 'handleLocationChange'>
  >({
    isLoading: false,
    error: false,
    weather: '',
    temperature: '',
    location: '',
  });

  const handleLocationChange = useCallback(async (term) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const locationId = await API.getLocationId(term);

      const data = await API.getWeather(locationId);
      setState((prev) => ({
        ...prev,
        ...data,
        error: false,
        isLoading: false,
      }));
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false, error: true }));
    }
  }, []);

  return {
    ...state,
    handleLocationChange,
  } as const;
};
