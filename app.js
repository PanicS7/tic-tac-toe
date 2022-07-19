const GAMEBOARD = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
  playerOne: new Player("X"),
  playerTwo: new Player("O"),
  draw: (event, player) => {
    player.draw(event);
  },
  haveWinner: false,
  winnerElem: document.getElementById("winner"),
  container: document.getElementById("gameboard"),
  xElem: document.getElementById("x"),
  oElem: document.getElementById("o")
};

const GAMEFLOW = {
  // X play first, userFirst = true, playerOne = new Player("X") need to be same
  userFirst: true,
  // Count turns, if turn is 10 game need to end
  turnCount: 1,
  play: (event) => {
    // Run draw function depending of player (draw X or O)
    if (GAMEFLOW.userFirst === true) {
      GAMEBOARD.draw(event, GAMEBOARD.playerOne);
    } else {
      GAMEBOARD.draw(event, GAMEBOARD.playerTwo);
    }
    // Check does game need to end
    GAMEFLOW.endGame(event);
  },
  endGame: (event) => {
    GAMEFLOW.findWinner();
    // If game turn is 10 - all fields are clicked, game need to end
    if (GAMEFLOW.turnCount >= 10 && GAMEBOARD.haveWinner === false) {
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.winnerElem.innerText = "It is draw";    }

    if (GAMEBOARD.haveWinner === true) {
      // Remove click event for every field
      [...event.target.parentNode.childNodes].map((field) => {
        field.removeEventListener("click", handleClickEvent);
      });
    }
  },
  changePlayer: () => {
    if (GAMEFLOW.userFirst === true) {
      GAMEBOARD.oElem.parentNode.className = "turn";
      GAMEBOARD.xElem.parentNode.className = "";
    } else {
      GAMEBOARD.xElem.parentNode.className = "turn";
      GAMEBOARD.oElem.parentNode.className = "";
    }
    GAMEFLOW.userFirst = !GAMEFLOW.userFirst;
  },
  findWinner: () => {
    // Check for "X"
    // check horizontal
    if (GAMEBOARD.gameboard[0] === "X" && GAMEBOARD.gameboard[1] === "X" && GAMEBOARD.gameboard[2] === "X") {    
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[3] === "X" && GAMEBOARD.gameboard[4] === "X" && GAMEBOARD.gameboard[5] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[6] === "X" && GAMEBOARD.gameboard[7] === "X" && GAMEBOARD.gameboard[8] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    // check vertical
    else if (GAMEBOARD.gameboard[0] === "X" && GAMEBOARD.gameboard[3] === "X" && GAMEBOARD.gameboard[6] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[1] === "X" && GAMEBOARD.gameboard[4] === "X" && GAMEBOARD.gameboard[7] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[2] === "X" && GAMEBOARD.gameboard[5] === "X" && GAMEBOARD.gameboard[8] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    // check diagonal
    else if (GAMEBOARD.gameboard[0] === "X" && GAMEBOARD.gameboard[4] === "X" && GAMEBOARD.gameboard[8] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[2] === "X" && GAMEBOARD.gameboard[4] === "X" && GAMEBOARD.gameboard[6] === "X") {
      GAMEBOARD.winnerElem.innerText = "X is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.xElem.innerText = parseInt(GAMEBOARD.xElem.innerText) + 1;
    }

    // Check for "O"
    // check horizontal
    else if (GAMEBOARD.gameboard[0] === "O" && GAMEBOARD.gameboard[1] === "O" && GAMEBOARD.gameboard[2] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[3] === "O" && GAMEBOARD.gameboard[4] === "O" && GAMEBOARD.gameboard[5] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[6] === "O" && GAMEBOARD.gameboard[7] === "O" && GAMEBOARD.gameboard[8] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    // check vertical
    else if (GAMEBOARD.gameboard[0] === "O" && GAMEBOARD.gameboard[3] === "O" && GAMEBOARD.gameboard[6] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[1] === "O" && GAMEBOARD.gameboard[4] === "O" && GAMEBOARD.gameboard[7] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[2] === "O" && GAMEBOARD.gameboard[5] === "O" && GAMEBOARD.gameboard[8] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    // check diagonal
    else if (GAMEBOARD.gameboard[0] === "O" && GAMEBOARD.gameboard[4] === "O" && GAMEBOARD.gameboard[8] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    else if (GAMEBOARD.gameboard[2] === "O" && GAMEBOARD.gameboard[4] === "O" && GAMEBOARD.gameboard[6] === "O") {
      GAMEBOARD.winnerElem.innerText = "O is winner";
      GAMEBOARD.haveWinner = true;
      GAMEBOARD.oElem.innerText = parseInt(GAMEBOARD.oElem.innerText) + 1;
    }
    // If there are no winner
    else {
      GAMEBOARD.haveWinner = false;
    }
  },
  resetGame: () => {
    // Reset memory
    GAMEBOARD.gameboard = ["", "", "", "", "", "", "", "", ""];
    GAMEBOARD.haveWinner = false;
    GAMEFLOW.turnCount = 1;
    GAMEFLOW.userFirst = true;
    GAMEBOARD.xElem.parentNode.className = "turn";
    GAMEBOARD.oElem.parentNode.className = "";
    
    // Visual and allow user to click again at filds
    [...GAMEBOARD.container.childNodes].map((field) => {
      field.innerText = "";
      field.addEventListener("click", handleClickEvent);
    })
    // Update winner score
    GAMEBOARD.winnerElem.innerText = "";

  }
};

function Player(mark) {
  this.mark = mark;
  this.draw = (event) => {
    // Find id of clicked element
    let elementId = event.target.id;
    elementId = elementId.slice(6, );
    
    // Save player move, and draw to screen
    if (GAMEBOARD.gameboard[elementId] === "") {
      // if field is empty write player mark to screen and add it to gameboard
      GAMEBOARD.gameboard[elementId] = this.mark;
      event.target.innerText = this.mark;

      // Turn is ended - incrise its count and change player
      GAMEFLOW.turnCount++;
      GAMEFLOW.changePlayer();
    }
  };
}

// Create fields
(function createFields() {
  let divId = 0;
  GAMEBOARD.gameboard.map((field) => {
    let div = document.createElement("div");
    div.innerText = field;
    div.className = "field";
    div.id = `field ${divId++}`;
    div.addEventListener("click", handleClickEvent);

  GAMEBOARD.container.appendChild(div);
  });

  // Reset button
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", GAMEFLOW.resetGame);
}());

function handleClickEvent(e) {
  GAMEFLOW.play(e)
}

