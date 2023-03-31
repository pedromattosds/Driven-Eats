let valorTotal = 0;
let valorPrincipal = 0;
let valorBebida = 0;
let valorSobremesa = 0;


function Check( container, seletor){
    const Anterior = document.querySelector(container + ' .check');
    if(Anterior !== null){
        Anterior.classList.remove('check');
    }

    const PratoSelecionado = document.querySelector(seletor);
    PratoSelecionado.classList.add('check');

    const tagpreco = document.querySelector(seletor +' .preco');
    console.log(tagpreco);
    preco = parseFloat(tagpreco.innerHTML.replace(',','.'));
    console.log(preco);
    
    if(container === ".menu-pratos-principais"){
        valorPrincipal = preco;
    } else if (container === ".menu-bebidas"){
        valorBebida = preco;
    } else{
        valorSobremesa = preco;
    }
    
   valorTotal = valorPrincipal + valorBebida + valorSobremesa;
   console.log(valorTotal);

   if (valorPrincipal !== 0 && valorBebida !==0 && valorSobremesa !==0 ){
    document.querySelector('.finalizar').classList.remove('escondido');
   }
}

function FinalizarPedido(){
    document.querySelector('.confirmacao').classList.remove('escondido');
    document.querySelector('.blur').classList.remove('escondido');

    document.querySelector('.vprinc').innerHTML = String(Math.round(valorPrincipal*100)/100).replace('.',',');
    document.querySelector('.vbeb').innerHTML = String(Math.round(valorBebida*100)/100).replace('.',',');
    document.querySelector('.vsob').innerHTML = String(Math.round(valorSobremesa*100)/100).replace('.',',');
    document.querySelector('.vtotal').innerHTML = String(Math.round(valorTotal*100)/100).replace('.',',');

}

