let score = 33 //a number datatype
console.log(typeof(score)); //output will be number

let score2 = "44" // a string datatype
console.log(typeof(score2)); //output will be string

let score3 = String(score); //converting datatype of score from number to string
console.log(typeof(score3));

let score4 = Number(score2); //converting datatype of score 1 from string to number
console.log(typeof(score4));

//when we try to do conversion from string to number
// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1
// null ==> 0

// converting to boolean
// 1 => true
// "manu" => true
// "" => false
// 0 => false