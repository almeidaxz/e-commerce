const imgs_lista=document.querySelectorAll(".link-produto");
//guardando os valores dos atributos no armazenamento local
for(let i=0;i<imgs_lista.length;i++){
    imgs_lista[i].onclick=function(){
        let obj={
            img_principal: imgs_lista[i].getAttribute("data-principal"),
            imgs_laterais: imgs_lista[i].getAttribute("data-laterais"),
            desconto: imgs_lista[i].getAttribute("data-desconto"),
            parcelas: imgs_lista[i].getAttribute("data-parcelas"),
            descricao: imgs_lista[i].getAttribute("data-descricao"),
            titulo: imgs_lista[i].parentNode.querySelector("figcaption").querySelector(".prod-titulo").textContent,
            preco: imgs_lista[i].parentNode.querySelector("figcaption").querySelector(".preco").textContent,
            categoria: imgs_lista[i].parentNode.getAttribute("data-bl")
        };
        sessionStorage.setItem("prod",JSON.stringify(obj));
    }
}