function swap(input){
  let output = {};
  for( keys in input){
    output[input[keys]] = keys
  }
  return output;
}

console.log(swap({ a: "x", b: "y", c: "z" }
));
