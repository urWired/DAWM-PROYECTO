const peticion = () => {
  fetch("../assets/data/noticias.json")
  .then(response => response.json())
  .then(data => {
    let noticias = data.noticias;
    console.log(noticias);
    for(let i=0; i < noticias.length; i++){
      let titulo = noticias[i].titulo;
      let fecha = noticias[i].fecha;
      let descripcion = noticias[i].contenido;
      let plantilla = ` 
      <div class="col">
        <div class="card h-100"">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-date">${fecha}</p>
            <div class="separator separator-danger">∎</div>
            <p class="card-text">${descripcion}</p>
          </div>
        </div>
      </div>
      `;

      document.getElementById("news-container").innerHTML += plantilla;
    }
  })
  .catch(console.error);
}


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

peticion();
buscador();