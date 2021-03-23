const ftoc = function(temp) {
  let cTemp;
  cTemp = (temp - 32) * (5/9);
  roundCTemp = Math.round(cTemp * 10) / 10;
  return roundCTemp;
}

const ctof = function(temp) {
  let fTemp;
  fTemp = (temp * 9/5) + 32;
  roundFTemp = Math.round(fTemp * 10) / 10;
  return roundFTemp;
}

module.exports = {
  ftoc,
  ctof
}
