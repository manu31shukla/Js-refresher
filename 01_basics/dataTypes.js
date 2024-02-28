"use strict"; //using this ensures that the code is trated as newer versions of js

//alert(4+6) //since we're using node.js not browser this will throw error else would have returned with 10 in browser if used with html files

//code shouln't only be executable but also human-readable
//all the important documentation are in ECMA Standards(tc39) & mdm

//datatypes -->
let name = "Manu" //string datatype
let age = 23 //number datatype(has a range of ~ 2^53) //bigint is used of very very large values
let isLoggedIn = true //boolean datatype
//null <-- standalone value used for specifying empty values
//undefined
//symbol <-- used for specifying uniqueness, react, figma uses these frequently

//object
console.log(typeof(null)); //output will be object which is a loophole in js