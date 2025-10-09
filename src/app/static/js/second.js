document.getElementById("scrollToSecond").addEventListener("click", function () {
  const segundaTela = document.getElementById("segunda-tela");
  if (segundaTela) {
    segundaTela.scrollIntoView({ behavior: "smooth" });
  }
});
