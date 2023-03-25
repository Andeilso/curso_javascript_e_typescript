let tarefaInput = document.getElementById('tarefa');
let lista = document.getElementById('lista-ul');
listaIndex = lista.children.length;

document.addEventListener('click', (e) => {
    if (e.target.value === 'adicionar') {

        if(tarefaInput.value == ''){
            return
        }

        lista.appendChild(document.createElement('li'));
        lista.children[listaIndex].innerHTML = `${tarefaInput.value} <button id="excluir">Excluir</button>`;
        listaIndex++;
    }

    if(e.target.id === 'excluir'){
        for (let li = 0; li < lista.children.length; li++) {
            if(e.target.parentNode.innerHTML === lista.children[li].innerHTML){
                lista.removeChild(lista.children[li]);

                return
            };
        }
    }
})


