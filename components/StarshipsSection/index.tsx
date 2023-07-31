import { Box, Heading } from 'native-base';
import { StarshipsInfo } from '../StarshipsInfo';

export const StarshipsSection = ({ starships }) => {
  if (starships.length === 0) return null;
  return (
    <Box padding='5' style={{ gap: 10 }}>
      <Heading fontFamily='Starjedi'>Starships</Heading>
      {starships.map((starship) => (
        <StarshipsInfo
          key={starship}
          query={starship.replace('https://swapi.dev/api/starships/', '')}
        />
      ))}
    </Box>
  );
};
