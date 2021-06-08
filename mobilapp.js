function solucao(tempo, distancia) {
    var valor;

    if (tempo < 5) {
        valor = 600;
    } else if (tempo >= 5 && tempo < 60) {
        valor = (tempo + (distancia * 0.5)) * 100
    } else {

        if (distancia < 100) {
            valor = distancia * 2 * 100;
        } else {
            valor = distancia * 1.5 * 100
        }

    }

    console.log(valor);

}