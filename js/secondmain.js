document.getElementById("mainTitle").innerText = "YOU ESCAPED THE BASEMENT GGS";

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
const eAudio = document.getElementById("eAudio");
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


        case "credits":
            showMessage(mainCharacterSpeech, mcAudio, "Made by Mans Mik");
            setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 4 * sec, counterSpeech, eAudio, "BOOMM");
            setTimeout(showMessage, 9 * sec, counterSpeech, cAudio, "Did i heard a explosion?");
            setTimeout(showMessage, 14 * sec, mainCharacterSpeech, mcAudio, "I think so yea");
            setTimeout(showMessage, 18 * sec, counterSpeech, cAudio, "I think the basement has been blownup by the chemicals");
            setTimeout(showMessage, 23 * sec, mainCharacterSpeech, mcAudio, "In that case i would like to thank you for saving my live floris the statue");
            setTimeout(showMessage, 28 * sec, mainCharacterSpeech, mcAudio, "And i also want to thank you Ricardo and Matthijs for this amazing experience website / game develoment in one");
            setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 38 * sec);
            
            if (document.getElementById("credits") !== null) {
                console.log('Found credits!');
                document.getElementById("credits").remove();
                changeInventory('credits', 'add');
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