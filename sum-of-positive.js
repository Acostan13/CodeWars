function positiveSum(arr) {
    let positiveNum = 0;
      for(let i= 0; i<arr.length; i++){
        if(arr[i]>0){
        positiveNum += arr[i];
        }
      }
    return positiveNum;
  }