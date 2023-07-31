import { Box, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const GoBackButton = () => {
  const { goBack } = useNavigation();

  return (
    <Box>
      <Button
        size='20'
        width='100%'
        borderRadius='0'
        onPress={() => goBack()}
        backgroundColor='#000'
        display='flex'
        alignItems='start'
      >
        <Text
          marginTop='5'
          style={{ color: '#fff', fontFamily: 'Starjedi', fontSize: 20 }}
        >
          Go back
        </Text>
      </Button>
    </Box>
  );
};
