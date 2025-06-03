function scuberGreetingForFeet(freeSampleIfTheRide){
  // return the result of the freeSample.
  if (freeSampleIfTheRide <= 400){
     return 'This one is on me!';
  } else if (freeSampleIfTheRide>400 && freeSampleIfTheRide<= 2000){
    return 'That will be twenty bucks.';
  } else if (freeSampleIfTheRide >2500){
    return 'No can do.';
  }else if (freeSampleIfTheRide >2000){
    return 'I will gladly take your thirty bucks.';
  } 
  }


function ternaryCheckCity(city){
  // Return the result of the ternary check.
 return (city==='NYC') ?  ('Ok, sounds good.') : ('No go.');
  }


function switchOnCharmFromTip(tipGenerous){
  // Return the result of the switch statement.
  switch(tipGenerous){
    case 'generous':
      return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.';
        default:
        console.log('thanks for everything');
          return 'Bye.';  
  }
}