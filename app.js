const GAMEBOARD = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
  playerOne: new Player("X"),
  playerTwo: new Player("O"),
  draw: (event, player) => {
    player.draw(event);
  }
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
    // If game turn is 10 - all fields are clicked, game need to end
    if (GAMEFLOW.turnCount >= 10) {
      // Remove click event for every field
      [...event.target.parentNode.childNodes].map((field) => {
        field.removeEventListener("click", handleClickEvent);
        // Show winner
        // Reset game with button
      });

      // Game is ended - test
      console.log(GAMEBOARD.gameboard)
      console.log("game is over restart page");
    }

    // Game is ended when someone make 3 in row
    // ... 
  },
  changePlayer: () => {
    GAMEFLOW.userFirst = !GAMEFLOW.userFirst;
  }
}

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
  const container = document.getElementById("gameboard");
  let divId = 0;
  GAMEBOARD.gameboard.map((field) => {
    let div = document.createElement("div");
    div.innerText = field;
    div.className = "field";
    div.id = `field ${divId++}`;
    div.addEventListener("click", handleClickEvent);

    container.appendChild(div);
  });
}());

function handleClickEvent(e) {
  GAMEFLOW.play(e)
}

