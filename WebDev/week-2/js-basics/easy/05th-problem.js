function flatten(input){
  let output = [];
  for(i in input){
    for(j in input[i]){
      output.push(input[i][j]);
    }
  }
  return output;
}

console.log(flatten({ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
));
