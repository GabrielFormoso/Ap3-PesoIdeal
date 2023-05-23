// Tendo como dado de entrada a altura (h) de uma pessoa, construa um 
//aplicativo que calcule seu peso ideal, utilizando as seguintes fórmulas: 
//• Para homens: (72.7*h) - 58 
//• Para mulheres: (62.1*h) - 44.7

//const altura = document.getElementById("altura");
//const peso = document.getElementById("peso");
//const genero = document.getElementById("genero");
const calcular = document.getElementById("calcular");
const peso = document.getElementById("peso");

function pesoIdeal () {
    
    const altura = document.getElementById("altura").value.replace(',', '.');

    if(altura !== ' '){
     
           const pesoIdealFem = ((62.1 * altura) - 44.7  ).toFixed(1)
               // alert( parseFloat(pesoIdealFem))
                
           const pesoIdealMasc = ((72.7 * altura) - 58) .toFixed(1)
        
           
               // alert( parseFloat(pesoIdealMasc))
    
    peso.textContent = `Para a altura de ${altura}m, o peso ideal é ${pesoIdealFem} kg se for mulher, e ${pesoIdealMasc} kg se for homem.`;
  }
    else{
        alert("Insira sua Altura!")
    }
};

calcular.addEventListener('click', pesoIdeal);


