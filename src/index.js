const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


function nameTens(numbers) {

  if (numbers[numbers.length-1]+numbers[numbers.length-2]*10 < 20) {
    return nums[numbers[numbers.length-1]+(numbers[numbers.length-2]*10)-1];
  }
  else if (numbers[numbers.length-1] == 0) {
    return `${tens[numbers[numbers.length-2]-2]}`;
  }
  else{
    return `${tens[numbers[numbers.length-2]-2]} ${nums[numbers[numbers.length-1]-1]}`;
  }
}


module.exports = function toReadable (number) {
  if(number == 0){
    return 'zero';
  }
  else if(number < 20){
    return nums[number-1];
  }
  else{
    let numsArr = number.toString().split('');
    numsArr = numsArr.map(x => parseInt(x));
    if(numsArr.length == 2){
      return `${nameTens(numsArr)}`
    }
    else{
      if (numsArr[1] == 0 && numsArr[2] == 0) {
        return `${nums[numsArr[0]-1]} hundred`
      }
      return `${nums[numsArr[0]-1]} hundred ${nameTens(numsArr)}`
    }
  }
}
