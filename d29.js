// Q1
//  let n = 11111;
// let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


// let results = {};

// for (let demon of denominations) {
//   if (n >= demon) {
//     results[demon] = Math.floor(n / demon);
//     n %= demon;
//   }
// }

// // console.log(results);
// for (let [key, value] of Object.entries(results)) {
//     console.log(`₹${key} x ${value}`);
// }

// Q2

// let rating = 5
// let nm = "RRR"

// if(rating>=0.0 && rating<=2.0){
//     console.log("Bhai 💩 movie hai" + "MOvie nAMe is : "+nm)
// }
// else if(rating>=2.1 && rating<=3.4){
//     console.log("Bhai okay hai movie" + "MOvie nAMe is : "+nm)
// }
// else if(rating>=3.5 && rating<=4.5){
//     console.log("Bhai mast picture hai kdk" + "MOvie nAMe is : "+nm)
// }
// else if(rating>=4.6 && rating<=5.0){
//     console.log("Bhai superhit movie bro " + "MOvie nAMe is : "+nm)
// }

// Q3
let empDetails = {
  emp1: {
    gender: "M",
    qualification: "UG",
    exp: 10,
    sal: 0,
  },
  emp2: {
    gender: "F",
    qualification: "UG",
    exp: 10,
    sal: 0,
  },
  emp3: {
    gender: "M",
    qualification: "PG",
    exp: 10,
    sal: 0,
  },
  emp4: {
    gender: "F",
    qualification: "PG",
    exp: 10,
    sal: 0,
  },
  emp5: {
    gender: "M",
    qualification: "UG",
    exp: 5,
    sal: 0,
  },
  emp6: {
    gender: "F",
    qualification: "UG",
    exp: 5,
    sal: 0,
  },
  emp7: {
    gender: "M",
    qualification: "PG",
    exp: 5,
    sal: 0,
  },
  emp8: {
    gender: "F",
    qualification: "UG",
    exp: 5,
    sal: 0,
  },
};

for (let emp in empDetails) {
  if (
    empDetails[emp].gender == "M" &&
    empDetails[emp].exp >= 10 &&
    empDetails[emp].qualification == "PG"
  )
    empDetails[emp].sal = 15000;
  else if (
    empDetails[emp].gender == "M" &&
    empDetails[emp].exp >= 10 &&
    empDetails[emp].qualification == "UG"
  )
    empDetails[emp].sal = 10000;
  else if (
    empDetails[emp].gender == "M" &&
    empDetails[emp].exp < 10 &&
    empDetails[emp].qualification == "PG"
  )
    empDetails[emp].sal = 10000;
  else if (
    empDetails[emp].gender == "M" &&
    empDetails[emp].exp <10 &&
    empDetails[emp].qualification == "UG"
  )
    empDetails[emp].sal = 7000;
  else if (
    empDetails[emp].gender == "F" &&
    empDetails[emp].exp >= 10 &&
    empDetails[emp].qualification == "PG"
  )
    empDetails[emp].sal = 12000;
  else if (
    empDetails[emp].gender == "F" &&
    empDetails[emp].exp >= 10 &&
    empDetails[emp].qualification == "UG"
  )
    empDetails[emp].sal = 9000;
  else if (
    empDetails[emp].gender == "F" &&
    empDetails[emp].exp < 10 &&
    empDetails[emp].qualification == "PG"
  )
    empDetails[emp].sal = 10000;
  else if (
    empDetails[emp].gender == "F" &&
    empDetails[emp].exp < 10 &&
    empDetails[emp].qualification == "UG"
  )
    empDetails[emp].sal = 6000;
}

console.log(empDetails);



// Lookup table

const InfoTable = {
    "poo1" :{name:"tablet" , price:3000 , desc:"lorem lorem"},
    "poo3" :{name:"phoone" , price:5000 , desc:"lorem lo=rem"},
    "poo2" :{name:"gadget" , price:2000 , desc:"lorem orem"}
}

let prodId = "poo2"
let prodInfo = InfoTable[prodId] || {}

console.log(prodInfo)