import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BgScreen} from '../../assets';
import {Card, Header} from '../../components';
import {colors as c, fonts as f} from '../../styles';

const {width, height} = Dimensions.get('window');

const Help = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.7)'}
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={BgScreen} style={{minHeight: height}}>
          <Header status="help" />
          <View style={s.container}>
            <View style={s.space(width / 7)} />
            <Text style={s.text.title}>Pusat bantuan</Text>
            <View style={s.space(10)} />
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text style={s.text.desc}>
                Jika anda mengalami gejala-gejala{' '}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ReadInfos', ['Gejala', 'Bantuan'])
                }>
                <Text style={[s.text.desc, {color: c.green}]}>
                  seperti ini.
                </Text>
              </TouchableOpacity>
              <Text style={s.text.desc}>Silahkan hubungi kontak di bawah.</Text>
            </View>
            <View style={s.space(20)} />
            <Card
              text="Hotline"
              hotline={true}
              navigation={navigation}
              page="Bantuan"
            />
            <Card
              text="Konsultasi Dokter"
              hotline={false}
              navigation={navigation}
              page="Bantuan"
            />
            <Card
              text="Rumah Sakit Terdekat"
              hotline={false}
              navigation={navigation}
              page="Bantuan"
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const s = {
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  text: {
    title: {
      fontSize: 16,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
    desc: {
      fontSize: 14,
      fontFamily: f.GoogleSans_Reg,
      color: c.grayText,
    },
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default Help;
