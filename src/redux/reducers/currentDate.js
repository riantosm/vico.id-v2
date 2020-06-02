var day = new Date().getDay(); //To get the Current Date
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth(); //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

const monthArray = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

const dayArray = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
];

const currentDate =
  dayArray[day] + ' ' + date + ' ' + monthArray[month] + ' ' + year;

export default currentDate;
