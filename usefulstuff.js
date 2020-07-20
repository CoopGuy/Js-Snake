const rNG = (maxSize) => {
  return Math.floor(Math.random() * maxSize);
}

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  for (let objKey of obj1Keys) {
    if(obj1[objKey] !== obj2[objKey]){
      return false
    }
  }
  return true;
}
