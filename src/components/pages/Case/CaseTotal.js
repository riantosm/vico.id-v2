import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/Entypo';
import {kasus_meni, kasus_posi, kasus_semb} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';

var day = new Date().getDay(); //To get the Current Date
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth(); //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

const monthArray = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

const dayArray = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
];

const currencyFormat = num => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const {width, height} = Dimensions.get('window');

const CaseTotal = ({caseDummy, goDetail, country}) => {
  const shadowOpt = {
    width: width - 40,
    height: 120,
    color: '#ccc',
    border: 20,
    radius: 20,
    opacity: 0.3,
    x: 0,
    y: 10,
    // style: {bottom: 20},
  };

  return (
    <View style={s.container}>
      <Text style={s.text.title}>
        Total Kasus di <Text style={s.text.cBlue}>{country}</Text>
      </Text>
      <View style={s.row}>
        <Text style={s.text.desc}>
          {dayArray[day]}, {date} {monthArray[month]} {year}
        </Text>
        <TouchableOpacity onPress={() => goDetail()}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={s.text.detail}>Detail</Text>
            <Icon name={'chevron-right'} size={14} color={c.blue} />
          </View>
        </TouchableOpacity>
      </View>
      <BoxShadow setting={shadowOpt}>
        <View style={s.card}>
          <CaseComp status={'posi'} caseDummy={caseDummy} />
          <CaseComp status={'semb'} caseDummy={caseDummy} />
          <CaseComp status={'meni'} caseDummy={caseDummy} />
        </View>
      </BoxShadow>
    </View>
  );
};

const CaseComp = ({status, caseDummy}) => {
  let arrayTotal = status === 'posi' ? 0 : status === 'semb' ? 1 : 2;
  let icon =
    status === 'posi'
      ? kasus_posi
      : status === 'semb'
      ? kasus_semb
      : kasus_meni;
  let arrayTitle = status === 'posi' ? 0 : status === 'semb' ? 1 : 2;
  let color =
    status === 'posi'
      ? s.text.cOrange
      : status === 'semb'
      ? s.text.cGreen
      : s.text.cRed;
  return (
    <View>
      <Image source={icon} style={s.icon} />
      <Text style={[s.text.kasus_title, color]}>
        {currencyFormat(caseDummy[arrayTotal].total)}
      </Text>
      <Text style={[s.text.kasus_desc, s.text.cGrayText]}>
        {caseDummy[arrayTitle].title}
      </Text>
    </View>
  );
};

const s = {
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  row: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    // elevation: 8,
    flexDirection: 'row',
  },
  icon: {width: 35, height: 35, marginBottom: 10, alignSelf: 'center'},
  text: {
    title: {
      fontSize: 16,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
    desc: {
      maxWidth: 150,
      fontSize: 14,
      fontFamily: f.GoogleSans_Reg,
      color: c.grayText,
    },
    detail: {
      maxWidth: 150,
      fontSize: 14,
      fontFamily: f.GoogleSans_Bold,
      color: c.blue,
    },
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
    cBlueDark: {color: c.blueDark},
    cBlue: {color: c.blue},
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default CaseTotal;
