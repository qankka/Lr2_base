function howManyTimes(time1, time2) {
  let t1 = new Date(time1.replace(' ', 'T')).getTime();
  let t2 = new Date(time2.replace(' ', 'T')).getTime();
  let start = new Date(new Date(Math.min(t1, t2)).getFullYear(), 0, 1, 0, 0, 0).getTime();
  const countStrikes = (targetTime) => {
    if (targetTime <= start) return 0;
    let strikes = 0;
    let curr = start;
    while (curr < targetTime) {
      let d = new Date(curr);
      let hour = d.getHours();
      let minute = d.getMinutes();
      if (minute === 0) {
        let hour12 = hour % 12 === 0 ? 12 : hour % 12;
        for (let i = 0; i < hour12; i++) {
          if (curr + i * 1000 < targetTime) strikes++;
        }
      } else {
        if (curr < targetTime) strikes++;
      }
      curr += 30 * 60 * 1000;
    }
    return strikes;
  };
  return countStrikes(t2) - countStrikes(t1);
}
