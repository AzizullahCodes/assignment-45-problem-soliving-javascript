/*___________________________ Question no 1 ________________________
find factorial by for loop
_____________________ Answer ________________________________________ */
// function recurion(num){
//     if(num === 1){return 1;}
//     else{let fact = num *recurion (num -1)
//         return fact
//     }
// }
// let ans = recurion(5);
// console.log(ans)
/*___________________________ Question no 2 ________________________
Save and Show Username
Task:

Take a username from an input field and save it in local storage when the user clicks the "Save" button.

On page load, display the saved username in an <h2> element.

Expected Output:

User enters: Aziz → Page shows: Welcome, Aziz! even after refreshing the page.


_____________________ Answer ________________________________________ */
// function saving(){let getInput = document.getElementById('userinput').value;
//     let getDisplay = document.getElementById('heading');
//  getInput = JSON.stringify(getInput);
// localStorage.setItem('task',getInput);
// let get = localStorage.getItem('task');
//     get = JSON.parse(get);
// getDisplay.innerHTML = get;
// }

/*___________________________ Question no 3 ________________________
Hoisting
_____________________ Answer ________________________________________ */
// console.log(name);
// var name = 'Aziz'
// greeting('Aziz')
// function greeting(name){console.log(`hello ${name}`)}
// greeting('Mubashir')
// const greeting = (name)=>{console.log(`hello ${name}`)}


/*___________________________ Question no 4 ________________________
Exponentiation Operator
_____________________ Answer ________________________________________ */
// let num = 5;
// let result = num ** .5;
// console.log(result)
// let num = 5; 
// let ans = Math.pow(num,2);
// console.log(ans)


/*___________________________ Question no 5 ________________________
Itrator for/of
_____________________ Answer ________________________________________ */
// let fruits = ['apple','mango','dates'];
// // for(let key of fruits){console.log(key)}
// for(let key in fruits){console.log(`${key} : ${fruits[key]}`)}

/*___________________________ Question no 6 ________________________
Itrator in is used in object
_____________________ Answer ________________________________________ */
// const student = {name : 'Aziz',
//     class : 'Matric',
//     age : 30
// }

// console.log(student);
// for(let key in student){console.log(`${key} : ${student[key]}`)}


/*___________________________ Question no 7 ________________________
destructuring array
_____________________ Answer ________________________________________ */
// let [name,age,classe] = ['aziz',30,'Matric'];
// console.log(name);
// console.log(age);
// console.log(classe)
/*___________________________ Question no 8 ________________________
object destructuring
_____________________ Answer ________________________________________ */
// const studentRecord = {name :'sndleeb',
//     classe : 'Inter',
//     rollNo : 323,
// }
// console.log(studentRecord.name);
// console.log(studentRecord.classe);
// console.log(studentRecord.rollNo);
// const {name,classe,rollNo} = studentRecord;
// console.log(name);
// console.log(classe);
// console.log(rollNo);


/*___________________________ Question no 9 ________________________
optional chaining
_____________________ Answer ________________________________________ */
// const student ={ name : 'Aziz',
//     other : {
//         residency : {district : 'Attock',
//             education : {course : 'webdevelopmetn'}
//         }
//     }
// }
// console.log(student?.other?.age?.residency?.district)
/*___________________________ Question no 10 ________________________
enhanced object literals
_____________________ Answer ________________________________________ */
// let name = 'aziz';
// let course = 'web development';
// let rollNo = 2321;
// const studentRecord = {name,
//     course,
//     rollNo
// }
// console.log(studentRecord.rollNo);

/*___________________________ Question no 11 ________________________
ternary operator
_____________________ Answer ________________________________________ */
// let age = 2;
// let condition = (age >=18)?("eligiblie"): ('Not eligible');
// console.log(condition)
/*___________________________ Question no 12 ________________________
default parameter
_____________________ Answer ________________________________________ */
// const calculation = (a,b = 100)=>{return a + b;}
//  let ans = calculation(4)

// console.log(ans)
/*___________________________ Question no 13 ________________________
rest Parameter
_____________________ Answer ________________________________________ */
// const renderData = (course,semester,...rest)=>{console.log(rest);
//     console.log(course);
//     console.log(semester)
// };
// renderData('webdevelopmet','autum','name','class','age')

/*___________________________ Question no 14 ________________________
spread operator
_____________________ Answer ________________________________________ */
// let fruits = ['apple','mango'];
// let vegetables = ['lady finger','potato'];
// // let newArray = fruits.concat(vegetables);
// let newArray = [...fruits,...vegetables];
// console.log(newArray);
// // let copy = [...newArray];
// let copy = newArray.slice(0);
// console.log(copy);
// let add = ['orange','grapes',...copy,'pumpkin','raddish'];
// console.log(add)
// const studentRecord  = {name : 'aziz',
//     course : 'web development',
//     rollNo: 321,
//     infom : {district :'Mianwali'}
// }
// console.log(studentRecord);
// const newObj = {...studentRecord};
// console.log(newObj);
// let sstudentRecord = {...studentRecord,health: 'fit',oldage : 'not',};
// console.log(sstudentRecord)

/*___________________________ Question no 15 ________________________
math.max and spread operator
_____________________ Answer ________________________________________ */
// let num = [2,4,33,4,55,333,32.21];
// let mx = Math.max(...num);
// console.log(mx)
// let num = [2,4,33,4,55,333,32.21];
// let mx = num[0];
// for(let i = 0;i <num.length;i++){if(num[i] > mx){mx = num[i];

// }}
// console.log(mx)



/*___________________________ Question no 16 ________________________
todo list till delete
_____________________ Answer ________________________________________ */
// function saveData(){let getInput = document.getElementById('userinput').value;
//     if(getInput == ''){alert('plz enter data');
//         return;
//     };
//     let getData = localStorage.getItem('task');
//        if(getData == null){getData = []}
//        else{getData = JSON.parse(getData)};

//     getData.push(getInput);
//     getData = JSON.stringify(getData);
//     localStorage.setItem('task',getData);
//     document.getElementById('userinput').value = '';
//     document.getElementById('userinput').focus();
//     // we call show data 
//     showData()
// }
// // show data
// function showData(){let gerFromLocalStorage = localStorage.getItem('task');
//     gerFromLocalStorage = JSON.parse(gerFromLocalStorage);
//     if(gerFromLocalStorage){let list = document.getElementById('display');
//         list.innerHTML = '';
//         for(let i = 0; i<gerFromLocalStorage.length;i++){
//             let li = document.createElement('li');
//             let liContent = document.createTextNode(gerFromLocalStorage[i]);
//             li.appendChild(liContent);
//             let btn = document.createElement('button');
//             let btnContent = document.createTextNode('Delete');
//             btn.setAttribute('onclick',`deleting(${i})`)
//             btn.appendChild(btnContent);
//             list.appendChild(li);
//             list.appendChild(btn);
//         }
//     }
//     else{`<li> No item found in local storage</li>`}
// }
// // now we create function for delete
// function deleting(index){let gerFromLocalStorage = localStorage.getItem('task');
//     gerFromLocalStorage = JSON.parse(gerFromLocalStorage);
//     gerFromLocalStorage.splice(index,1);
//     gerFromLocalStorage = JSON.stringify(gerFromLocalStorage);
//     localStorage.setItem('task',gerFromLocalStorage);

//     // for refreshing 
// showData()
// }


/*___________________________ Question no 17 ________________________
counter app by local storage
_____________________ Answer ________________________________________ */
//  // Get counter value from local storage or start from 0
//     let count = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
//     // Display the initial counter
//     const counterDisplay = document.getElementById('counter');
//     counterDisplay.textContent = count;
//     // Function to update display and localStorage
//     function updateCounter() {
//       counterDisplay.textContent = count;
//       localStorage.setItem('counter', count);
//     }
//     function increment() {
//       count++;
//       updateCounter();
//     }
//     function decrement() {
//       count--;
//       updateCounter();
//     }
//     function resetCounter() {
//       count = 0;
//       updateCounter();
//     }
// nn
// let count = localStorage.getItem('counter')?Number(localStorage.getItem('counter')) : 0;
// const  counterDisplay = document.getElementById('counter');
// counterDisplay.textContent = count;
// function updateCounter(){
//     counterDisplay.textContent = count;
//     localStorage.setItem('counter',count)
// }
// function increment(){count++;
//     updateCounter();
// }
// function decrement(){count--;
//     updateCounter();
// }
// function resetCounter(){count = 0;
//     updateCounter()
// }


/*___________________________ Question no 18 ________________________
counter 
_____________________ Answer ________________________________________ */
// let gerFromLocalStorage = localStorage.getItem('task');
// if(gerFromLocalStorage){gerFromLocalStorage = Number(gerFromLocalStorage)}
// else{gerFromLocalStorage = 0};

// let getDisplay = document.getElementById('display');
// getDisplay.textContent = gerFromLocalStorage;

// function updateCounter(){getDisplay.textContent = gerFromLocalStorage;
//     localStorage.setItem('task',gerFromLocalStorage)
// }

// function decrement (){if(gerFromLocalStorage > 0){gerFromLocalStorage --;
// }
// else{gerFromLocalStorage = 0 }
//     updateCounter();
// }

// function increment(){gerFromLocalStorage ++;
//     updateCounter();
// }

// function reset(){gerFromLocalStorage = 0;
//     updateCounter();
// }
/*___________________________ Question no 19 ________________________
Theme change by toggle classList
_____________________ Answer ________________________________________ */

// 1. Load saved theme
//   if(localStorage.getItem('theme') === 'dark'){
//     document.body.classList.add('dark');
//   }

//   // 2. Toggle function
//   function toggleMode() {
//     document.body.classList.toggle('dark');

//     // Save current theme in local storage
//     if(document.body.classList.contains('dark')){
//       localStorage.setItem('theme', 'dark');
//     } else {
//       localStorage.setItem('theme', 'light');
//     }
//   }
// if (localStorage.getItem('theme') === 'red'){document.body.classList.add('red')}

// function toggleMode(){document.body.classList.toggle('clr')};
// if(document.body.classList.contains('red')){localStorage.setItem('theme','red')}
// else{localStorage.setItem('theme','blue')}


/*___________________________ Question no 20 ________________________
previousElementSibling
_____________________ Answer ________________________________________ */
// let get = document.getElementById('center');
// console.log(get);
// let next = get.nextElementSibling.nextElementSibling;
// console.log(next)
// let last = get.previousElementSibling;
// console.log(last)

/*___________________________ Question no 21 ________________________
higher order function
_____________________ Answer ________________________________________ */

// const greetUser = ()=>{return ()=>{return 'hello user???'}}

// // const output = greetUser();
// // console.log(output())
// const output = greetUser()();
// console.log(output)

// const greetUser = (cb)=>{
//     const showCbValue = cb();
//     console.log(showCbValue);
//     const user = 'Ahmed';
//      return ()=>{
//      return `${showCbValue}  ${user}`;}
// }


// const showUser = ()=>{return 'welcome'}
// const output =greetUser(showUser);
// console.log(output())
/*___________________________ Question no 22 ________________________
Double the Numbers 
Create a higher-order function that takes an array and a function as an argument. 
It should return a new array where the function is applied to every element. 
Example Output: 


input: [1, 2, 3] 
output: [2, 4, 6]   // if the function doubles numbers
_____________________ Answer ________________________________________ */
// function doubleNumber(num){return num*2;}
// function higherOrder(arr,func){let newArr = [];
//     for(let i = 0; i<arr.length;i++){newArr.push(func(arr[i]))}
//     return newArr;
// }

// let result = higherOrder([1,2,3],doubleNumber);
// console.log(result)

/*___________________________ Question no 23 ________________________
Square the Numbers 
Create a higher-order function that takes an array and a function as an argument. 
It should return a new array where each number is squared. 
Example Output: 
input: [1, 2, 3, 4] 
output: [1, 4, 9, 16]

_____________________ Answer ________________________________________ */
// // callback function 
// function squaring(num){return num*num;}
// // processing 
// function higherOrder(arr,cb){let ans = [];
//     for(let i = 0; i<arr.length;i++){ans.push(cb(arr[i]))}
//     return ans;
// }

// let final = higherOrder([2,3,4],squaring);
// console.log(final)

/*___________________________ Question no 24 ________________________
Custom Greeting 
Create a higher-order function that returns a new function. 
The returned function should take a name and print:
Hello <name>! 

Example Output: 

const greet = createGreet("Hello");
greet("Aziz"); // Output: Hello Aziz!
_____________________ Answer ________________________________________ */
// function createGreet(word){
//     return function good(name){console.log(`${word} ${name} !`)}
// }
// const greet = createGreet('hello');;
// greet('Aziz')

/*___________________________ Question no 25 ________________________
higher order function examples
_____________________ Answer ________________________________________ */
// function getData(){
//     return function(){console.log('function from getData')
    
// }}
// let func = getData();
// func();

// function getData(loadData){loadData();}


// let load = ()=>{console.log('load data')}

// getData(load)
/*___________________________ Question no 26 ________________________

_____________________ Answer ________________________________________ */
// const arr1 = [1,2,3,4];
// const arr2 = [];
// for(let i = 0; i<arr1.length;i++){arr2.push(arr1[i]*2)}
// console.log(arr2)
// first 


/*___________________________ Question no 27 ________________________
higher order function
_____________________ Answer ________________________________________ */
// function greet(cb){const showCbValue = cb();
//     console.log(showCbValue);
//     const user = 'ahmed';

//     return function(){return `${showCbValue} ${user}`}
// }
// function showUser(){return 'welcome'}

// const output = greet(showUser);
// console.log(output())

/*___________________________ Question no 28 ________________________
Create a function that accepts a number and a callback function.
The callback should return a multiplier.
The main function should multiply the number by the value returned from the callback.

Expected Output Example:
If number = 5 and callback returns 3 → Output: 15
_____________________ Answer ________________________________________ */
// function higher(cb){const num = cb();
//     const anotherNumber = 20;
//     return function(){return `${anotherNumber * num}`}
// }

// function call(){return 5;}
// let output = higher(call);
// console.log(output())

/*___________________________ Question no 29 ________________________

Create a function that accepts a callback which returns a greeting (like "Good Morning").
Then, the function should return a new function that takes a name and prints "Greeting Name".

Expected Output Example:
If callback returns "Good Morning" and name = "Ali" → Output:
Good Morning Ali
_____________________ Answer ________________________________________ */
// function greeting(cb){const getCbValue = cb();
//     const name = 'Aziz';
//     return function(){return `${getCbValue} ${name}`}
// }
// function greet(){return 'Good Morning'}

// let output = greeting(greet)();
// console.log(output)

/*___________________________ Question no 30 ________________________
Make a function that generates a random number (1 to 10) and passes it to a callback.
The callback should return a string like "Your lucky number is X".

Expected Output Example:
Your lucky number is 7
_____________________ Answer ________________________________________ */
// function callback(take){let getTake = take();
//     return function(){return `your lucky number is ${getTake}`}
// }

// function main(){let random = Math.random()*10
//     random = random + 1;
//     random = Math.floor(random);
//    return random;
// }
// let output = callback(main);
// console.log(output())
/*___________________________ Question no 31 ________________________
Create a function that accepts two numbers and a callback.
The callback should decide which operation to perform (addition or subtraction).

Expected Output Example:
If numbers = 8 and 3 and callback chooses subtraction → Output:
Result is 5

_____________________ Answer ________________________________________ */
// function higher(cb){const operator = cb();
//     let num1 = 2;
//     let num2 = 5;
//     return function(){let result;
//         if(operator === '+'){result = num1 + num2;}
//         else if(operator === '-'){result = num1 -num2;}
//         else if(operator === '*'){result = num1 * num2;}
//         else if(operator === '/'){result = num1 / num2;}
//         else{result = 'not vaid operator'}
//         return `${num1} ${operator} ${num2} = ${result}`;
        
        
//       }
// }
// function call(){return '*';}

// let ans = higher(call);
// console.log(ans())
/*___________________________ Question no 32 ________________________
Detailed example of call back function
_____________________ Answer ________________________________________ */
// function higher(a,b,cb){let operator = cb();
//     let valueA = a;
//     let vauleB = b;
//     return function(){let result;
//         if(operator === '+'){result = valueA + vauleB;}
//        else if(operator === '-'){result = valueA - vauleB;}
//         else if(operator === '/'){result = valueA / vauleB;}
//        else if(operator === '*'){result = valueA * vauleB;}
//         else{result = 'not valid operator'};
//         return result;
//     }

// }



// function call(){return '*';}
// let ans = higher(5,4,call);
// console.log(ans())


/*___________________________ Question no 33 ________________________
Create a function that takes a callback which returns a role (like "Admin").
The function should return another function that takes a username and prints "Welcome back, 
username (Role)".

Expected Output Example:
If role = "Admin" and username = "Sara" → Output:
Welcome back, Sara (Admin)
_____________________ Answer ________________________________________ */
// function higher(cb){let getCb = cb();
//     return function(){return `welcome back ${getCb}`}
// }

// function callback(){return 'Sara';}

// let ans = higher(callback);
// console.log(ans())


/*___________________________ Question no 34 ________________________
create dynamic url
_____________________ Answer ________________________________________ */
// function openWebsite(){let getInput = document.getElementById('userinput').value.trim();
//          document.getElementById('userinput').value = '';
//          document.getElementById('userinput').focus();
//     if(getInput !== ''){let fullUrl = "https://www." + getInput + ".com";
//         window.open(fullUrl,"_blank","width:400px; height: 400px;");
//     }
//     else{alert('plz enter a website name')}
// }




/*___________________________ Question no 35 ________________________
create dynamic url
_____________________ Answer ________________________________________ */
// function openWebsite(){let getInput = document.getElementById('userinput').value.trim();
//     document.getElementById('userinput').value = '';
//     document.getElementById('userinput').focus();
//     if(getInput !== ''){let createUrl = "https://www." + getInput + ".com";
//         window.open(createUrl,"_blank");
//     }
//     else{alert('plz enter site name')}
// }


/*___________________________ Question no 36 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */