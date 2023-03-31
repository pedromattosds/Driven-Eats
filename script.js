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

}