function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    let random_index = parseInt((Math.random() * 3));
    return choice[random_index];
}

console.log(computerPlay());