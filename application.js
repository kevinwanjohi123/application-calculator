 function calculateDOW(){
   const dow = (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) mod 7

   var CC = Century digits;

   var YY = Year digits;

   var MM = Month;
    var mod = Modulus function %;

   var = Day of the month;
   let message;
   if(d <= 0 or d > 31){
     message = alert("Enter a valid date");
   } else (m <= 0 or m > 12){
     message = alert("Enter a valid month");

   }
   return message;
 }
  
