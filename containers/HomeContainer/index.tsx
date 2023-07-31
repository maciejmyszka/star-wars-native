import { Flex } from 'native-base';

export const HomeContainer = ({ children }) => (
  <Flex
    width='100%'
    height='100%'
    justifyContent='center'
    alignItems='center'
    backgroundColor='#000'
  >
    {children}
  </Flex>
);
