$(document).ready(function () {
    $(".start").show();
    $(".reset").hide();
    
    var questionTime = 3;
    var ResetTime = 3;
    var intervalID;
    var number = 0;


    var currentQuestion;
    var Answers = [1,1,3,3];
    var index = [0,1,2,3];
    //function sets the variable values as well as moving the thumbnails based on selection


    function StartOnClick () {

        $(".start").hide();
        

        first = {
            id: 0,
            question: "Who is the greatest NBA player of all time?",
            answer1:"Lebron James",
            answer2:"Michael Jordan",
            answer3:"Stephen Curry",
            answer4:"Mats Sundin",
            CorrectAnswer:"Michael Jordan",

        }

        second = {
            id: 1,
            question: "What is the make of the fastest car?",
            answer1:"Koenigsegg",
            answer2:"Bugatti",
            answer3:"Aston Martin",
            answer4:"SpaceX",
            CorrectAnswer:"Koenigsegg",

        }

        third = {
            id: 2,
            question: "What year did the Leafs last win the Stanley Cup?",
            answer1:"1965",
            answer2:"1966",
            answer3:"1967",
            answer4:"1968",
            CorrectAnswer:"1967",

        }

        fourth = {
            id: 3,
            question: "What is the capital of Ontario?",
            answer1:"Ottawa",
            answer2:"Calgary",
            answer3:"Toronto",
            answer4:"Kingston",
            CorrectAnswer:"Toronto",

        }

            // reset variables
            currentQuestion= null;
            wrongAnswer = null;
            questionSelection = [first,second,third,fourth];

            // clears all character divs
            $(".timerJumbotron").empty();
            $(".answerJumbotron").empty();
            $(".questionJumbotron").empty();

        // when character has been selected
        if(currentQuestion === null && wrongAnswer === null && number < questionSelection.length) {
            //start the timer as soon as user clicks
            runTimer();

            currentQuestion = questionSelection[number];
            // set some variables that will be used to keep score
            var correctAnswers = 0;
            var wrongAnswers = 0;

            //function addQuestions (value) {
            //the question and answer section
            $("<div>").addClass("question insert 0-insert").html(currentQuestion.question).appendTo($(".questionJumbotron"));
            
            $("<div>").addClass("btn btn-danger answers insert 1-insert").attr('id','0').html(currentQuestion.answer1).appendTo($(".answerJumbotron"));

            $("<div>").addClass("btn btn-danger answers insert 2-insert").attr('id','1').html(currentQuestion.answer2).insertAfter($(".1-insert"));
           
            $("<div>").addClass("btn btn-danger answers insert 3-insert").attr('id','2').html(currentQuestion.answer3).insertAfter($(".2-insert"));
           
            $("<div>").addClass("btn btn-danger answers insert 4-insert").attr('id','3').html(currentQuestion.answer4).insertAfter($(".3-insert"));
            
             //calls the decrement function every 1 second
             function runTimer (){
                clearInterval(intervalID);
                intervalID = setInterval(decrement,1000);
            }
            
            

        //timer function - ---------------------------------------------------------------------------------//
        
            function decrement() {
               
                questionTime -= 1;
 
                if (questionTime <= 0 && number < questionSelection.length) { //if you run out of time
                     stop()

                     $(".timerJumbotron").empty();
                     $("<div>").addClass("TimeOut").append("<p>You didn't reply in time. See Answer Below</p>").appendTo($(".timerJumbotron"));
                     $(".answerJumbotron").empty();
                     $("<div>").addClass("btn btn-success currentAnswer").html(currentQuestion.CorrectAnswer).appendTo($(".answerJumbotron"));

                     number++;
                    
                     setTimeout(StartOnClick,2000);

                 } else {

                    $(".timerJumbotron").html("<h2>" + questionTime + "</h2>");
                
                }

            };//end decrement function
     
            
            function stop () {
                clearInterval(intervalID);
                questionTime = questionTime + ResetTime;
                
            } 

        } else  {

            $("<div>").addClass("btn btn-primary btn-lg start").html("Press Start To Begin").appendTo($(".questionJumbotron"));
            $(".start").on("click", function() {
                number = 0;
                StartOnClick();
            });
                };
    }//end StartOnClick function

     
     //};// start on click function
    $(".reset").on("click", function() {
        $(".reset").hide();
        $(".start").show();
    });


    $(".start").on("click", function() {
        $(".reset").hide();
        number = 0;
        StartOnClick();
    });

})//document ready//
