const tbody=document.querySelector("tbody");
var x=0;

if(localStorage.getItem("contCar")!=null){
    while(x<=localStorage.getItem("contCar")){
        if(localStorage.getItem("carrinho"+x)!=null){
            let item=JSON.parse(localStorage.getItem("carrinho"+x));
            let linha=document.createElement("tr");
            let tdImg=document.createElement("td");
            tdImg.setAttribute("class","d-block d-md-flex");
            let fig=document.createElement("figure");
            let link=document.createElement("a");
            link.setAttribute("class","link-produto");
            link.setAttribute("href","produto.html");
            link.setAttribute("data-principal",item.img_principal);
            link.setAttribute("data-laterais",item.imgs_laterais);
            link.setAttribute("data-desconto",item.desconto);
            link.setAttribute("data-parcelas",item.parcelas);
            link.setAttribute("data-descricao",item.descricao);
            let img=document.createElement("img");
            img.setAttribute("class","img-size me-3");
            img.setAttribute("src",item.img_principal);
            let figCap=document.createElement("figcaption");
            figCap.setAttribute("class","d-none");
            let titulo=document.createElement("p");
            titulo.textContent=item.titulo;
            titulo.setAttribute("class","prod-titulo");
            let preco=document.createElement("p");
            preco.setAttribute("class","preco");
            preco.textContent=item.preco;
            link.appendChild(img);
            fig.appendChild(link);
            figCap.appendChild(preco);
            figCap.appendChild(titulo);
            fig.appendChild(figCap);
            tdImg.appendChild(fig);
            let divTdImg=document.createElement("div");
            divTdImg.setAttribute("class","mt-2 mt-md-0 d-none d-sm-block");
            let tituloTd=document.createElement("h4");
            tituloTd.textContent=item.titulo;
            let tamanho=document.createElement("button");
            tamanho.setAttribute("class","btn btn-outline-dark");
            tamanho.textContent=item.tamanho;
            divTdImg.appendChild(tituloTd);
            divTdImg.appendChild(tamanho);
            tdImg.appendChild(divTdImg);
            let tdPreco=document.createElement("td");
            let precoTd=document.createElement("p");
            precoTd.textContent=item.preco;
            precoTd.setAttribute("class","preco");
            tdPreco.appendChild(precoTd);
            let tdQuant=document.createElement("td");
            let divInput=document.createElement("div");
            divInput.setAttribute("class","input-group flex-nowrap");
            let botaoMenos=document.createElement("button");
            botaoMenos.setAttribute("class","input-group-text round-tp-l btn-menos");
            let spanMenos=document.createElement("span");
            spanMenos.setAttribute("class","fas fa-minus");
            let ipt=document.createElement("input");
            ipt.setAttribute("type","text");
            ipt.setAttribute("value","0");
            ipt.setAttribute("class","text-center form-control flex-grow-0 inp-size input-quant");
            let botaoMais=document.createElement("button");
            botaoMais.setAttribute("class","input-group-text round-tp-r btn-mais");
            let spanMais=document.createElement("span");
            spanMais.setAttribute("class","fas fa-plus");
            botaoMenos.appendChild(spanMenos);
            botaoMais.appendChild(spanMais);
            divInput.appendChild(botaoMenos);
            divInput.appendChild(ipt);
            divInput.appendChild(botaoMais);
            tdQuant.appendChild(divInput);
            let tdTotal=document.createElement("td");
            let total=document.createElement("P");
            total.setAttribute("class","total");
            tdTotal.appendChild(total);
            let tdClose=document.createElement("td");
            let btClose=document.createElement("button");
            btClose.setAttribute("class","btn btn-close");
            btClose.setAttribute("id","carrinho"+x);
            tdClose.appendChild(btClose);
            linha.appendChild(tdImg);
            linha.appendChild(tdPreco);
            linha.appendChild(tdQuant);
            linha.appendChild(tdTotal);
            linha.appendChild(tdClose);
            tbody.appendChild(linha);
        }
        x++;
    }
}

const menos=document.querySelectorAll(".btn-menos");
const mais=document.querySelectorAll(".btn-mais");
const btnClose=document.querySelectorAll(".btn-close");
const totais=document.querySelectorAll(".total");
const inputs=document.querySelectorAll(".input-quant");
const subtotal=document.getElementById("subtotal");

for(let i=0;i<menos.length;i++){
    menos[i].onclick=function(){
        let input=menos[i].parentNode.querySelector(".input-quant").value;
        if(input!=0){
            menos[i].parentNode.querySelector(".input-quant").value=parseInt(input)-1;
            input=menos[i].parentNode.querySelector(".input-quant").value;
            let preco=menos[i].parentNode.parentNode.parentNode.querySelector(".preco").textContent.slice(2);
            totais[i].textContent="R$"+((parseFloat(input)*parseFloat(preco)).toFixed(2));
            subtotal.textContent="R$"+((parseFloat(subtotal.textContent.slice(2))-parseFloat(preco)).toFixed(2));
        }
    }
}
for(let i=0;i<mais.length;i++){
    mais[i].onclick=function(){
        let input=mais[i].parentNode.querySelector(".input-quant").value;
        mais[i].parentNode.querySelector(".input-quant").value=parseInt(input)+1;
        input=mais[i].parentNode.querySelector(".input-quant").value;
        let preco=menos[i].parentNode.parentNode.parentNode.querySelector(".preco").textContent.slice(2);
        totais[i].textContent="R$"+((parseFloat(input)*parseFloat(preco)).toFixed(2));
        subtotal.textContent="R$"+((parseFloat(subtotal.textContent.slice(2))+parseFloat(preco)).toFixed(2));
    }
}
for(let i=0;i<btnClose.length;i++){
    btnClose[i].onclick=function(){
        localStorage.removeItem(btnClose[i].getAttribute("id"));
        location.reload();
    }
}

if(tbody.querySelector("tr")==null){
    var p=document.createElement("p");
    p.textContent="Nenhum item aqui :)";
    p.setAttribute("class","text-center text-secondary");
    tbody.parentNode.parentNode.parentNode.parentNode.appendChild(p);
}