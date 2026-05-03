const URL = "https://raw.githubusercontent.com/hvmpro-core/perfil-analise/main/resumo.json";

function atualizar() {
  fetch(URL)
    .then(res => {
      if (!res.ok) throw new Error("Erro HTTP");
      return res.json();
    })
    .then(data => {
      document.getElementById("repos").innerText = data.total_repos ?? 0;
      document.getElementById("stars").innerText = data.total_stars ?? 0;
      document.getElementById("status").innerText = "Dados carregados ✅";
    })
    .catch(err => {
      console.error(err);
      document.getElementById("status").innerText = "Erro ao buscar dados ❌";
    });
}

// executa imediatamente
atualizar();

// atualiza a cada 5s
setInterval(atualizar, 1000);
