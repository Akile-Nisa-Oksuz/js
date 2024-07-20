//document.getElementById("counter-el").innerText = 5;
//document.getElementById("baslik-html").innerHTML = '<h1>Yeni Bir Hikaye Başlangıcı</h1>';
//let ilksayi = 5; //değiştilebilir değişken
//ilksayi = 6;
//const ikincisayi = 10; //değişmeyen değişken

//function increment() {
//console.log("hello word");
//}
//increment();
let ilksayi = 0;
const incrementBasligi = document.getElementById("counter-el");
function increment() {
  ilksayi = ilksayi + 1;
  incrementBasligi.innerHTML = ilksayi;
} //bir fonsiyon tanımladım ve fonsiyonu buttona bağlayıp çalıştırdım
function save() {
  console.log("kayıt edildi");
}
