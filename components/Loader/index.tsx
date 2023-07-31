import { Flex, Heading, Spinner } from 'native-base';
import { SafeAreaView } from 'react-native';

export const Loader = () => (
  <SafeAreaView>
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
  </SafeAreaView>
);
