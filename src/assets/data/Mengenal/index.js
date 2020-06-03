import React from 'react';
import {Text, View} from 'react-native';
import s from '../styles';

const Mengenal = () => {
  return (
    <>
      <Text style={s.text.desc}>
        Sejak awal 2020, dunia gempar oleh virus corona baru yang menyerang
        pernapasan manusia dan bisa menyebabkan kematian. Virus yang berasal
        dari Wuhan, China, ini dengan cepat menyebar ke berbagai belahan dunia.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Di Indonesia, pemerintah mengumumkan kasus pertama virus corona pada
        awal Maret. Hingga saat ini, jumlah pasien terjangkit Covid-19 sebanyak
        1.311 kasus dengan 136 kematian dan 81 sembuh.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Lalu, apa sebenarnya virus corona? Virus corona merupakan keluarga virus
        yang menaungi SARS-CoV-2 yang terjadi saat ini, SARS-CoV pada 2002, dan
        MERS-CoV pada 2012.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Kata corona sendiri berasal dari bahasa Latin yang berarti mahkota.
        Bentuk virus corona menyerupai mahkota. Sedang penyakit yang disebabkan
        SARS-CoV-2 disebut Covid-19, akronim dari coronavirus disease 19.
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.title}>Bagaimana gejala Covid-19?</Text>
      <View style={s.space(10)} />
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
      <Text style={s.text.title}>Bagaimana Covid-19 menyebar?</Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Virus corona bersifat zoonotik. Ini berarti, virus pertama kali
        berkembang di hewan sebelum akhirnya menyerang manusia. Ketika sudah
        menginfeksi manusia, penyebaran virus corona bisa melalui droplet
        pernapasan.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Percikan batuk atau bersin dari orang yang terinfeksi virus corona akan
        menempel di permukaan benda atau kulit manusia. Sehingga, virus akan
        berpindah ketika manusia menyentuh benda atau melakukan kontak fisik
        dengan manusia lainnya.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Kemudian, virus akan menginfeksi manusia ketika tangan yang
        terkontaminasi oleh virus menyentuh wajah, seperti mulut, hidung, dan
        mata.
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.title}>Siapa yang berisiko terinfeksi Covid-19?</Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Anda akan berisiko terinfeksi virus ketika berdekatan atau melakukan
        kontak fisik dengan orang terinfeksi virus corona. Namun, ada beberapa
        faktor yang membuat orang memiliki risiko lebih tinggi terinfeksi virus
        corona.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Melansir Healthline, Organisasi Kesehatan Dunia (WHO) pada akhir Januari
        lalu melaporkan, rata-rata orang yang terinfeksi virus corona berada di
        usia sekitar 45 tahun dan dua per tiganya merupakan laki-laki.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Itu berarti, orangtua dan laki-laki rentan terinfeksi virus corona.
        Selain itu, orang dengan penyakit penyerta juga lebih rentan terinfeksi
        Covid-19.
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.desc}>Sumber: https://kesehatan.kontan.co.id/</Text>
    </>
  );
};

export default Mengenal;
