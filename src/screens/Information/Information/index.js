import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {BgScreen} from '../../../assets';
import {Card, Header} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const Information = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.7)'}
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={BgScreen} style={{minHeight: height}}>
          <Header status="information" />
          <View style={s.container}>
            <View style={s.space(width / 7)} />
            <Text style={s.text.title}>Apa Itu Virus Corona</Text>
            <View style={s.space(20)} />
            <Card text="Mengenal" hotline={false} navigation={navigation} />
            <Card text="Mencegah" hotline={false} navigation={navigation} />
            <Card text="Mengobati" hotline={false} navigation={navigation} />
            <Card
              text="Mengantisipasi"
              hotline={false}
              navigation={navigation}
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
      maxWidth: 190,
      fontSize: 16,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default Information;
