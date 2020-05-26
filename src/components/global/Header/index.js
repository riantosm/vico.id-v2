import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Block} from '../';
import {drcorona, virus_home} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const Header = ({status}) => {
  return (
    <>
      <Block height={300} color={c.blueDark} style={s.bg}>
        <LinearGradient
          colors={
            status === 'case'
              ? ['#45C2FB', '#3241B8']
              : status === 'information'
              ? ['#acc934', '#f97f51']
              : ['#9dd49f', '#4c8f3d']
          }
          style={{width: '100%', height: '100%'}}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <Block style={s.wrapperimage}>
            <Image style={s.doctor} source={drcorona} resizeMode="contain" />
          </Block>
        </LinearGradient>
      </Block>
      <Block style={s.container}>
        <Image style={s.img} source={virus_home} />
        <Block style={{position: 'absolute', left: 20}}>
          {status === 'case' ? (
            <Text style={s.header_title}>Kasus virus corona di indonesia.</Text>
          ) : status === 'information' ? (
            <Text style={s.header_title}>Informasi mengenai virus corona.</Text>
          ) : (
            <Text style={s.header_title}>Pusat bantuan.</Text>
          )}
          <View style={s.space(7)} />
          <Text style={s.header_desc}>#dirumahsaja</Text>
        </Block>
      </Block>
    </>
  );
};

const s = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: -(930 - width / 2),
    alignSelf: 'center',
    borderRadius: 1000,
    overflow: 'hidden',
    elevation: 16,
  },
  wrapperimage: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: width,
    height: 300,
  },
  img: {width: 333, height: 227, alignSelf: 'center'},
  doctor: {
    position: 'absolute',
    top: 100,
    right: 20,
    width: 194,
    height: 373,
  },
  container: {
    position: 'relative',
    elevation: 16,
    justifyContent: 'center',
  },

  header_title: {
    maxWidth: 210,
    fontSize: 20,
    fontFamily: f.GoogleSans_Bold,
    color: c.white,
  },
  header_desc: {
    maxWidth: 150,
    fontSize: 12,
    fontFamily: f.GoogleSans_Bold,
    color: c.white,
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
});

export default Header;
