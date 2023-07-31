import { Button, Flex, Heading, HStack, Spinner, Text } from 'native-base';
import { useGetSingleStarshipQuery } from '../../slices/starshipsSlice';
import { useNavigation } from '@react-navigation/native';

export const StarshipsInfo = ({ query }) => {
  const { data, isLoading } = useGetSingleStarshipQuery(query);
  const { navigate } = useNavigation();

  if (isLoading)
    return (
      <HStack space={2} justifyContent='center'>
        <Spinner accessibilityLabel='Loading posts' color='#000' />
        <Heading
          color='#000'
          fontSize='md'
          style={{
            fontFamily: 'Starjedi',
          }}
        >
          Loading
        </Heading>
      </HStack>
    );

  return (
    <Flex
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 20,
        backgroundColor: '#000',
        borderRadius: 10,
      }}
    >
      <Text style={{ color: '#fff' }} fontFamily='Starjedi'>
        {data.name}
      </Text>

      <Button
        onPress={() =>
          navigate('StarshipDetails', {
            starship: data,
          })
        }
        style={{ backgroundColor: 'yellow' }}
      >
        <Text style={{ color: '#000' }} fontFamily='Starjedi'>
          Show more
        </Text>
      </Button>
    </Flex>
  );
};
