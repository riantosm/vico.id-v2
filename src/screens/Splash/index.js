import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {bg_loading} from '../../assets';
import {colors as c, fonts as f} from '../../styles';
import {LogoSplash} from '../../components';

const Splash = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={c.blueDark} />
      <ImageBackground
        source={bg_loading}
        style={{width: '100%', height: '100%'}}>
        <View style={s.container}>
          <LogoSplash />
          <ActivityIndicator
            color={c.white}
            size="small"
            style={{marginTop: 20}}
          />
          <Text style={s.version}>v2.0</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const s = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    white: {color: c.white},
    blue: {color: c.blue},
    gray: {color: c.gray},
  },
  indicator: {
    marginTop: 20,
  },
  version: {
    position: 'absolute',
    bottom: 30,
    fontFamily: f.GoogleSans_Bold,
    color: c.white,
  },
};

export default Splash;
