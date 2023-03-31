function Check( container, seletor){
    const junta = container + " " + '.check'
    const Anterior = document.querySelector(junta);
    if(Anterior !== null){
        Anterior.classList.remove('check');
    }

    const PratoSelecionado = document.querySelector(seletor);
    PratoSelecionado.classList.add('check');
}