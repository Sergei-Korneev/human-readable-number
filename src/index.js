
const numbers = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10':'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '00': '',



}

const suf = {
  3: '',
  2: '',
  1: 'ty ',
  0: ' hundred ',
}
module.exports = function toReadable(number) {
  var result = "";

var ln=number.toString(10).length;
  switch (ln) {
    case 1:
      return result += numbers[number.toString(10)[0]];
      break;
    case 2:
        if (number.toString(10)[0] =='1'){
          result +=numbers[number.toString(10)[0]+number.toString(10)[1]];
  
  
         }
         else{
          result +=numbers[number.toString(10)[0]+"0"] + " " + numbers[number.toString(10)[1]];
         }
         return result.replace(" zero","").replace("  "," ");
      break;
    case 3:
       result += numbers[number.toString(10)[0]] + " hundred"
       if (parseInt(number.toString(10)[1],10) ==1){
        result +=" "+numbers[number.toString(10)[1]+number.toString(10)[2]];


       }
       else{
         
        result += " "+ numbers[number.toString(10)[1]+"0"] + " " + numbers[number.toString(10)[2]];

         
       }
      
       return result.replace("  "," ").replace(" zero","");
       break;
  }


  



}


