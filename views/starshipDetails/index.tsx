import { SafeAreaView } from 'react-native';
import { ScrollView } from 'native-base';
import { useEffect, useRef } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { MoviesSection } from '../../components/MoviesSection';
import { PeopleSection } from '../../components/PeopleSection';
import { BasicInfoSection } from '../../components/BasicInfoSection';

export const StarshipDetails = ({ route }) => {
  const { starship } = route.params;

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
  }, [route]);

  return (
    <SafeAreaView>
      <ScrollView height='95%' ref={scrollRef}>
        <BasicInfoSection element={starship} />
        <MoviesSection movies={starship.films} />
        <PeopleSection people={starship.pilots} />
      </ScrollView>

      <GoBackButton />
    </SafeAreaView>
  );
};
