function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let selected_option = Math.floor(Math.random() * options.length);
    return options[selected_option];
}

console.log("Hello World");