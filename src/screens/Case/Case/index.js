import React, {Component, useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import {BgScreen} from '../../../assets';
import {CaseTotal, CountryPicker, Header, Maps} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';
import firebase from 'firebase';

const {width, height} = Dimensions.get('window');

const caseDummyIndonesia = [111, 222, 333];

const caseDummyDunia = [111, 222, 333];

const Case = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.7)'}
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={BgScreen} style={{}}>
          <Header status="case" />
          <View style={s.space(width / 7)} />
          <ClassCase navigation={navigation} />
          <View style={s.space(20)} />
        </ImageBackground>
      </ScrollView>
    </>
  );
};

class ClassCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Indonesia',
      countrySelected: [0, 0, 0],
      indonesiaTotal: [],
      duniaTotal: [],
      indonesiaDataFire: [],
      duniaDataFire: [],
      duniaDataFireReady: false,
      indonesiaDataFireReady: false,
    };
  }

  componentDidMount = () => {
    this.getDataDuniaFire();
    this.getDataIndonesiaFire();
    this.getTotalIndonesiaFirebase();
    this.getTotalDuniaFirebase();
  };

  setCountry = async status => {
    await this.setState({
      country: status,
    });
    this.setCountrySelected();
  };

  setCountrySelected = () => {
    this.state.country === 'Indonesia'
      ? this.setState({
          countrySelected: this.state.indonesiaTotal,
        })
      : this.setState({
          countrySelected: caseDummyDunia,
        });
  };

  getDataDuniaFire = () => {
    let newArray = [];
    firebase
      .database()
      .ref('dunia/data')
      .on('child_added', val => {
        let data = val.val();
        data.Negara = val.key;
        newArray.push(data);
      });
    this.setState({
      duniaDataFire: newArray,
    });
  };

  getDataIndonesiaFire = () => {
    let newArray = [];
    firebase
      .database()
      .ref('indonesia/data')
      .on('child_added', val => {
        let data = val.val();
        data.Provinsi = val.key;
        newArray.push(data);
      });
    this.setState({
      indonesiaDataFire: newArray,
    });
  };

  getTotalDuniaFirebase = () => {
    let newArray = [];
    firebase
      .database()
      .ref('dunia/data_total')
      .on('child_added', val => {
        let data = val.val();
        data.Meni = val.key;
        newArray.push(data);
        this.setState({
          duniaTotalReady: true,
        });
        setTimeout(() => {
          this.setState({
            indonesiaDataFireReady: true,
            duniaDataFireReady: true,
          });
        }, 5000);
      });
    this.setState({
      duniaTotal: newArray,
    });
  };

  getTotalIndonesiaFirebase = () => {
    let newArray = [];
    firebase
      .database()
      .ref('indonesia/data_total')
      .on('child_added', val => {
        let data = val.val();
        data.Meni = val.key;
        newArray.push(data);
        this.setState({
          indonesiaTotalReady: true,
        });
      });
    this.setState({
      indonesiaTotal: newArray,
    });
  };

  render() {
    return (
      <>
        <CountryPicker onPress={status => this.setCountry(`${status}`)} />
        <CaseTotal
          country={this.state.country}
          dataReady={
            this.state.indonesiaTotalReady && this.state.duniaTotalReady
              ? true
              : false
          }
          detailReady={
            this.state.duniaDataFireReady && this.state.indonesiaDataFireReady
              ? true
              : false
          }
          caseDummy={
            this.state.indonesiaTotalReady && this.state.duniaTotalReady
              ? this.state.country === 'Indonesia'
                ? this.state.indonesiaTotal
                : this.state.duniaTotal
              : [null, null, null]
          }
          goDetail={() =>
            this.props.navigation.navigate('DetailCase', [
              this.state.country,
              this.state.country === 'Indonesia'
                ? this.state.indonesiaDataFire
                : this.state.duniaDataFire,
            ])
          }
        />
        <Maps
          goView={() =>
            this.props.navigation.navigate('Maps', this.state.country)
          }
        />
      </>
    );
  }
}

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
