import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/Start';
import Home from '../screens/Home';
import Register from '../screens/Register';
import ThanksYou from '../screens/ThanksYou';
import Donor from '../screens/Donor';
import Profile from '../screens/Profile';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Get Start" component={Start} 
        options={{
          headerStyle: {
            backgroundColor: '#e96950',
            borderColor: '#e96950',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          } }}
          />
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: '#e96950',
            borderColor: '#e96950'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          } }}/>
        <Stack.Screen name="Register" component={Register} options={{
          headerStyle: {
            backgroundColor: '#e96950',
            borderColor: '#e96950'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          } }}/>
        <Stack.Screen name="ThanksYou" component={ThanksYou} options={{
          headerStyle: {
            backgroundColor: '#e96950',
            borderColor: '#e96950'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          } }}/>
          <Stack.Screen name="Donor" component={Donor} options={{
            headerStyle: {
              backgroundColor: '#e96950',
              borderColor: '#e96950'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } }}/>
            <Stack.Screen name="Profile" component={Profile} options={{
              headerStyle: {
                backgroundColor: '#e96950',
                borderColor: '#e96950',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              } }}/>
              <Stack.Screen name="Contact" component={Contact} options={{
                headerStyle: {
                  backgroundColor: '#e96950',
                  borderColor: '#e96950',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;