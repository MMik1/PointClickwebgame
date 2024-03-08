document.getElementById("mainTitle").innerText = "Point and Click adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Game state
gameState = {
    "door2locked": true,
    "booklocked": true,
    "inventory": [
    ]
}

const sec = 1000;

//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//speech bubbles
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const counterSpeech2 = document.getElementById("counterSpeech2");
const mcAudio = document.getElementById("mcAudio");
const cAudio = document.getElementById("cAudio");
//Inventory
const inventoryBox = document.getElementById("inventoryBox"); //div
const inventoryList = document.getElementById("inventoryList"); //ul

//Foreground Items
const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (e.target.id !== "mcImage") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }

    console.log(e.target.id);
    switch (e.target.id) {

            case "koelkast":
                if (gameState.door2locked == true) {
                    // check if we have key
                    if (document.getElementById("inv-book") !== null) {
                        //yes -> unlock door?
                        gameState.door2locked = false;
                        changeInventory('book', 'delete');
                        console.log('Door unlocked!');
                        
            showMessage(mainCharacterSpeech, mcAudio, "The hot pepper");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "Okay im going to eat it");
            setTimeout(showMessage, 11 * sec, mainCharacterSpeech, mcAudio, "Damm this is hot");
            setTimeout(showMessage, 15 * sec, mainCharacterSpeech, mcAudio, "ITS SOOO HOTT OMG!!!");
            setTimeout(showMessage, 20 * sec, mainCharacterSpeech, mcAudio, "I GRADE THIS BASEMENT A GOOD!");
            setTimeout(function() {
                window.location.href = 'secondlvl.html';
            }, 25000); 
                    } else {
                        //no -> alert 'door locked'
                        alert("Koelkast is locked!");
                    }
                } else {
                    console.log('Koelkast geopend');
                }
    
                break;

        case "sign":

        if (gameState.booklocked == true) {
            // check if we have key
            if (document.getElementById("inv-statue") !== null) {
                //yes -> unlock door?
                gameState.booklocked = false;
                changeInventory('statue', 'delete');
                console.log('Door unlocked!');
            
            sign.style.opacity = 0.5;
            showMessage(mainCharacterSpeech, mcAudio, "Wow this is the magicbook");
            setTimeout(function () { counterAvatarImg2.style.opacity = 1; }, 1 * sec);
            setTimeout(showMessage, 5 * sec, counterSpeech, cAudio, "I known where you coming for my friend.");
            setTimeout(showMessage, 10 * sec, mainCharacterSpeech, mcAudio, "How do you known that magicbook?");
            setTimeout(showMessage, 14 * sec, counterSpeech, cAudio, "I heard you talking with Floris the engelstatue");
            setTimeout(showMessage, 20 * sec, counterSpeech, cAudio, "First before i give you the spell to leave this basement");
            setTimeout(showMessage, 28 * sec, counterSpeech, cAudio, "You need a spice before you can use the spel");
            setTimeout(showMessage, 35 * sec, mainCharacterSpeech, mcAudio, "What kinda spice do i need?");
            setTimeout(showMessage, 40 * sec, counterSpeech, cAudio, "You need a pepper do leave this house and eat it and then you can open the door");
            setTimeout(showMessage, 45 * sec, mainCharacterSpeech, mcAudio, "Thats easy...");
            setTimeout(showMessage, 47 * sec, counterSpeech, cAudio, "Its not a regauler pepper its one of the most hottest peppers in the word if you eat it and you survive the door wil open.");
            setTimeout(showMessage, 53 * sec, mainCharacterSpeech, mcAudio, "But that is not a spell");
            setTimeout(showMessage, 56 * sec, counterSpeech, cAudio, "You need to say give me a good grate for this basement while eating the hot pepper. then the door wil open.");
            setTimeout(showMessage, 64 * sec, mainCharacterSpeech, mcAudio, "So i need to grate this basement a good?");
            setTimeout(showMessage, 68 * sec, counterSpeech, cAudio, "Yes you need to say that if you want to escape.");            
            setTimeout(function () { counterAvatarImg2.style.opacity = 0; }, 71 * sec);
            if (document.getElementById("book") !== null) {
                console.log('Found key!');
                document.getElementById("book").remove();
                changeInventory('book', 'add');
            }

             } else {
            //no -> alert 'door locked'
            alert("book is locked!");
             }
             } else {
        console.log('book geopend');
            }
            break;

        case "statue":
            showMessage(mainCharacterSpeech, mcAudio, "Wow a engelstatue..");
            setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 4 * sec, counterSpeech, cAudio, "I can talk if you did not known that.");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "How can you talk engel?");
            setTimeout(showMessage, 12 * sec, counterSpeech, cAudio, "i got cursed by Tymon he is a witch..");
            setTimeout(showMessage, 18 * sec, counterSpeech, cAudio, "I would escape if you can before Tymon will turn you into a statue.");
            setTimeout(showMessage, 22 * sec, mainCharacterSpeech, mcAudio, "How can i escape engel?");
            setTimeout(showMessage, 26 * sec, counterSpeech, cAudio, "I known there is a magicbook with more information how to learn a spell to open the door to get outsite this basement.");
            setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 31 * sec);
            if (document.getElementById("statue") !== null) {
                console.log('Found key!');
                document.getElementById("statue").remove();
                changeInventory('statue', 'add');
            }

            break;

        default:
            //explode


            sign.style.opacity = 1;
            break;

    }

}

/**
 * function to change inventory
 * @param {string} itemName 
 * @param {string} action "add", "delete"
 * @returns 
 */
function changeInventory(itemName, action) {
    if (itemName == null || action == null) {
        console.log('wrong parameters given to changeInventory()');
        return
    }

    switch (action) {
        case 'add':
            gameState.inventory.push(itemName);
            break
        case 'delete':
            gameState.inventory.find(function (item, index) {
                if (item == itemName) {
                    var index = gameState.inventory.indexOf(item);
                    if (index !== -1) {
                        gameState.inventory.splice(index, 1);
                    }
                }
            })
            break

        default:
            break;
    }
    updateInventory(gameState.inventory, inventoryList);
}

/**
 * update inventoryList
 * @param {Array} inventory array of items 
 * @param {HTMLElement} inventoryList html <ul> element 
 */
function updateInventory(inventory, inventoryList) {
    inventoryList.innerHTML = '';
    inventory.forEach(function (item) {
        const inventoryItem = document.createElement("li");
        inventoryItem.id = "inv-" + item;
        inventoryItem.innerText = item;
        inventoryList.appendChild(inventoryItem);
    })
}

/**
 * Shows a message in a speech bubble
 * @param {getElementById} targetBalloon 
 * @param {getElementById} targetSound 
 * @param {string} message 
 */
function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

/**
 * Set the opacity to 0
 * @param {getElementById} targetBalloon 
 * @param {getElementById} targetSound 
 */
function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
}