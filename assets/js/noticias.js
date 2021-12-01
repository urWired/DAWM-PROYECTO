const buscador = () => {
  let input = document.getElementById("search-input");

  input.addEventListener('keyup', () => {
    let texto = document.getElementById("search-input").value;

    let elementos = document.getElementsByClassName("col");
    if (texto.length > 0){
      for(let elemento of elementos){
        if(elemento.innerText.includes(texto)){
          elemento.style.display = "inline";
        }else{
          elemento.style.display = "none"
        }
      }
    }else{
      for(let elemento of elementos){
        elemento.style.display = "inline";
      }
    }
    
  })
}

buscador();