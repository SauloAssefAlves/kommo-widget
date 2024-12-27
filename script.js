window.Kommo.init({
  token: "SEU_ACCESS_TOKEN", // Substitua pelo seu Access Token
  widgetId: "ID_DO_WIDGET", // Substitua pelo seu Widget ID
  openButton: "#open-chat", // ID do botão que irá abrir o chat
  openOnLoad: false, // O widget não abre automaticamente
});

// Ao clicar no botão, o chat será aberto
document.getElementById("open-chat").addEventListener("click", function () {
  if (window.Kommo && window.Kommo.widget) {
    window.Kommo.widget.open();
  } else {
    console.error("Kommo Widget não carregado corretamente");
  }
});
