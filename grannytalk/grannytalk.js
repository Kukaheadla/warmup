console.log('Granny_talk')

var question = prompt('What would you like to ask?')
var answers = [];

function yearInput(max, min) {
    return Math.random() * (max - min) + min;
}

function yearInput2(max,min){
  return Math.random() * (max - min) + min;
}

function yearInputRound(max,min) {
 return Math.round(yearInput(max,min));
 }

 function yearInputRouxnd2(max,min) {
  return Math.round(yearInput2(max,min));
  }


if (question === question.toUpperCase() && question != 'BYE'){
  console.log('Granny:NO, NOT SINCE '+ yearInputRound(1950,1930) +'\n'+ grandpaTalk());
} else if (question === 'BYE'){
  console.log("Granny:What's that honey, I didn't hear you.."+'\n'+ grandpaTalk() );
}else {
  console.log('Granny:SPEAK UP SONNY JIM'+'\n'+ grandpaTalk());
}

function grandpaTalk (){
  if (question === question.toUpperCase() && question != 'BYE'){
    return 'Grandpa: NO, NOT SINCE ' +yearInputRound(1950,1930)
  } else if (question === 'BYE'){
    return "Grandpa: What's that Sunny, I didn't hare you..";
  }else {
    return 'Grandpa: YEAH, SPEAK UP SONNY JIM';
  }
  return;
}
