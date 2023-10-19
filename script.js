
// Initial data
alert("Bem vindo(a)!");

let nome = prompt("Digite seu nome: ");

function formataNome() {
    let letra;
    let tamanho;
    tamanho = nome.length;
    for (let i = 0; i < tamanho; i++) {
        letra = nome.charAt(i);
        if (letra == ' ') {
            if ((i + 1) < tamanho) {
                letra = nome.charAt(i + 1).toUpperCase();
                nome = nome.substring(0, i + 1);
                nome += letra;
            }
        }
        if (tamanho > 0) {
            letra = nome.charAt(0).toUpperCase();
            nome = nome.substring(1, tamanho);
            nome = letra + nome;
        }
    }
}

if (nome == '') {
    nome = "Sem Nome";
    document.querySelector(".name").innerHTML = `Olá ${nome}, seja bem vindo de volta!`;
} else {
    formataNome(nome);
    document.querySelector(".name").innerHTML = `Olá ${nome}, seja bem vindo de volta!`;
}