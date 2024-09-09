deadMole = document.getElementById("dead");
lostMole = document.getElementById("lost");

getMoleHole = index => document.getElementById(`hole${index}`);

const checkGame = function() {
    if (deadMole.textContent == 10) {
        alert("You WIN this game!");
        deadMole.textContent = 0 // обнуление
        lostMole.textContent = 0
        // location.reload(); // Версия для перезагрузки страницы
    } else if (lostMole.textContent == 5) {
      alert("You lose!");
      deadMole.textContent = 0 // обнуление
      lostMole.textContent = 0
        // location.reload(); // Версия для перезагрузки страницы
    };
};


for (let i = 1; i < 10; i++) {
    let currentHole = getMoleHole(i);
    
    currentHole.addEventListener("click", () => {
        if (currentHole.classList.contains("hole_has-mole")) {
            deadMole.textContent = Number(deadMole.textContent) + 1;
            checkGame()
        } else {
            lostMole.textContent = Number(lostMole.textContent) + 1;
            checkGame()
        }
    });
}