// assignment 1  age calculator
// let a = prompt("what is ur age")

// if(a > 17 && a<61){
//     console.log("you are an adult")
// }
// else if(a<18){
//     console.log("your an minor")

// }
// else{
// console.log("your an senior citizen");

// }

// assignment2  even odd sum
//  let a = Number(prompt("enter a no"))
//  let b = Number(prompt("enter a no"))
//  if((a+b)%2==0){
//     console.log("sum even")
//  }
//  else{
//     console.log("odd sum")
//  }

// assignment 3  Upper or lower case

// let a = prompt("enter a char")

// if(a >= "A" && a<="Z"){
//     console.log('its UpperCAse')
// }
// else if(a>= "a" && a<="z"){
//     console.log('its Lower')
// }
// else{
//     console.warn("not an char")
// }

// assignment 4  whos grater
// let a = Number(prompt("enter an number"))
// let b = Number(prompt("enter an number"))
// let c = Number(prompt("enter an number"))

// if(a>b && a>c){
//     console.log("a is grater")
// }
// else if(b>a && b>c){
//     console.log("b is grater")
// }
// else {
//     console.log(" c is grater")
// }

// assignment 5 leap year
// let year = Number(prompt("enter a year"))

// if(year%4==0){
//     console.log("it is an leap year")
// }
// else{
//     console.log("not an leap year")
// }

// assignment 6  simple calculator
// let a = Number(prompt("enter a no"))
// let b = Number(prompt("enter a no"))
// let sign = prompt("enter a no")

// if(sign==='+'){
//     console.log(a+b)
// }
// else if(sign==='-'){
//     console.log(a-b)
// }
// else if(sign==='*'){
//     console.log(a*b)
// }
// else if(sign==='/'){
//     console.log(a/b)
// }
// else{
//     console.log("not an valid sign")
// }

// assignment 7   negative positive zero

// let a = Number(prompt("enter a no"))
// if(a<0){
//     console.log("negative")
// }
// else if(a==0){
//     console.log("zero")
// }
// else if(a>0){
// console.log("positive")
// }
// else{
//     console.log(a)
// }

// assignment 8 User greeting
// let name = prompt("Enter your name:");
// let time = parseInt(prompt("Enter the time in 24-hour format (0-23):"));

// if (isNaN(time) || time < 0 || time > 23) {
//     console.log("Invalid time. Please enter a number between 0 and 23.");
// } else if (time >= 5 && time < 12) {
//     console.log(`Good Morning, ${name}!`);
// } else if (time >= 12 && time < 17) {
//     console.log(`Good Afternoon, ${name}!`);
// } else if (time >= 17 && time < 21) {
//     console.log(`Good Evening, ${name}!`);
// } else {
//     console.log(`Good Night, ${name}!`);
// }

//assignment 9 Traffic light
// let a = prompt("enter color").toLowerCase()
// switch(a){
//     case  "red":
//         console.log("Stop!")
//         break
//     case "yellow":
//         console.log("Get Ready")
//         break
//     case "green":
//         console.log("Go")
        // default:
        //     console.log("nothing")
// }

// assignment 10 Multiplication table
// let a= Number(prompt("enter  a no"))
// for(let i=1 ;i<=10;i++){
//     console.log(i*a)
// }

//with while
// let i=1
// while( i<=10){
//     console.log(i*a)
//     i++
// }

// assignment 11  Grade calculator
// let grades = Number(prompt("enter grade"))
// if(grades>=90 && grades<101){
//     console.log("A")
// }
// else if(grades>=80 && grades<90){
//     console.log("B")
// }
// else if(grades>=70 && grades<80){
//     console.log("C")
// }
// else if(grades>=60 && grades<70){
//     console.log("D")
// }
// else if(grades<60){
//     console.log("Fail")
// }
// else{
//     console.log("invalid")
// }

// assignment 12  Simple Login

// let userNm = prompt("enter username");
// let userPs = prompt("enter password");
// if (userNm === "VBG" && userPs === "VBG") {
//   console.log("login success");
// } else {
//   console.log("login failed");
// }

// ASSIGNMENT 13  no swap without 3rd
// let a = Number(prompt("enter a"))
// let b = Number(prompt("enter b"))

// console.log(`before swap A=${a} and B=${b}`)

// a = a+b
// b = a-b
// a = a-b

// console.log(`After swap A=${a} and B=${b}`)

// assignment 14 Fizzbuzz
// let a = Number(prompt("enter a no"))

// if(a%3==0 && a%5==0){
//     console.log("FIZZBUZZ")
// }
// else if(a%3!=0 && a%5==0){
//     console.log("FIZZ")
// }
// else if(a%3==0 && a%5!=0){
//     console.log("BUZZ")
// }

// assignment 15 number reversal
// let a = Number(prompt("enter a 3digit no"))

// // console.log(a.split("").reverse().join(""))

// let reversed = 0;

// while (a !== 0) {
//     let digit = a % 10;  // Extract last digit
//     reversed = reversed * 10 + digit;  // Build reversed number
//     a = Math.floor(a / 10);  // Remove last digit
// }
// console.log(reversed)

// assignment 16 sum of digits
// let num = parseInt(prompt("Enter a number:"));
// let sum = 0;

// while (num !== 0) {
//     sum += num % 10; // Extract last digit and add to sum
//     num = Math.floor(num / 10); // Remove last digit
// }

// console.log(`Sum of digits: ${sum}`);

// assignment 17 palindrome
// let a = Number(prompt("Enter a number:"));
// let original = a; // Store the original value
// let reversed = 0;

// while (a !== 0) {
//   let digit = a % 10;
//   reversed = reversed * 10 + digit;
//   a = Math.floor(a / 10);
// }

// if (original === reversed) { // Compare with the original value
//     console.log("It is a palindrome");
// } else {
//     console.log("Not a palindrome");
// }

// assignment 18 reverse without string methods

// let a= prompt("enter a string")
// let b=""
// for(let i=a.length-1;i>=0;i--){
//     b += a[i]
// }

// console.log(b)

// assignment 19 find second largest
// let a = Number(prompt("enter a no"));
// let b = Number(prompt("enter a no"));
// let c = Number(prompt("enter a no"));

// let nums = [a, b, c];
// console.log(nums);
// largest = 0;
// secLargest = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > largest) {
//     secLargest = largest;
//     largest = nums[i]
//   }
// }
// console.log(`largest = ${largest} and 2nd =${secLargest}`)

// assignment 20  find 1st non repeating letter
// let a = prompt("Enter a string");

// for (let i = 0; i < a.length; i++) {
//     let flag = 0;

//     for (let j = 0; j < a.length; j++) {
//         if (i !== j && a[i] === a[j]) {  // Exclude itself
//             flag = 1;  // Mark as repeating
//             break;  // No need to check further
//         }
//     }

//     if (flag === 0) {  // If not repeated, it's the first non-repeating character
//         console.log("First non-repeating character:", a[i]);
//         break;
//     }
// }
// assignment 21 even digit counter
// let a = Number(prompt("enter nos"));
// count = 0;

// while (a !== 0) {
//   num = a % 10;
//   if (num % 2 == 0) {
//     count++;
//   }
//   a = Math.floor(a / 10);
// }
// console.log(count);

// assignment 22 nested conditions challange
// let sal = Number(prompt("enter salary"));
// let age = Number(prompt("enter age"));

// if (age < 18) {
//   console.log("Not eligible");
// } else if (sal < 20000) {
//   console.log("Low salary");
// } else if (sal >= 50000) {
//   console.log("High salary");
// } else {
//   console.log("Medium salary");
// }

// assignment 23 toggle case
// let str = prompt("Enter a string");
// console.log("Before:", str);

// let toggledStr = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLowerCase()) {
//     toggledStr += str[i].toUpperCase();
//   } else {
//     toggledStr += str[i].toLowerCase();
//   }
// }

// console.log("After:", toggledStr);

// assignment 24 find missing no in consequtive sequence 

// let no1 = Number(prompt("enter no"))
// let no2 = Number(prompt("enter no"))
// let no3 = Number(prompt("enter no"))
// let no4 = Number(prompt("enter no"))
// let no5 = Number(prompt("enter no"))

// nos = [no1, no2, no3, no4, no5];
// expected = (no5*(no5 + 1)) / 2;
// actual = no1+ no2 + no3 + no4 + no5;
// console.log(`missing no is ${expected - actual}`)

// assignment 25 convert number to word 
// let a = Number(prompt("enter no"))

// switch (a){
//     case 1:console.log("one")
//     break;
//     case 2:console.log("two")
//     break;
//     case 3:console.log("three")
//     break;
//     case 4:console.log("four")
//     break;
//     case 5:console.log("five")
//     break;
//     case 6:console.log("six")
//     break;
//     case 7:console.log("seven")
//     break;
//     case 8:console.log("eight")
//     break;
//     case 9:console.log("nine")
//     break;
//     case 0:console.log("zero")
//     break;
        // default:
        //     console.log("nothing")


// }
