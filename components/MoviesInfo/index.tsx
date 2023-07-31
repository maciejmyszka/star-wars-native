import {
  ChevronDownIcon,
  ChevronUpIcon,
  Flex,
  Heading,
  HStack,
  Pressable,
  Spinner,
  Text,
} from 'native-base';
import { useGetSingleMovieQuery } from '../../slices/moviesSlice';
import { useState } from 'react';

export const MoviesInfo = ({ query }) => {
  const { data, isLoading } = useGetSingleMovieQuery(query);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        flexWrap: 'wrap',
        padding: 20,
        backgroundColor: '#000',
        borderRadius: 10,
      }}
    >
      <Pressable
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        onPress={() => setIsOpen((prevValue) => !prevValue)}
      >
        <Text style={{ color: '#fff' }} fontFamily='Starjedi'>
          Star Wars: {data?.title}
        </Text>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Pressable>

      {isOpen && (
        <Text style={{ marginTop: 30, color: '#fff' }} fontFamily='Starjedi'>
          {data?.opening_crawl}
        </Text>
      )}
    </Flex>
  );
};
