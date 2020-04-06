const orta = ["c","d"];
// ... 3 tane nokta array i parçalar
const alfabe = ["a","b",...orta,"e","f"];
// console.log(...alfabe);
const rakamlar = [1,2,3,4,5,6,7,8,9];

const [sayi1,sayi2,sayi3,sayi4,...rest] = rakamlar;
console.log("sayi: " + sayi4);
