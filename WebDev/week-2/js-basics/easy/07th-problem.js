function filter(input){
  let output = {};
  for(i in input){
    if(input[i] > 50){
      output[i] = input[i];
    }
  }
  return output;
}

console.log(filter({ a: 20, b: 60, c: 40, d: 90 }));
