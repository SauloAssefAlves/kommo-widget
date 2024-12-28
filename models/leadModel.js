import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// Recupera o token do arquivo .env
const token = process.env.TOKEN;
if (!token) {
  throw new Error("O token de acesso não foi fornecido no arquivo .env");
}

// Função para buscar leads da API Kommo
export const fetchLeads = async () => {
  const options = {
    method: "GET",
    url: "https://assefautos.kommo.com/api/v4/leads",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data._embedded.leads;
  } catch (error) {
    // Tratamento de erro para erro de requisição
    throw new Error(error.response ? error.response.data : error.message);
  }
};
