let j=0;
const wish_prods=document.getElementById("wishProd");
if(localStorage.getItem("cont")!=null){
    for(let i=0;i<=Number(localStorage.getItem("cont"));){
        let qual="item"+j;
        if(localStorage.getItem(qual)!=null){
            const obj=JSON.parse(localStorage.getItem(qual));
            let fig=document.createElement("figure");
            fig.setAttribute("class","card card-width bg-light me-2");
            fig.setAttribute("data-bl",obj.categoria);
            let a_link=document.createElement("a");
            a_link.setAttribute("class","link-produto");
            a_link.setAttribute("href","produto.html");
            a_link.setAttribute("data-principal",obj.imgP);
            a_link.setAttribute("data-laterais",obj.laterais);
            a_link.setAttribute("data-descricao",obj.descricao);
            a_link.setAttribute("data-desconto",obj.desconto);
            a_link.setAttribute("data-parcelas",obj.parcelas);
            let fotoP=document.createElement("img");
            fotoP.setAttribute("class","card-img-top img-fluid");
            fotoP.setAttribute("src",obj.imgP);
            a_link.appendChild(fotoP);
            let legenda=document.createElement("figcaption");
            legenda.setAttribute("class","card-body text-center");
            let titulo=document.createElement("p");
            titulo.setAttribute("class","prod-titulo card-title fw-bold text-center");
            titulo.textContent=obj.titulo;
            let preco=document.createElement("p");
            preco.setAttribute("class","float-none float-md-start preco card-text d-inline-block");
            preco.textContent=obj.preco;
            let desconto=document.createElement("del");
            desconto.textContent=obj.desconto;
            desconto.setAttribute("class","float-none float-md-end text-danger");
            let botao=document.createElement("button");
            botao.setAttribute("class","btn-close p-2");
            botao.setAttribute("id",qual);
            legenda.appendChild(titulo);
            legenda.appendChild(preco);
            legenda.appendChild(desconto);
            fig.appendChild(legenda);
            fig.insertBefore(a_link,legenda);
            fig.insertBefore(botao,a_link);
            wish_prods.appendChild(fig);
            i++;
        }
        j++;
    }
}

var cardsWs=document.querySelectorAll(".prod-titulo");
const botoesEx=document.querySelectorAll(".btn-close");
for(let i=0;i<botoesEx.length;i++){
    botoesEx[i].onclick=function(){
        localStorage.removeItem(botoesEx[i].getAttribute("id"));
        localStorage.setItem("cont",Number(localStorage.getItem("cont"))-1);
        localStorage.setItem(botoesEx[i].parentNode.querySelector(".prod-titulo").textContent,"off");
        location.reload();
    }
}
function nenhumItem(){
    let texto;
    if(wish_prods.querySelector("figure")==null){
        texto=document.createElement("p");
        texto.textContent="Nenhum item aqui :)";
        texto.setAttribute("class","text-center text-secondary");
        wish_prods.appendChild(texto);
    }
}
nenhumItem();