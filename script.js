 function calculateweekDay();{}

   Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

   where;

   CC - century dates

   YY - year digits

   MM -  month digits

   DD - day

   mod - is the modulus function ( % );
    let message;
      if (d<=0 or d>31 ){
        message = window.alert("Invalid date");
      }
        else{mm<=0 or mm>12 ){
          message = window.alert("Invalid month");
      }
        return message;
      }
        function result = x;
          if (x=0 or x<=6){
            message = window.alert("array" + "male name" + "or" + "female name")
      }
            console.log(calculateweekDay);
