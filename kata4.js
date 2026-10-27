function findMissing(list) {  
let step = list[1] - list[0];
  let n2 = list[2] - list[1];
  if(Math.abs(n2) < Math.abs(step)){
    step = n2;
  }
    for(let i = 0; i < list.length - 1; i++){
      if (list[i + 1] - list[i] !== step){
        return list[i] + step;
      }
    }
}
