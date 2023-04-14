function blastoffTimer() {

    // this is for blastoff assignment jan.18.23 





    console.log("blastoffTimer()started");

    // this is for the variable to keep time shawty  

    var currTime = 50;

    setTimeout(function () {

        console.log("currTime =" + currTime);

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

        currTime = currtime - 5;

    }, 0);





    //timer at 50  

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 5000);





    //timer at 45 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 10000);





    //timer at 40 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 15000);



    //timer at 35 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 20000);





    //timer at 30 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 25000)





    //timer at 25 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 30000);





    //timer at 20 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 35000);





    //timer at 15  

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 40000);





    //timer at 10 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 45000);





    //timer at 5 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";

    }, 50000);





    //timer at 0 

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = "Blastoff!!!!!";

    }, 55000);



}

// craps tracking variables  

var win = 0;

var lose = 0;

var draws = 0;





function playCraps() {

    console.log("playCraps() started");

    // created variable die1 for the die 1 roll  

    var die1 = 0;

    // created variable die2 for the die 2 roll 

    var die2 = 0;

    // created variable to store die1+ die2 

    var sum = 0;



    // roll the dice for die1  

    // rolling the die 

    die1 = 1 + Math.floor(6 * Math.random());

    // displaying the result on the console 

    console.log(die1);



    //roll the dice for die2 

    // rolling the die 

    die2 = 1 + Math.floor(6 * Math.random());

    // displaying the result on the console 

    console.log(die2);



    // determining sum  

    sum = die1 + die2;

    // displaying the result on the console 

    console.log("The sum of the two dice is: " + sum);



    // displaying die1 on the webpage 

    document.getElementById("die1Res").innerHTML = die1;

    // displaying die2 on the webpage 

    document.getElementById("die2Res").innerHTML = die2;

    // displaying result on the webpage 

    document.getElementById("diceSum").innerHTML = sum;



    //determining game results 

    if (sum == 11 || sum == 7) {

        console.log("Game result : loss");

        document.getElementById("gameRes").innerHTML = "You lost :(";

        loses++;

        document.getElementById("losesRes").innerHTML = loses;

    } else if (die1 == die2 && die1 % 2 == 0) {

        console.log("Game result : win");

        document.getElementById("gameRes").innerHTML = "You won!!! :D";

        wins++;

        document.getElementById("winsRes").innerHTML = wins;

    } else {

        console.log("Game result : push");

        document.getElementById("gameRes").innerHTML = "keep pushing!, you haven't lost yet :)";

        draws++;

        document.getElementById("drawsRes").innerHTML = draws;

    }

}



function btrBlastoffTimer() {

    console.log("blastoffTimer() started");

    // variable to keep time 

    var currTime = 50;



    // loop for 10 timers, sec 50 - 2 



    for (var i = 0; i < 10; i = i + 1) {

        // this gets i done i number of times  

        setTimeout(function () {

            if (currTime == 0) {

                document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";

            } else if (currTime < 25) {

                document.getElementById("blastoffDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " sec left";

            } else {

                console.log("currTime = " + currTime);

                document.getElementById("blastoffDis").innerHTML = currTime + " sec left";

            }

            currTime = currTime - 5;

        }, 5000 * i);



    }

    // seperate timer for blastoff  

    setTimeout(function () {

        console.log("currTime =" + currTime);

        currTime = currTime - 5;

        document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";

    }, 55000);

}