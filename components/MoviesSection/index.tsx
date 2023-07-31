import { Box, Heading } from 'native-base';
import { MoviesInfo } from '../MoviesInfo';

export const MoviesSection = ({ movies }) => {
  if (movies.length === 0) return null;
  return (
    <Box padding='5' style={{ gap: 10 }}>
      <Heading fontFamily='Starjedi'>Movies</Heading>
      {movies.map((movie) => (
        <MoviesInfo
          key={movie}
          query={movie.replace('https://swapi.dev/api/films/', '')}
        />
      ))}
    </Box>
  );
};
