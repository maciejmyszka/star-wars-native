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
import { useGetAllVehiclesQuery } from '../../slices/vehiclesSlice';
import { useNavigation } from '@react-navigation/native';

export const Vehicles = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const { data, isLoading } = useGetAllVehiclesQuery(pageNumber);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (data) {
      setLoading(true);
      setVehicles([...vehicles, ...data.results]);
      setFilteredVehicles([...vehicles, ...data.results]);

      if (data.next) {
        setPageNumber(pageNumber + 1);
      } else {
        setLoading(false);
      }
    }
  }, [data]);

  const onChangeFilter = (e: string) => {
    if (e.length > 0) {
      const filtered = vehicles.filter(({ name }) => name.includes(e));
      setValue(e);
      setFilteredVehicles(filtered);
    } else {
      setValue('');
      setFilteredVehicles(vehicles);
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
            data={filteredVehicles}
            renderItem={({ item }) => (
              <Pressable
                key={item.url}
                onPress={() => navigate('VehicleDetails', { vehicle: item })}
              >
                <Flex
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                  borderBottomWidth='1'
                  padding='5'
                >
                  <Flex flexDirection='row' alignItems='center' gap={4}>
                    <Text fontFamily='Starjedi'>$</Text>
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
