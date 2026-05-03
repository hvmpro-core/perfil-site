fetch("https://raw.githubusercontent.com/SEU_USUARIO/perfil-analise/main/resumo.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("repos").innerText = data.total_repos;
    document.getElementById("stars").innerText = data.total_stars;
  });
