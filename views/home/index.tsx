import { Text } from 'native-base';
import { HomeItems } from '../../components/HomeItems';
import { HomeContainer } from '../../containers/HomeContainer';

export const Home = () => (
  <HomeContainer>
    <Text
      fontFamily='Starjedi'
      fontSize={45}
      style={{ color: 'yellow' }}
      marginBottom='-5'
      color='yellow'
    >
      Star Wars
    </Text>
    <Text
      fontFamily='Starjedi'
      fontSize={40}
      style={{ color: 'yellow' }}
      marginBottom='5'
    >
      Library
    </Text>

    <HomeItems />
  </HomeContainer>
);
