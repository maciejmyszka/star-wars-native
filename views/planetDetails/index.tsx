import { SafeAreaView } from 'react-native';
import { ScrollView } from 'native-base';
import { useEffect, useRef } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { MoviesSection } from '../../components/MoviesSection';
import { PeopleSection } from '../../components/PeopleSection';
import { BasicInfoSection } from '../../components/BasicInfoSection';

export const PlanetDetails = ({ route }) => {
  const { planet } = route.params;

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
        <BasicInfoSection element={planet} />
        <MoviesSection movies={planet.films} />
        <PeopleSection people={planet.residents} />
      </ScrollView>

      <GoBackButton />
    </SafeAreaView>
  );
};
