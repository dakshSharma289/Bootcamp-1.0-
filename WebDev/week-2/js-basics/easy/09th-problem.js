function flatten(input){
  let output = [];
  for(i in input){
    for(j in input[i]){
      let unique = true;
      for(t in output){
        if(output[t] === input[i][j]){
          unique = false;
        }
      }
      if(unique){
        output.push(input[i][j]);
      }
    }
  }
  return output;
}

console.log(flatten({ x: [1,2,3], y: [2,3,4], z: [4,5] }));
