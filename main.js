((c) => {

    function telefono() {
        this.puedoLlamar = true
    }
    telefono.prototype = {
        llamar: function () {
            c('Riiing Riiing')
        }
    }

    function Celular (){
        this.tengoCables = false
    }

    Celular.prototype = new telefono()
    Celular.prototype.vibrar = function () {
        c('Vbbbbbbrr Vbbbbbbrr')
    }

    function Smartphone() {
        this.tengoInternet = true
    }

    Smartphone.prototype = new Celular()
    Smartphone.prototype.conectar = function () {
        c('Conectando a Internet!!!')
    }

    let g4 = new Smartphone()
    c(g4)

})(console.log);
