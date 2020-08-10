/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return images[weather] || images['Hail'];
};
