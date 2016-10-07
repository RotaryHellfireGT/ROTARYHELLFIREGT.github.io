//player setup, add all the elements for the player here
var playerLevel = 1;
var playerHealth = "750";
var playerType = "Fire";
var regularAttack = "200";
var specialAttack = "450";
var playerName= "Charmander";
var enemyHitCheck =0;
var Charmanderlevel = 1;

//if (Charmanderlevel == 3){
  //(alert="working!");
  //document.getElementById("animate").style.marginTopLeft = "1000px";


var battle= new Audio("http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3");
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charmander.gif";
battle.loop = true;
battle.play();

//enemy Level 1 setup
var enemyHealth = "800";
var enemyType = "Grass";
var enemyAttack = "400";
var enemyName = "Bulbasaur";
document.getElementById("enemyName").innerHTML = enemyName;
document.getElementById("enemyHealthBar").value = enemyHealth;
document.getElementById("enemyHealthBar").max = enemyHealth;
document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/bulbasaur.gif";

function fireball() {
  
document.getElementById("animate").style.display = "block";
$(document).ready(function() {
  width = "+=" + 1050;
  $("#animate").animate({
    left: width
  }, 500, function() {
  
    // Animation complete.
  });
});

  //Delay 1 sec
  var delay=400; //1 second
  setTimeout(function() {
    //your code to be executed after 1 second
    $('#animate').stop(true).css({top: 650, left: 120});
  }, delay);
}
  
  if (CharmanderLevel == 3){
   document.getElementById("animate").style.marginTop = "-10px";
  } 


 //END OF FIREBALL FUNCTION

// Function whenever the attack button is pressed, called in HTML
function attack() {
  enemyHealth = enemyHealth - regularAttack;
  enemyHitCheck = 1;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  fireball();
  enemyMove();
  gameChecker();
  enemyHitCheck = 0;
}
// Function whenever the special button is pressed, called in HTML
function special() {
  typeChecker();
  enemyHealth = enemyHealth - specialAttack;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  enemyMove();
  gameChecker();
}

//Enemy fights back with the attack power it was given on the setup or when the level changes
function enemyMove() {
  playerHealth = playerHealth - enemyAttack;
  document.getElementById("playerHealthBar").value = playerHealth;
  document.getElementById("playerHealthNumber").innerHTML = playerHealth;
  gameChecker();
}

//Make sure special moves are used correctly, by modifying their value according to the type of Pokemon the enemy is
function typeChecker() {
  //User is Fire
  if (playerType == "Fire" && enemyType == "Grass") {
    specialAttack = specialAttack * 2;
  }
  if (playerType == "Fire" && enemyType == "Lightning") {
    specialAttack = specialAttack / 2;
  }
  if (playerType == "Fire" && enemyType == "Water") {
    specialAttack = specialAttack / 2;
  }
 if (playerType == "Fire" && enemyType == "Ice") {
    specialAttack = specialAttack * 2;
  }
  if (playerType == "Fire" && enemyType == "Dark") {
    specialAttack = specialAttack / 2;
  }
  if (playerType == "Fire" && enemyType == "Normal") {
    specialAttack = specialAttack / 2;
  }
  //User is Water
  if (playerType == "Water" && enemyType == "Grass") {
    specialAttack = specialAttack / 2;
  }
  if (playerType == "Water" && enemyType == "Lightning") {
    specialAttack = specialAttack * 0.75;
  }
  if (playerType == "Water" && enemyType == "Fire") {
    specialAttack = specialAttack * 2;
  }

  //User is Grass
  if (playerType == "Grass" && enemyType == "Fire") {
    specialAttack = specialAttack / 2;
  }
  if (playerType == "Grass" && enemyType == "Lightning") {
    specialAttack = specialAttack * 1;
  }
  if (playerType == "Grass" && enemyType == "Water") {
    specialAttack = specialAttack * 2;
  }
}

function gameChecker() {
  if (playerHealth < 1) {
    alert("Game Over");
    location.reload();
    //reset the game code goes here
  }

  if (enemyHealth < 1) {
    playerLevel++;
    alert("You Win, You Have Leveled Up To Level " + playerLevel);
    window["level"+playerLevel]();
    //Change Level
  }
}

function level2() {
//Setup new enemy
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/squirtle.gif";
  enemyName = "Squirtle";
  enemyHealth = "550";
  enemyType = "Water";
  enemyAttack = "400";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
  //update charmander
playerHealth = "850";
playerType = "Fire";
regularAttack = "275";
specialAttack = "525";
  Charmanderlevel= "1";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
  
}

function level3() {
//Setup new enemy
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/pikachu.gif";
  enemyName = "Pikachu";
  enemyHealth = "1000";
  enemyType = "Lightning";
  enemyAttack = "400";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.marginLeft = "50px";
  
  //update charmander
playerHealth = "950";
playerType = "Fire";
regularAttack = "500";
specialAttack = "600";
Charmanderlevel= "1";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
 
}  
function level5() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/aerodactyl.gif";
  enemyName = "Aerodactyl (MiniBoss)";
  enemyHealth = "2500";
  enemyType = "Rock";
  enemyAttack = "500";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.height = "300px";
  document.getElementById("enemyPokemonImage").style.width = "400px";
  document.getElementById("enemyPokemonImage").style.marginTop = "-100px";


    //update charmander
playerHealth = "2100";
playerType = "Fire";
regularAttack = "650";
specialAttack = "800";
Charmanderlevel= "1";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth; 
document.getElementById("playerName").innerHTML = playerName;
}

function level4() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/dratini.gif";
  enemyName = "Dratini";
  enemyHealth = "1300";
  enemyType = "Water";
  enemyAttack = "500";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
  
    //update charmander
playerHealth = "1200";
playerType = "Fire";
regularAttack = "650";
specialAttack = "800";
Charmanderlevel= "1";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
  
}
function level6() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/shellder.gif";
  enemyName = "Shellder";
  enemyHealth = "2500";
  enemyType = "Ice";
  enemyAttack = "1200";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.height = "150px";
  document.getElementById("enemyPokemonImage").style.width = "240px";
  document.getElementById("enemyPokemonImage").style.marginTop = "100px";
    //update charmander
playerName="Charmeleon";
playerHealth = "2600";
playerType = "Fire";
regularAttack = "750";
specialAttack = "900";
Charmanderlevel= "2";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charmeleon.gif";
}

function level7() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/sneasel.gif";
  enemyName = "Sneasel";
  enemyHealth = "3400";
  enemyType = "Dark";
  enemyAttack = "750";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.height = "300px";
  document.getElementById("enemyPokemonImage").style.marginTop = "-100px";
   //update charmander
playerName="Charmeleon";
playerHealth = "3100";
playerType = "Fire";
regularAttack = "900";
specialAttack = "1200";
Charmanderlevel= "2";  
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charmeleon.gif";
}
  
   
function level8() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/electabuzz.gif";
  enemyName = "Electabuzz";
  enemyHealth = "4500";
  enemyType = "Lightning";
  enemyAttack = "900";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.width = "300px";
  
  playerName="Charmeleon";
playerHealth = "3800";
playerType = "Fire";
regularAttack = "1150";
specialAttack = "1400";
Charmanderlevel= "2";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charmeleon.gif";
}
  
  
function level9() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/seadra.gif";
  enemyName = "Seadra";
  enemyHealth = "5100";
  enemyType = "Water";
  enemyAttack = "1000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
playerName="Charmeleon";
playerHealth = "4600";
playerType = "Fire";
regularAttack = "1400";
specialAttack = "1800";
Charmanderlevel= "2";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charmeleon.gif";
}

  
    
function level10() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/snorlax.gif";
  enemyName = "Snorlax (Boss)";
  enemyHealth = "10000";
  enemyType = "Normal";
  enemyAttack = "800";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
playerName="Charmeleon";
playerHealth = "5000";
playerType = "Fire";
regularAttack = "1700";
specialAttack = "3600";
Charmanderlevel= "2";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charmeleon.gif";
}
    
function level11() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/jolteon.gif";
  enemyName = "Jolteon";
  enemyHealth = "9500";
  enemyType = "Lightning";
  enemyAttack = "1400";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.height = "250px";
  document.getElementById("enemyPokemonImage").style.width = "200px";
  
  playerName="Charizard";
playerHealth = "7100";
playerType = "Fire";
regularAttack = "1900";
specialAttack = "3900";
Charmanderlevel= "3";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard.gif";
document.getElementById("yourPokemonImage").style.height = "400px"; 
document.getElementById("yourPokemonImage").style.width = "500px";
}
function level12() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/kabutops.gif";
  enemyName = "Kabutops";
  enemyHealth = "11000";
  enemyType = "Rock";
  enemyAttack = "1800";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName="Charizard";
playerHealth = "9200";
playerType = "Fire";
regularAttack = "2400";
specialAttack = "4700";
Charmanderlevel= "3";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard.gif";
}
function level13() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/venusaur.gif";
  enemyName = "Venusaur";
  enemyHealth = "15000";
  enemyType = "Grass";
  enemyAttack = "4600";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.width = "350px";
    //update charmander
playerName="Charizard";
playerHealth = "9400";
playerType = "Fire";
regularAttack = "2400";
specialAttack = "4500";
Charmanderlevel= "3";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard.gif";
}
function level14() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/blastoise.gif";
  enemyName = "Blastoise";
  enemyHealth = "15000";
  enemyType = "Water";
  enemyAttack = "3900";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName="Charizard";
playerHealth = "12000";
playerType = "Fire";
regularAttack = "5000";
specialAttack = "9000 ";
Charmanderlevel= "3";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard.gif";
}
function level15() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/lapras.gif";
  enemyName = "Lapras (BOSS)";
  enemyHealth = "22000";
  enemyType = "Water";
  enemyAttack = "5000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName="Charizard";
playerHealth = "16000";
playerType = "Fire";
regularAttack = "7500";
specialAttack = "9000 ";
Charmanderlevel= "3";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard.gif";
}
  function level16() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/gengar.gif";
  enemyName = "Gengar";
  enemyHealth = "25000";
  enemyType = "Ghost";
  enemyAttack = "9000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "23000";
playerType = "Fire";
regularAttack = "10000";
specialAttack = "12500 ";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
  }
function level17() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/alakazam.gif";
  enemyName = "Alakazam";
  enemyHealth = "20000";
  enemyType = "Psychic";
  enemyAttack = "11000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "24000";
playerType = "Fire";
regularAttack = "11000";
specialAttack = "13000 ";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
  function level18() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/cloyster.gif";
  enemyName = "Cloyster";
  enemyHealth = "40000";
  enemyType = "Ice";
  enemyAttack = "9000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "25000";
playerType = "Fire";
regularAttack = "12000";
specialAttack = "14000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level19() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/tentacruel.gif";
  enemyName = "Tentacruel";
  enemyHealth = "35000";
  enemyType = "Water";
  enemyAttack = "10000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "31000";
playerType = "Fire";
regularAttack = "13000";
specialAttack = "16000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level20() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/shiny/gyarados-mega.gif";
  enemyName = "Mega Gyarados (BOSS)";
  enemyHealth = "60000";
  enemyType = "Water";
  enemyAttack = "13000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.width = "400px";
 
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "40000";
playerType = "Fire";
regularAttack = "21000";
specialAttack = "24000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level21() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/dragonite.gif";
  enemyName = "Dragonite";
  enemyHealth = "100000";
  enemyType = "Dragon";
  enemyAttack = "30000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "91000";
playerType = "Fire";
regularAttack = "42000";
specialAttack = "48000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level22() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/articuno.gif";
  enemyName = "Articuno";
  enemyHealth = "150000";
  enemyType = "Ice";
  enemyAttack = "42000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "100000";
playerType = "Fire";
regularAttack = "50000";
specialAttack = "55000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level23() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/moltres.gif";
  enemyName = "Moltres";
  enemyHealth = "200000";
  enemyType = "Fire";
  enemyAttack = "50000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "160000";
playerType = "Fire";
regularAttack = "70000";
specialAttack = "87000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level24() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/zapdos.gif";
  enemyName = "Zapdos";
  enemyHealth = "250000";
  enemyType = "Lightning";
  enemyAttack = "75000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "227500";
playerType = "Fire";
regularAttack = "95000";
specialAttack = "120000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level25() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/mewtwo.gif";
  enemyName = "Mewtwo(FINAL BOSS)";
  enemyHealth = "1000000";
  enemyType = "Psychic";
  enemyAttack = "200000";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.marginLeft = "100px";
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "750000";
playerType = "Fire";
regularAttack = "200000";
specialAttack = "350000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";
}
function level26() {
  document.getElementById("enemyPokemonImage").src = "http://www.pokestadium.com/sprites/xy/mewtwo-megay.gif";
  enemyName = "Mega Mewtwo Y(SECRET BOSS)";
  enemyHealth = "999999999";
  enemyType = "Psychic";
  enemyAttack = "999999";
  document.getElementById("enemyName").innerHTML = enemyName;
  document.getElementById("enemyHealthBar").value = enemyHealth;
  document.getElementById("enemyHealthBar").max = enemyHealth;
  document.getElementById("enemyHealthNumber").innerHTML = enemyHealth;
  document.getElementById("enemyPokemonImage").style.height = "300px"
  
    //update charmander
playerName= "Mega Charizard X";
playerHealth = "1000000000";
playerType = "Fire";
regularAttack = "90000000";
specialAttack = "200000000";
Charmanderlevel= "4";
document.getElementById("playerHealthBar").value = playerHealth;
document.getElementById("playerHealthNumber").innerHTML = playerHealth;
document.getElementById("playerName").innerHTML = playerName;
document.getElementById("yourPokemonImage").src = "http://www.pokestadium.com/sprites/xy/back/charizard-megax.gif";

}