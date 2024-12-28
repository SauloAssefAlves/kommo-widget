import express from "express";
import dotenv from "dotenv";
import leadController from "./public/controllers/leadController.js";

// Configuração das variáveis de ambiente
dotenv.config();

// Inicialização do servidor
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o EJS como view engine
app.set("view engine", "ejs");
app.set("views", "./views");  // Definindo a pasta de views

// Configuração do JSON body parsing
app.use(express.json());

// Rota para obter os leads
app.get("/leads", leadController.renderLeadsPage);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
