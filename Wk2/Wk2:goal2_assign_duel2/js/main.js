/*Desiree Criado
 5/16/15
 PWA1-0501
 goal2_assign2_duel2
 */

//self-executing function
(function(){
    console.log("FIGHT!");

//Player one's name, health, max damage, min damage
    var player1 = ["Subzero", 100, 50, "min1"];
//Player two's name, health, max damage, min damage
    var player2 = ["Scorpion", 100, 50, "min2"];
    
    console.log(player1[0] + " vs " + player2[0]);


//round variable
    var round = 0;

//fight function
    function fight(){
        console.log("in the fight function");
        //alert round number, players' names, players' health
        alert(player1[0] + ":"+ player1[1] + " *START* " + player2[0] + ":" + player2[1]);
        //for loop: runs program through 10 rounds
        for (var i=0; i<10; i++){

            //define minimum damage
            player1[3] = player1[2] * .5;
            player2[3] = player2[2] * .5;

            //Math.random formula to randomize damage
            var f1 = Math.floor(Math.random()*(player1[2] - player1[3])+player1[3]);
            var f2 = Math.floor(Math.random()*(player2[2] - player2[3])+player2[3]);

            //print to console (check work)
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            player1[1]-=f1;
            player2[1]-=f2;

            //print to console (check work)
            console.log(player1[1]);
            console.log(player2[1]);

            console.log(player1[0] + ":"+ player1[1] + " " + player2[0] + ":" + player2[1]);

            //call Winner check function
            var results = winnerCheck();
            console.log(results);
            //break loop
            if(results === "no winner"){
                round++;
                alert(player1[0] + ":"+ player1[1] + " *ROUND " + round + " IS OVER* " + player2[0] + ":" + player2[1]);
            }else{
                alert(results);
                break;
            };

        };

    };


//winner check at the end of every round: one player with health<=0, or both are 0 or less
    function winnerCheck(){
        console.log("in winner check function");
    //code to determine if there is a winner at the end of each round
        var result = "no winner";
        //both players < 0
        if (player1[1]<1 && player2[1]<1){
            result = "You Both Die";
        //player 2 wins
        }else if(player1[1]<1){
            result = player2[0] + " WINS!";
        //player 1 ones
        }else if(player2[1]<1){
            result = player1[0] + " WINS!";
        };

        return result;

    };

//call function: program starts
    console.log("program starts");

    fight();



})();