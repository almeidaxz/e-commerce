const botoes=document.querySelectorAll(".filtro");
const b_todas=document.getElementById("b-todas");
const cards=document.querySelectorAll(".card");

//acionar filtragem em cada botão
for(let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){
        let bg=botoes[i].style.backgroundColor;
        filtrar_desfiltrar(bg,botoes[i]);
    };
}

//função de filtragem nos catálogos
function filtrar(botao){
    for(let y=0;y<cards.length;y++){
        let valor=cards[y].getAttribute("data-bl");
        let lista=valor.split(" ");
        for(let i=0;i<lista.length;i++){
            if(lista[i]==botao.textContent && cards[y].style.display.toString()=="block"){
                cards[y].style.display="block";
                break;
            }else if(i==(lista.length-1)){
                cards[y].style.display="none";
            }
        }
        botao.style.backgroundColor="rgba(0,0,0,0.2)";
    }
}

//função pra poder retirar um filtro
function filtrar_desfiltrar(bg,botao){
    if(bg=="rgba(0, 0, 0, 0.2)"){
        botao.style.backgroundColor="transparent";
        for(let y=0;y<cards.length;y++){
            cards[y].style.display="block";
        }
        for(let x=0;x<botoes.length;x++){
            if(botoes[x].style.backgroundColor=="rgba(0, 0, 0, 0.2)"){
                filtrar(botoes[x]);
            }
        }
    }else{
        filtrar(botao);
    }
}

//função pra exibir todos os produtos num catálogo
function mostrarTodas(){
    for(let i=0;i<cards.length;i++){
        cards[i].style.display="block";
    }
    for(let i=0;i<botoes.length;i++){
        botoes[i].style.backgroundColor="transparent";
    }
}

//eventos para exibir todos os produtos
b_todas.onclick=mostrarTodas;
window.onload=mostrarTodas;