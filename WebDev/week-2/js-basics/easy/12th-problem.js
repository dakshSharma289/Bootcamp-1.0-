function reformat(input){
  let output = [];
  for(i in input){
    output.push([i, input[i]]); 
  }
  return output;
}

function sort(input){
  let output = [];
  let currentMax = 0;
  let currentMaxIndex;
  for(j in input){
    for(i in input){
      if(input[i][1] > currentMax){
        currentMax = input[i][1];
        currentMaxIndex = i;
      }
    }
    output.push(input[currentMaxIndex]);
    input[currentMaxIndex] = ["a", 0];
    currentMax = 0;
  }
  return output;
}

console.log(sort(reformat({ a: 3, b: 1, c: 2 })))
