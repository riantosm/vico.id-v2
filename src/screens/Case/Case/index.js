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
import {CountryPicker, CaseTotal, Maps, Header} from '../../../components';

const {width, height} = Dimensions.get('window');

const caseDummyIndonesia = [
  {id: 1, title: 'Kasus positif', total: 99999},
  {id: 2, title: 'Kasus sembuh', total: 99999},
  {id: 3, title: 'Kasus meninggal', total: 999999},
];

const caseDummyDunia = [
  {id: 1, title: 'Kasus positif', total: 523491},
  {id: 2, title: 'Kasus sembuh', total: 2352321},
  {id: 3, title: 'Kasus meninggal', total: 423123},
];

const Case = ({navigation}) => {
  const [country, setCountry] = useState('Indonesia');
  const [countrySelected, setCountrySelected] = useState(caseDummyIndonesia);
  useEffect(() => {
    country === 'Indonesia'
      ? setCountrySelected(caseDummyIndonesia)
      : setCountrySelected(caseDummyDunia);
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.4)'}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={BgScreen} style={{}}>
          <Header status="case" />
          <View style={s.space(width / 7)} />
          <CountryPicker onPress={status => setCountry(`${status}`)} />
          <CaseTotal
            caseDummy={countrySelected}
            goDetail={() => navigation.navigate('DetailCase', country)}
          />
          <Maps goView={() => navigation.navigate('Maps', country)} />
          <View style={s.space(20)} />
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
