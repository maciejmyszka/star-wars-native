import { Box, Heading } from 'native-base';
import { VehiclesInfo } from '../VehiclesInfo';

export const VehiclesSection = ({ vehicles }) => {
  if (vehicles.length === 0) return null;
  return (
    <Box padding='5' style={{ gap: 10 }}>
      <Heading fontFamily='Starjedi'>Vehicles</Heading>
      {vehicles.map((vehicle) => (
        <VehiclesInfo
          key={vehicle}
          query={vehicle.replace('https://swapi.dev/api/vehicles/', '')}
        />
      ))}
    </Box>
  );
};
