"use strict";
// 1 Write a simple JavaScript program to print expected Output using following array.
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 
let mycolor = ["red", "green", "white", "black"];
document.getElementById('color').innerHTML = `Array is => ${mycolor}`;
document.getElementById('color_output').innerHTML = `[${mycolor.join(",")}]`;
document.getElementById('color_output2').innerHTML = `[${mycolor.join("+")}]`;
document.getElementById('color_output3').innerHTML = `[${mycolor.slice(0, 3).join(",")}]`;
document.getElementById('color_output4').innerHTML = `[${mycolor.shift()}]`;
document.getElementById('color_output5').innerHTML = `[${mycolor[0]},${mycolor[1]}]`;
mycolor.unshift('Red');
mycolor.push("orange");
document.getElementById('color_output6').innerHTML = `[${mycolor}]`;
// // 2. Write a JavaScript program to get sum of all array element using for loop and forEach loop.
let number = [10, 20, 30, 40, 50];
document.getElementById('sum_array').innerHTML = `Array is => ${number}`;
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
document.getElementById('sum').innerHTML = `Sum using for loop is => ${sum}`;
number.forEach(i => console.log(i));
document.getElementById('sum_foreach').innerHTML = `Sum using forEach loop is => ${sum}`;
// // 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
let number2 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
document.getElementById('array').innerHTML = `Array is => [${number2}]`;
let max = number2[0];
let min = number2[0];
for (let i = 1; i < number2.length; i++) {
    if (number2[i] > max) {
        max = number2[i];
    }
    if (number2[i] < min) {
        min = number2[i];
    }
}
document.getElementById('max-value').innerHTML = `Maximum value is =>${max}`;
document.getElementById('min-value').innerHTML = `Minimum value is =>${min}`;
// // 4.Write a JavaScript program for convert all array element in ASCII value.
let ascii_array = ["A", "B", "C", "a", "b", "c"];
let string_array = '';
document.getElementById('ascii_array').innerHTML = `Array is =>${ascii_array}`;
for (let i = 0; i < ascii_array.length; i++) {
    let ascii = ascii_array[i].charCodeAt(0);
    string_array += ascii_array[i] + "=>" + ascii + "<br/>";
}
document.getElementById('ascii-output').innerHTML = `${string_array}`;
// // 5.Write a JavaScript program for remove negative values using the filter array function.
// // numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let number3 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('negative-array').innerHTML = `Array is =>[${number3}]`;
document.getElementById('negative-output').innerHTML = `After removing Negative number, Positive number are => ${number3.filter(x => x > 2)}`;
// // 6. Write a JavaScript program using array map() method and return the square of array element.
// //  arr = [2, 5, 6, 3, 8, 9];
let number4 = [2, 5, 6, 3, 8, 9];
document.getElementById('square-array').innerHTML = `Array is =>[${number4}]`;
document.getElementById('square-output').innerHTML = `The Square of an array is => ${number4.map(x => x * x)}`;
// // 7.Write a JavaScript program for sort array in ascending descending.
// // numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
let sort_array = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
document.getElementById('sort_array').innerHTML = `Array is =>[${sort_array}]`;
let temp = 0;
for (let i = 0; i < sort_array.length; i++) {
    for (let j = 0; j < sort_array.length - 1; j++) {
        if (sort_array[i] <= sort_array[j]) {
            temp = sort_array[i];
            sort_array[i] = sort_array[j];
            sort_array[j] = temp;
        }
    }
}
document.getElementById('sort-ascending').innerHTML = `Sorted array in ascending order is => ${sort_array} `;
for (let i = 0; i < sort_array.length; i++) {
    for (let j = 0; j < sort_array.length - 1; j++) {
        if (sort_array[i] >= sort_array[j]) {
            temp = sort_array[i];
            sort_array[i] = sort_array[j];
            sort_array[j] = temp;
        }
    }
}
document.getElementById('sort-descending').innerHTML = `Sorted array in descending order is => ${sort_array}`;
// // 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// // words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let less8_array = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById('less8_array').innerHTML = `Array is => [${less8_array}]`;
document.getElementById('less8-output').innerHTML = `The element ehich is lesss than 8 character => ${less8_array.filter(x => x.length < 8)}`;
// // 9. write a JavaScript program to  to print expected output for following string.
// // x = "airplane";    output:- r
// // x = "oxoxoxox";   output:- "oXoXoXoX"
// // x = "A New Java Book";   
// // output:-  "a new java book" , "A NEW JAVA BOOK"
let str1 = "airplane";
document.getElementById('str-1').innerHTML = `Input : ${str1}`;
document.getElementById('str1-output').innerHTML = `Output : ${str1[2]}`;
let str2 = "oxoxoxox";
document.getElementById('str-2').innerHTML = `Input : ${str2}`;
document.getElementById('str2-output').innerHTML = `Output : ${str2.replaceAll('x', 'X')}`;
let str3 = "A New Java Book";
document.getElementById('str-3').innerHTML = `Input : ${str3}`;
document.getElementById('str3-output1').innerHTML = `Output = 1 : ${str3.toLowerCase()}`;
document.getElementById('str3-output2').innerHTML = `Output = 2 : ${str3.toUpperCase()}`;
// // 10. write a JavaScript program for array reverse.
let number5 = [10, 20, 30, 40, 50];
document.getElementById('reverse_array').innerHTML = `Array is => ${number5}`;
let reverse_array = number5.reverse();
document.getElementById('reverse_output').innerHTML = `Reverse array is => ${reverse_array}`;
// // 11. write a JavaScript program for check value is found or not?
let number6 = [10, 20, 30, 40, 50];
document.getElementById('check_array').innerHTML = `Array is => ${number6}`;
let check_value = 20;
document.getElementById('check_value').innerHTML = `Value to search => ${check_value}`;
if (number6.includes(check_value)) {
    document.getElementById('check_output').innerHTML = `${check_value} is found in array`;
}
else {
    document.getElementById('check_output').innerHTML = `${check_value} is not found in array`;
}
// // 12. write a JavaScript program for print your name and write the no of total character.
let name1 = "Prachi Gole";
document.getElementById('name').innerHTML = `My Name is => ${name1}`;
document.getElementById('character_output').innerHTML = `Total character is => ${name1.length}`;
// // 13.  write a JavaScript program given this output using replace concept.
// // Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// // Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"
let replace_string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.getElementById('replace_input').innerHTML = `Input => ${replace_string}`;
let replace_output = replace_string.replaceAll("dog", "cat");
document.getElementById('replace_output').innerHTML = `Output => ${replace_output}`;
// // 14.  write a JavaScript program convert string to array.
// // Input :- "Hire the top 1% freelance developers";
// // Output :- ["Hire", "the", "top", "1%"] 
let string14 = "Hire the top 1% freelance developers";
document.getElementById('string_array_input').innerHTML = `Input => ${string14}`;
let stringarray = string14.split(" ").slice(0, 4);
document.getElementById('string_array_output').innerHTML = `Output => ${stringarray}`;
// // 15. write a JavaScript program convert for array to string.
// // Input:- ['5', 32, 'Daniel'];
// // Output: 5,32,Daniel
let arrInput = ['5', 32, 'Daniel'];
document.getElementById('arr').innerHTML = `Input => [ ${arrInput} ]`;
document.getElementById('str-arr').innerHTML = `Input => ${arrInput.toString()}`;
