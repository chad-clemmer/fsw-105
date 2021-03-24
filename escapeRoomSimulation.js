var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please?");

var welcomeMessage = `Welcome ${playerName} to the Escape Room Game Simulation!`;
console.log(welcomeMessage);

var isPlayerAlive = true;
var hasFoundKey = false;

while (isPlayerAlive == true)
{
    const menuID = readlineSync.keyIn(`Enter 1 to Put hand in hole, \n Enter 2 to Find the key, \n Enter 3 to Open the door`, {limit: '$<1-3>'});
    if (menuID == 1){
        console.log(`${playerName}, oh no, you put your hand in the hole. Game is Over!`);
        isPlayerAlive = false;
    }
    else if (menuID == 2 && hasFoundKey == false){
        console.log(`${playerName}, you found the key successfully.  Proceed to menu option 3 to open the door successfully.`);
        hasFoundKey = true;
    }
    else if (menuID == 2 && hasFoundKey == true){
        console.log(`${playerName}, it appears that you already have the key.  Do not waste time with this menu option. Proceed to menu option 3 to open the door successfully.`);
    }
    else if (menuID == 3 && hasFoundKey == false){
        console.log(`${playerName}, you have yet to find the key, please proceed to menu option 2 and find the key first!`);
    }
    else if (menuID == 3 && hasFoundKey == true){
        console.log(`${playerName}, Congratulations!, you have opened the door successfully!  Bravo!`);
        isPlayerAlive = false;
    }
}