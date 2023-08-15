// function logIn(useName, password){
//     console.log(`${useName} logged in successfully`)
// }

// logIn('sakib');

//--------------------------------------------FUNCTIONS--------------------------------------------


// function upperCase(str){
//     return str.toUpperCase();
// }

// const result = upperCase('sakib');
// console.log(result);



//--------------------------------------------------------------------------------------------------

// function add(a,b=0){//default value
//     const c =a+b;
//     return c;
// }

// const result = add(10);
// console.log(result);

//------------------------------------------variable scope------------------------------------------
// const file = "abc.txt";

// (function fileName(){
//     console.log(file);
// })();

//----------------------------------------------declaration------------------------------------------

// function add(a,b){
//     return a+b;
// }

//----------------------------------------------expression------------------------------------------

// const add = function(a,b){
//     return a+b;
// }

// const result = add(10,20);
// console.log(result);



//----------------------------------------------callback------------------------------------------


function formatText(text,formatCB){
    return typeof formatCB === 'function' ? formatCB(text) : text.toUpperCase();
   
}

const result = formatText('sakib',function(text){
     text.charAt(0).toUpperCase()+text.slice(1);
})

console.log(result);

//----------------------------------------------arrow function------------------------------------------

// const add = (a,b) => a+b;

// const result = add(10,20);

// console.log(result);

//----------------------------------------------arrow function------------------------------------------

//all form of arrow function

// const add = (a,b) => a+b;

// const add = (a,b) => {
//     return a+b;
// }

// const add = (a,b) => {
//     const c = a+b;
//     return c;
// }

// const result = add(10,20);

// console.log(result);

//----------------------------------------------arrow function------------------------------------------

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const result = numbers.map(function(number){
//     return number*2;
// })

// const result = numbers.map(number => number*2);

// console.log(result);

//----------------------------------------------arrow function------------------------------------------


 