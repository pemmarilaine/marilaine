const bototes = document.querySelectorAll(".botao");
for(let i=0; i<bototes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo);
    }
        botoes[i].classList.add("ativo);
}
}
