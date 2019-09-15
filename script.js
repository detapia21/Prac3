class Personaje{
    constructor(nombre, forma, posicion, imagen){
        this.nombre = nombre,
        this.forma = forma,
        this.posicion = posicion,
        this.imagen = imagen,
        this.obtDetalles = function (){
            document.getElementById("Detalles").innerHTML= `
            <h2>Nombre: ${this.nombre}</h2><b>
            <h2>Forma: ${this.forma}</h2><b>
            <h2>Posicion: ${this.posicion}</h2>`;    
        }
    }
}

class Ave extends Personaje{
    constructor(nombre, forma, posicion,imagen, habilidad, masa){
        super(nombre, forma, posicion, imagen);
        this.habilidad = habilidad,
        this.masa = masa,
        this.volar = function (message){
            alert(
                message
            );
        }
    }
}

class Pig extends Personaje{
    constructor(nombre, forma, posicion,imagen, fortaleza, puntos){
        super(nombre, forma, posicion, imagen);
        this.fortaleza = fortaleza,
        this.puntos = puntos,
        this.morir = function (message){
            alert(
                message
            );
        }
    }
}

let redBird = new Ave('Rojo','Circular',1,'red-bird.png','vuelo simple','normal');
document.getElementById("bird1").innerHTML= `<img src="${redBird['imagen']}"width="100" height="100">`;


let yellowBird = new Ave('Amarillo','Triangulo',2,'yellow-bird.png','vuelo redirigido','normal');
document.getElementById("bird2").innerHTML= `<img src="${yellowBird['imagen']}"width="100" height="100">`;


let blackBird = new Ave('Negro','Bomba',3,'black-bird.png','explosion','pesado');
document.getElementById("bird3").innerHTML= `<img src="${blackBird['imagen']}"width="100" height="100">`;


let normalPig = new Pig('Cerdito','Cirular',1,'pig1.png','normal','50');
document.getElementById("pig1").innerHTML= `<img src="${normalPig['imagen']}"width="100" height="100">`;
normalPig.obtDetalles();

let helmetPig = new Pig('Con casquito','Rarillo',2,'pig-helmet.webp','normal a fuerte','100');
document.getElementById("pig2").innerHTML= `<img src="${helmetPig['imagen']}"width="100" height="100">`;

let kingPig = new Pig('El king','Circulote',3,'king-pig.webp','fuerte','150');
document.getElementById("pig3").innerHTML= `<img src="${kingPig['imagen']}"width="100" height="100">`;

function detalles(personaje){
    if(personaje.nombre=='Rojo'){
        redBird.obtDetalles();
    }else if(personaje.nombre=='Amarillo'){
        yellowBird.obtDetalles();
    }else if(personaje.nombre=='Negro'){
        blackBird.obtDetalles();
    }else if(personaje.nombre=='Cerdito'){
        normalPig.obtDetalles();
    }else if(personaje.nombre=='Con casquito'){
        helmetPig.obtDetalles();
    }else{
        kingPig.obtDetalles();
    }
}

function atacar(ave){
    message = '';
    if(ave.nombre=='Rojo'){
        message = 'Ahi te voy!!!'
    }else if(ave.nombre=='Amarillo'){
        message = 'Ahi te... aguanta... ahora si voy!!!'
    }else{
        message = 'Ahi te voy!!!... BOOOOM!!!'
    }
    ave.volar(message);
}

function morir(cerdo){
    message = '';
    if(cerdo.nombre=='Cerdito'){
        message = 'Ni aguanto nada :('
    }else if(cerdo.nombre=='Con casquito'){
        message = 'Le batallaron estos pajarracos'
    }else{
        message = 'Pense que les tomaria toda la vida!!!'
    }
    cerdo.morir(message);

}