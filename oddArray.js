function oddArray(arr){
    console.log(arr.length);
    let sum = 0;
    let multi = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(i%2==0){
            sum+=arr[i];
            multi = sum * arr[arr.length-1];        
        }
    }
    return multi
    
    
}
console.log(oddArray([0,1,2,3,4,5]));
console.log(oddArray([1,3,5]));

//baris baru