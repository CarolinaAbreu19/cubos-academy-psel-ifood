function solucao(largura, altura) {
    if (largura > altura) {
        console.log("PAISAGEM");
    } else if (altura > largura) {
        console.log("RETRATO");
    } else {
        console.log("QUADRADA");
    }

}