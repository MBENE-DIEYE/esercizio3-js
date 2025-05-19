// strazioni elementi base
const array =[23,25,1,13,15]
let [primoelemento,secondoelemento]=array
console.log("il primo è:"+ primoelemento , "il secondo elemento è:" +secondoelemento)

// saltare elementi durante il destructing
let [elemento1, ,terzaelemento]=array
console.log("il primo è:"+ elemento1 , "il terza elemento è:" +terzaelemento)
