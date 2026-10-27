function hasTwoCubeSums(n) {
	let count=0;
  const maxlimit=Math.cbrt(n);
  for(let a=1; a<=maxlimit; a++){
    for(let b=a; b<=maxlimit; b++){
      if(a*a*a + b*b*b===n){
        count++
        if(count>=2){
          return true;
        }
      }
    }
  }
  return false;
}
