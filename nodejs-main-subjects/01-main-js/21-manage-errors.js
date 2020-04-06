/*
throw
try
catch
finally
İstisna,hata yönetimi nedir?
Programın akışında bir hata yok iken sadece belirli durumlar için sıkıntı çıkarabilen oluşumlar
gerçekleşebilir. Ve bunlarıda yönetmek gerekir.
Örneğin; matematikteki sıfıra bölünme hatası ile igili. Hiçbir sayı sıfıra bölünemez.
*/
// Example
// var name = "Umut";
//
// if(name != "Umut UZ")
//   throw Error("Unexpected name "+name);
//   // throw error fırlattıktan sonra aşağıdaki kodlar okunmaz. Sonlanır program.
//
// console.log(name);

// İstisnayı kontrol edeceğiniz alan try idir.
try{
  var number1 = 10;
  var number2 = 1;
  var result = number1 / number2;
  if(number2 === 0)
    throw Error("You cannot split a number to zero!");
    // Burada fırlattığım hatayı catch ile yakalayabilirim. Wonderful değil mi? :D
  else
    console.log(result);
}catch(throwedError){
  console.log(throwedError);
}finally {
  // Hata olsa da olmasa da bu finally alanı çalışır.
  // Kullanıladabilir kullanılamayadabilir. O anki duruma göre değerlendirilir.
  console.log("Finally worked");
}
