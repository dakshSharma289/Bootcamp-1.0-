function count(input){
  let output = 0;
  for(i in input){
    output++;
  }
  return output;
}

console.log(count({ a: 1, b: 2, c: 3 }));
