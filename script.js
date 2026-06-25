const btn = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

const dicas = [
    "Utilize sacolas reutilizáveis nas compras.",
    "Desligue aparelhos eletrônicos quando não estiver usando.",
    "Prefira meios de transporte sustentáveis.",
    "Economize água durante o banho.",
    "Separe corretamente os materiais recicláveis."
];

btn.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * dicas.length);
    mensagem.textContent = dicas[indice];
});