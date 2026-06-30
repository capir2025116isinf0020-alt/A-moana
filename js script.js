const curiosidades = [
    "Moana foi a primeira princesa da Disney a não ter um interesse romântico.",
    "O oceano é tratado como um personagem no filme.",
    "O personagem Maui foi inspirado em lendas da cultura polinésia.",
    "O filme foi lançado pela Disney em 2016.",
    "A atriz Auli'i Cravalho foi escolhida para dublar Moana aos 14 anos."
];

function mostrarCuriosidade() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidade").textContent = curiosidades[indice];
}