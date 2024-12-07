let feed = document.getElementById("feed");

const url = "https://escola-97256-default-rtdb.firebaseio.com/feed/.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    let htmlContent = "";

    // Converta o objeto em um array de posts, incluindo o postId para manter a referência
    const postsArray = Object.keys(data).map(postId => ({ id: postId, ...data[postId] }));

    // Ordene os posts pela data mais recente (ano, mês, dia, hora e minuto)
    postsArray.sort((a, b) => {
      const dateA = new Date(a.Ano, a.Mes - 1, a.Dia, a.Hora, a.Minuto);
      const dateB = new Date(b.Ano, b.Mes - 1, b.Dia, b.Hora, b.Minuto);
      return dateB - dateA; // Ordem decrescente
    });

    // Gere o HTML na ordem desejada
    postsArray.forEach(post => {
      
      
      htmlContent += `
        <div class="post" id="${post.ID}">
          <img src="${post.IMG}" alt="Imagem do post" height="400px">
          <p>${post.LG}</p>
          <a id='ll' href="${post.Link}" target="_blank">Saiba mais</a><br>
      <button onclick="Compar()">Compartilhar</button>
        </div>
<div id="container-c6114a9dea14d5ba216a246dca04a293"></div>

<script>

function Compar() {

navigator.share({
title: "",
text: "https://chat-tuts.vercel.app/feeed.html#${post.ID}"

})

}

</script>
      `;
      
    });
    
    

  
    feed.innerHTML = htmlContent;

if (window.location.href.includes("feeed.html#")) {
  let url = window.location.href;
  if (confirm("CONTINUAR O REDIRECIONAMENTO?")) {
    // Em vez de window.open, use window.location.href
    window.location.href = url;
  }
}

  })
  .catch(error => {
    console.error("Erro ao buscar dados:", error);
  });
  
navigator.geolocation.getCurrentPosition(a,b)

function a(geolocation) {

}
function b(geoloccation) {

}
  