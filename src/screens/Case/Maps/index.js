import React, {Component} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {colors as c, fonts as f} from '../../../styles';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const page = this.props.props.route.state;
    const navigation = this.props.props.navigation;
    const {detailIndo, detailDuni} = this.props;
    const data =
      page === undefined || page.index === 0 ? detailIndo : detailDuni;
    return this.state.isLoading ? (
      <ActivityIndicator />
    ) : (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#323967'}
          translucent={false}
        />
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              color="white"
              size={18}
              style={{padding: 20}}
            />
          </TouchableOpacity>
          <Text style={s.headerTitle}>
            Peta persebaran di {this.props.country}
          </Text>
        </View>
        <View style={s.container}>
          <Text>Memuat halaman ..</Text>

          <MapView
            ref={map => (this._map = map)}
            provider={PROVIDER_GOOGLE}
            style={s.map}
            showsUserLocation
            initialRegion={{
              latitude: -4.411479,
              longitude: 122.361987,
              latitudeDelta: page === undefined || page.index === 0 ? 26 : 60,
              longitudeDelta: page === undefined || page.index === 0 ? 26 : 60,
            }}>
            {Object.entries(data).map(([key, value]) => {
              return (
                <Marker
                  key={value.FID}
                  tracksViewChanges={false}
                  coordinate={{
                    latitude: value.Lat,
                    longitude: value.Long,
                  }}>
                  <Callout>
                    <Text style={{fontWeight: 'bold'}}>
                      {page === undefined || page.index === 0
                        ? value.Provinsi
                        : value.Negara}
                    </Text>
                    <Text>Kasus Positif : {value.Kasus_Posi}</Text>
                    <Text>Kasus Sembuh : {value.Kasus_Semb}</Text>
                    <Text>Kasus Meninggal : {value.Kasus_Meni}</Text>
                  </Callout>
                </Marker>
              );
            })}
          </MapView>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailIndo: state.detailIndo,
    detailDuni: state.detailDuni,
    country: state.country,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);

const s = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFill,
  },
  header: {
    backgroundColor: c.blueDark,
    flexDirection: 'row',
    padding: 0,
    elevation: 5,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: f.GoogleSans_Bold,
    fontSize: 18,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
