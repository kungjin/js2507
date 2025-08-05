let now = new Date();
let firstDay = new Date("2025-01-01")

let toNow = now.getTime()
toFirst = firstDay.getTime()
let passedTime = toNow - toFirst; 

passedTime = Math.round(passedTime/(1000*60*60*24))
document.querySelector('#result').innerText = passedTime