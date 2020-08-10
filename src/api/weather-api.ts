const BASE_URL = 'https://www.metaweather.com/api';

export const getLocationId = async (query: string): Promise<string> => {
  const response = await fetch(`${BASE_URL}/location/search/?query=${query}`);
  const locations = await response.json();
  return locations[0].woeid as string;
};

export const getWeather = async (
  locationId: string
): Promise<{ weather: string; temperature: string; location: string }> => {
  const response = await fetch(`${BASE_URL}/location/${locationId}/`);
  const { consolidated_weather, title } = await response.json();
  const { the_temp, weather_state_name } = consolidated_weather[0];
  return {
    weather: weather_state_name,
    temperature: the_temp,
    location: title,
  };
};
