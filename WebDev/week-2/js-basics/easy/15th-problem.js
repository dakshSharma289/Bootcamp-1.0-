function stringify(input){
  let output = "";
  for(i in input){
    output = output + i + "=" + input[i] + "&";
  }
  output = output.slice(0, output.length - 2);
  return output
}

console.log(stringify({ name: "Alice", age: 25 }))
