function buscarPersonagem() {
  const idPersonagem = document.getElementById("id_personagem").value;

  $.ajax({
    url: "https://rickandmortyapi.com/api/character/" + idPersonagem,
    type: "get",
    success: function (result) {
      document.getElementById("imagem").src = result.image;

      const txtResult = `
            <ul>
                <li>Name: ${result.name}</li>
                <li>Status: ${result.status}</li>
                <li>Specie: ${result.species}</li>
                <li>Origin: ${result.origin.name}</li>
            </ul> `;

      document.getElementById("visor").innerHTML = txtResult;
    },
  });
}
