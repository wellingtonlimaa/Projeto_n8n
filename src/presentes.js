// === Ícones flutuando DENTRO do campo ===
document.addEventListener('DOMContentLoaded', () => {
  const icons = ["💗", "💞", "💕", "💖", "💓", "🏡", "🍳", "☕", "🍽️", "🧁", "🥣", "🫖", "🥄", "🍰", "🕯️"];
  const container = document.querySelector('#campoNuvem .floating-icons');
  const QTD = 30;

  for (let i = 0; i < QTD; i++) {
    const span = document.createElement('span');
    span.textContent = icons[Math.floor(Math.random() * icons.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.fontSize = (Math.random() * 18 + 14) + 'px';
    span.style.animationDuration = (8 + Math.random() * 8) + 's';
    span.style.animationDelay = (Math.random() * 6) + 's';
    span.style.opacity = (0.35 + Math.random() * 0.35).toFixed(2);
    container.appendChild(span);
  }
});

// === Script das mensagens ===
function adicionarComentario() {
  const nome = document.getElementById("nome").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!nome || !comentario) {
    alert("Por favor, preencha o nome e o comentário!");
    return;
  }

  const campo = document.getElementById("campoNuvem");
  const nuvem = document.createElement("div");
  nuvem.classList.add("nuvem");
  nuvem.textContent = `${nome}: ${comentario}`;

  const x = Math.random() * (campo.clientWidth - 140);
  const y = Math.random() * (campo.clientHeight - 80);
  nuvem.style.left = `${x}px`;
  nuvem.style.top = `${y}px`;

  const escala = 0.9 + Math.random() * 0.5;
  const duracao = 10 + Math.random() * 5;
  nuvem.style.transform = `scale(${escala})`;
  nuvem.style.animationDuration = `${duracao}s`;

  campo.appendChild(nuvem);
  document.getElementById("nome").value = "";
  document.getElementById("comentario").value = "";

  setTimeout(() => {
    nuvem.remove();
  }, 20000);
}