function addIndex(input){
  let output = {};
  for(i in input){
    output[input[i]["id"]] = input[i];
  }
  return output;
}

console.log(addIndex([{ id: 1, name: "A" }, { id: 2, name: "B" }]))
