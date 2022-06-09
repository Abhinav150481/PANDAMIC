import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import RequestScreen from '../screens/RequestScreen';
import ShowInformationScreen from '../screens/ShowInformationScreen';
import FeedbackScreen from '../screens/feedbackScreen'

export const AppStackNavigator = createStackNavigator({
  RequestScreen : {
    screen : RequestScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  InformationList : {
    screen : ShowInformationScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Feedback:{
    screen: FeedbackScreen,
    navigationOptions:{
      headerShown:false
    }
  }

},
  {
    initialRouteName: 'RequestScreen'
  }
);