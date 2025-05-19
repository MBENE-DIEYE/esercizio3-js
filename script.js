//---------------------------------------- strazioni elementi base-----------------------
const array =[23,25,1,13,15]
let [primoelemento,secondoelemento]=array
console.log("il primo è:"+ primoelemento , "il secondo elemento è:" +secondoelemento)

// ---------------------------------------saltare elementi durante il destructuring-------------------
let [elemento1, ,terzaelemento]=array
console.log("il primo è:"+ elemento1 , "il terza elemento è:" +terzaelemento)

// --------------------------------------------------destructuring con valori predefiniti------------------
const array1=[24,45,676,67]
let [valore1,valore2,valore3,valore4,valore5] =array1
console.log(valore1,valore2,valore3,valore4,valore5)

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


// -------------------------------------destructuring con valori predefiniti oggetto----------------------
const user ={
    username:"fbgf",
    password:"cfjf",
    age:23
}
let {username,password,age,mansione}=user
console.log(username,password,age,mansione)
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
//  -----------------------------------copia di un oggetto con propietà aggiuntive---------------------

const person1={
    nome:"mbene",
    cognome:"dieye",
    eta:24
}
const copie={...person1,mansione:"student"}
console.log(person1)
console.log(copie)

// ---------------------------------------------funzione con parametri variabili------------------------
function sommadegliArgomenti(arg1,arg2,...args){
    return arg1 + arg2 + args
}
const somma= sommadegliArgomenti(2,4,1,9,8)
const somm= sommadegliArgomenti(4,6,7,3)
 
console.log(somma)
console.log(somm)

// ---------------------------------------------destructuring con rest operator---------------

const numeri =[2,4,5,7,8,9,0]
let [numero1,numero2,...numeris]= numeri
console.log(numero1,numero2)
console.log(numeris)

//--------------------------------------------------destructuring oggetto con rest operator-----------------------

const mioOggetto={
    marca:"ffdg",
    modello:"fdd",
    anno:2003,
    transmizione:"ded"
}
let{marca,modello,...altrinformazioni}=mioOggetto
console.log(marca,modello)
console.log(altrinformazioni)

// ------------------conversione di un oggetto in un stringa---------------------
 const javascript ={
    nome:"sono una laguage"
 }
 const javascriptjson= JSON.stringify(javascript)
 console.log(javascriptjson)