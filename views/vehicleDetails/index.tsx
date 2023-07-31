import { ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native';
import { useEffect, useRef } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { MoviesSection } from '../../components/MoviesSection';
import { PeopleSection } from '../../components/PeopleSection';
import { BasicInfoSection } from '../../components/BasicInfoSection';

export const VehicleDetails = ({ route }) => {
  const { vehicle } = route.params;

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
        <BasicInfoSection element={vehicle} />
        <MoviesSection movies={vehicle.films} />
        <PeopleSection people={vehicle.pilots} />
      </ScrollView>

      <GoBackButton />
    </SafeAreaView>
  );
};
