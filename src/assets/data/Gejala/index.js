import React from 'react';
import {Text, View} from 'react-native';
import s from '../styles';

const Gejala = () => {
  return (
    <>
      <Text style={s.text.desc}>
        Ciri-ciri virus corona hampir mirip dengan gejala flu, di antaranya:
        {'\n'}- Demam tinggi lebih dari 38 derajat Celsius
        {'\n'}- Batuk kering
        {'\n'}- Lemas
        {'\n'}- Sakit tenggorokan
        {'\n'}- Sesak atau kesulitan bernapas
        {'\n'}- Sakit kepala
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.desc}>
        Sumber: https://www.unila.ac.id/antisipasi-penularan-virus-corona/
      </Text>
    </>
  );
};

export default Gejala;
