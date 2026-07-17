function count(input) {
  let uniqueWords = [];
  for (let i = 0; i < input.length; i++){
    let duplicate = false;
    for(let j = 0; j < uniqueWords.length; j++){
      if (uniqueWords[j] === input[i]){
        duplicate = true;
      }
    }
    if(!duplicate){
      uniqueWords.push(input[i]);
    }
  }

  let output = {};
  for(let i = 0; i < uniqueWords.length; i++){
    let temp = uniqueWords[i];
    output[temp] = 0;
  }

  for(let i = 0; i < uniqueWords.length; i++){
    for(let j = 0; j < input.length; j++){
      if(input[j] === uniqueWords[i]){
        output[uniqueWords[i]]++;
      }
    }
  }
  return output;
}

console.log(count(["apple", "banana", "apple", "orange", "banana", "apple"]
));
