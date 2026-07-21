function find(input){
  let max;
  let avg = 0;
  for(i in input){
    let sum = 0;
    let freq = 0;
    for(j in input[i]){
      sum += input[i][j];
      freq++;
    }
    let currentAvg = sum/freq;
    if(currentAvg > avg){
      avg = currentAvg;
      max = i;
    }
  }
  return max;
}


console.log(find({ A: [80, 90], B: [70, 75, 85] }));
