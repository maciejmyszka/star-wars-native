import { Box, Heading } from 'native-base';
import { PeopleInfo } from '../PeopleInfo';

export const PeopleSection = ({ people }) => {
  if (people.length === 0) return null;
  return (
    <Box padding='5' style={{ gap: 10 }}>
      <Heading style={{ fontFamily: 'Starjedi' }}>Characters</Heading>
      {people.map((person) => (
        <PeopleInfo
          key={person}
          query={person.replace('https://swapi.dev/api/people/', '')}
        />
      ))}
    </Box>
  );
};
