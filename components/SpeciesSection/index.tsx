import { Box, Heading } from 'native-base';
import { SpeciesInfo } from '../SpeciesInfo';

export const SpeciesSection = ({ species }) => {
  if (species.length === 0) return null;
  return (
    <Box padding='5' style={{ gap: 10 }}>
      <Heading fontFamily='Starjedi'>Species</Heading>
      {species.map((specie) => (
        <SpeciesInfo
          key={specie}
          query={specie.replace('https://swapi.dev/api/species/', '')}
        />
      ))}
    </Box>
  );
};
