const rollNo = 100 
let accountMail = "manu31shukla@gmail.com"
var accountPass = "abc123" //mostly used earlier, now it's usage is avoid due to it's block and functional scope limitations 
accountCity = "Prayagraj" //not a recommended method
let accountState; //by default value will be undefined


//re-writing values
//rollNo = 100 //not allowed for const , throws error
accountMail = "manu31shukul@gmail.com"
var accountPass = "abc@123"
accountCity = "Ghaziabad"


//printing these changed values
console.log(rollNo);

console.table([accountMail, accountPass, accountCity, accountState]); //gives output in tabular format


// <-- used for commenting
/*
used for multi-line commenting
*/