import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import HeatScreen from './screens/HeatScreen';
import CondensationScreen from './screens/CondensationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitleAlign: 'center',title: <Image source={require('./assets/logo_img_sm.jpg')} 
          style={{width: 150, height: 30, }} />}}
        />
        <Stack.Screen
          name="Heat"
          component={HeatScreen}
          options={{title: <Image source={require('./assets/logo_img_sm.jpg')} 
          style={{width: 150, height: 30}} />}}
        />
        <Stack.Screen
          name="Condensation"
          component={CondensationScreen}
          options={{title: <Image source={require('./assets/logo_img_sm.jpg')} 
          style={{width: 150, height: 30}} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}