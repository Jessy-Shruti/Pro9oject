function AddUser() {
    player1_name = document.getElementById("player_1_input_name").value;
    player2_name = document.getElementById("player_2_input_name").value;

    localStorage.setItem("player_1_name", player1_name);
    localStorage.setItem("player_2_name", player2_name);

    window.location = "mathQuizPage.html";
}