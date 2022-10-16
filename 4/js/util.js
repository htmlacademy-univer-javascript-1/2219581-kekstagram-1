function getRandInt(intFrom, intTo){
  if (intFrom > intTo || intFrom < 0 || intTo < 0 ){
    return  new Error('Error. Change input values');
  }
  return Math.round(intFrom - 0.5 + Math.random(intFrom, intTo) * (1 + intTo - intFrom));
}

function checkStringLength(string, length){
  return string.length <= length;
}

function getId () {
  const temp = usersId[getRandInt(0,usersId.length-1)];

  delete(usersId[getRandInt(0,usersId.length-1)]);
  return temp;
}

function getPhotoId (photosId) {
  const temp = photosId[getRandInt(0,photosId.length-1)];

  delete(photosId[getRandInt(0,photosId.length-1)]);
  return temp;
}

export{
  getRandInt,
  checkStringLength,
  getId,
  getPhotoId
};
