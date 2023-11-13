
        // Função para adicionar um item ao carrinho
        function adicionarAoCarrinho(nomeProduto) {
            var carrinho = document.getElementById('itens-carrinho');

            // Crie um item de carrinho
            var itemCarrinho = document.createElement('li');
            itemCarrinho.classList.add('item-carrinho');

            // Nome do produto
            var nome = document.createElement('div');
            nome.textContent = nomeProduto;
            nome.classList.add('nome-produto');

            // Botão para remover o item
            var remover = document.createElement('div');
            remover.innerHTML = '&#10006;'; // Ícone "X"
            remover.classList.add('remover-item');
            remover.onclick = function () {
                carrinho.removeChild(itemCarrinho);
            };

            // Adicione os elementos ao item de carrinho
            itemCarrinho.appendChild(nome);
            itemCarrinho.appendChild(remover);

            // Adicione o item ao carrinho
            carrinho.appendChild(itemCarrinho);
        }
    
