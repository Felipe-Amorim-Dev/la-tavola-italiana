document.getElementById("nome").addEventListener("focus", function() {
  document.getElementById("labelNome").classList.add("labelout");
});

document.getElementById("nome").addEventListener("blur", function() {
  document.getElementById("labelNome").classList.remove("labelout");
});

document.getElementById("email").addEventListener("focus", function() {
  document.getElementById("labelEmail").classList.add("labelout");
});

document.getElementById("email").addEventListener("blur", function() {
  document.getElementById("labelEmail").classList.remove("labelout");
});

document.getElementById("contato").addEventListener("focus", function() {
  document.getElementById("labelContato").classList.add("labelout");
});

document.getElementById("contato").addEventListener("blur", function() {
  document.getElementById("labelContato").classList.remove("labelout");
});