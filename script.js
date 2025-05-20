//---------------------------------------- strazioni elementi base-----------------------
const array =[23,25,1,13,15]
let [primoelemento,secondoelemento]=array
console.log("il primo è:"+ primoelemento , "il secondo elemento è:" +secondoelemento)

// ---------------------------------------saltare elementi durante il destructuring-------------------
let [elemento1, ,terzaelemento]=array
console.log("il primo è:"+ elemento1 , "il terza elemento è:" +terzaelemento)

// --------------------------------------------------destructuring con valori predefiniti------------------
const array1=[24,45,676,67]
let [valore1,valore2,valore3,valore4,valore5=7] =array1
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
let{nome: prenom,cognome:surnom}=person
console.log(prenom,surnom)


// -------------------------------------destructuring con valori predefiniti oggetto----------------------
const user ={
    username:"fbgf",
    password:"cfjf",
    age:23
}
let {username,password,age,mansione ="studente"}=user
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
 let som = args.reduce((acc,cur)=>{
        return acc + cur
    },0)
    return   arg1 + arg2 + som
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

// ------------------conversione di un oggetto in una stringa---------------------
 const javascript ={
    nome:"sono una language"
 }
 const javascriptjson= JSON.stringify(javascript)
 console.log(javascriptjson)

//  -------------------conversione di una stringa json in oggetto--------------------

const jsonjavascript= '{"language":"javascript"}'
const javascriptreale= JSON.parse(jsonjavascript)
console.log(javascriptreale)

// ---------------------------------------------manipolazione di dati json -------------------------------

const list = `[
    {"nome":"mbene","cognome":"dieye"},
    {"nome":"elisa","cognome":"alba"},
    {"nome":"marco","cognome":"shing"},
    {"nome":"robert","cognome":"derms"}
]`;

const oggettoJavascript = JSON.parse(list)
// console.log(oggettoJavascript)
oggettoJavascript.push({nome :"anna", cognome: "dea"})
 const nuova= JSON.stringify(oggettoJavascript)
 console.log(nuova)
 
//  -------------------------stringa simplice con tamplate literal----------------------

let nome1 ="anna"
let cognome1 = "dea"

let nomeCompleta =  ` ${nome1} ${cognome1}`
console.log(nomeCompleta)

//  -------------------------stringa multilinea con tamplate literal----------------------

let nome2 = "mionome"
let cognome2 = "miocognome"
let età = 35
let cità = "borgonovo"

let informazioni = ` ${nome2} ${cognome2} ${età} ${cità}`
console.log(informazioni)

// -----------------------------funzione e template literal ---------------------------
 const person2 ={
        nome:"aram",
        cognome:"diop",
        età:12
    }
function templateLiteral(oggetto){
    return ` ${oggetto.nome} ${oggetto.cognome} ${oggetto.età}  `
}

const maperson =templateLiteral(person2)
console.log(maperson)

// ---------------------------------------------------utilizza console.log ----------------------------------

let numero = 5;
console.log(numero)

let string ="sono una stringa";
console.log(string)

let arrayy = [2,3,"fef",5];
console.log(arrayy)

let profumo ={
    nome: "my way",
    colection : 2010,
    color: "rosa"
}
console.log(profumo)

// ----------------------------utilizza console.error e console.warn------------------

let variable = "dfcfe"
console.error("ha un valore specifico")
console.warn("ha un altro valore specifico")

// ----------------------------------utilizza console.table e console.group ---------------------------------

const table =[
    {marca: "toyota" ,modello:"vff", anno:2023},
    {marca: "fff" ,modello:"edwd", anno:2013},
    {marca: "ewr" ,modello:"frf", anno:2020}
]

console.table(table)
console.group(table)

// -------------------------------------------setTimeout ----------------------------------

setTimeout (()=>{
    console.log("messaggio dop 3 secondi")
},3000)

// ------------------------------------setInterval--------------------------------

setInterval(()=>{
    console.log("messaggio dopo due secondi")
},2000)