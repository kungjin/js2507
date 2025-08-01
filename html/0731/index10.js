let memNum = parseInt(prompt('입장객의 인원은?'));
let colNum = parseInt(prompt('한줄에 몇명?!'))
let rowNum;

if (memNum % colNum == 0) {
    rowNum = memNum / colNum;
} // 행열의 갯수

else { //저게 나머지가 안남는게 아니라 남는다면 
    rowNum = parseInt(memNum / colNum) + 1;
} // 줄에서 나머지가 생긴다면 하나의 줄을 더 생성해야 하는 부분을 표기 
document.writeln(`<table>`);
for (let i = 0; i < rowNum; i++) {
    document.writeln(`<tr>`);
    for (let j = 1; j <= colNum; j++) {
        seatNo = i * colNum + j;
        if (seatNo > memNum) break;
        document.writeln(`<td> 좌석 ${seatNo}</td>`);
    }
    
    document.writeln(`</tr>`)

}
document.writeln(`</table>`);
