interface ImagesProps {
  Clear: string;
  Hail: string;
  'Heavy Cloud': string;
  'Light Cloud': string;
  'Heavy Rain': string;
  'Light Rain': string;
  Showers: string;
  Sleet: string;
  Snow: string;
  Thunder: string;
}

const images: any = {
  Clear: require('../../assets/clear.png'),
  Hail: require('../../assets/hail.png'),
  'Heavy Cloud': require('../../assets/heavy-cloud.png'),
  'Light Cloud': require('../../assets/light-cloud.png'),
  'Heavy Rain': require('../../assets/heavy-rain.png'),
  'Light Rain': require('../../assets/light-rain.png'),
  Showers: require('../../assets/showers.png'),
  Sleet: require('../../assets/sleet.png'),
  Snow: require('../../assets/snow.png'),
  Thunder: require('../../assets/thunder.png'),
};

export const getWeatherImage = (weather: string): number => {
  return images[weather] || images.Hail;
};
