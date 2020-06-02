import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {CaseComp} from '../../';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const CaseTotal = ({goDetail}) => {
  const {country, totalIndo, totalDuni, currentDate} = useSelector(
    state => state,
  );
  const [caseTotal, setCaseTotal] = useState(totalIndo);
  useEffect(() => {
    setCaseTotal(country === 'Indonesia' ? totalIndo : totalDuni);
  });

  const shadowOpt = {
    width: width - 40,
    height: 120,
    color: '#ccc',
    border: 20,
    radius: 20,
    opacity: 0.3,
    x: 0,
    y: 10,
  };

  return (
    <View style={s.container}>
      <Text style={s.text.title}>
        Total Kasus di <Text style={s.text.cBlue}>{country}</Text>
      </Text>
      <View style={s.row}>
        <Text style={s.text.desc}>{currentDate}</Text>
        <TouchableOpacity onPress={() => goDetail()} style={s.rowBtn}>
          <Text style={s.text.detail}>Detail</Text>
          <Icon name={'chevron-right'} size={14} color={c.blue} />
        </TouchableOpacity>
      </View>
      <BoxShadow setting={shadowOpt}>
        <View style={s.card}>
          <CaseComp status={'posi'} caseDummy={caseTotal.Posi} />
          <CaseComp status={'semb'} caseDummy={caseTotal.Semb} />
          <CaseComp status={'meni'} caseDummy={caseTotal.Meni} />
        </View>
      </BoxShadow>
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
  rowBtn: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  card: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 20,
    borderRadius: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
    detailLoading: {
      maxWidth: 150,
      fontSize: 14,
      fontFamily: f.GoogleSans_Reg,
      color: c.grayText,
      marginRight: 5,
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
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default CaseTotal;
