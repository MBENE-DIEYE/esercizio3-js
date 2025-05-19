//---------------------------------------- strazioni elementi base-----------------------
const array =[23,25,1,13,15]
let [primoelemento,secondoelemento]=array
console.log("il primo è:"+ primoelemento , "il secondo elemento è:" +secondoelemento)

// ---------------------------------------saltare elementi durante il destructuring-------------------
let [elemento1, ,terzaelemento]=array
console.log("il primo è:"+ elemento1 , "il terza elemento è:" +terzaelemento)

// --------------------------------------------------destructuring con valori predefiniti------------------
const array1=[24,45,676,67]
let [valore1,valore2,valore3,valore4,...valoremanca] =array1
console.log(valore1,valore2,valore3,valore4,valoremanca)

// -------------------------------------------------estrazione di proprietà----------------

const person ={
    nome:"mbene",
    cognome:"dieye",
    èta:24

}
let{nome,cognome}=person
console.log(nome,cognome)
// ----------------------------------------------------destructuring con nome di variabili-------------
let{prenom,surnom}=person
console.log(prenom,surnom)
// ----------------------------------------------copia di un array-------------------------
const mioarray=[23,45,67,"fsfd","yhtrg"]
const copia =[...mioarray]
console.log(mioarray)
console.log(copia)
// --------------------------------unione di due array--------------------
 const array2=[1,2,3,4]
 const array3=[5,6,7,8,9]
 const unio=[...array2,...array3]
 console.log(unio)