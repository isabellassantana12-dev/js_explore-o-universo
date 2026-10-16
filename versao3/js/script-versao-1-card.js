//procure e selecione o elemento com a classe card-destino 
// e guarde em uma variavel chamada primeiroCard
let primeiroCard= document.querySelector(".card-destino");

console.log(primeiroCard);

//Procure e selecione o botão de curiosidade da lua
let botaoCuriosidade= document.querySelector(".botao-curiosidade");


//Procure e selecione o parágrafo com a cuirosidade sobre a lua
let curiosidade= document.querySelector(".curiosidade")

/*Monitore o clique no botão de curiosidade e, quando acotnecer o clique, verifique se a curiosidade está oculta. Se estiver, faça ficar vísivel, mude o aria-expanded para true e troque o texto do botão para "ocultarvcuirosidade".*/
botaoCuriosidade.addEventListener("click", function() {

    //se curiosidade estiver oculto(hidden)
    if (curiosidade.hidden){

        //faça-o aparecer
        curiosidade.hidden=false;

        //mude o atributo aria-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true")

        //troque o texto do botão para ocultar curiosidade
        botaoCuriosidade.textContent="Ocultar curiosidade"
    } else{
        curiosidade.hidden=true
        botaoCuriosidade.setAttribute("aria-expanded", "false")
        botaoCuriosidade.textContent="Ver curiosidades"
    }
})