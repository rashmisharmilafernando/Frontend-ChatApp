import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';




const Stack = createStackNavigator();
const App = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
    </NavigationContainer>
  )


}

export default App
