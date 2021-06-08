function solucao(letra, palavras) {
    var perdeu = 0;

    for (palavra of palavras) {
        for (l of palavra[0]) {
            if (l != letra) {
                perdeu++;
            }
        }
    }

    console.log(perdeu);

}