






var guesses = $("#guesses");
var dashes = $("#dashes");
var bands = ["greenday"];
var correctA = [];
var inco = [];
var randomAnswers = bands[Math.floor(Math.random() * bands.length)];
randomAnswers = randomAnswers.split('');
console.log(randomAnswers);
var W = $("#wins");
var L = $("#losses");
var tries = 10;
var win = 0;
var lose = 0;



function begin (){
    for (i = 0; i < randomAnswers.length; i++) {
        var i
    
        correctA.push("- ");
      

        
    
    
    
        
    
    }
    

}

begin()

$("#userInput").on("keyup", function(){

   

    var value = $("#userInput").val();



    

    



    
})

