import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const token = process.env.TOKEN;

// Configurar a pasta "public" para arquivos estáticos
app.use(express.static("public"));

// Endpoint para buscar leads
app.get("/api/leads", async (req, res) => {
  try {
    const response = await axios.get(
      "https://assefautos.kommo.com/api/v4/leads",
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
