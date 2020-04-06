const asenkronFunction = () =>
  new Promise((resolve,reject) => {
    setTimeout(() => {
      // resolve("Asenkron programming response");
      reject("Sunucu yanıt vermiyor");
    },2000);
  });

const asyncFunction = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sunucu yanıt veriyor");
    },500);
  });

  const mainFunction = async () => {
    console.log("started here");
    // await ile asenkronFunction fonksiyonundan gelen return değerini fn1 atayabiliriz.
    // fn1 ile gelen veriyi ekrana yazdırabiliriz.
    // Eğer await anahtar kelimesini kullanmamış olsaydık, [object Promise] bunun gibi bir değerimiz olur.
    // Her zaman değişkene atamak zorunda da değiliz direk yazdırırken fonksiyonun önüne await eklememiz yeter.
    let fn1= null;
    try {
      fn1 = await asenkronFunction();
    } catch (e) {
      console.log(e);
    }
    console.log("ilk promise ");
    const fn2 = await asyncFunction();
    console.log("ikinci promise ");
    console.log("Son olarak");
    console.log(`Fn1 : ${fn1} \nFn2 : ${fn2}`);
  }

mainFunction();
