import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {kasus_meni, kasus_posi, kasus_semb} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';

const currencyFormat = num => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const CaseComp = ({status, caseDummy}) => {
  let icon =
    status === 'posi'
      ? kasus_posi
      : status === 'semb'
      ? kasus_semb
      : kasus_meni;
  let color =
    status === 'posi'
      ? s.text.cOrange
      : status === 'semb'
      ? s.text.cGreen
      : s.text.cRed;
  return (
    <View>
      <Image source={icon} style={s.icon} />
      {caseDummy == null ? (
        <ActivityIndicator
          color={
            status === 'posi' ? c.orange : status === 'semb' ? c.green : c.red
          }
        />
      ) : (
        <Text style={[s.text.kasus_title, color]}>
          {currencyFormat(caseDummy)}
        </Text>
      )}
      <Text style={[s.text.kasus_desc, s.text.cGrayText]}>
        Kasus{' '}
        {status === 'posi' ? (
          <>Positif</>
        ) : status === 'semb' ? (
          <>Sembuh</>
        ) : (
          <>Meninggal</>
        )}
      </Text>
    </View>
  );
};

const s = {
  icon: {width: 35, height: 35, marginBottom: 10, alignSelf: 'center'},
  text: {
    kasus_title: {
      textAlign: 'center',
      fontFamily: f.GothaProBol,
      fontSize: 20,
    },
    kasus_desc: {
      textAlign: 'center',
      fontFamily: f.GoogleSans_Reg,
      fontSize: 12,
    },
    cOrange: {color: c.orange},
    cGreen: {color: c.green},
    cRed: {color: c.red},
    cGrayText: {color: c.grayText},
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default CaseComp;
