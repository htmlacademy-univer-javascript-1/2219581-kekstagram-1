function getRandInt(intFrom, intTo){
  if (intFrom > intTo || intFrom < 0 || intTo < 0 ){
    return  new Error('Error. Change input values');
  }
  return Math.round(intFrom - 0.5 + Math.random(intFrom, intTo) * (1 + intTo - intFrom));
}

function checkStringLength(string, length){
  return string.length <= length;
}

getRandInt(1,2);
checkStringLength('',1);
