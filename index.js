function alterarCorDeFundoPrimeiroPost(){
    let post = document.getElementsByClassName('post');

   let primeiroPost = post[0];
   primeiroPost.style.backgroundColor = 'red';

}

function aumentarAFonteDoSegundoPost(){
    let textoPost = document.getElementsByClassName('texto-post');

    console.log(textoPost[1].classList)

    textoPost[1].classList.add('font-grande')
}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M'){
        radioMasculino.checked = true
    } else if(genero === 'F'){
        radioFeminino.checked = true
    }
}