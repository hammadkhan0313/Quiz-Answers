// DOM Maniupulation :
// Q1 : // Create an HTML button with the text "Click Me" and a <div> element. When the button is clicked, change the text of the <div> to "Button Clicked!".

function changeTheDiv(){
    document.getElementById("para").innerHTML = "My name is hammad & my Father name is raza khan & I am 17 years old."
    document.getElementById("para").style.color = "green";
    document.getElementById("para").style.backgroundColor = "lightGreen"
    document.getElementById("para").style.border = "2px"
    document.getElementById("para").style.fontSize = "2em"

}

// Q2 // Create an HTML form with an input field and a submit button. When the form is submitted, display an alert with the text entered in the input field.

function form_submitted(){
var text1 =document.getElementById('form').value;
var text3 = document.getElementById('form2').value;
alert("Name : "+text1+ "/n Number : " + text3 );
}

// Q2 : part 2
function form_submitted(){
    var inputValue = document.getElementById('form').value;
    var inputValue2 = document.getElementById('number')
    alert(inputValue  /n + inputValue2);
}

// string: 
// Write a function 'countVowels' that takes a string as input and displays the count of vowels (a, e, i, o, u) in the string.

// part (1)
var string = prompt("Enter the string")
var vowels = /[aeiou]/gi;
var chars = string.match(vowels);
console.log(chars.join(','))
console.log(chars.length);

// part (2)
var string = prompt("enter sky words");
var skyWords = /[abcd]/gi;
var char = string.match(skyWords);
console.log(char.join(","))
console.log(char.length); 

// // Date :
// Write a function 'displayCurrentDateTime' that displays the current date and time.
var date = new Date()
console.log(date);

// Numbers :

// Write a function 'isPrime' that takes a number as input and displays whether the number is prime or not.
// part(1)
var number = prompt("Enter the Number")
if (number == 1) {
    console.log(`${number} is not a prime Number`)
} else if (number < 1) {
    console.log(`${number} is not a prime Number`)
} else {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            var result = (`${number} is not a prime Number`);
            break;
        } else {
            var result = (`${number} is a prime Number`);
        }
    }
    console.log(result)
};

// If & Else

// Write a function 'isEven' that takes a number as input and displays whether the number is even or odd.
// Part (1)
function isOddorEven(num){
switch(num % 2){
    case  0:
    console.log('Even');
    break;
    case 1:
    console.log('Odd');
    break;
default:
    console.log('Enter the valid Number')
}
}
isOddorEven(100);

// Write a function 'checkVotingEligibility' that takes a person's age as input and displays whether the person is eligible to vote (18 years or older).
// Part(2)
var age = prompt("Enter Your Age")
if(age >18){
    alert("Go to give a vote boy")
    
}else(
    alert("You are not Eligible to Give a vote")
);

// Loops
// Part(1)
// Write a loop that displays numbers from 1 to 10.

for(var i = 1 ;i<=10 ;i++){
    console.log(i)
};

// Part(2)
// Write a function 'sumArrayElements' that calculates and displays the sum of elements in an array of numbers.

var sum = 0;
var array = [1,2,3,4,5]
for( var i = 0; i<array.length;i++ ){
    sum += array[i]
}

console.log("The Sum of Array is : " + sum)
// Part (3)

var sum = 0;
var array = [10,20,30]
for(var i = 0; i< array.length; i++){
    sum += array[i]
}
document.write("The Sum of Array is : " + sum)

