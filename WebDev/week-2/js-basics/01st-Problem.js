function consolidate(input){
    let output = {};
    for(i in input){
        let a = 0;
        for(j in input[i]){
            a+= input[i][j];
        }   
    output[i] = a;
    }
    return output;
}

console.log(consolidate({
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
}));