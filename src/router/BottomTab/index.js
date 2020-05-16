import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {IconCase, IconHelp, IconInformation} from '../../assets';
import {Case, Help, Information} from '../../screens';
import {fonts as f, colors as c} from '../../styles';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator shifting={true} initialRouteName="Case" activeColor="#fff">
    <Tab.Screen
      name="Case"
      component={Case}
      options={{
        tabBarLabel: <Text style={s.font}>Kasus</Text>,
        tabBarColor: '#268aed',
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
        tabBarLabel: <Text style={s.font}>Informasi</Text>,
        tabBarColor: c.orange,
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
        tabBarLabel: <Text style={s.font}>Bantuan</Text>,
        tabBarColor: c.green,
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

const s = StyleSheet.create({
  font: {
    fontFamily: f.GothaProBol,
  },
});

export default BottomTab;
