document.write("Hello! My name is Sayat and my group is CS-2123" + '<p>');
var date = new Date();
var current_year = date.getFullYear();
var current_day = date.getDate();
var current_month = date.getMonth();
var monthOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var current_day_of_week = date.getDay();
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var current_hour = date.getHours();
var current_minute = date.getMinutes();
var current_second = date.getSeconds();
document.write("Current day:" + '<p>')
document.write("Year: " + current_year + '<br>')
document.write("Today is : " + dayOfWeek[current_day_of_week] + '<br>')
document.write("Day: " + current_day  + '<br>')
document.write("Month: " + monthOfYear[current_month] + '<br>')
document.write("Current time is : " + current_hour + ' ' + ' : ' + current_minute + ' : ' + current_second + '<p>')
var today = new Date();
var univer = new Date(2024, 5, 20);
if (today.getFullYear()==2024 && today.getMonth()==5 && today.getDate()>20)
{
univer.setFullYear(univer.getFullYear()+1);
}
var one_day=1000*60*60*24;
document.write(Math.ceil((univer.getTime()-today.getTime())/(one_day)) + " days left until the freedom!" + '<p>');
