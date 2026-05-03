const URL = "https://raw.githubusercontent.com/hvmpro/perfil-analise/main/resumo.json";

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro HTTP: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("repos").innerText = data.total_repos ?? "0";
    document.getElementById("stars").innerText = data.total_stars ?? "0";
    document.getElementById("status").innerText = "Dados carregados com sucesso ✅";

    console.log("Dados:", data);
  })
  .catch(error => {
    console.error("Erro:", error);

    document.getElementById("status").innerText =
      "Erro ao carregar dados ❌ (veja console F12)";
  });

// Atualizaçao em tempo real

const URL = "https://raw.githubusercontent.com/hvmpro-core/perfil-analise/main/resumo.json";

function atualizar() {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      if (!data || Object.keys(data).length === 0) {
        document.getElementById("status").innerText = "Nada ainda foi adicionado...";
      } else {
        document.getElementById("repos").innerText = data.total_repos ?? 0;
        document.getElementById("stars").innerText = data.total_stars ?? 0;
        document.getElementById("status").innerText = "Dados atualizados ✅";
      }
    })
    .catch(() => {
      document.getElementById("status").innerText = "Aguardando dados...";
    });
}

// roda a cada 5 segundos
setInterval(atualizar, 5000);

// roda na primeira vez
atualizar();
