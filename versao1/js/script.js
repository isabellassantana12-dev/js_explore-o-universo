//Selecionar todos os cards
let cards= document.querySelectorAll(".card-destino")
console.log(cards)

/*Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o favoritos)*/
cards.forEach( function(card){
    let botaoCuriosidade= card.querySelector(".botao-curiosidade")
    let botaoFavorito= card.querySelector(".botao-favorito")
    let curiosidade= card.querySelector(".curiosidade")

    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden= false
            botaoCuriosidade.setAttribute("aria-expanded", "true")
            botaoCuriosidade.textContent= "Ocultar curiosidades"
        } else{
            curiosidade.hidden= true
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent="Ver curiosidades"
        }
    })//fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function(){
        //aplicar/remover a classe 'favoritado'
       let favoritado= card.classList.toggle('favoritado')

        //atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado)

        //atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent="★ Favoritado"
        } else {
            botaoFavorito.textContent="☆ Favorito"
        }
    })
} )