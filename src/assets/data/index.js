import React from 'react';
import {Text, View} from 'react-native';
import {colors as c, fonts as f} from '../../styles';

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

const Mengantisipasi = () => {
  return (
    <>
      <Text style={s.text.title}>Manajemen Hidup Sehat</Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Sebenarnya, Indonesia memiliki banyak keunggulan yang mungkin tidak
        dimiliki oleh banyak negara lain. Iklim tropisnya, saat ini kita sudah
        mulai masuk musim panas dengan rerata suhu di atas 26°C dengan
        humidifikasi yang rendah, menjadi keuntungan yang bisa diharapkan
        menurunkan tingkat virulensi Covid-19, sehingga mandi matahari selama
        15—30 menit bisa juga menjadi rekomendasi pencegahan dan penguatan
        pencegahan.
      </Text>
      <View style={s.space(10)} />
      <Text style={s.text.desc}>
        Indonesia juga kaya dengan sumber herbal, seperti berbagai jenis rimpang
        yang sering dikonsumsi masyarakat ataupun berbagai herbal sumber
        antioksidan lain, ternyata juga menguatkan imun tubuh untuk melawan
        virulensi virus ini. Selain itu, berbagai manajemen hidup sehat yang
        dimulai dari asupan gizi seimbang, dengan keberagaman, kuantitas, dan
        kualitas yang cukup, diikuti dengan pola hidup bersih dan sehat termasuk
        penggunaan masker yang tepat dikombinasi dengan cuci tangan yang benar.
      </Text>
      <Text style={s.text.desc}>
        Kemudian, lakukan juga aktivitas fisik teratur termasuk olahraga dan
        manajemen stres, termasuk tidur yang cukup. Semua itu dapat kita
        harapkan pada akhirnya menjadi poin-poin penguat seluruh lapisan
        masyarakat di Indonesia untuk berkembangnya kasus Covid-19. Saya
        berharap agar regimen terapi obat pilihan dan vaksin Covid-19 dapat
        segera ditemukan sehingga semua pembatasan lintas negara yang sedang
        terjadi sekarang dapat segera diakhiri. Salam damai. Tabik pun.
      </Text>
      <View style={s.space(20)} />
      <Text style={s.text.desc}>
        Sumber: https://www.unila.ac.id/antisipasi-penularan-virus-corona/
      </Text>
    </>
  );
};

const Gejala = () => {
  return (
    <>
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
      <Text style={s.text.desc}>
        Sumber: https://www.unila.ac.id/antisipasi-penularan-virus-corona/
      </Text>
    </>
  );
};

export default {Mengenal, Mencegah, Mengobati, Mengantisipasi, Gejala};

const s = {
  text: {
    title: {
      fontSize: 20,
      fontFamily: f.GoogleSans_Bold,
      color: c.white,
    },
    desc: {
      fontSize: 14,
      fontFamily: f.GoogleSans_Bold,
      color: c.gray,
      textAlign: 'justify',
    },
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};
