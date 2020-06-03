import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/Entypo';
import {
  help_chat,
  help_phone,
  help_plus,
  information_drug,
  information_earth,
  information_hand,
  information_virus,
} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const Card = ({text, hotline, navigation, page}) => {
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

  const clicked = () => {
    text === 'Hotline'
      ? Linking.openURL(
          'whatsapp://send?text=' + '' + '&phone=62' + '81212123119',
        )
      : navigation.navigate('ReadInfos', [text, page]);
  };

  return (
    <>
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity onPress={clicked}>
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
                <Text style={s.text.bubble}>Hubungi</Text>
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
  card: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
      fontSize: 16,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
    desc: {
      fontSize: 14,
      fontFamily: f.GoogleSans_Reg,
      color: c.black,
      textAlign: 'justify',
    },
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default Card;
