// Função para buscar a quantidade de leads da API Kommo
async function fetchLeadCount() {
  const url = "https://assefautos.kommo.com/api/v4/leads"; // Substitua pela URL correta da API
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmYjY3ZTBhYzIwZjBmNjhkYzI3NzdjZmMzZGVlMzdlYTM2YjdjYzcyM2EyZDk1ZWM3ZTY0OTg2YmY3NGFkZDNjYzkwNDYyYWZkMTQ5Nzc0In0.eyJhdWQiOiI5M2ZkMTc4ZS05YmFiLTQzZjEtYTc1MS02NWM5MGMwMjYzMjAiLCJqdGkiOiI3ZmI2N2UwYWMyMGYwZjY4ZGMyNzc3Y2ZjM2RlZTM3ZWEzNmI3Y2M3MjNhMmQ5NWVjN2U2NDk4NmJmNzRhZGQzY2M5MDQ2MmFmZDE0OTc3NCIsImlhdCI6MTczNTQwMTM5NiwibmJmIjoxNzM1NDAxMzk2LCJleHAiOjE3MzU0MzA0MDAsInN1YiI6IjEyNDg1MTgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMzOTY5MDYzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMzkxNGZjZmYtMGZkOC00NGY4LTgyNmUtNGFkYzA3Y2ZhZmE3IiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.J5zQrICL3uIWHrrZqVPOFm4Q-T9GwbltOztvLdmkwHQMJ36sLfObnyBHUMW_r1ZEsHrrO9slanTAwJXN7DfyThC9A_iAIxFRLShYSEt_etqss5c_d9n0QUC3fME0mbkxgRqdrU5Lid34SWxNqJMe-dCqV78-PMrF2bK1nCieGHRNhoX1yxe9RQggpb1hLuRHbzqPqAqXyP6J2q2ETJ3Kd4TtuB2c-ZHG3hWxtjL4cCDkMBrB3R0aMEzGZiC6_LfIRdObxGM-kFpAYPX0jMUi8q-NL518nMdgAVFlkY2mwjugiwU_sulSHqSw4ZbNigHD3bAR4uHwO9FpSGL4dpCq3g";

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
    document.getElementById(
      "lead-count"
    ).textContent = `Total de Leads: ${error}`;
  }
}

// Chamando a função ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  fetchLeadCount();
});
