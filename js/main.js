document.getElementById("mainTitle").innerText = "WTF is CREATIVITY?";

// Game window reference
const gameWindow = document.getElementById("gameWindow");

// Game state
const gameState = {
    door2locked: true,
    door1locked: true,
    booklocked: true,
    inventory: []
};

const sec = 1000;

// Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

// Speech bubbles
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const counterSpeech2 = document.getElementById("counterSpeech2");
const mcAudio = document.getElementById("mcAudio");
const cAudio = document.getElementById("cAudio");
const kAudio = document.getElementById("kAudio");
const krAudio = document.getElementById("krAudio");
const dAudio = document.getElementById("dAudio");
const pAudio = document.getElementById("pAudio");
const draakAudio = document.getElementById("draakAudio");

// Inventory
const inventoryBox = document.getElementById("inventoryBox"); // div
const inventoryList = document.getElementById("inventoryList"); // ul

// Foreground Items
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
            if (gameState.door2locked === true) {
                if (document.getElementById("inv-ijsstaf") !== null) {
                    gameState.door2locked = false;
                    changeInventory('ijsstaf', 'delete');
                    console.log('Door unlocked!');
                    showMessage(mainCharacterSpeech, mcAudio, "Prinses Elsa");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "Ik kom u redden");
                    setTimeout(showMessage, 13 * sec, mainCharacterSpeech, mcAudio, "*Gebruikt ijsstaf* ");
                    setTimeout(showMessage, 19 * sec, mainCharacterSpeech, mcAudio, "*Loopt de ijstrap op*");
                    setTimeout(showMessage, 25 * sec, mainCharacterSpeech, mcAudio, "*Breekt Het ijskooi*");
                    setTimeout(showMessage, 30 * sec, mainCharacterSpeech, mcAudio, "*Geeft Elsa een kus*");
                    setTimeout(function() {
                        window.location.href = 'secondlvl.html';
                    }, 6000);
                } else {
                    alert("Je moet eerst nog je ijskrachten krijgen voordat je prinses kan redden.");
                }
            } else {
                console.log('Koelkast geopend');
            }
            break;

        case "sign":
            if (gameState.booklocked === true) {
                if (document.getElementById("inv-rescue") !== null) {
                    gameState.booklocked = false;
                    changeInventory('rescue', 'delete');
                    console.log('Door unlocked!');
                    sign.style.opacity = 0.5;
                    showMessage(mainCharacterSpeech, mcAudio, "Het ijspaleis ik ben er.");
                    setTimeout(showMessage, 5 * sec, mainCharacterSpeech, mcAudio, "Het ziet hier verlaten uit.");
                    setTimeout(showMessage, 10 * sec, mainCharacterSpeech, mcAudio, "Elsa ben je hier?");
                    setTimeout(showMessage, 15 * sec, mainCharacterSpeech, mcAudio, "Oke de volgende kamer haar slaap kamer eerst even kloppen");
                    setTimeout(showMessage, 20 * sec, mainCharacterSpeech, kAudio, "*Klop klop*");
                    setTimeout(showMessage, 28 * sec, mainCharacterSpeech, dAudio, "*Opent de deur*");
                    setTimeout(showMessage, 35 * sec, mainCharacterSpeech, mcAudio, "Het ziet hier rommelig uit en waarom zie ik hier kapote kleding stukjes?");
                    setTimeout(showMessage, 40 * sec, mainCharacterSpeech, mcAudio, "Er ligt hier een briefje op de tafel.");
                    setTimeout(showMessage, 45 * sec, mainCharacterSpeech, pAudio, "*Pakt het briefje*");
                    setTimeout(showMessage, 50 * sec, mainCharacterSpeech, mcAudio, "Beste Persoon die dit leest ik ben prinses Elsa de prinses van het land Polar peaks ik word aangevallen en zometeen mee genomen door ijskoning.");
                    setTimeout(showMessage, 65 * sec, mainCharacterSpeech, mcAudio, "Als u dit leest de ijskoning is een man die ijskrachten heeft hij is te verslaan maar ik ben te zwak");
                    setTimeout(showMessage, 75 * sec, mainCharacterSpeech, mcAudio, "Ga naar de ijsdraak om ijs krachten te bemachten");
                    setTimeout(showMessage, 80 * sec, mainCharacterSpeech, mcAudio, "Oke dus ik moet naar de ijsdraak tijd om dan maar te gaan.");
                    setTimeout(showMessage, 86 * sec, mainCharacterSpeech, mcAudio, "Opdracht ga naar de ijsdraak.");
                    if (document.getElementById("book") !== null) {
                        console.log('Found key!');
                        document.getElementById("book").remove();
                        changeInventory('book', 'add');
                    }
                } else {
                    alert("Poort is gesloten");
                }
            } else {
                console.log('Book geopend');
            }
            break;

        case "door1":
            if (gameState.door1locked === true) {
                if (document.getElementById("inv-book") !== null) {
                    gameState.door1locked = false;
                    changeInventory('book', 'delete');
                    console.log('Door unlocked!');
                    changeInventory('ijsstaf', 'add');
                    sign.style.opacity = 0.5;
                    showMessage(mainCharacterSpeech, mcAudio, "De ijsdraak");
                    setTimeout(function () { counterAvatarImg2.style.opacity = 1; }, 5 * sec);
                    setTimeout(showMessage, 5 * sec, counterSpeech, draakAudio, "*Gromt*.");
                    setTimeout(showMessage, 10 * sec, mainCharacterSpeech, mcAudio, "Ijsdraak ik hen uw hulp nodig prinses Elsa");
                    setTimeout(showMessage, 15 * sec, mainCharacterSpeech, mcAudio, "Is gevangen genomen door de ijskoning.");  
                    setTimeout(showMessage, 20 * sec, counterSpeech, draakAudio, "De ijskoning *gromt hard*");
                    setTimeout(showMessage, 25 * sec, counterSpeech, draakAudio, "Ik geef u de ijskrachten heer Polar piet ");
                    setTimeout(showMessage, 30 * sec, mainCharacterSpeech, mcAudio, "Hoe kent u mijn naam?");
                    setTimeout(showMessage, 35 * sec, counterSpeech, draakAudio, "Ik was de persoon die u de visioenen gaf");
                    setTimeout(showMessage, 40 * sec, mainCharacterSpeech, mcAudio, "Weet u ook waar Elsa zich bevind?");
                    setTimeout(showMessage, 45 * sec, counterSpeech, draakAudio, "Elsa zit de skull grot gevangen in een ijskooi ");
                    setTimeout(function () { counterAvatarImg2.style.opacity = 0; }, 50 * sec);
                    if (document.getElementById("book") !== null) {
                        console.log('Found key!');
                        document.getElementById("book").remove();
                    }
                } else {
                    alert("Draak moet nog opladen");
                }
            } else {
                console.log('Draak geopend');
            }
            break;

        case "rescue":
            showMessage(mainCharacterSpeech, mcAudio, "Eindelijk polar peaks gevonden!");
            setTimeout(showMessage, 4 * sec, mainCharacterSpeech, mcAudio, "Na lang zoeken naar dit Kasteel?");
            setTimeout(showMessage, 9 * sec, mainCharacterSpeech, mcAudio, "Waar zal prinses Elsa zich bevinden?");
            setTimeout(showMessage, 15 * sec, mainCharacterSpeech, mcAudio, "*schreeuwt* ELSAAA! waar ben je?");
            setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 20 * sec);
            setTimeout(showMessage, 20 * sec, counterSpeech, krAudio, "*Krekel geluiden*");
            setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 24 * sec);
            setTimeout(showMessage, 26 * sec, mainCharacterSpeech, mcAudio, "Dit is geen goed teken");
            setTimeout(showMessage, 32 * sec, mainCharacterSpeech, mcAudio, "Ik denk dat ik naar de poort van het ijs paleis moet gaan checken.");
            if (document.getElementById("rescue") !== null) {
                console.log('Found key!');
                document.getElementById("rescue").remove();
                changeInventory('rescue', 'add');
            }
            break;

        default:
            sign.style.opacity = 1;
            break;
    }
};

/**
 * Function to change inventory
 * @param {string} itemName 
 * @param {string} action "add", "delete"
 */
function changeInventory(itemName, action) {
    if (itemName == null || action == null) {
        console.log('Wrong parameters given to changeInventory()');
        return;
    }

    switch (action) {
        case 'add':
            gameState.inventory.push(itemName);
            break;
        case 'delete':
            gameState.inventory = gameState.inventory.filter(item => item !== itemName);
            break;
        default:
            break;
    }
    updateInventory(gameState.inventory, inventoryList);
}

/**
 * Update inventoryList
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
    });
}

/**
 * Shows a message in a speech bubble
 * @param {HTMLElement} targetBalloon 
 * @param {HTMLElement} targetSound 
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
 * @param {HTMLElement} targetBalloon 
 * @param {HTMLElement} targetSound 
 */
function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
}
