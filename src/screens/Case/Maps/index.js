import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Maps = ({route}) => {
  let index = 0;
  route.state !== undefined && index == 1;
  return (
    <View style={styles.container}>
      <Text>Maps Screen</Text>
      <ClassMaps route={route} />
    </View>
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
    });
  }

  render() {
    const {isLoading} = this.state;
    return (
      <>
        {isLoading ? (
          <ActivityIndicator />
        ) : this.props.route.state === undefined ||
          this.props.route.state.index === 0 ? (
          this.props.route.params[1].map((data, index) => {
            return (
              <View key={data.FID}>
                <Text>{data.Provinsi}</Text>
              </View>
            );
          })
        ) : (
          this.props.route.params[2].map((data, index) => {
            return (
              <View key={data.FID}>
                <Text>{data.Negara}</Text>
              </View>
            );
          })
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Maps;
