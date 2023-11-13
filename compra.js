// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    var carrinho = document.getElementById('itens-carrinho');

    // Crie um item de carrinho
    var itemCarrinho = document.createElement('li');
    itemCarrinho.classList.add('item-carrinho');

    // Nome do produto
    var nome = document.createElement('div');
    nome.textContent = nomeProduto;
    nome.classList.add('nome-produto');

    // Preço do produto
    var preco = document.createElement('div');
    preco.textContent = 'R$' + precoProduto.toFixed(2); // Formata o preço com duas casas decimais
    preco.classList.add('preco-produto');

    // Botão para remover o item
    var remover = document.createElement('div');
    remover.innerHTML = '&#10006;'; // Ícone "X"
    remover.classList.add('remover-item');
    remover.onclick = function () {
        carrinho.removeChild(itemCarrinho);
    };

    // Adicione os elementos ao item de carrinho
    itemCarrinho.appendChild(nome);
    itemCarrinho.appendChild(preco);
    itemCarrinho.appendChild(remover);

    // Adicione o item ao carrinho
    carrinho.appendChild(itemCarrinho);
}

// Função para finalizar a compra
function finalizarCompra() {
    var carrinho = document.getElementById('itens-carrinho');

    // Verifique se há itens no carrinho
    if (carrinho.childElementCount > 0) {
        alert("Compra realizada com sucesso!");
        // Adicione aqui a lógica para finalizar a compra, como enviar dados para um servidor, etc.
    } else {
        alert("Carrinho vazio. Adicione itens antes de finalizar a compra.");
    }
}
