import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './routes/routes';
import { Provider } from 'react-redux';
import { store } from './config/store';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Starjedi: require('./assets/fonts/Starjedi.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
