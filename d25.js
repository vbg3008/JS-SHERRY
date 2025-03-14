// Q1
// function infi (fn , time){

//     setInterval(fn,3000)
// }

// infi(function(){
//     console.log("hello")
// },3000)

// Q2

// function gree(s) {
//   return function (nm) {
//     console.log(`${s} ${nm}`);
//   };
// }

// let k = gree("hello");
// k("vbg");

// Q3
// function ab (fn){
//     let ex = false
//     return function(){
//     if(!ex){
//         ex=true
//     fn()
//     }
//     else{
//         console.warn("bs kar bhai 1 bar hogya")
//     }
// }

// }
// let v= ab(function(){
//     console.log("to be run onced")
// })

// v()
// v()

// Q4

// throttling :- it stops an function from running till time passes
function throt(fn , delay){
    var lastCall = 0

    return function(){
        let current= Date.now();
        if(current-lastCall >=delay){
            lastCall = current
            fn()
        }

    }

}

let k = throt(function(){
    console.log("lnclsd")
},3000)

k()
setTimeout(function(){k()},3000)
k()