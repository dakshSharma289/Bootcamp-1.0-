function findCommon(obj1, obj2){
  let output = [];
  for(i in obj1){
    for(j in obj2){
      if(i === j){
        output.push(i);
        break;
      }
    }
  }
  return output;
}

console.log(findCommon({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }));
