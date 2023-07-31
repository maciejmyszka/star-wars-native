import {
  Avatar,
  ChevronRightIcon,
  FlatList,
  Flex,
  Pressable,
  Text,
} from 'native-base';
import { useGetAllPeopleQuery } from '../../slices/peopleSlice';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getShourcut } from '../../utils/getShourcut';
import { Loader } from '../../components/Loader';
import { FilterSection } from '../../components/FilterSection';

export const People = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  const { data, isLoading } = useGetAllPeopleQuery(pageNumber);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (data) {
      setLoading(true);
      setPeople([...people, ...data.results]);
      setFilteredPeople([...people, ...data.results]);

      if (data.next) {
        setPageNumber(pageNumber + 1);
      } else {
        setLoading(false);
      }
    }
  }, [data]);

  const onChangeFilter = (e: string) => {
    if (e.length > 0) {
      const filtered = people.filter(({ name }) => name.includes(e));
      setValue(e);
      setFilteredPeople(filtered);
    } else {
      setValue('');
      setFilteredPeople(people);
    }
  };

  if (isLoading || loading) return <Loader />;
  return (
    <SafeAreaView>
      <FilterSection value={value} onChangeText={onChangeFilter} />

      <FlatList
        data={filteredPeople}
        renderItem={({ item }) => (
          <Pressable
            key={item.url}
            onPress={() => navigate('PersonDetails', { person: item })}
          >
            <Flex
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              borderBottomWidth='1'
              borderColor='#000'
              padding='3'
            >
              <Flex flexDirection='row' alignItems='center' gap={4}>
                <Avatar bg='#000'>{getShourcut(item.name)}</Avatar>
                <Text color='#000' fontFamily='Starjedi'>
                  {item.name}
                </Text>
              </Flex>
              <ChevronRightIcon style={{ color: '#000' }} />
            </Flex>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
