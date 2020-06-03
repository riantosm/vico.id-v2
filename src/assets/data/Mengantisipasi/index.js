import React from 'react';
import {Text, View} from 'react-native';
import s from '../styles';

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

export default Mengantisipasi;
