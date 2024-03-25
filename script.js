// var character = document.getElementById("character");
var character = document.getElementById("sprite");

var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<60 && blockLeft>0 && characterTop>=400){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
    }
},10);

document.getElementById('gameContainer').addEventListener('click', function() {
    jump();
});
  
document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault(); // Prevent scrolling the page
        jump();
    }
});

// *** Displaying Mario ***
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
    document.getElementById('sprite').style.backgroundPosition = `${x}px ${y}px`;
}

// Example: Displaying sprite at index 5
setSpritePosition(24);
// setSpritePosition(1);