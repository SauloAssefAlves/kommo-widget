window.Kommo.init({
  token: "a6hNjjC7hRvyuzqenLoczOQSu3da3MpIBiHdIku7wAGGdyggMFiIJMWwk7CA2HvZ", // Substitua pelo seu Access Token
  widgetId: "93fd178e-9bab-43f1-a751-65c90c026320", // Substitua pelo seu Widget ID
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
