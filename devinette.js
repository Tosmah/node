const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var solution = Math.floor(Math.random() * 100) + 1;

console.log(solution);

function question() {
    rl.question('Tape un chiffre fils : ', (answer) => {
    if (answer < solution)
    {
        console.log("Trop petit");
        question();
    }
    else if (answer > solution)
    {
        console.log("Trop grand");
        question();
    }
    else if ((answer == solution))
    {
        console.log("Bravo fils !");
    }
    else
    {
        console.log("Il faut un chiffre entre 1 et 100 !")
    }
})}

question();