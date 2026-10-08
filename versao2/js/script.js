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

/* V2: programação para o recurso de filtragem de destinos*/

//Procurar e selecionar os botões de filtro
const botoesfiltro= document.querySelectorAll("[data-filtro]")

//Percorrer/acessae cada botão dentro do botoesFiltro
botoesfiltro.forEach(function(botaoFiltro){
    //Quando acontecer o clique no botão...
   botaoFiltro.addEventListener("click", function(){
    //...acessamos e guardamos o filtro escolhido
     const filtro= botaoFiltro.dataset.filtro
     //Percorrendo cada card...
    cards.forEach(function(card){
        //...e guardando a categoria de cada um
        const categoria= card.dataset.categoria

        //Se o valor de filtro for "todos" OU se a categoria for igual ao filtro
        if(filtro === "todos" || categoria === filtro){
            card.hidden = false
        }else {
            card.hidden = true
        }
            
    })

    botoesfiltro.forEach(function(botaoFiltro){
        if(botaoFiltro.dataset.filtro === filtro){
            botaoFiltro.classList.add("filtro-ativo")
            botaoFiltro.setAttribute("aria-pressed", "true")
        }else{
            botaoFiltro.classList.remove("filtro-ativo")
            botaoFiltro.setAttribute("aria-pressed", "false")
        }
    }) //botões forEach botoesFiltro

   }) //fechamento do event listener
}) //fechamento forEach e dos botões