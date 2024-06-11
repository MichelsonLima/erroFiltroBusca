import { conectaApi } from "./conectaAPI.js";
import controiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideos(dadosDePesquisa);

  //console.log(busca);
  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild){
    lista.removeChild(lista.firstChild)
  }

  busca.forEach((elemento) =>
    lista.appendChild(
      controiCard(
        elemento.titulo,
        elemento.url,
        elemento.imagem,
        elemento.descricao
      )
    )
  );
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
