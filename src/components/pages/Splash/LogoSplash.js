import React from 'react';
import {Text, Image, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {colors as c, fonts as f} from '../../../styles';
import {virus_loading, bg_loading} from '../../../assets';

const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.985,
  },
  1: {
    opacity: 1,
    scale: 0.98,
  },
};

const LogoSplash = () => {
  return (
    <>
      <Animatable.View
        style={s.text.logo}
        animation={'slideOutDown'}
        iterationCount={1000}
        duration={28000}
        style={s.imgV}
        direction="alternate">
        <Image source={virus_loading} style={s.img} />
      </Animatable.View>
      <Animatable.Text
        style={s.text.logo}
        animation={zoomOut}
        iterationCount={1000}
        direction="alternate">
        {' '}
        <Text style={s.text.white}>vico</Text>
        <Text style={s.text.blue}>.id</Text>{' '}
      </Animatable.Text>
    </>
  );
};

const s = {
  imgV: {position: 'absolute', top: 0},
  img: {width: 329, height: 569},
  text: {
    logo: {
      fontFamily: f.comfortaa_bold,
      fontSize: 75,
      fontWeight: '900',
      textShadowColor: 'rgba(32, 39, 97, 0.46)',
      textShadowOffset: {width: 4, height: 5},
      textShadowRadius: 46,
    },

    white: {color: c.white},
    blue: {color: c.blue},
  },
};

export default LogoSplash;
