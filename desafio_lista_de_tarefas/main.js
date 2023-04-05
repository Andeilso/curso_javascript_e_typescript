let tarefaInput = document.getElementById('tarefa');
let lista = document.getElementById('lista-ul');
listaIndex = lista.children.length;

let adicionarTarefa = () => {
    if(tarefaInput.value == ''){
        return
    }

    lista.appendChild(document.createElement('li'));
    lista.children[listaIndex].innerHTML = `${tarefaInput.value} <button id="excluir">Excluir</button>`;
    listaIndex++;
    console.log(lista)
};

let excluirTarefa = (e) => {
    for (let li = 0; li < lista.children.length; li++) {
        if(e.target.parentNode.innerHTML === lista.children[li].innerHTML){
            listaIndex--;
            return lista.removeChild(lista.children[li]);
        };
    }
};

let limparCampoDeTarefa = () => {
    tarefaInput.value = '';
    tarefaInput.focus();
}

document.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        adicionarTarefa();
        limparCampoDeTarefa();
    }
})

document.addEventListener('click', (e) => {
    if (e.target.id === 'adicionar') {
        adicionarTarefa(); 
        limparCampoDeTarefa();
    }

    if(e.target.id === 'excluir'){
        excluirTarefa(e);
    }

    console.log(e.target);
})

tarefaInput.focus();

