
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


// let userName =['이','경','진','고객님']
// let hello = ['안녕하십니까']
// // let login =['좋은 하루에요.','수원역 지점']


// // 1. concat : "*** 고객님 안녕하십니까"
// let uSers1 = userName.concat(hello) 
// document.writeln(`${uSers1}` )
// document.writeln(`<hr>`)

// // 2. join   : "*_*_*_ 고객님 안녕하십니까"
// let result1 = userName.join('_') 
// let string2 = hello.join('_')
// document.writeln(`${result1} ${hello} , ${userName} ${string2}`)
// document.writeln(`<hr>`)

// // 3. push   : "***** 고객님 안녕하십니까!"
// let push1 = hello.push("!")
// document.writeln(`${result1} ${hello} `)
// document.writeln(`<hr>`)


// // 4. unshift : "수원역 지점 *_*_*_"고객님 안녕하십니까!"
// let push2 = result1.unshift("수원역지점")
// document.writeln(`${result1}`)
// document.writeln(`<hr>`)


// // 5. pop   : "수원역 지점 *_*_*_"고객님 안녕하십니까!"

// // 6. shift   : " *_*_*_"고객님 안녕하십니까"

// // 7. splice :  " *_*_*_"고객님 오늘도 좋은 하루 안녕하십니까"

// // 7. slice :  " *_*_*_"