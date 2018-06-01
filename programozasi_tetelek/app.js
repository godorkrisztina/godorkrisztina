console.log("hello world");
// csere programozási tétel
let a=3;
let b=4;
let c=a;
console.log('a értéke: '+a+' b érteke:'+b );
a=b;
b=c;
console.log('a értéke:'+a+' b értéke: '+b);

//1.Összegzés/sorozatszámítás tétele
let osszeg =0;
let szamok = [5,7,2,9,5,4];
for (let i = 0; i < szamok.length; i++) {
  osszeg=osszeg+szamok[i];
}
  console.log('az összeg értéke:'+osszeg);

//2.Eldöntés tétele
let x=[5,7,2,9,5,4];
var i = 0;
while (i < x.length && x[i] !== 2){
  i= i+1;
}
if (i< x.length) {
  let van=true;
  console.log("van benne 2-es");
}
//FOR-ciklus
let j = 0;
let szamok2 = [5,2,7,9,5,4];
for (let i=0; i< szamok2.length;i++){
  if (szamok2[i] === 2){
    console.log('Van 2-es szám');
  }
}

//3.Lineáris keresés tétele
//let x=[5,7,2,9,5,4];
var i = 0;
while (i < x.length && x[i] !== 2){
  i= i+1;
}

let van;
let sorsz;
if (i< x.length) {
  van=true;
  console.log("van benne 2-es")
}
if  (van) {
  sorsz=i;
  console.log("sorszám: " +sorsz);
}

//4.Megszámlálás tétele
let db = 0;
for(let i=0; i<x.length; i++) {
  if (x[i]%2 === 0) {
    db=db + 1;
  }
}
console.log("A tömbben" +db+ "darab páros szám van");


//5.Maximumkiválasztás tétele
let max=0;
for(let i=1; i < x.length; i++) {
  if (x[i]>x[max]) {
    max =1;
  }
}
console.log("a legnagyobb elem a " +x[max]);

//6.Buborékrendezéses tétel
//let x=[5,7,2,9,5,4];

for (i =x.length; i>1; i--) {
  for (let j=0; j < i-1; j++) {
    if (x[j]>x [j+1]) {
      c= x[j];
      x[j]=x [j+1];
      x[j+1]=c;
    }
  }
}
 console.log(x);

//7. Maxmimum kiválasztásos rendezés tétele
//let x=[5,7,2,9,5,4];




