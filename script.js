var character = document.getElementById("character"); // Referencing 'character' element
var block = document.getElementById("block"); // Referencing 'block' element
var computedStyle = window.getComputedStyle(block);

// *** Determine character to display from spritesheet ***
// Define sprite coordinates
const spriteWidth = 80.8; // Width of each sprite
const spriteHeight = 81; // Height of each sprite
const spriteSheetColumns = 8; // Number of columns in the sprite sheet
const spriteSheetRows = 5; // Number of rows in the sprite sheet

// Calculate total number of sprites
const totalSprites = spriteSheetColumns * spriteSheetRows;

// Function to set the background position of the sprite
function setSpritePosition(spriteIndex) {
  const row = Math.floor(spriteIndex / spriteSheetColumns);
  const col = spriteIndex % spriteSheetColumns;
  const x = -col * spriteWidth;
  const y = -row * spriteHeight;
  // character.style.backgroundPosition = `${x}px ${y}px`;
  character.style.backgroundPosition = `${x}px ${y}px`;
}

/**
 * Make the character 'jump' to dodge the 'block'
 */
function jump(){
  if(character.classList != "animate"){ // Determine to add 'animate' class to 'character'
    character.classList.add("animate");
  }
  setTimeout(function(){ // Remove 'animate' class after 500ms
    character.classList.remove("animate");
  },500);
}

// Detect 'character' intersect with 'block'
// var checkDead = setInterval(function(){
//   var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // Get 'top' value of element (num of pixel from top of screen to top of element)
//   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); // Get 'left' value of element (num of pixel from left of screen to left of element)

//   if(blockLeft<60 && blockLeft>=30 && characterTop>=400){ // Elements intersect -> Game Over
//     block.style.animation = "none";
//     block.style.display = "none";
//     alert("Game Over!");
//   }
// },10);

// // Check block display status
// function checkBlockDisplayStat(){
//   var blockDisplayStat = computedStyle.display;
//   return blockDisplayStat;
// }


// //*** Detect block reach off screen ***
// var count = 0;
// var yourScore = document.getElementById('yourScore');
// // var targetDiv = document.getElementById('block');

// // Function to check left position of the 'block'
// function checkLeftPosition() {
//   var leftPosition = block.offsetLeft;
//   // If/else statement to detect 'block' approching left edge of 'game' screen
//   if (leftPosition <= 15) {
//     // Increment 'count' value by 1 and use formula to calculate current score
//     count++;
//     yourScore.innerHTML = count * 10;
//   }
// }

// // Function to continuously check left position
// function detectLeftPosition() {
//   if(computedStyle.display != 'none'){
//     setInterval(checkLeftPosition, 200); // Check every 200 milliseconds
//     console.log(computedStyle.display);
//     // return;
//   }
//   console.log(computedStyle.display);

//   // else if(computedStyle.display === 'none'){
//     // return;
//     //setInterval(checkLeftPosition, 200); // Check every 200 milliseconds
//   // }
// }

// // Start detecting left position
// detectLeftPosition();


