let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget=()=>{
    return Math.floor(Math.random()*9);
}
const compareGuesses=(user,computer,secret)=>{
    

   let value1=getAbsoluteDistance(user,secret);
   let value2=getAbsoluteDistance(computer,secret);
  if(value1 <= value2) 
   {
     return true;
   }
   else
   {
     return false;
   }
}
const updateScore=winner=>{
  
  if(winner==='human')
  {
     humanScore+=1;
  }
  else
  {
    computerScore+=1;
  }
}
const advanceRound=()=>
{
  currentRoundNumber+=1;
}
const getAbsoluteDistance=(value,secret)=>
{ 
 
  if(value>=0 && value < 10)
  {
     let value1=Math.abs(value-secret);
     return value1;
  }
  else
  {
    alert("out of range");
  }
}

 // To confirm that this value increased by 1


// Write your code below:



