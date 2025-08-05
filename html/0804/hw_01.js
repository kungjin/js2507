
let myName = ["이","경","진","고객님"]
let hi = ["안녕하십니까"]

// 1.concat : ""
let result1 = myName.concat(hi)
document.writeln(`${result1}`)
document.writeln(`<hr>`)

let result2 = result1.join("_")
document.writeln(`${result2}`)
document.writeln(`<hr>`)

let result3 = result1.push("!")
document.writeln(`${result1}`)
document.writeln(`<hr>`)

let result4 = result1.unshift("수원역지점")
document.writeln(`${result1}`)
document.writeln(`<hr>`)

let result5 = result1.pop()
document.writeln(`${result1}`)
document.writeln(`<hr>`)

let result6 = result1.shift()
document.writeln(`${result1}`)
document.writeln(`<hr>`)

let result7 = result1.splice(4,0,"오늘도 좋은 하루")
document.writeln(`${result1}`)
document.writeln(`<hr>`)

let result8 = result1.splice(0,3)
document.writeln(`${result8}`)
document.writeln(`<hr>`)


