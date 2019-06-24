var katzDeliLine = [];
 
function takeANumber(katzDeliLine,  str){
  var input= str;
  katzDeliLine.push(input);
  
  var index = katzDeliLine.indexOf(str);
  index +=1;
  return "Welcome, "+str+". You are number "+index +" in line.";
  
}

function takeANumber2(katzDeliLine){
  var index =0;
  index +=1;
  katzDeliLine.push(index);
  return "Welcome, "+str+". You are number "+index +" in line.";
}



function  currentLine(katzDeliLine){
  var str = "The line is currently: ";
  if(katzDeliLine.length <1){
    
    return "The line is currently empty.";
  }
  var inStr= "";
  for(var a = 0;a<katzDeliLine.length;a++){
    var index = a+1;
    inStr += index+". "+katzDeliLine[a]+", ";
  }
  str = str + inStr;
  return str.substring(0,str.length-2); 

  
  for(var a = 0;a<katzDeliLine.length;a++){
    var index = a+1;
    str = st+index+". "+katzDeliLine[a]+",";
  }
  return str.substring(0,katzDeliLine.length+1); 
>>>>>>> f9cd14cb7a1908536a834fa5331f4b567c359d54

}
 
function nowServing(katzDeliLine){
<<<<<<< HEAD
  var index = katzDeliLine.length;
   var str = katzDeliLine[0];
   if(index >0){
     let a =katzDeliLine.shift()
     return 'Currently serving '+a+".";
   }else{
     return 'There is nobody waiting to be served!';
   }

  
}
 
=======
 var str = katzDeliLine[0];
 if(str == ""){
   return 
 }
 return katzDeliLine[0];
  
}
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 
takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in li."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, Matz"
 
nowServing(katzDeliLine); // "Currently serving Grace."
 
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
>>>>>>> f9cd14cb7a1908536a834fa5331f4b567c359d54
