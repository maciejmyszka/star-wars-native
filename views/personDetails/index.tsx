import { ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native';
import { useEffect, useRef } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { VehiclesSection } from '../../components/VehiclesSection';
import { SpeciesSection } from '../../components/SpeciesSection';
import { StarshipsSection } from '../../components/StarshipsSection';
import { MoviesSection } from '../../components/MoviesSection';
import { BasicInfoSection } from '../../components/BasicInfoSection';

export const PersonDetails = ({ route }) => {
  const { person } = route.params;
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
        <BasicInfoSection element={person} />
        <MoviesSection movies={person.films} />
        <StarshipsSection starships={person.starships} />
        <VehiclesSection vehicles={person.vehicles} />
        <SpeciesSection species={person.species} />
      </ScrollView>

      <GoBackButton />
    </SafeAreaView>
  );
};
