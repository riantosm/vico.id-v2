import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {IconCase, IconHelp, IconInformation} from '../../assets';
import {Case, Help, Information} from '../../screens';
import {fonts as f, colors as c} from '../../styles';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    shifting={true}
    initialRouteName="Case"
    activeColor={'gray'}
    inactiveColor={'#bfbfbf'}
    barStyle={{borderTopWidth: 1, borderColor: '#e6e6e6'}}>
    <Tab.Screen
      name="Case"
      component={Case}
      options={{
        tabBarLabel: <Text style={[s.font, {color: '#268aed'}]}>Kasus</Text>,
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Image
            source={IconCase}
            style={{
              width: 20,
              height: 20,
              tintColor: color === 'gray' ? '#268aed' : color,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Information"
      component={Information}
      options={{
        tabBarLabel: <Text style={[s.font, {color: c.orange}]}>Informasi</Text>,
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Image
            source={IconInformation}
            style={{
              width: 20,
              height: 20,
              tintColor: color === 'gray' ? c.orange : color,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Help"
      component={Help}
      options={{
        tabBarLabel: <Text style={[s.font, {color: c.green}]}>Bantuan</Text>,
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Image
            source={IconHelp}
            style={{
              width: 20,
              height: 20,
              tintColor: color === 'gray' ? c.green : color,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const s = StyleSheet.create({
  font: {
    fontFamily: f.GothaProBol,
  },
});

export default BottomTab;
