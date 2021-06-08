function solucao(produtos) {
    var totalCompra = 0;
    var obj = {
        totalTop: 0,
        percentual: 0,
    }

    for (produto of produtos) {
        totalCompra = totalCompra + produto.preco;

        if (produto.preco > 10000) {
            obj.totalTop = obj.totalTop + produto.preco;
        }
    }

    obj.percentual = obj.totalTop / totalCompra;

    console.log(obj);

}