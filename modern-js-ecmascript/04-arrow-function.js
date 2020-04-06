/* standart fonksyion tanımlama
function denemeFonksiyonAdi() {
  console.log("deneme fonksiyon");
}
denemeFonksiyonAdi();
*/

 // const fonksiyonAdi = (name) => {
 //   console.log(name);
 // }
// fonksiyonAdi("ÜMİT UZ");

// Tek satırlık return ise süslü parantezli açıp return demeye gerek yok.
// const toplama = (sayi1,sayi2) => sayi1+sayi2;
// console.log(toplama(5,10));

// tek parametre ise parantez açmaya gerek yok
// const getName = name => name;
// console.log(getName("umut"));

// üst alma işlemi
// const pow = parametre => parametre**2;
// console.log(pow(4));

// obje return etmek için eski yöntem
// const obje1 = () => {
//   return {
//     key1:"val1",
//     key2:"val2",
//   }
// }
//
// console.log(obje1());

// obje return etmek için yeni yöntem
// const obje2 = () => ({
//   key3:"val4",
//   key4:"val3",
// })
//
// console.log(obje2());

// fonksiyonların parametrelerinde eskiden default olarak değer verilemiyordu ama artık mümkün.
// const defaultFunction = (par1="deneme") => ({ args1:par1,args2:"value2"});
// console.log(defaultFunction("UMUT"));

// spread operatorunu de arrow function icerisinde kullanabiliriz.
const spreadArrowFunction = (par1="deneme",...rest) => ({ args1:par1,args2:"value2",... rest});
const result = spreadArrowFunction("bir","üc","dort","bes","alti")
console.log(result);
