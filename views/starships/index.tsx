import {
  ChevronRightIcon,
  FlatList,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Pressable,
  SearchIcon,
  Spinner,
  Text,
  View,
} from 'native-base';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useGetAllStarshipsQuery } from '../../slices/starshipsSlice';
import { useNavigation } from '@react-navigation/native';

export const Starships = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [filteredSpecies, setFilteredSpecies] = useState([]);

  const { data, isLoading } = useGetAllStarshipsQuery(pageNumber);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (data) {
      setLoading(true);
      setStarships([...starships, ...data.results]);
      setFilteredSpecies([...starships, ...data.results]);

      if (data.next) {
        setPageNumber(pageNumber + 1);
      } else {
        setLoading(false);
      }
    }
  }, [data]);

  const onChangeFilter = (e: string) => {
    if (e.length > 0) {
      const filtered = starships.filter(({ name }) => name.includes(e));
      setValue(e);
      setFilteredSpecies(filtered);
    } else {
      setValue('');
      setFilteredSpecies(starships);
    }
  };

  return (
    <SafeAreaView>
      {isLoading || loading ? (
        <Flex
          width='100%'
          height='100%'
          alignItems='center'
          justifyContent='center'
        >
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
        </Flex>
      ) : (
        <>
          <View borderBottomWidth='1' borderColor='#000'>
            <InputGroup height={41} marginX={3} marginY={3} borderRadius={20}>
              <InputLeftAddon
                children={<SearchIcon />}
                backgroundColor='#fff'
                width='12%'
                borderColor='transparent'
              />
              <Input
                placeholder='Search...'
                width='88%'
                borderColor='transparent'
                backgroundColor='#fff'
                value={value}
                onChangeText={(text) => onChangeFilter(text)}
                clearButtonMode='always'
              />
            </InputGroup>
          </View>

          <FlatList
            data={filteredSpecies}
            renderItem={({ item }) => (
              <Pressable
                key={item.url}
                onPress={() => navigate('StarshipDetails', { starship: item })}
              >
                <Flex
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                  borderBottomWidth='1'
                  padding='5'
                >
                  <Flex flexDirection='row' alignItems='center' gap={4}>
                    <Text fontFamily='Starjedi'>^</Text>
                    <Text fontFamily='Starjedi'>{item.name}</Text>
                  </Flex>
                  <ChevronRightIcon style={{ color: '#000' }} />
                </Flex>
              </Pressable>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};
