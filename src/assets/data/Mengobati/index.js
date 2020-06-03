import React from 'react';
import {Text, View} from 'react-native';
import s from '../styles';

const Mengobati = () => {
  return (
    <>
      <Text style={s.text.desc}>
        Infeksi virus Corona atau COVID-19 belum bisa diobati, tetapi ada
        beberapa langkah yang dapat dilakukan dokter untuk meredakan gejalanya
        dan mencegah penyebaran virus, yaitu:
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        {'\n'}- Merujuk penderita COVID-19 yang berat untuk menjalani perawatan
        dan karatina di rumah sakit rujukan.
        {'\n'}- Memberikan obat pereda demam dan nyeri yang aman dan sesuai
        kondisi penderita.
        {'\n'}- Menganjurkan penderita COVID-19 untuk melakukan isolasi mandiri
        dan istirahat yang cukup.
        {'\n'}- Menganjurkan penderita COVID-19 untuk banyak minum air putih
        untuk menjaga kadar cairan tubuh.
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.desc}>
        Sumber:https://www.alodokter.com/virus-corona
      </Text>
    </>
  );
};

export default Mengobati;
