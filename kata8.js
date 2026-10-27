function expandedForm(num) {
  return String(num)
  .split('')
  .reverse()
  .map((digit, index) => digit * Math.pow(10, index))
  .filter(val => val > 0)
  .reverse()
  .join(' + ')
}
