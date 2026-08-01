function findMax(input){
  let maxKey;
  for (i in input){
    if(!maxKey){
      maxKey = i;
    }
    if(input[i] > input[maxKey]){
      maxKey = i;
    }
  }
  return maxKey;
}

console.log(findMax({ a: 10, b: 50, c: 20 }));
