$(document).ready(function () {

    var questionTime = 3000;
    var currentQuestion;
    var correctAnswers = ["Michael Jordan", "Koenigsegg","1967"];
    var wrongAnswer ;
    var index = [0,1,2,3];
    //function sets the variable values as well as moving the thumbnails based on selection
    function begin() {
        first = {
            id: 0,
            question: "Who is the best NBA player of all time?",
            answer1:"Lebron James",
            answer2:"Michael Jordan",
            answer3:"Stephen Curry",
            answer4:"Mats Sundin",

        }

        second = {
            id: 1,
            question: "What is the make of the fasted car?",
            answer1:"Koenigsegg",
            answer2:"Bugatti",
            answer3:"Aston Martin",
            answer4:"SpaceX",

        }

        third = {
            id: 2,
            question: "What year did the Leafs last win the Stanley Cup?",
            answer1:"1965",
            answer2:"1966",
            answer3:"1967",
            answer4:"1968",

        }

        fourth = {
            id: 3,
            question: "What is the capital of Ontario?",
            answer1:"Ottawa",
            answer2:"Calgary",
            answer3:"Toronto",
            answer4:"Kingston",

        }

            // reset variables
            currentQuestion= null;
            wrongAnswer = null;
            questionSelection = [first,second,third,fourth];

            // clears all character divs
            $(".insert").empty();

            

    $(".start").on("click", function() {
        // when character has been selected
        if(currentQuestion === null && wrongAnswer === null) {
            //hide the start button as soon as the user clicks it


            $(".start").hide();

            $("<div>").addClass("question insert first-insert").html(first.question).appendTo($(".jumbotron"));
            
            $("<div>").addClass("btn btn-danger answers insert second-insert").html(first.answer1).appendTo($(".first-insert"));

            $("<div>").addClass("btn btn-danger answers insert third-insert").html(first.answer2).appendTo($(".first-insert"));
           
            $("<div>").addClass("btn btn-danger answers insert fourth-insert").html(first.answer3).appendTo($(".first-insert"));
           
            $("<div>").addClass("btn btn-danger answers insert fifth-insert").html(first.answer4).appendTo($(".first-insert"));
            
            $("<br></br>").insertBefore(".insert");

			// append new div to character selection
			$("#characterSelection").append(newCharacterDiv);









            //get id of character selected
            //var ID = parseInt($(this).attr("id"));

            myCharacter = characters[ID];

            // loop through character array
            $.each(characters, function(index,myCharacter) {
                // add unselected characters to enemySpace array
                if(myCharacter.id !== ID) {
                    attackers.push(myCharacter);
                    $("#"+myCharacter.id).removeClass("neutral attacker").appendTo($(".enemySpace"));
                    $("#"+myCharacter.id).addClass("defense");
                } else {
                    $("#"+myCharacter.id).removeClass("neutral defense").appendTo($('.mine'));
                }
                
            });//end loop for myCharacter   	
         
        }//end defense function
     
     });
     
      $(".reset").hide();
} //end begin function

//start game
begin();



    // //-----------------------------------------------------------------------------------------------------//
    // //Start the attack logic on clicking the attack button
    // $(".attack").on("click", function() {
    //     if(myCharacter !== null && myCharacter.Power > 0 && attackers.length > 0) {
    //         console.log("Attack button works");
    //         // created variable to store game status messages
    //         var message = "";

    //         // when defender has been selected
    //         if(Foe !== null) {

    //             // reduce the attackers power by the attackpower of the your character
    //             Foe.Power -= myCharacter.attackPower;
    //             message += myCharacter.name + " attacked " + Foe.name + " and caused a " + myCharacter.attackPower + " point damage.<br>";

    //             console.log(message);
    //             // update the attackers power in the image caption.
    //             $("."+Foe.id + "Power").html(Foe.Power);

    //             //reduce your character's power by the counterattact power of your foe
    //             myCharacter.Power -= Foe.counterAttackPower;
	// 			message += Foe.name + " counter-attacked and caused a " + Foe.counterAttackPower + " point damage.<br>";
                
    //             console.log(message);
	// 			// update your character's power
	// 			$("."+myCharacter.id + "Power").html(myCharacter.Power);

    //             // create something here with if statements depending on the first person to run out of points

    //             // you only win if there are no attackers left in the array

    //         };
    //         $(".message").html(message);
    //     }
    // });//end attack on.click


})//document ready//
