  
//-------------------------------------------Array-------------------------------------------

// const jsArray = ['jsvascript','react','c++','java','python'] ;

// console.log(jsArray.length);
// console.log(jsArray[4]);
// jsArray.push('nodejs');
// console.log(jsArray);
// jsArray.pop();//remove last element
// console.log(jsArray);
// jsArray.unshift('nodejs');//add element at first
// console.log(jsArray);
// jsArray.shift();//remove first element
// console.log(jsArray);

//--------------------------------------------For Loop--------------------------------------------



// for(let i=0;i<5;i++){
//     console.log('*');
// };

// const cars = [
//     {
//         name:'bmw',
//         price:100000
//     },
//     {
//         name:'audi',
//         price:200000
//     },
//     {
//         name:'ferrari',
//         price:300000
//     }    
// ];

// let s=10;
// for(let i=0;i<cars.length;i++){
//     cars[i].price=cars[i].price-10;
// }

// for(let i=0;i<cars.length;i++){
//      console.log(cars[i]);
// };

//--forEach--//

// cars.forEach(function(car){
//     car.price=car.price-50000;
// });


//     console.log(cars);


//--forof--//


// for(let car of cars){
//     car.price = car.price-900000;
// }
// console.log(cars);

//--------------------------------------------FILTER--------------------------------------------


// const students = [
//     {
//         name:'sakib',
//         marks:80
//     },
//     {
//         name:'tamim',
//         marks:70
//     },
//     {
//         name:'mushfiq',
//         marks:30
//     }

// ];

// const passStudent = students.filter(function(st){
//     return st.marks>40;
// });

// console.log(passStudent);

//--------------------------------------------MAP--------------------------------------------

// const students = [
//     {
//         fName:'sakib',
//         lName:'hasan'
//     },
//     {
//         fName:'tamim',
//         lName:'iqbal'
//     }    
// ]

// const fullName = students.map(function(st){
//     return name=st.fName+' '+st.lName;
// });

// console.log(fullName);


//--------------------------------------------REDUCE--------------------------------------------


// const movies = [
//     {
//         name:'movie1',
//         price:100
//     }
//     ,
//     {
//         name:'movie2',
//         price:200
//     }
//     ,
//     {
//         name:'movie3',
//         price:300
//     }
// ]

// const rd = movies.reduce((acc,curr)=>{
//     return acc=acc+curr.price;
// },0)

// console.log(rd);


//--------------------------------------------Indexof--------------------------------------------

//  const admins = [1,9,8];

// const user={
//     name:'sakib',
//     id:9
// }
// const isAdmin = admins.indexOf(user.id)!==-1;
// console.log(isAdmin);

//--------------------------------------------Includes--------------------------------------------

// console.log(admins.includes(user.id));

//--------------------------------------------Find--------------------------------------------


// itFarm = [
//     {
//         name:'brainstation',
//         salary:10000
//     },
//     {
//         name:'oliyo',
//         salary:20000
//     },
//     {
//         name:'WellDev',
//         salary:30000
//     },

// ]



// const findIT= itFarm.find(function(it){
//     return it.salary>20000;
// })

// console.log(findIT);

//--------------------------------------------sort--------------------------------------------
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.sort(function(a,b){
//     return b-a;
// })
// console.log(numbers);

//--------------------------------------------splice--------------------------------------------

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.splice(2,3,11,12,13);
// console.log(numbers);
