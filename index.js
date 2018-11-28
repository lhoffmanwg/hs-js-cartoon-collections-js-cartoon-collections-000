function dwarfRollCall(dwarves) {
  var stringList = "";
  for(var i = 0; i < dwarves.length; i++) {
    stringList = stringList + (i+1) + ". " + dwarves[i] + " ";
  }
  return stringList;
}

function summonCaptainPlanet(planeteerCalls){
  var callsArray = [];
  for(var i = 0; i < planeteerCalls.length; i++){
      callsArray.push(planeteerCalls[i].toUpperCase() + "!");
 }
 return callsArray;
}

function longPlaneteerCalls(words) {
  for(var i=0; i < words.length; i++){
     if(words[i].length > 4) {
       return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for(var i=0; i < foods.length; i++) {
    for(var j=0; j < cheese.length; j++) {
      if(foods[i] === cheese[j]){
        return cheese[j];
      }
    }
  
  }
   return "no cheese!";
}
