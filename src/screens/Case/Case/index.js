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
        backgroundColor={'rgba(0,0,0,0.4)'}
        translucent={true}
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
    };
  }

  componentDidMount=async()=> {
    await this.getTotalIndonesiaFirebase();
    await this.getTotalDuniaFirebase();
  }

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

  getTotalIndonesiaFirebase = async () => {
    await firebase
      .database()
      .ref('indonesia/data_total')
      .on('child_added', val => {
        let data = val.val();
        data.Meni = val.key;
        this.setState(prevState => {
          return {
            indonesiaTotal: [...prevState.indonesiaTotal, data],
          };
        });
        this.setState({
          indonesiaTotalReady: true,
        });
      });
  };

  getTotalDuniaFirebase() {
    firebase
      .database()
      .ref('dunia/data_total')
      .on('child_added', val => {
        let data = val.val();
        data.Meni = val.key;
        this.setState(prevState => {
          return {
            duniaTotal: [...prevState.duniaTotal, data],
          };
        });
        this.setState({
          duniaTotalReady: true,
        });
      });
  }

  render() {
    return (
      <>
        <CountryPicker onPress={status => this.setCountry(`${status}`)} />
        <CaseTotal
          country={this.state.country}
          indonesiaTotalReady={this.state.indonesiaTotalReady}
          caseDummy={
            this.state.indonesiaTotalReady && this.state.duniaTotalReady
              ? this.state.country === 'Indonesia'
                ? this.state.indonesiaTotal
                : this.state.duniaTotal
              : [null, null, null]
          }
          goDetail={() =>
            this.props.navigation.navigate('DetailCase', this.state.country)
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
