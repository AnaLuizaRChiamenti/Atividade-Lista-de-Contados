
let armazenarContatos = [];

function adicionarUmNovoContato() {

    let nome = prompt('Digite o nome do novo contato: ')
    let numero = prompt('Digite o numero do novo contato: ')

    const lista = armazenarContatos.find((pessoas) => {
        if (pessoas.numero === numero) {
            return true;
        } else {
            return false;
        }
    })

    if (lista) {
        document.write("Este telefone já foi cadastrado")
        return;
    } else {
        armazenarContatos.push({
            contato: nome,
            numero: numero
        })
    }
}
console.log(armazenarContatos)

function mostrarContatos() {
    let espaçoListaHTML = document.getElementById('lista-contatos')
    espaçoListaHTML.innerHTML = ''
    armazenarContatos.forEach((pessoas) => {
        // innerHTML ele insere conteudos no html

        // innerText - só adiciona textos 
        espaçoListaHTML.innerHTML += `<p> Contato: ${pessoas.contato} - Numero: ${pessoas.numero}</p>`
    })
}

function atualizarContato(){
    const nomePrompt = prompt("Informe o nome do contato a ser editado: ")

    const indiceEncontrado = armazenarContatos.findIndex((valor) => valor.contato === nomePrompt)

    if(indiceEncontrado === -1){
        alert("Nenhum contato encontrado com este nome!")
        return;
    }

    const novoNome = prompt("Digite o novo nome para o contato: ")
    const novoTelefone = prompt("Digite o novo numero de telefone para o contato: ")

    const existe = armazenarContatos.some((valor) => valor.numero === novoTelefone)

    if(existe) {
        alert("Este contato já existe. Verifique sua lista de contatos.")
        return;
    }

    armazenarContatos[indiceEncontrado].contato = novoNome
    armazenarContatos[indiceEncontrado].numero = novoTelefone

    mostrarContatos()
}

function deletarUsuario() {
    const telefonePrompt = prompt("Informe o nome do telefone a ser excluido: ")

    const novaLista = armazenarContatos.filter((valor) => valor.numero !== telefonePrompt)

    console.log(armazenarContatos);
    console.log(novaLista);

    armazenarContatos = novaLista
}