import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {IconCase, IconInformation} from '../../assets';
import {Maps} from '../../screens';
import {colors as c, fonts as f} from '../../styles';

const Tab = createMaterialBottomTabNavigator();

const BottomTabMaps = (props) => {
  // console.log(props);
  const ThisMaps = () => {
    return <Maps props={props} />;
  };
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Indonesia"
      activeColor={'gray'}
      inactiveColor={'#bfbfbf'}
      barStyle={{borderTopWidth: 1, borderColor: '#e6e6e6'}}>
      <Tab.Screen
        name="Indonesia"
        component={ThisMaps}
        options={{
          tabBarLabel: (
            <Text style={[s.font, {color: c.orange}]}>Indonesia</Text>
          ),
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => (
            <Image
              source={IconCase}
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
        name="Dunia"
        component={ThisMaps}
        options={{
          tabBarLabel: <Text style={[s.font, {color: '#268aed'}]}>Dunia</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => (
            <Image
              source={IconInformation}
              style={{
                width: 20,
                height: 20,
                tintColor: color === 'gray' ? '#268aed' : color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const s = StyleSheet.create({
  font: {
    fontFamily: f.GothaProBol,
  },
});

export default BottomTabMaps;
