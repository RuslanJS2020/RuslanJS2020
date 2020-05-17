
document.getElementById("time").valueAsDate = new Date();
let d = new Date().getDate();
let h = new Date().getHours();
if (d == "17" && h >"9") {
  document.getElementById("message").innerHTML =
    "Зарядить Аккаумулятор";
} else {
  document.getElementById('message').innerHTML="Ничего делать не надо";
}
console.log(d);
console.log(h);