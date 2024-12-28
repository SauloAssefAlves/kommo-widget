// Função para buscar a quantidade de leads da API Kommo
async function fetchLeadCount() {
  const url = "https://assefautos.kommo.com/api/v4/leads"; // Substitua pela URL correta da API
  const token =
    "a6hNjjC7hRvyuzqenLoczOQSu3da3MpIBiHdIku7wAGGdyggMFiIJMWwk7CA2HvZ";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os leads");
    }

    const data = await response.json();
    // Supondo que o total de leads está em `data.total`
    const totalLeads = data.total || 0;

    // Atualiza o elemento HTML com a quantidade de leads
    document.getElementById(
      "lead-count"
    ).textContent = `Total de Leads: ${totalLeads}`;
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
  }
}

// Chamando a função ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  fetchLeadCount();
});
