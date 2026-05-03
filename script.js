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
