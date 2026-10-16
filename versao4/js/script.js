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
        atualizarContadorFavoritos()
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

/*Versão 3: script para o menu responsivo */
//Selecionando os elementos que serão manipulados

//Selecionando os elementos que serão manipulados
const botaoMenu = document.querySelector(".botao-menu")

//Navegação Principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal")

console.log(botaoMenu)
console.log(navegacaoPrincipal)

//Detectando o acionamento do botão
botaoMenu.addEventListener("click", function(){
   //Ao clicar no botaoMenu, o JS deve aplicair ou remover a classe "menu-aberto"
   //Class aplicada? true
   //Class removida? false
   const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto")

   //Atualizar o estado do botão usando aria-expanded
   botaoMenu.setAttribute("aria-expanded", menuAberto)

   /*EXERCICIO */
   /*Se o menu estiver aberto, mostre o botao ✖ */
   /*Se o menu estiver fechado, mostre o botão ☰ Menu */

  botaoMenu.setAttribute("aria-pressed", menuAberto)

        if(menuAberto){
            botaoMenu.textContent="✖ Fechar"
        } else {
            botaoMenu.textContent="☰ Menu"
        }
})

/*Versão 4: script para contagem de favoritos */

//Selecionando o elemento que apresenta a quantidade de favorito
const quantidadeFavoritos = document.querySelector("#quantidade-favoritos")

//Função para atualização dos favoritos
function atualizarContadorFavoritos(){
    //Guardar em memória a contagem, começando em zero
    let quantidade = 0

    //Percorrer todos os cards, inclusive os ocultos pelos filtros
    cards.forEach(function(card){
        //Verificar se o card possui a classe "Favoritado"
        if(card.classList.contains("favoritado")){
            //Se possuir, incrementamos (++) a variavel quantidade
            //Incrementar significa adicionar 1
            quantidade++
        }
    })
    //Após a contagem, atualiza o número exibido no span HTML
    quantidadeFavoritos.textContent = quantidade

}