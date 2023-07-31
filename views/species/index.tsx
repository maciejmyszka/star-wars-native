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
import { useGetAllSpeciesQuery } from '../../slices/speciesSlice';
import { useNavigation } from '@react-navigation/native';

export const Species = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [filteredSpecies, setFilteredSpecies] = useState([]);

  const { data, isLoading } = useGetAllSpeciesQuery(pageNumber);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (data) {
      setLoading(true);
      setSpecies([...species, ...data.results]);
      setFilteredSpecies([...species, ...data.results]);

      if (data.next) {
        setPageNumber(pageNumber + 1);
      } else {
        setLoading(false);
      }
    }
  }, [data]);

  const onChangeFilter = (e: string) => {
    if (e.length > 0) {
      const filtered = species.filter(({ name }) => name.includes(e));
      setValue(e);
      setFilteredSpecies(filtered);
    } else {
      setValue('');
      setFilteredSpecies(species);
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
                onPress={() => navigate('SpecieDetails', { specie: item })}
              >
                <Flex
                  flexDirection='row'
                  alignItems='center'
                  borderBottomWidth='1'
                  padding='5'
                  justifyContent='space-between'
                >
                  <Flex flexDirection='row' alignItems='center' gap={4}>
                    <Text fontFamily='Starjedi'>*</Text>
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
