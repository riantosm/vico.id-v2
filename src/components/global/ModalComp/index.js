import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import {Data} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const ModalComp = ({show, isModalVisible, toggleModal, toggleModalBack}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={() => toggleModalBack()}
      customBackdrop={<View style={{flex: 1, backgroundColor: 'black'}} />}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.space(50)} />
        <View style={s.container}>
          <Text style={s.text.title}>
            {show}{' '}
            {(show === 'Mengenal' && <>virus corona.</>) ||
              (show === 'Mencegah' && <>virus corona.</>) ||
              (show === 'Mengobati' && <>virus corona.</>) ||
              (show === 'Mengantisipasi' && <>virus corona.</>)}
          </Text>
          <View style={s.space(20)} />
          {(show === 'Mengenal' && <Data.Mengenal />) ||
            (show === 'Mencegah' && <Data.Mencegah />) ||
            (show === 'Mengobati' && <Data.Mengobati />) ||
            (show === 'Mengantisipasi' && <Data.Mengantisipasi />) ||
            (show === 'Gejala' && <Data.Gejala />)}
          <View style={s.space(40)} />
          <TouchableOpacity onPress={() => toggleModal()}>
            <Icon
              name="cross"
              color={'white'}
              size={30}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
        <View style={s.space(50)} />
      </ScrollView>
    </Modal>
  );
};

const s = {
  container: {
    flex: 1,
    minHeight: height - 30,
    justifyContent: 'center',
  },
  text: {
    title: {
      fontSize: 30,
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

export default ModalComp;
