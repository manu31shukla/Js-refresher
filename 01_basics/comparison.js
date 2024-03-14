console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)

//on comparison of different datatypes the output is not predictable
console.log("2">1) //output will be true
console.log("02">1) //output will be true

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true (because comparison operator (<,>,,=,.=) first convert null to number then compare while equality operators(==) check wothout converting)

//to check value as well as data types
console.log(1==="1");