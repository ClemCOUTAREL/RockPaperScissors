const app = () => {
    const choice = document.getElementById("player-btn")
    let playerLogo = document.getElementById("player-logo")
    const signs = ["Rock", "Paper", "Scissors"]
    
    const play = document.getElementById("start-btn")
    const computerButton = document.getElementById("computer-btn");
    const computerLogo = document.getElementById("computer-logo")
    
    let pScore = 0
    let cScore = 0
    let playerScore = document.querySelector("#player-count")
    let computerScore = document.querySelector("#computer-count");
    const result = document.getElementById('result')

    const reset = document.getElementById("reset-btn")


    // Player's choice management
    let i = 0;
    choice.addEventListener("click", () => {
        if ((i === 2)) {
            i = 0;
            choice.innerHTML = signs[i]
            playerLogo.src = `./images/${signs[i]}.jpg`
        } else {
            i++
            choice.innerHTML = signs[i];
            playerLogo.src = `./images/${signs[i]}.jpg`;
        }
    })

    //Computer's choice
    play.addEventListener("click", () => {
        let randomMove = Math.floor(Math.random() * 8);
          console.log(randomMove);
        setTimeout(() => {
          if (randomMove <= 2) {
            computerLogo.src = "./images/Rock.jpg";
            computerButton.innerHTML = signs[0];
          } else if (randomMove > 2 && randomMove <= 5) {
            computerLogo.src = "./images/Paper.jpg";
            computerButton.innerHTML = signs[1];
          } else {
            computerLogo.src = "./images/Scissors.jpg";
            computerButton.innerHTML = signs[2];
          }
            checkWin();
        }, 1000)

        
// Check the condition of the game

        async function checkWin() {
            if (choice.innerHTML === "Paper" && computerButton.innerHTML === "Rock") {
                console.log("Win")
                playerWin()
            } else if (choice.innerHTML === "Rock" && computerButton.innerHTML === "Scissors") {
                console.log("Win");
                playerWin()
            } else if (choice.innerHTML === "Scissors" && computerButton.innerHTML === "Paper") {
                console.log("Win");
                playerWin()
            } else if (choice.innerHTML === computerButton.innerHTML) {
                console.log("Draw");
                draw()
            } else {
                console.log("Lost");
                computerWin()
            }
        }

// Define the actions of the differents conditons of the game         

        function playerWin() {
            result.innerHTML = "Player Win !"
            pScore++
            playerScore.innerHTML = pScore
        }

        function draw() {
            result.innerHTML = "It's a draw!";
        }

        function computerWin() {
            result.innerHTML = "Player Lost !";
            cScore++
            computerScore.innerHTML = cScore;
        }

//Reset the game
        reset.addEventListener("click", () => {
            pScore=0;
            playerScore.innerHTML = pScore;
            choice.innerHTML = signs[0];
            playerLogo.src = `./images/${signs[0]}.jpg`;
            cScore=0;
            computerScore.innerHTML = cScore;
            computerLogo.innerHTML = signs[0];
            computerLogo.src = `./images/${signs[0]}.jpg`;
            result.innerHTML = "Waiting the game"
        })

    })
}


app();