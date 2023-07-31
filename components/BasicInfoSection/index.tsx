import { Box, Flex, Heading, Text } from 'native-base';
import { useGetSinglePlanetQuery } from '../../slices/planetsSlice';

export const BasicInfoSection = ({ element }) => {
  const { data } = useGetSinglePlanetQuery(
    element.homeworld.replace('https://swapi.dev/api/planets/', ''),
  );

  return (
    <Box padding={5}>
      <Heading fontFamily='Starjedi'>Basic info</Heading>

      <Flex style={{ gap: 10, marginTop: 10 }}>
        {Object.entries(element)
          .filter(
            (arr) =>
              arr[0] !== 'homeworld' &&
              arr[0] !== 'films' &&
              arr[0] !== 'vehicles' &&
              arr[0] !== 'starships' &&
              arr[0] !== 'species' &&
              arr[0] !== 'created' &&
              arr[0] !== 'edited' &&
              arr[0] !== 'url' &&
              arr[0] !== 'residents' &&
              arr[0] !== 'pilots' &&
              arr[0] !== 'people',
          )
          .map((arr) => (
            <Box
              key={arr[0]}
              padding='5'
              style={{
                flexWrap: 'wrap',
                padding: 20,
                backgroundColor: '#000',
                borderRadius: 10,
                flexDirection: 'row',
              }}
            >
              {typeof arr[1] === 'string' ? (
                <Text color='#fff' fontFamily='Starjedi'>
                  {arr[0].replace('_', ' ')}: {arr[1]}
                </Text>
              ) : (
                <Text color='#fff' fontFamily='Starjedi'>
                  {arr[0].replace('_', ' ')}: {arr[1].join(', ')}
                </Text>
              )}
            </Box>
          ))}
        {element?.homeworld && (
          <Box
            padding='5'
            style={{
              padding: 20,
              backgroundColor: '#000',
              borderRadius: 10,
            }}
          >
            <Text style={{ color: '#fff' }} fontFamily='Starjedi'>
              homeworld: {data?.name}
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};
