class Animal{
    constructor(nome) {
        if (this.constructor === Animal) {
        throw new Error ("Não é possivel instanciar instanciar uma classe abstrata diretamente.");
    } 
    this.nome = nome;
    }

    emitirSom() {
        throw new Error("O metodo 'emitirSom( )' Deve ser implementado por subclasse. " );
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }

    emitirSom(){
        return " Au au!";
    }
}

class Gato extends Animal{
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        return "Miau!";
    }
}

class Peixe extends Animal{
    constructor(nome){
    super(nome);
}
emitirSom() {
    return "Glub Glub";
}
nadar() {
    return `${this.nome} está nadando.`;
    }
}

class Passaro extends Animal {
    constructor(nome){
        super(nome);
    }
    emitirSom() {
        return "Piu Piu!";
    }
    voar() {
        return `${this.nome} está voando.`;
    }
}

let rex = new Cachorro("Rex");
console.log(rex.nome + " Diz: " + rex.emitirSom());

let wisk = new Gato("wisk");
console.log(wisk.nome + " Diz: " + wisk.emitirSom());

let nemo = new Peixe("Nemo");
console.log(nemo.nome + " Diz: " + nemo.emitirSom());
console.log(nemo.nadar());

let piupiu = new Passaro("PiuPiu");
console.log(piupiu.nome + " Diz: " + piupiu.emitirSom());
console.log(piupiu.voar());