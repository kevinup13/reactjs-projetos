
// Initial data
alert("Bem vindo(a)!");

let nome = prompt("Digite seu nome: ");

if (nome == '') {
    nome = "Sem Nome";
    document.querySelector(".name").innerHTML = `Olá ${nome}, seja bem vindo de volta!`;
} else {
    document.querySelector(".name").innerHTML = `Olá ${nome}, seja bem vindo de volta!`;
}