import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {colors as c, fonts as f} from '../../../styles';

import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Circle,
  Polygon,
} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const Maps = ({props}) => {
  let index = 0;
  props.state !== undefined && index == 1;
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#323967'}
        translucent={false}
      />

      <View style={s.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="chevron-left"
            color="white"
            size={18}
            style={{padding: 20}}
          />
        </TouchableOpacity>
        <Text style={s.headerTitle}>
          Peta persebaran di{' '}
          {props.route.state === undefined || props.route.state.index === 0 ? (
            <>Indonesia</>
          ) : (
            <>Dunia</>
          )}
        </Text>
      </View>
      <View style={s.container}>
        <Text>Memuat halaman ..</Text>
        <ClassMaps
          route={props}
          state={props.route.state}
          dataIndo={props.route.params[1]}
          dataDuni={props.route.params[2]}
        />
      </View>
    </>
  );
};

class ClassMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    },1000);
  }

  render() {
    const {isLoading} = this.state;
    return (
      <>
        {isLoading ? (
          <ActivityIndicator />
        ) : this.props.state === undefined || this.props.state.index === 0 ? (
          <>
            <MapView
              ref={map => (this._map = map)}
              provider={PROVIDER_GOOGLE}
              style={s.map}
              showsUserLocation
              initialRegion={{
                latitude: -4.411479,
                longitude: 122.361987,
                latitudeDelta: 26,
                longitudeDelta: 26.51,}}>
              {this.props.dataIndo.map((marker, index) => {
                return (
                  <Marker
                    key={marker.FID}
                    tracksViewChanges={false}
                    // onPress={() => this.onMakerPressed(marker, index)}
                    coordinate={{
                      latitude: marker.Lat,
                      longitude: marker.Long,
                    }}
                  />
                );
              })}
            </MapView>
          </>
        ) : (
          <>
            <MapView
              ref={map => (this._map = map)}
              provider={PROVIDER_GOOGLE}
              style={s.map}
              showsUserLocation
              initialRegion={{
                latitude: -4.411479,
                longitude: 122.361987,
                latitudeDelta: 70,
                longitudeDelta: 70.51,}}>
              {this.props.dataDuni.map((marker, index) => {
                return (
                  <Marker
                    key={marker.FID}
                    tracksViewChanges={false}
                    pinColor='blue'
                    // onPress={() => this.onMakerPressed(marker, index)}
                    coordinate={{
                      latitude: marker.Lat,
                      longitude: marker.Long,
                    }}
                  />
                );
              })}
            </MapView>
          </>
        )}
      </>
    );
  }
}

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

export default Maps;
