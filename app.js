let amigos = [];

//primeiramente fazemos a função de adicionar amigos, nela usaremos o input para que seja realizada a digitação. 'amigo' é o id do input que iremos digitar o nome.
//em seguida criamos a variavel nome, o input.value.trim serve para remover espaços em branco extras no início e no final do valor digitado no campo de entrada

function adicionarAmigo(){
let input = document.getElementById('amigo');
let nome = input.value.trim();

if (nome === ''){
    alert('Inválido, insira um nome.');
    return;
}
amigos.push(nome);
input.value = ''; //serve para apagar e permitir que possa escrever outro nome
atualizarLista();
}


function atualizarLista(){
let lista = document.getElementById('listaAmigos');
lista.innerHTML = ""; // limpa a lista antes de adicionar novos itens

amigos.forEach((amigo) => {
    let item = document.createElement('li'); //criamos um item na lista
    item.textContent = amigo; //aramazena o nome do amigo
    lista.appendChild(item); //coloca o 'li' dentro do html
});
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    sorteio = sorteio.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < sorteio.length; i++) {
        let amigoA = sorteio[i];
        let amigoB = sorteio[(i + 1) % sorteio.length];
        resultado.innerHTML += `<li>${amigoA} -> ${amigoB}</li>`;
    }
}
