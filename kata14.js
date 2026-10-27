function isCircleSorted( arr ){
  let countBreaks = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++){
    if (arr[i] > arr[(i + 1) % n]){
      countBreaks++;
    }
  }
  return countBreaks <= 1;
}
