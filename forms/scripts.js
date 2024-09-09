const form = document.getElementById("sheetdb-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch("https://sheetdb.io/api/v1/dkugy6o7m4l6y", {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      console.log("oi");
      alert("Dados enviados! Obrigado! 🎃🦇");
      form.reset();
    })
    .catch(() => {
      alert("Erro: Por favor tente novamente");
    });
});
