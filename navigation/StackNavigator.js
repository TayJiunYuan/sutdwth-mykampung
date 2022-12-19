import { View, Text } from 'react-native'

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Registration from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
//import useAuth from '../hooks/useAuth';


const Stack = createNativeStackNavigator();
//const { user } = useAuth();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {true ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Registration" component={Registration}/>
        </>
      ):(
        <>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </>
      )

      }
      
    </Stack.Navigator>
  )
}

export default StackNavigator