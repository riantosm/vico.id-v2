import React, {Component, useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {colors as c, fonts as f} from '../../../styles';
import {BgScreen} from '../../../assets';
import {Header} from '../../../components/global';

const {width, height} = Dimensions.get('window');

const Case = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.4)'}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={BgScreen} style={{}}>
          <Header />
          <View style={s.space(width / 7)} />
          <Text>a</Text>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const s = {
  container: {
    flex: 1,
  },
  text: {
    header_title: {
      maxWidth: 190,
      fontSize: 18,
      fontFamily: f.GoogleSans_Bold,
      color: c.white,
    },
    header_desc: {
      maxWidth: 150,
      fontSize: 10,
      fontFamily: f.GoogleSans_Bold,
      color: c.white,
    },
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default Case;
