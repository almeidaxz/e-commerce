const submitBtn = document.querySelector('#submit-btn');
const user = document.querySelector('#user');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confPass = document.querySelector('#conf-pass');
const tac = document.querySelector('#terms');
const campos=[user,surname,email,password,confPass,tac];
var p;
var pai;

submitBtn.addEventListener('click', () => {
    let teste=true;
    let frase;
    if (!surname.value.length){
        frase='Informe seu nome completo';
        pai=surname.parentNode;
        surname.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    else if (!email.value.length){
        frase='Informe seu email';
        pai=email.parentNode;
        email.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    else if(user.value.length < 4){
        frase='O nome de usuário deve possuir no mínimo 4 letras';
        pai=user.parentNode;
        user.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    else if (password.value.length < 8){
        frase='A senha deve possuir no mínimo 8 dígitos';
        pai=password.parentNode;
        password.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    else if(confPass.value!=password.value){
        frase='Digite senhas iguais.';
        pai=confPass.parentNode;
        confPass.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    else if(!tac.checked){
        pai=tac.parentNode;
        frase='É necessário aceitar nossos termos e condições';
    }
    else{
        alert('Cadastro realizado com sucesso!');
        teste=false;
        localStorage.setItem("user",user.value);
        localStorage.setItem("senha",password.value);
    }
    if(teste){
        p=document.createElement("p");
        p.textContent=frase;
        p.style.fontWeight="bold";
        pai.appendChild(p);
    }
});
for(let i=0;i<campos.length;i++){
    campos[i].onclick=function(){
        if(campos[i]!=tac){
            campos[i].setAttribute("class","rounded-3 form-control form-control-lg border-dark");
        }
        if(p!=undefined){
            pai.removeChild(p);
        }
    }
}

