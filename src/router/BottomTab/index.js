import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
import {Case, Information, Help,Splash} from '../../screens';
import {IconCase, IconInformation, IconHelp} from '../../assets';

// const CaseStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    shifting={true}
    initialRouteName="Case"
    activeColor="#fff"
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Case"
      component={Case}
      options={{
        tabBarLabel: 'Kasus',
        tabBarColor: '#aaafd5',
        tabBarIcon: ({color}) => (
          <Image
            source={IconCase}
            style={{width: 20, height: 20, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Information"
      component={Information}
      options={{
        tabBarLabel: 'Informasi',
        tabBarColor: '#fcc8b5',
        tabBarIcon: ({color}) => (
          <Image
            source={IconInformation}
            style={{width: 20, height: 20, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Help"
      component={Help}
      options={{
        tabBarLabel: 'Bantuan',
        tabBarColor: '#98e69c',
        tabBarIcon: ({color}) => (
          <Image
            source={IconHelp}
            style={{width: 20, height: 20, tintColor: color}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;

// const CaseStackScreen = ({navigation}) => (
//   <CaseStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <CaseStack.Screen
//       name="Case"
//       component={Case}
//       options={{
//         title: 'Overview',
//         headerShown: false,
//         // headerLeft: () => (
//         //   <Icon.Button
//         //     name="ios-menu"
//         //     size={25}
//         //     backgroundColor="#009387"
//         //     onPress={() => {
//         //       navigation.openDrawer();
//         //     }}
//         //   />
//         // ),
//       }}
//     />
//     <CaseStack.Screen
//       name="Splash"
//       component={Splash}
//       options={{
//         title: 'Overview',
        
//         // headerLeft: () => (
//         //   <Icon.Button
//         //     name="ios-menu"
//         //     size={25}
//         //     backgroundColor="#009387"
//         //     onPress={() => {
//         //       navigation.openDrawer();
//         //     }}
//         //   />
//         // ),
//       }}
//     />
//   </CaseStack.Navigator>
// );
