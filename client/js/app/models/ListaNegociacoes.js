class ListaNegociacoes {

    constructor(contexto, armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto =contexto;
    }

    adiciona(negociacoes) {

        this._negociacoes.push(negociacoes);
        // this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        // this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}