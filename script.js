const itensCarrinho = {}
//Vai guardar todos od itens do carrinho

function addCarrinho(itemNome, itemPreco) {
    //Verifica se o produto esta no carrinho
    if(itensCarrinho[itemNome]){
        //A quantidade do produto vai aumentar
        itensCarrinho[itemNome].quantidade++
        //O preco vai aumentar
        itensCarrinho[itemNome].precoTotal += itemPreco
        //Mostrando a nova quantidade
        itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
        //Mostrando o novo preco
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
    } else{
        const liItem = document.createElement("li")
        liItem.innerHTML = `<div class="item">
        <span>${itemNome}</span>
        <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
        <span class="quantidade">1</span>
        <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})">+</button>
        <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
    </div>`
        document.getElementById("itens-lista").appendChild(liItem)

        itensCarrinho[itemNome] = {
            quantidade: 1,
            precoTotal: itemPreco,
            liItem: liItem
        }
    }
    //Atualiza o valor Total
    document.getElementById("preco-total").innerHTML = "Total R$"+precoTotal.toFixed(2)
    updateCarrinho();
}

    function removeCarrinho(itemNome, itemPreco){
        if(itensCarrinho[itemNome]){
            if(itensCarrinho[itemNome].quantidade > 1){
                itensCarrinho[itemNome].quantidade--
                itensCarrinho[itemNome].precoTotal -=
                itemPreco
                itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
                itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
            } else{
                document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
                delete itensCarrinho[itemNome]
            }
            document.getElementById("preco-total").innerHTML = "Total R$"+precoTotal.toFixed(2)
            updateCarrinho()
        }
    }
    function updateCarrinho(){
        let cont = 0
        for(let item in itensCarrinho) {
            cont += itensCarrinho[item].quantidade
        }
        document.getElementById("cont-carrinho").innerHTML = cont
    }