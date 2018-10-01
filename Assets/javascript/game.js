






var guesses = document.getElementById("guesses");
var userInput = document.getElementById("userInput");
var answerBox = document.getElementById("test");
var button = document.getElementById("button")
var answers = ["blink182", "sum41", "greenday"];
var correctA = [];
var inco = [];
var randomAnswers = answers[Math.floor(Math.random() * answers.length)];
randomAnswers = randomAnswers.split('');
console.log(randomAnswers);
var W = document.getElementById("wins");
var L = document.getElementById("losses");
var tries = 5;
var win = 0;
var lose = 0;



function begin (){
    for (i = 0; i < randomAnswers.length; i++) {
        var i
    
        correctA.push("- ");
        answerBox.innerHTML = correctA.join("");
        console.log(randomAnswers);
    
    
    
        
    
    }
    

}

begin();













button.addEventListener("click", function () {

    if ( tries === 1){
        lose++
        L.innerHTML = lose.toString();

    }

    for (var i = 0; i < randomAnswers.length; i++) {



        if (correctA[i] === userInput.value) {

            alert("You're only gonna get it right once Einstein");

            userInput.value = "";







        };

        if (inco[i] === userInput.value) {


            alert("I already told you that its wrong.........SMH!")
            userInput.value = ""
        };





    }






    for (var i = 0; i < randomAnswers.length; i++) {

        if (userInput.value === "") {
            break
        }


        if (randomAnswers[i] === userInput.value) {
            correctA[i] = randomAnswers[i];
            answerBox.innerHTML = correctA.join("");







        }



        if (randomAnswers.indexOf(userInput.value) === -1) {

            alert("Close but..........actually not close at all.")
             tries--;
             alert(tries + " more and you're out.")
            inco.push(userInput.value);

            var wrong = document.createElement("li");
            wrong.innerHTML = userInput.value;
            guesses.appendChild(wrong);

            userInput.value = "";
            break





        }

        if (correctA.toString() === randomAnswers.toString()){

            win++;
            W.innerHTML = win.toString();

            
            answers[Math.floor(Math.random() * answers.length)];
            answers.pop()
            begin;
            guesses.innerHTML = "";
            answerBox.innerHTML = "";
            userInput.value = "";

            
            

        
        
        }

       

















    }


































});


























































































