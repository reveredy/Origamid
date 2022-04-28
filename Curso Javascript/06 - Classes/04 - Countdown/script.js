import Countdown from "./countdown.js";


const diasParaMeuAniversario = new Countdown('27 December 2022 00:00:00 GMT-0300');

console.log(diasParaMeuAniversario._days);
console.log(diasParaMeuAniversario._hours);
console.log(diasParaMeuAniversario._minuts);
console.log(diasParaMeuAniversario._seconds);
console.log(diasParaMeuAniversario.total);
setInterval(() => {
    console.log(diasParaMeuAniversario.total)
}, 1000)