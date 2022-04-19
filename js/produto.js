var prod_laterais=document.querySelectorAll(".img-lateral");

//botão do carrinho
const addCar=document.getElementById("carrinho");
const tamanhos=document.querySelectorAll(".tamanho");
var classe=tamanhos[0].getAttribute("class");
//atribuição dos valores do card ao produto
const produto=JSON.parse(sessionStorage.getItem("prod"));
document.querySelector(".img-principal").setAttribute("src",produto.img_principal);
document.querySelector(".img-principal").setAttribute("data-bl",produto.categoria);
document.querySelector(".descricao").innerHTML=produto.descricao;
document.querySelector(".nome-prod").textContent=produto.titulo;
document.querySelector(".prod-preco").textContent=produto.preco;
document.querySelector("del").textContent=produto.desconto;
document.querySelector("p.preco-info").textContent=produto.parcelas;

//alterar imagens laterais do produto ao passar com o mouse por cima
for(let i=0;i<prod_laterais.length;i++){
    prod_laterais[i].setAttribute("src",produto.imgs_laterais.split(",")[i]);
    prod_laterais[i].onmouseover=function(){
        document.querySelector(".img-principal").setAttribute("src",prod_laterais[i].getAttribute("src"));
        prod_laterais[i].style.border="1px solid #252525";
    };
    prod_laterais[i].onmouseleave=function(){
        document.querySelector(".img-principal").setAttribute("src",produto.img_principal)
        prod_laterais[i].style.border="none";
    }
}

/*CÓDIGO PARA DESEJAR O PRODUTO*/
//variáveis para o wish
var wis=document.getElementById("wish");
const prod=document.querySelector(".nome-prod").textContent;
var z=0;
//muda o ícone do botão se o produto for desejado
if(localStorage.getItem(prod)=="on"){
    wis.querySelector("span").setAttribute("class","fz-subt fas fa-heart");
}

wis.onclick=function(){
    //checa se o item foi tirado da lista de desejos ou se ainda não foi desejado
    if(localStorage.getItem(prod)=="off" || localStorage.getItem(prod)==null){
        //demarca que o item é desejado
        localStorage.setItem(prod,"on");
        let obj={
            imgP: document.querySelector(".img-principal").getAttribute("src"),
            categoria: document.querySelector(".img-principal").getAttribute("data-bl"),
            titulo: prod,
            preco: document.querySelector(".prod-preco").textContent,
            desconto: document.querySelector("del").textContent,
            descricao: document.querySelector(".descricao").innerHTML,
            parcelas: document.querySelector("p.preco-info").textContent,
            laterais: produto.imgs_laterais.split(",")
        }
        let str;
        //loop pra procurar espaços vazios de acordo com a combinação de 'item'+Z, como um array
        while(true){
            str="item"+z;
            if(localStorage.getItem(str)==null){
                break;
            }
            z++;
        }
        //cria um objeto no localStorage correspondente ao 'espaço nulo no array' com o valor do objeto cujos valores das propriedades dependem do produto desejado
        //passa como uma string pra preservar as propriedades
        localStorage.setItem(str,JSON.stringify(obj));
        if(localStorage.getItem("cont")!=null){
            //soma um valor a 'cont', contador usado pra contabilizar os produtos desejados
            localStorage.setItem("cont",Number(localStorage.getItem("cont"))+1);
        }else{
            //cria um contador, caso nenhum item tenha sido desejado
            localStorage.setItem("cont",0);
        }
        //seta o ícone do botão para preto (produto desejado)
        wis.querySelector("span").setAttribute("class","fz-subt fas fa-heart");
    }else{
        //se o produto já estava desejado e o botão foi clicado, ele está deixando de ser desejado
        localStorage.setItem(prod,"off")
        //ícone é alterado para um coração sem preenchimento (produto não desejado)
        wis.querySelector("span").setAttribute("class","fz-subt far fa-heart");
        //loop pra achar o item cuja propriedade titulo tem valor compátivel com o produto que deixou de ser desejado
        //loop pra remover o item
        let cont=0;
        while(true){
            let busca="item"+cont;
            if(JSON.parse(localStorage.getItem(busca))!=null){
                if(JSON.parse(localStorage.getItem(busca)).titulo==prod){
                    localStorage.removeItem(busca);
                    localStorage.setItem("cont",Number(localStorage.getItem("cont"))-1);
                    break;
                }
            }
            cont++;
        }
    }
}

for(let i=0;i<tamanhos.length;i++){
    tamanhos[i].onclick=function(){
        tamanhos[i].setAttribute("class",classe+" active");
        for(let x=0;x<tamanhos.length;x++){
            if(tamanhos[x]!=tamanhos[i]){
                tamanhos[x].setAttribute("class",classe);
            }
        }
    }
}

addCar.onclick=function(){
    externo:
    for(let i=0;i<tamanhos.length;i++){ 
        if(tamanhos[i].getAttribute("class")=="btn btn-outline-dark btn-sm fz-text tamanho active"){
            let z=0;
            let carrinho;
            let obj=JSON.parse(sessionStorage.getItem("prod"));
            let btTamanho=tamanhos[i].textContent;
            obj["tamanho"]=btTamanho;
            while(true){
                carrinho="carrinho"+z;
                if(localStorage.getItem(carrinho)==null){
                    break;
                }else if(JSON.parse(localStorage.getItem(carrinho)).titulo==obj.titulo && JSON.parse(localStorage.getItem(carrinho)).tamanho==obj.tamanho){
                    alert("Produto já adicionado ao carrinho.");
                    break externo;
                }
                z++;
            }
            localStorage.setItem(carrinho,JSON.stringify(obj));
            if(localStorage.getItem("contCar")==null){
                localStorage.setItem("contCar",0);
            }else{
                localStorage.setItem("contCar",parseInt(localStorage.getItem("contCar"))+1);
            }
            alert("Produto adicionado ao carrinho!");
            break;
        }else if(i==(tamanhos.length-1)){
            alert("Escolha um tamanho.");
        }
    }
}