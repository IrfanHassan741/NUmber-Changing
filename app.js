var number=prompt("Enter your number in decimal...","1.2,44.5")

var vahnge=toString(number)
var change=parseInt(number)
// var vahnge=g(number)

var roundoff=Math.round(number);
var floor=Math.floor(number);
var cell=Math.ceil(number)
var min=0;
var max=50;
var rand=Math.round(Math.random()*(max-min+1))+min;




// console.log("The value is round off: "+roundoff);
// console.log("The value is floor: "+floor);
// console.log("The value is ceil: "+cell);
// console.log("The value is random: "+rand);

document.writeln("<h1>the vlaue of Round-off is:"+roundoff+"</h1>")
document.writeln("<h1>the vlaue of floor is:"+floor+"</h1>")
document.writeln("<h1>the vlaue of ceil is:"+cell+"</h1>")
document.writeln("<h1>the vlaue of random is:"+rand+"</h1>")
document.writeln("<h1>the vlaue of random is:"+typeof vahnge+"</h1>")
document.writeln("<h1>the vlaue of random is:"+typeof change+"</h1>")
 

