// Q1
// function caller(fn) {
//   setTimeout(fn, 3000);
// }

// caller(function () {
//   console.log("heyyyy");
// });

// Q2
// function vap(fn , ar){
//     let newarr =[]
//     for (let i=0;i<ar.length;i++){
//         newarr.push(fn(ar[i]))
//     }

//     return newarr
// }

// let k = vap(function (a){
//     return a+10
// },[1,2,3,4])

// console.log(k)


// Q3 Closures
// function returninig a function while also using value from its parent element

// function count(){
// let c=0
//     return ()=>{
//          c++
//          console.log(c)
//     }
// }

// var mc = count()
// mc()
// mc()
// mc()

// q4 call limit function 

function f (n,func){
let limit =0
   return function(){
    if(limit < n){
        limit++
        func()

    }
    else{
        console.error("limit reached")
    }
   }

}

let k = f(1, function(){
    console.log("hey i ran")
})
k()
k()
k()
k()
k()
k()

// function fnlimiter (fn , limit){

//     return function(){

//     }
// }

// let limiter = fnlimiter(function(){
//     console.log('hiiii')
// },3)