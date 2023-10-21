
// Initial data
alert("Bem vindo(a)!");

let nome = prompt("Digite seu nome: ");
// Functions
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
//Events
if (nome == '') {
    nome = "Sem Nome";
    document.querySelector(".name").innerHTML = `Olá ${nome}, seja bem vindo de volta!`;
} else {
    formataNome(nome);
    document.querySelector(".name").innerHTML = `Olá ${nome}, seja bem vindo de volta!`;
}

document.querySelector('.btn').addEventListener('click', () => {
    let body = document.querySelector('body');
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }

})


