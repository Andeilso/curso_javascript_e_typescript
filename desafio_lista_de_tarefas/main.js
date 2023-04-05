let tarefaInput = document.getElementById('tarefa');
let lista = document.getElementById('lista-ul');
listaIndex = lista.children.length;

let adicionarTarefa = (tarefa) => {
    if(tarefa == ''){
        return
    }

    lista.appendChild(document.createElement('li'));
    lista.children[listaIndex].innerHTML = `${tarefa} <button id="excluir">Excluir</button>`;
    listaIndex++;

    adicionarEmLocalStorage();
};

let excluirTarefa = (e) => {
    for (let li = 0; li < lista.children.length; li++) {
        if(e.target.parentNode.innerHTML === lista.children[li].innerHTML){
            listaIndex--;
            return lista.removeChild(lista.children[li]);
        };
    }

    adicionarEmLocalStorage();
};

let limparCampoDeTarefa = () => {
    tarefaInput.value = '';
    tarefaInput.focus();
}

document.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        adicionarTarefa(tarefaInput.value);
        limparCampoDeTarefa();
    }
})

document.addEventListener('click', (e) => {
    if (e.target.id === 'adicionar') {
        adicionarTarefa(tarefaInput.value); 
        limparCampoDeTarefa();
    }

    if(e.target.id === 'excluir'){
        excluirTarefa(e);
    }
})

adicionarEmLocalStorage = () => {
    let itensTarefas = [];

    for (let tarefa = 0; tarefa < lista.children.length; tarefa++) {
        itensTarefas.push(lista.childNodes[tarefa].innerHTML.replace('<button id="excluir">Excluir</button>', ''));
    }

    const listaTarefas = JSON.stringify(itensTarefas);
    localStorage.setItem('tarefas', listaTarefas);
}

itensEmLocalStorage = () => {
    let tarefas = JSON.parse(localStorage.getItem('tarefas'));

    for (const tarefa of tarefas) {
        adicionarTarefa(tarefa);
    }
}

itensEmLocalStorage();
tarefaInput.focus();
