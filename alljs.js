//automatically

// x=5
// y=9
// z=x+y
// console.log(z)


// const pi=3.14
// pi=pi+3
// console.log(pi)

// const a=[10,29,30]
// a.push(40)
// a[0]=100
// a=[100,200,300]
// console.log(a)

// var a =9;{
//     var a =10;{
//         a = 2**3;
//     }
// }

// s=5
// g=2
// y=s%g

// let x =9;
// let y =Math.pow(x,2)

// let x= 2
// x<<= 3

// let x =1
// x&= 2




// let x =1
// let y =2

//functions
// let a=9,b=9;
// function add(a,b){
//     console.log(a + b);
// }

// add(a,10)

//objects

// const person = {
//     firstName:"jogn",
//     lastName:"doe",
//     age:50,
//     eyeColor:"blue",
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// console.log(person.fullName())


//string

// let text = "aple,banana,kiwi"
// let part = text.slice(-6)//+ fro start - from end
// console.log(part)


// let text = "aple,banana,kiwi"
// let part = text.substring(5,8)
// console.log(part)

// let tet = "apple , banana,keiwi"
// let part = tet.replace("apple","mango")
// console.log(part)

//  let text = "        apple     ,   banana  ,kiwi   "
//  let t= text.trimStart()
//  console.log(t)

// //convert string to array

// let text = "a,b,c,d,e"
// let part = text.split(",")
// console.log(part)

// let s="one,two,three,four,five"
// let array=s.split(",")
// console.log(array)

// let text = "a,b,cin,d,e"
// let index= text.match("in")
// console.log(index)

// let firstName = "john"
// let lastName = "doe"
// let text=`welcome ${firstName}, ${lastName}!`
// console.log(text)

// let x = (0.2*10+0.1*10)/10
// console.log(x)

// let x = "100"
// let y = "10"
// let z = x+y
// console.log(z)

// let x = 313453133131313434313n
// let y = typeof x
// console.log(y)

// let x = 123;
// x.toString();
// (123).toString();
// console.log((100 + 23).toString())
// console.log(x)

//array
// const cars= ["saab","volvo","bmw"]
// console.log(cars[0])

// const fruits = ["banana","apple","orange"]
// let l= fruits.length
// for(let i=0;i<l;i++){
//     console.log(fruits[i])
// }

// const fruits = ["banana","apple","orange"]
// let fruit = fruits.pop();
// console.log(fruit)
// fruits.push("kiwi")
// console.log(fruits)
// const fruits2 = ["banana","apple","orange","kiwi","mango"]
// fruits2.shift()
// console.log(fruits2)

//splice
// const cars = ["bmw","audi","marsitiz"]
// cars.splice(2,2,"volvo","toyota")
// console.log(cars)
//slice
// const company = ["google","microsoft","facebook","apple","amazon"]
// let c = company.slice(1,2)
// console.log(c)

// const fruits  = ["banana","apple","orange","kiwi","mango"]
// let fruit = fruits.sort()
// console.log(fruit)

// const numbers = [40, 100, 1, 5, 25, 10];
// let n = numbers.sort(function(a,b){return a-b})
// console.log(n)

// const fruits = [56,85,200,6,2,9]
// function myArrayMax(fruits) {
//   return Math.min.apply(null, fruits);
// }
// console.log(myArrayMax(fruits))

// const fruits = [9,5,6,4,10,2,1]
// function maxar(fruits){
//     let l=fruits.length
//     let max = -Infinity
//     while(l--){
//         if(fruits[l]>max){
//             max = fruits[l];
//         }
//     }
//     return max;
// }
// console.log(maxar(fruits))

//iteration
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   console.log(value*2);
// }

//filter
// const number = [45, 4, 9, 16, 25];
// let over18 = number.filter(number => number > 18);
// console.log(over18)

// //reduce
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(mhgksj);
// function mhgksj(total,value){
//     return total+value
// }
// console.log(sum)

//dates
//  const d = new Date(year, month, day, hours, minutes, seconds, ms);
//  console.log(d)

// person={fname:"john",lname:"doe",age:25}
// for(let x in person){
//     console.log(person[x])
// }

// const letters = new Set(["a", "b", "c"]);

// // List all Elements

// letters.forEach(function (value) {
//   console.log(value);
// });

// x = "john"
// var x;
// console.log(x)

// y= "doe"
// let y;
// console.log(y)

// const obj  = {name:"hong",age:38}
// const string = JSON.stringify(obj)
// console.log(string)

// setTimeout(myfn,5000)
// function myfn(){
//     console.log("hello")
// }

// function mydisplay(some){
//     console.log(some)
// }
// function myCalculator(n,m){
//     let sum = n+m;
//     return sum;

// }
// let result = myCalculator(5,5)
// mydisplay(result)
// function myDisplayer(some) {

//   console.log(some);}

// async function myFunction() {
//   console.log("hello");
// }
// myFunction().then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// let counter = 0;
// function add(){
//     counter+=1;
// }

// add()
// add()
// add()
// console.log(counter)

// function add(){
//     let c =0;
//     function plus(){
//         c+=1;
//         plus()
//         return c;
//     }
// }
// add()
// add()
// add()

//-------ex1-----------
// function hundred(a,b){
//     if(a==100|| b==100 || (a+b)==100)return true;
// }
// console.log(hundred(100,9))
//----------------ex2----------------

//program to get the extension of a filename
// const getfilename =(str)=>str.slice(str.lastIndexOf('.'));

// console.log(getfilename('index.html'))

// emoji: '👍'
// smile: '😀'
// laughing: '😆'
// blush: '😊'
// smiley: '😃'

// sad: '😔'
// cry: '😢'

// //i am having fun with git

// setTimeout(function(){})

var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);

    if(n<5){
        return res()
    }
    else{
        return rej()
    }
})

ans.then(function(){
    console.log("below")
})
.catch(function(){
    console.log("above")
})

//promises

//code will be in your vs
