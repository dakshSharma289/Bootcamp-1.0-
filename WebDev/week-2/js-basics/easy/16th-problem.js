function seperate(input){
  let even = [];
  let odd = [];
  for(i in input){
    if(input[i]%2){
      odd.push(input[i]);
      continue;
    }
    even.push(input[i]);
  }
  return {
    "even": even.length,
    "odd": odd.length
  };
}


console.log(seperate([1,2,3,4,5,6]));
