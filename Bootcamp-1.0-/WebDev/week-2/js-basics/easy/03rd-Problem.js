function swap(input){
    let keys = [];
    let output = {};
    for(i in input){
        output[input[i]] = i;
    }
    return output;
}

console.log(swap({ a: "x", b: "y", c: "z" }))