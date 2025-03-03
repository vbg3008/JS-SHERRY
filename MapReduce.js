// MAP to perform some action and put results in a new array

let arr = [1, 2, 3, 4, 5, 5];
let newArr = [];
// newArr = arr.map((i) => {   //in new array add value
//   return i%2==0 ? i :"nan";
// });

// newArr = arr.forEach((i)=> {
//     console.log( i+2)
// })

//filter
// newArr = arr.filter((i)=>{  //add true value element to new arr for false ignore
//     return i%2!==0
// })

//reduce
newArr = arr.reduce((accum , key)=>{ //by combinint array make one element
    return accum*key
},1)

console.log(newArr);
