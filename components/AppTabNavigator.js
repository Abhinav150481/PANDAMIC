import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddInformationScreen from '../screens/AddInformationScreen';
import { AppStackNavigator } from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
  RequestItems: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/request-item.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Request Items',
    },
  },
  AddInformation: {
    screen: AddInformationScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/add-information.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Add Information',
    },
  },
});
