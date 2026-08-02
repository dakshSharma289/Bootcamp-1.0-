function findMax(input){
    let max = 0;
    let maxKey;
    for(i in input){
        if(input[i] < max){
            continue;
        }
        max = input[i];
        maxKey = i;
    }
    return maxKey;
}

console.log(findMax({ a: 10, b: 50, c: 20 }));