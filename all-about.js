// /***/ NOTE: 1. JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.) 

// 2. The way JavaScript works is interesting. Inside a normal Web page you place some JavaScript code (See How Web Pages Work for details on Web pages). When the browser loads the page, the browser has a built-in interpreter that reads the JavaScript code it finds in the page and runs it.

// 3. Variable: Variables are containers for storing data (storing data values).

// 4. How to declear a Variable?
// Ans. var num = 20;

// 5. How to change variable element?
// var player = "Java";
// var player2 = 'Script';
// player = player2;
// console.log(player);

// 6. Types of Variable --
// . Numeric: 10, 20, 25.4 
// . String: "kuddus" "khalil"
// . Boolean: true, false 

// 7. Data types
// - primitive and non primitive 
// primitive: undefined , Null 
// Non primitive: Numeric, string, boolean 

// 8. Naming convention of variable..
// .. keywords are not allowed in var 
// dash is not allowed
// numbers are allowed but its only set on middle or last position
// $ is allowed

// 9. +, -, *, /
// var num1 = 10;
// var num2 = 20;
// var total = num1 + num2;
// console.log(total);

// 10. Short hand 
// . +=, -=, *=, /=
// var num = 11;
// num += 1;
// console.log(num);

// 11. ++ and -- means add +1 every time and add -1 every time

// 12. #persint
// var num = "25";
// num = parseInt(num);
// console.log(num);
// # persFloat
// var num = "25.3";
// num = parseFloat(num);
// console.log(num);

// -------------------
// Array------

// 13/14/15. Array-- array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
// array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।
// * if there has 5 index its will start with 0,1,2,3,4 

// var friends = ['rahim', 'karim', 'kuddus', 'ali', 'imran'];
// console.log(friends.length);
// friends[2] = 'abdul';
// console.log(friends);

// 16. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়
// ans. If the variable is not avaible on index the index value will -1

// 17. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
// ans. 
// var friends = ['rahim', 'karim', 'kuddus', 'ali', 'imran'];
// var person = friends[3];
// console.log(person);
// console.log(friends.indexOf('kuddus'));

// 18. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে
// ans. friends[2] = 'abdul';

// 19. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
// ans.  var friends = ['rahim', 'karim', 'kuddus', 'ali', 'imran'];
// var person = friends.indexOf('rahim');
// console.log(person);

// 20. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে?


// 21.  কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// ans. 
// var numbers = [11, 244, 23, 56, 68, 78, 99];
// numbers.push(100);
// numbers.pop();
// console.log(numbers)

// 22. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// ans.
// var numbers = [11, 244, 23, 56, 68, 78, 99];
// numbers.unshift(50);
// numbers.shift();
// console.log(numbers);

// 23. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 

// 24. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০০০০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০০০০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০০০০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
// ans.
// var money = 5000;
// if(money > 80000){
//     console.log("mac mac kinmu");
// }
// else if(money > 60000){
//     console.log("gaming laptop newa lagbe");
// }
// else if(money > 40000){
//     console.log("lenevo yoga");
// }
// else if(money > 20000){
//     console.log("used laptop nibo");
// }
// else{
//     console.log('mobile thakte laptop keno?')
// }

// -------------
// 25.  আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
// ans.
// var myself = "আসকে আমার মন ভালো নেই" ;
// for(var i = 0; i < 40; i++){
//     console.log(myself);
// }

// 26.  while লুপ কিভাবে কাজ করে 
// example..
// var num = 0;
// while(num < 10){
//     console.log(num);
//     num++ ;
// }

// 27. for লুপ কিভাবে কাজ করে 
// example..
// for(var i = 0; i < 7; i++){
//     console.log(i);
// }

// 28. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
// ans. the output will be shown infinity time

// 29. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// for(var i = 58; i <= 98; i++){
//     console.log(i);
// }

// 30. একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও 
// for(var i = 412; i <= 456; i += 2){
//         console.log(i);
// }

// 31. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// for(var i = 581; i <= 623; i += 2){
//     console.log(i);
// }

// 32. while আর for loop এর মধ্যে পার্থক্য কি
//  * while লুপ execute হওয়ার আগে condition সত্য হতে হয়
//  * for লুপ প্রথম বার execute হওয়ার জন্য একটা কাউন্টার ভেরিয়াবল initialize করতে হয় 

// 33. তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
// var wholeLearning = ['HTML', 'CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind', 'Javascript-basic', 'Array', 'Loop', 'conditions'];
// for(var i = 0; i < wholeLearning.length; i++){
//     var element = wholeLearning[i];
//     console.log(element);
// }

// 34.  তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
// var mobile = ['Nokia', 'Samsung-J2', 'Samsung-A5', 'Samsung-Grand-Prime', 'Redmi-note-7', 'Redmi-note-10', 'Redmi-note-11', 'Poco-X3-pro'];
// var i = 0;
// while(i < mobile.length){
//     var usedMobile = mobile[i];
//     console.log(usedMobile);
//     i++ ;
// }

// 35. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
// for(var i = 30; i <= 86; i++){
//     if(i >= 44){
//         break;
//     }
//     console.log(i);
// }

// 36. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে।
// var bookPrice = [144, 244, 155, 489, 122, 345, 200, 127, 100];
// for(var i =0; i <= bookPrice.length; i++){
//     var books = bookPrice[i];
//     if(books >= 200){
//         continue;
//     }
//     console.log(books)
// }
// End of modeul 18 -----