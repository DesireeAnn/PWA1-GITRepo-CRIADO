/*Desiree Criado
 5/9/15
 PWA1-0501
 goal1_assign1_duel1
 */

//self-executing function
(function(){
    console.log("FIGHT!");

//Player's names
    var oneName = "Subzero";
    var twoName = "Skorpion";

    console.log(oneName + " vs " + twoName);

//Player's health
    var oneHealth = 100;
    var twoHealth = 100;

//Player's max. damage threshold
    var oneDamage = 50;
    var twoDamage = 50;


//round variable
    var round = 0;

//fight function
    function fight(){
        console.log("in the fight function");
        //alert round number, players' names, players' health
        alert(oneName + ":"+ oneHealth + " *START* " + twoName + ":" + twoHealth);
        //for loop: runs program through 10 rounds
        for (var i=0; i<10; i++){

            //define minimum damage
            var minDamage1 = oneDamage * .5;
            var minDamage2 = twoDamage * .5;

            //Math.random formula to randomize damage
            var f1 = Math.floor(Math.random()*(oneDamage - minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(twoDamage - minDamage2)+minDamage2);

            //print to console (check work)
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            oneHealth-=f1;
            twoHealth-=f2;

            //print to console (check work)
            console.log(oneHealth);
            console.log(twoHealth);

            console.log(oneName + ":"+ oneHealth + " " + twoName + ":" + twoHealth);

            //call Winner check function
            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(oneName + ":"+ oneHealth + " *ROUND " + round + " IS OVER* " + twoName + ":" + twoHealth);
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

        if (oneHealth<1 && twoHealth<1){
            result = "You Both Die";
        }else if(oneHealth<1){
            result = twoName + " WINS!";
        }else if(twoHealth<1){
            result = oneName + " WINS!";
        };

        return result;

    };

//call function: program starts
    console.log("program starts");

    fight();

//break loop

})();