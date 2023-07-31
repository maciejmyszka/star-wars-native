import { Flex, Pressable, Text } from 'native-base';
import { menuItems } from '../../data/menuItems';
import { useNavigation } from '@react-navigation/native';

export const HomeItems = () => {
  const { navigate } = useNavigation();

  return (
    <Flex
      width='100%'
      flexWrap='wrap'
      flexDirection='row'
      justifyContent='center'
      gap={3}
    >
      {menuItems.map(({ id, name, to }) => (
        <Pressable
          key={id}
          onPress={() => navigate(to)}
          display='flex'
          border='1px solid #fff'
          style={{ backgroundColor: 'yellow' }}
          width='40%'
          justifyContent='center'
          paddingY={10}
          borderRadius={5}
        >
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Starjedi',
              fontSize: 18,
            }}
          >
            {name}
          </Text>
        </Pressable>
      ))}
    </Flex>
  );
};
