document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rsvpForm");
    const popup = document.getElementById("popupSucesso");
    const fechar = document.querySelector(".btnFechar");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Mostra popup de sucesso
        popup.style.display = "flex";

        // Limpa o formulário
        form.reset();
    });

    fechar.addEventListener("click", () => {
        popup.style.display = "none";
    });
});


// Script do Modal de Compra
const modal = document.getElementById('modalCompra');
const produtoEl = document.getElementById('produtoSelecionado');
const precoEl = document.getElementById('precoSelecionado');
const confirmar = document.getElementById('btnConfirmarCompra');

modal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const produto = button.getAttribute('data-produto');
    const preco = button.getAttribute('data-preco');
    produtoEl.textContent = produto;
    precoEl.textContent = preco;
    confirmar.dataset.produto = produto;
});

confirmar.addEventListener('click', () => {
    const nome = document.getElementById('nomeCliente').value;
    const email = document.getElementById('emailCliente').value;
    const produto = confirmar.dataset.produto;
    if (!nome || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    alert(`Pedido confirmado!\nProduto: ${produto}\nCliente: ${nome}\nE-mail: ${email}`);
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
    document.getElementById('formCompra').reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = ["💗", "💞", "💕", "💖", "💓", "🏡", "🍳", "☕", "🍽️", "🧁", "🥣", "🫖", "🥄", "🍰", "🕯️"];
    const container = document.querySelector('.floating-icons');
    const QTD = 40; // número de ícones

    for (let i = 0; i < QTD; i++) {
        const span = document.createElement('span');
        span.textContent = icons[Math.floor(Math.random() * icons.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.fontSize = (Math.random() * 18 + 14) + 'px';
        span.style.animationDuration = (8 + Math.random() * 8) + 's';
        span.style.animationDelay = (Math.random() * 6) + 's';
        span.style.opacity = (0.35 + Math.random() * 0.35).toFixed(2);
        container.appendChild(span);
    }
});