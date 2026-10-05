function filter(input){
  let output = [];
  for(let i=0; i<input.length; i++){
    if(input[i]%2){
      continue;
    }
    output.push(input[i]);
  }
  return output;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
