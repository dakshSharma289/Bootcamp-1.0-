function sort(input){
  let output = [];
  let len = input.length; 
  console.log("okay 1");
  for(let i = len - 1; i >= 0; i--){
    console.log("okay 2");
    let max = 0;
    let maxKey;
    for(j in input){
      if(input[j] > max){
        max = input[j]
        maxKey = j;
      }
    }
    output.push([maxKey, max]);
    delete input[maxKey];
  }
  return output;
}


console.log(sort({ a: 3, b: 1, c: 2 }));
