var today = new Date();
var day = today.getDay();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is : ${daylist[day]}.`);
var dateTime = "Current time is: "+time;
 
console.log(dateTime)