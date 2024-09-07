// // student 3 object
// let student3 = {
//     firstName: "Kelvin" ,
//     lastName: "Boniface",
//     age: 24,
//     CGPA: undefined,
//     isGraduated:false,
//     complexion: "fair",
// };

// // student 4 object
// let student4 = {
//     firstName: "Faith" ,
//     lastName: "Dowo" ,
//     age:26 ,
//     CGPA:3.5 ,
//     isGraduated: true,
//     complexion: "dark",
// };

// student3.wife = "Jeniffer";

// let students = [
//     {
//         firstName: "Kelvin" ,
//         lastName: "Boniface",
//         age: 24,
//         CGPA: undefined,
//         isGraduated:false,
//         complexion: "fair",
//  },
//  {
//     firstName: "Faith" ,
//     lastName: "Dowo" ,
//     age:26 ,
//     CGPA:3.5 ,
//     isGraduated: true,
//     complexion: "dark",
//  },

//  {
//     firstName: "Faith" ,
//     lastName: "Dowo" ,
//     age:26 ,
//     CGPA:3.5 ,
//     isGraduated: true,
//     complexion: "dark",
//  },
// ];

// // console.log (students.length);


let nums = [1, 3 ,5 , 7 ,8 , 9 , 11 , 30  ,23 , 50 ,20 , 12 ,13 ,14 ,18 ,22, 18];

const numsList = document.getElementById("nums-list");



// let index = 0;
// while (index < nums.length) {
//    const numLi = document.createElement("li");
 
//    numLi.textContent = nums[index];
    
//    numsList.appendChild(numLi);

//    index +=1;

// }

// for (index =0; index< nums.length; index++) {
//     const numLi = document.createElement("li");
//     numLi.textContent = nums[index];

//     numsList.appendChild(numLi);
// } 

// for (num of nums) {
//     const numLi = document.createElement("li");
//     numLi.textContent = num;

//     numsList.appendChild(numLi);
// }

// function addArrayNums() {
//     let total = 0;
//     for (num of nums) {
//         total +=num;
//     }

//     const totalHeading = document.getElementsByClassName("total")[0];

//     return (totalHeading.textContent= total); 

// }

// const addButton = document.getElementById("add-num");

// addButton.addEventListener("click", addArrayNums);
// || OR
// && AND


// Write a function that adds up two numbers
// function addTwoNums(num1, num2) {
//     if (typeof num1 !== "number" || typeof num2 !=="number") {
//         return console.log("invalid number");
//     }
//     let total = num1 + num2;

//     return total;
// }

// console.log(addTwoNums(10, 5)); 

// let num1= 5;
// let num2= 5;
// let num3 = 10;
// let num4 =

// console.log (num1===num2);
// let isvalid = false;

// console.log (!num4)

let x = 1;     //truthy
let y = 0;   // falsey
let z = null; //falsey

console.log(x && !z); 