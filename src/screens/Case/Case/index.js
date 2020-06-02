import React, {Component} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {BgScreen} from '../../../assets';
import {CaseTotal, CountryPicker, Header, Maps} from '../../../components';
import {setCountry} from '../../../redux/actions';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

class Case extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <CountryPicker />
            <CaseTotal
              goDetail={() => this.props.navigation.navigate('DetailCase')}
            />
            <Maps goView={() => this.props.navigation.navigate('Maps')} />
            <View style={s.space(20)} />
          </ImageBackground>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalIndo: state.totalIndo,
    totalDuni: state.totalDuni,
    country: state.country,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCountry: country => {
      dispatch(setCountry(country));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Case);

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
