
let seed = prompt("전체 응모자 수 : ","")
let picked =Math.floor((Math.random()*seed)+1)
let picked1 =Math.floor((Math.random()*seed)+1)

document.writeln(`<p>전체 응모자 수: ${seed}명</p>`)
document.writeln(`<p>당첨자 ${picked}번,${picked1}번</p>`)