console.log('connected to JS')

var size = prompt('Provide your your size e.g."8 = 8 x 8 etc."');
var board =[];

for (var i=0; i<=size; i++){
  if (i%2 ===0){
    board.push(' #'.repeat(size))
  }else {
    board.push('# '.repeat(size -1))
  }
}

console.log(board.join('\n'));
