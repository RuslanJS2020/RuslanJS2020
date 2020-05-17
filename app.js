function getLastDayOfMonth(year, month) {
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  let date = new Date(year, month, 0);
  return date.getDate();
}



let lastDay = getLastDayOfMonth()
let dayWeek = new Date().getDay()
document.getElementById("time").valueAsDate = new Date();
let d = new Date().getDate();
let h = new Date().getHours();

if (d == "05" && h >= "18" || d == "06" && h <= "06") { // 5 число месяца АБ-3
  document.getElementById("message").innerHTML =
    "Зарядить Аккаумулятор АБ-3!";

} else if (d == "15" && h >= "18" || d == "16" && h <= "06") { //15 число месяца АБ-4
  document.getElementById("message").innerHTML =
    "Зарядить Аккаумулятор АБ-4!";

} else if (d == "25" && h >= "18" || d == "26" && h <= "06") { //25 число месяца АБ-5
  document.getElementById("message").innerHTML = "Зарядить Аккаумулятор АБ-5!";

} else if (dayWeek == "0" && h >= "18" || d == "01" && h <= "06") { //понедельник утро счётчики
  document.getElementById("message").innerHTML = "Снять показания счетчиков!";

} else if (d == "10" && h >= "18" || d == "11" && h <= "06") { // 11 число для тэц-1
  document.getElementById("message").innerHTML = "Снять показания счетчиков для ТЭЦ-1";

} else if (d == "20" && h > "18" || d == "21" && h < "06") { // 21 число для тэц-1
  document.getElementById("message").innerHTML = "Снять показания счетчиков для ТЭЦ-1";

} else if (d == (lastDay - 1) && h > "18" || d == lastDay && h < "06") { //последний день месяца все счётчики
  document.getElementById("message").innerHTML = "Снять показания счетчиков!";

} else if (d == lastDay && h > "18" || d == "01" && h < "06") { //первый день месяца для ТЭЦ-1
  document.getElementById("message").innerHTML = "Снять показания счетчиков для ТЭЦ-1!";
}


else {
  document.getElementById('message').innerHTML = "Ничего делать не надо :)";
}

console.log(d + " день месяца");
console.log(h + " часы");
console.log(dayWeek + " день недели");
console.log(lastDay + " последний день месяца");




