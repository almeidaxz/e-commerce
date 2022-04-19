//let imgs = ["img/banners/banner.png", "img/banners/banner-2.png", "img/banners/banner-3.png"];
const imgs = ["img/banners/lançamentos.png", "img/banners/ao postar.png", "img/banners/semanais.png"];
const prod_interval=document.querySelector(".div-produtos-interval");
const b_slide=document.querySelectorAll(".botao-slide");
const b1_interval=document.getElementById("b1-interval");
const b2_interval=document.getElementById("b2-interval");
let i = 0;
var y=0;
setInterval(function () {
    document.querySelector("#banner").setAttribute("src", imgs[i]);
    i++;
    if (i == 3) {
        i = 0;
    }
},3000);

function mudar(posicao) {
    document.querySelector("#banner").setAttribute("src", imgs[posicao]);
    i=posicao;
}

for(let i=0;i<b_slide.length;i++){
    b_slide[i].onclick=function () { mudar(i) };
}


setInterval(function(){
    if(y>=prod_interval.scrollWidth){
        y=0;
    }
    prod_interval.scrollLeft=y;
    y+=200;
},3000);

b1_interval.onclick=function(){
    prod_interval.scrollLeft-=200;
};
b2_interval.onclick=function(){
    y+=200;
    prod_interval.scrollLeft=y;
};