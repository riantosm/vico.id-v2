import React from 'react';
import {Text, TouchableOpacity, View, Dimensions, Image} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {colors as c, fonts as f} from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import {
  information_virus,
  information_drug,
  information_earth,
  information_hand,help_phone, help_chat, help_plus
} from '../../../assets';

const {width, height} = Dimensions.get('window');

const Card = ({text, hotline}) => {
  const img =
    text === 'Mengenal'
      ? information_virus
      : text === 'Mencegah'
      ? information_hand
      : text === 'Mengobati'
      ? information_drug
      : text === 'Mengantisipasi'
      ? information_earth
      : text === 'Hotline'
      ? help_phone
      : text === 'Konsultasi Dokter'
      ? help_chat
      : help_plus;

  const shadowOpt = {
    width: width - 40,
    height: 70,
    color: '#ccc',
    border: 20,
    radius: 20,
    opacity: 0.3,
    x: 0,
    y: 10,
    // style: {bottom: 20},
  };
  return (
    <>
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity>
          <View style={s.card}>
            <Image source={img} style={s.iconImg} resizeMode="contain" />
            <Text style={[s.text.title, {flex: 1}]}>{text}</Text>
            <View style={s.iconRight}>
              <Icon
                name={'chevron-right'}
                size={14}
                color={hotline ? 'transparent' : c.gray}
              />
            </View>
            {hotline && (
              <View style={s.bubble}>
                <Text style={s.text.bubble}>Panggil</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </BoxShadow>
      <View style={s.space(25)} />
    </>
  );
};

const s = {
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    // elevation: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImg: {height: 40, width: 40, marginRight: 20},
  iconRight: {width: 50, alignItems: 'flex-end'},
  bubble: {
    backgroundColor: c.green,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    right: 20,
    borderRadius: 20,
  },
  text: {
    bubble: {color: 'white', fontFamily: f.GoogleSans_Bold},
    title: {
      maxWidth: 190,
      fontSize: 16,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
    cOrange: {color: c.orange},
    cGreen: {color: c.green},
    cRed: {color: c.red},
    cGrayText: {color: c.grayText},
    cBlueDark: {color: c.blueDark},
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default Card;
