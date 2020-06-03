import React from 'react';
import {Text, View} from 'react-native';
import s from '../styles';

const Mencegah = () => {
  return (
    <>
      <Text style={s.text.desc}>
        Untuk melindungi diri sekaligus menahan penyebaran virus corona, Anda
        bisa melakukan hal-hal berikut:
      </Text>
      <Text style={s.text.desc}>
        {'\n'}- Cuci tangan dengan sabun dan air mengalir selama 20 detik. Jika
        tidak bisa mencuci tangan, bersihkan tangan menggunakan hand sanitizer.
        {'\n'}- Hindari menyentuh area wajah, seperti mata, hidung, dan mulut
        sebelum Anda membersihkan tangan.
        {'\n'}- Jangan keluar rumah jika Anda merasa kurang sehat atau memiliki
        gejala flu.
        {'\n'}- Hindari atau batasi kontak fisik dengan orang lain. Jika
        memungkinkan, usahakan berada pada jarak setidaknya satu meter dengan
        orang lain.
        {'\n'}- Tutup mulut dan hidung Anda dengan tisu atau siku bagian dalam
        ketika batuk atau bersin. Jika Anda menggunakan tisu, segera buang tisu
        Anda.
        {'\n'}- Bersihkan barang-barang yang sering Anda gunakan dengan
        disinfektan, seperti gawai atau handphone, laptop, dan meja
        {'\n'}- Terapkan gaya hidup sehat, mulai dari pola makan, olahraga,
        serta hindari begadang untuk menjaga kekebalan tubuh Anda.
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.desc}>Sumber: https://kesehatan.kontan.co.id/</Text>
    </>
  );
};

export default Mencegah;
