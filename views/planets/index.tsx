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
import { useGetAllPlanetsQuery } from '../../slices/planetsSlice';
import { useNavigation } from '@react-navigation/native';

export const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const { data, isLoading } = useGetAllPlanetsQuery(pageNumber);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (data) {
      setLoading(true);
      setPlanets([...planets, ...data.results]);
      setFilteredPlanets([...planets, ...data.results]);

      if (data.next) {
        setPageNumber(pageNumber + 1);
      } else {
        setLoading(false);
      }
    }
  }, [data]);

  const onChangeFilter = (e: string) => {
    if (e.length > 0) {
      const filtered = planets.filter(({ name }) => name.includes(e));
      setValue(e);
      setFilteredPlanets(filtered);
    } else {
      setValue('');
      setFilteredPlanets(planets);
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
            data={filteredPlanets}
            renderItem={({ item }) => (
              <Pressable
                key={item.url}
                onPress={() => navigate('PlanetDetails', { planet: item })}
              >
                <Flex
                  borderBottomWidth='1'
                  padding='5'
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Flex
                    flexDirection='row'
                    gap={4}
                    alignItems='center'
                    padding={0}
                    margin={0}
                  >
                    <Text fontFamily='Starjedi'>#</Text>
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
