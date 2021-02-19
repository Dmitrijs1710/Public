'use strict';
let message, name = 'John',
    age = 25;
message = 'hello';
message = name;
let MyBirthDate = +prompt("write a numer", 1);
alert(MyBirthDate);
if (confirm('do you know answer?')) {
    alert(MyBirthDate - 4);
} else {
    alert("got to hell");
}