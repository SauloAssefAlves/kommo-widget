async function fetchLeads() {
  try {
    const response = await fetch("/api/leads");
    const data = await response.json();

    const leadCount = data._embedded?.leads?.length || 0;
    document.getElementById(
      "lead-count"
    ).textContent = `Total de Leads: ${leadCount}`;
  } catch (error) {
    document.getElementById("lead-count").textContent =
      "Erro ao carregar os leads.";
    console.error("Erro:", error);
  }
}

// Carregar os leads ao carregar a página
document.addEventListener("DOMContentLoaded", fetchLeads);
