

// var name = prompt("What is your name?");


// alert("Hey " + name + ", how are you?");

// var fruits = ["Apples", "Oranges","Bananas"];

// alert(fruits);

// alert(fruits[0]);

// function sayHi(input){

//    document.write("Hey " + input + ", time to put this work in!")
// };



// sayHi("Fife");



    //    var header =   document.getElementById("header");

    //    header.style.color = "blue";
    //    header.style.backgroundColor = "red";

    //    var rick =  document.getElementById("image");


    //    rick.addEventListener('click', function(){


    //     rick.style = "width:500px";})

  



var guesses = document.getElementById("guesses");
var userInput = document.getElementById("userInput");
var answerBox = document.getElementById("test");
var button = document.getElementById("button")
var answers = [ "blink182", "sum41", "", "greenday" ];
var randomAnswers = answers[Math.floor(Math.random()*answers.length)];

console.log(randomAnswers);



for (i = 0, len = randomAnswers.length, text = ""; i < len; i++) {
    var i, len, text;
    text += "- " ;

    document.getElementById("test").innerHTML = text ;
}
     
 
  button.addEventListener("click", function(){

    if(randomAnswers.indexOf(userInput.value) > -1){

        console.log("yes");

        document.getElementById("test").innerHTML = userInput.value;




        
    }














  })



 
  

  






 

     

    





    
























    

   