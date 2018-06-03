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
    //c(g4)
    g4.llamar()
    //c(g4.puedoLlamar)
    g4.vibrar()
    //c(g4.tengoCables)
    g4.conectar()
    //c(g4.tengoInternet)

    let nokia5120 = new Celular()
    //c(nokia5120)
    nokia5120.llamar()
    //c(nokia5120.puedoLlamar)
    nokia5120.vibrar()
    //c(nokia5120.tengoCables)
    nokia5120.conectar()
    //c(nokia5120.tengoInternet)

})(console.log);
