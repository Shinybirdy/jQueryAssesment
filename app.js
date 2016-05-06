$(document).ready(function(){
  var counter = 0;
//make a button with a counter 
//that when clicked causes 2 other buttons to apear and append to the DOM
//make function for button 1 Generate
$('#button').type.on('click',function(){
    counter +=1;
    $('.container').append(counter);
    console.log(counter);
});
});
//make function for button 2
$('#button').type.on('click',function(){
 });

//make function for button 3
$('#button').type.on('click',function(){});