import { fetchLeads } from "../models/leadModel.js";

const renderLeadsPage = async (req, res) => {
  try {
    const leads = await fetchLeads();
    // Renderiza a página EJS passando os dados dos leads
    res.render("leads", { leads }); // "leads" é o nome do arquivo EJS
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { renderLeadsPage };
