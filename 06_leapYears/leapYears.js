const leapYears = function(year) {
if(year%4==0 && year%100!=0){
  return "Leap Year"
}
  else{
    return 'Not a leap Year'

  }

};

// Do not edit below this line
module.exports = leapYears;
