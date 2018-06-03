((c) => {
    //Herencia Prototipica
        //Las funciones Contructoras pueden heredar directamente de otros
        //constructores gracias al prototype

    c('****** Herencia, Polimorfismo*****')

    //Privacidad en JS
        //En JS las propiedades de los objetos son publicas, en las clases es igual
        //Para aislar ciertas propiedades y evitar que puedan ser modificadas de forma externa
            //tenemos que recurrir al uso de WeakMap
        //Un WeakMap es un Map que solo acepta objetos como claves, la referencia a las claves
            //es debil, lo que significa que si no hay otras referencias al objeto que actua como clave
            //el recolector de basura podra liberarlo : REVISAR MAP y WEAKMAP

    let privado = new WeakMap()

    class telefono {

        constructor(marca, modelo, numero){
            this.marca = marca
            this.modelo = modelo
            //this._numero = numero
            privado.set(this, { _numero: numero })
            this.puedoLlamar = true
        }

        //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
        //por lo general, este tipo de metodos se reservan a clases que coleccionan utilidades
        //y que no se espera que sean instanciadas
        //Estamos hablando de los tipicos helpers habituales en la mayoria de frameworks y librerias

        // static queEs (){
        //     c('El telefono es un dispositivo de telecomunicaciones diseñado para transmitir señales')
        // }

        set numero(numero){
            privado.get(this)._numero = numero
        }

        get numero(){
            return c( privado.get(this)._numero )
        }

        llamar (){
            c('Riiing Riiing')
        }

        verInfo(){
            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`
            )
        }
    }

    //telefono.queEs()
    let tel = new telefono('Iphone', 'X', '5532693822')
    c(tel.numero)
    tel.llamar()
    tel.numero
    tel.numero = '5540874768'
    tel.numero
    tel.verInfo()

    //Un mixin en JS es el equivalente a una interface o clase abstracta en lengias OO

    const Operadora = Superclass => class extends Superclass {
        asignarOperadora( operadora ) {
            return c(`La operadora asignada es ${operadora}`)
        }
    }

    const Red = Superclass => class extends Superclass {
        asignarRed( red ) {
            return c(`La red de datos asignada es ${red}`)
        }
    }

    class Celular extends Operadora(Red ( telefono )){
        constructor(marca, modelo, numero){
            //con el metodo super() se manda a llamar el contructor de la clase padre
            //En el constructor de una clase hija, es obligatorio llamar a super antes de utlizar this
            super(marca, modelo, numero)
            this.tengoCables = false
        }

        vibrar () {
            c('Vbbbbbbrr Vbbbbbbrr')
        }

        //Polimorfismo: Diferentes clases podrian definir el mismo metodo o propiedad
        verInfo(){
            //SuperLlamada: con el super se manda a llamar el metodo verInfo()de la clase padre
            //return super.verInfo()

            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCables}\n`
            )
        }
    }

    let cel = new Celular('Samsung', 'Galaxi 10', '5547381023')
    cel.verInfo()
    cel.llamar()
    cel.vibrar()
    cel.numero
    cel.numero = '5534948756'
    cel.numero
    cel.asignarRed('4g')
    cel.asignarOperadora('Telcel')

    class Smartphone extends Celular {
        constructor(marca, modelo, numero){
            super(marca, modelo, numero)
            this.tengoInternet = true
        }

        conectar (){
            c('Conectando a Internet!!!')
        }

        verInfo(){
            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCables}\n`,
                `\tTengo Internet: ${this.tengoInternet}\n`
            )
        }
    }

    let sm = new Smartphone('Apple', 'Iphone 8s', '5568493237')
    sm.verInfo()
    sm.llamar()
    sm.vibrar()
    sm.conectar()
    sm.numero
    sm.numero = '5510102020'
    sm.numero
    sm.asignarRed('5g')
    sm.asignarOperadora('AT&T')

})(console.log);
