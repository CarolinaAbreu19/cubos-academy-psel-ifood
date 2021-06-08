function solucao(precos) {
    var valorTotal = 0;
    var min = precos[0];

    if (precos.length >= 5) {
        for (produto of precos) {
            min = Math.min(min, produto)
            valorTotal = valorTotal + produto;
        }

        valorTotal = valorTotal - min;

    } else {
        for (produto of precos) {
            valorTotal = valorTotal + produto;
        }
    }

    console.log(valorTotal);

}