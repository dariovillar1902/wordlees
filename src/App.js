import './App.css';

const palabrasArray = ["vacas", "novia", "queso", "viejo", "disco", "oveja", "heroe", "rusia", "plata", "dañar", "bajon", "brisa", "hielo", "frase", "toser", "susto", "otoño", "forro", "golpe", "tanga", "peaje", "debut", "plomo", "monje", "genio", "ramal", "tropa", "morse", "llano", "verde", "prado", "barba", "pluma", "solar", "caras", "tropa", "toser", "latex", "oliva", "indio", "sidra", "mover", "pozos", "pillo", "cargo", "puños", "palma", "grado", "ancla", "doler", "señor", "herir", "brote", "etica", "crema", "manta", "vacia", "gallo", "orina", "puros", "pecho", "abrir", "dulce", "ancho", "hueso", "cabra", "horas", "remos", "patas", "salsa", "ataca", "ratas", "torax", "hacha", "roble", "rueda", "araña", "pesar", "cebra", "buena", "letal", "ondas", "clips", "choza", "panal", "ciego", "madre", "perro", "mujer", "larva", "redes", "animo", "rubor", "tinto", "queso", "lleno", "bella", "orden", "micro", "llano", "super", "diosa", "canoa", "cajon", "leche", "adios", "hielo", "robot", "pulpo", "salsa", "atico", "fondo", "guapa", "cerca", "valle", "tesis", "peaje", "oasis", "viuda", "comer", "sacar", "rojos", "acero", "borla", "vieja", "arroz", "sobre", "ramal", "pozos", "rigor", "plaza", "hacha", "horas", "torax", "pesar", "ostra", "sordo", "error", "tunel", "cueva", "fotos", "civil", "salud", "regar", "viaje", "arena", "fruta", "polos", "extra", "venir", "fauna", "corto", "marca", "comer", "mocos", "actor", "cebra", "zorro", "hijos", "pista", "farol", "limon", "pluma", "manos", "cacao", "tutor", "yegua", "marea", "canta", "bella", "idolo", "curso", "misil", "gasto", "ganar", "señas", "grito", "astro", "metal", "pizza", "vuelo", "recta", "reina", "judia", "hogar", "raton", "enano", "rizos", "listo", "palos", "bolso", "freno", "jarra", "valle", "tigre", "tenis", "mujer", "bebes", "fruta", "algas", "matas", "acera", "bizco", "yunta", "tapar", "horno", "cable", "trozo", "plana", "canta", "balon", "libre", "nudos", "venus", "carpa", "temer", "guion", "varon", "tieso", "ciego", "cabra", "raton", "chita", "botes", "dolar", "coger", "sexta", "bache", "pelos", "lanza", "plana", "rival", "medir", "rueda", "sesos", "atico", "envio", "error", "señal", "cazar", "falda", "bolas", "fosas", "susto", "sello", "icono", "plomo", "error", "tapiz", "amigo", "pedir", "plazo", "recta", "algas", "cuero", "hielo", "tapas", "simio", "gente", "picos", "toser", "funda", "cacao", "pillo", "ramas", "preso", "cobra", "sobre", "marte", "miedo", "impar", "joyas", "dieta", "etnia", "ramas", "coste", "prado", "palos", "sismo", "dudar", "golpe", "video", "audaz", "carro", "bello", "ninja", "pulpo", "rogar", "vivir", "fallo", "brote", "senda", "lapiz", "sauce", "jabon", "negro", "fauna", "debil", "ruido", "falda", "vagon", "hacer", "blusa", "sidra", "bebes", "cejas", "fluir", "brisa", "tubos", "otoño", "plaga", "pisos", "tibio", "arado", "queja", "oliva", "ramas", "guion", "genio", "tieso", "vital", "angel", "tejer", "jarra", "pares", "hogar", "muela", "nuevo", "pavos", "pesar", "virus", "telon", "termo", "heroe", "error", "rubia", "ataca", "nafta", "hilos", "rango", "oasis", "vista", "salud", "tocar", "aviso", "mando", "rotor", "actor", "canta", "trazo", "antes", "rutas", "tapas", "curva", "bizco", "hilos", "fruta", "grado", "armas", "vidal", "mares", "laser", "pulpo", "banda", "risas", "robar", "pasta", "datil", "morsa", "mango", "final", "album", "natal", "ojear", "tapiz", "cebar", "panda", "oveja", "pulga", "lento", "cifra", "carne", "micro", "debil", "patio", "botin", "mayor", "choza", "raton", "animo", "potro", "color", "exito", "cosas", "jamon", "nieve", "calvo", "pulga", "trono", "aspen", "clara", "atomo", "malla", "torpe", "fibra", "sobre", "echar", "avion", "campo", "humor", "criar", "rayas", "cesta", "sucio", "audio", "aleta", "buque", "gorra", "plomo", "amigo", "bombo", "torno", "guapo", "pegar", "bolsa", "melon", "pinta", "justa", "huido", "novio", "labio", "grasa", "grupo", "ropas", "guapo", "honda", "copia", "tabla", "santo", "puñal", "chico", "vacio", "multa", "salsa", "papel", "salas", "prisa", "carro", "gusto", "miope", "galan", "ramos", "jugar", "anden", "aldea", "ficha", "haren", "saber", "caldo", "misil", "metro", "ovalo", "latir", "corto", "gafas", "finca", "cabra", "enero", "maton", "arder", "espia", "dulce", "verbo", "lucro", "mojar", "carta", "piano", "dosis", "niñas", "sumar", "chino", "ducha", "poema", "forma", "menor", "carga", "hueso", "abeja", "pausa", "oxido", "turno"];

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var unique = palabrasArray.filter(onlyUnique);
var indice = Math.floor(Math.random() * unique.length);
var palabra = unique[indice];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="col-xxl-4"></div>
        <div className="col-xxl-4">
          <div className="rowAyuda container">
            <div id="ayuda" className="col-2">
              <i className="far fa-question-circle" data-bs-toggle="modal" data-bs-target="#modalAyuda"></i>
            </div>
            <div id="wordle" className="col-8">
              WORDLE
            </div>
            <div id="opciones" className="col-2">
              <i className="fas fa-cog" data-bs-toggle="modal" data-bs-target="#modalOpciones"></i>
            </div>
          </div>
          <hr className="lineaJuego" />
          <div className="rowCajas">
            <div className="cajaLetra">
              <input id="box11" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box12" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box13" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box14" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box15" className="inputLetra" disabled></input>
            </div>
          </div>
          <div className="rowCajas">
            <div className="cajaLetra">
              <input id="box21" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box22" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box23" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box24" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box25" className="inputLetra" disabled></input>
            </div>
          </div>
          <div className="rowCajas">
            <div className="cajaLetra">
              <input id="box31" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box32" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box33" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box34" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box35" className="inputLetra" disabled></input>
            </div>
          </div>
          <div className="rowCajas">
            <div className="cajaLetra">
              <input id="box41" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box42" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box43" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box44" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box45" className="inputLetra" disabled></input>
            </div>
          </div>
          <div className="rowCajas">
            <div className="cajaLetra">
              <input id="box51" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box52" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box53" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box54" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box55" className="inputLetra" disabled></input>
            </div>
          </div>
          <div className="rowCajas">
            <div className="cajaLetra">
              <input id="box61" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box62" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box63" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box64" className="inputLetra" disabled></input>
            </div>
            <div className="cajaLetra">
              <input id="box65" className="inputLetra" disabled></input>
            </div>
          </div>
          <div className="teclado">
            <div className="row">
              <div className="letraTeclado" id="q">
                Q
              </div>
              <div className="letraTeclado" id="w">
                W
              </div>
              <div className="letraTeclado" id="e">
                E
              </div>
              <div className="letraTeclado" id="r">
                R
              </div>
              <div className="letraTeclado" id="t">
                T
              </div>
              <div className="letraTeclado" id="y">
                Y
              </div>
              <div className="letraTeclado" id="u">
                U
              </div>
              <div className="letraTeclado" id="i">
                I
              </div>
              <div className="letraTeclado" id="o">
                O
              </div>
              <div className="letraTeclado" id="p">
                P
              </div>
            </div>
            <div className="row">
              <div className="letraTeclado" id="a">
                A
              </div>
              <div className="letraTeclado" id="s">
                S
              </div>
              <div className="letraTeclado" id="d">
                D
              </div>
              <div className="letraTeclado" id="f">
                F
              </div>
              <div className="letraTeclado" id="g">
                G
              </div>
              <div className="letraTeclado" id="h">
                H
              </div>
              <div className="letraTeclado" id="j">
                J
              </div>
              <div className="letraTeclado" id="k">
                K
              </div>
              <div className="letraTeclado" id="l">
                L
              </div>
              <div className="letraTeclado" id="ñ">
                Ñ
              </div>
            </div>
            <div className="row">
              <div className="letraTecladoGrande" id="enter">
                ENTER
              </div>
              <div className="letraTeclado" id="z">
                Z
              </div>
              <div className="letraTeclado" id="x">
                X
              </div>
              <div className="letraTeclado" id="c">
                C
              </div>
              <div className="letraTeclado" id="v">
                V
              </div>
              <div className="letraTeclado" id="b">
                B
              </div>
              <div className="letraTeclado" id="n">
                N
              </div>
              <div className="letraTeclado" id="m">
                M
              </div>
              <div className="letraTecladoGrande" id="delete">
                <i class="fas fa-backspace"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4"></div>
        <div className="modal fade" id="modalAyuda" tabIndex="-1" aria-labelledby="modalAyudaLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalAyudaLabel">Ayuda</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="textoModal"> Adivina el WORDLE en 6 intentos. </p>
                <p className="textoModal"> Luego de cada intento, el color de las letras cambiará para mostrar qué tan cerca estuvo el intento de la palabra. </p>
                <hr />
                <div className="rowEjemplo">
                  <div className="cajaEjemplo ejemploVerde">
                    <input className="inputEjemplo" defaultValue="M" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="A" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="D" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="R" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="E" disabled></input>
                  </div>
                </div>
                <p className="textoModal"> La letra <b> M </b> está en la palabra, en el lugar correcto. </p>
                <div className="rowEjemplo">
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="C" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="E" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="S" disabled></input>
                  </div>
                  <div className="cajaEjemplo ejemploAmarillo">
                    <input className="inputEjemplo" defaultValue="T" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="A" disabled></input>
                  </div>
                </div>
                <p className="textoModal"> La letra <b> T </b> está en la palabra, pero en otra posición. </p>
                <div className="rowEjemplo">
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="P" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="A" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="T" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="I" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" defaultValue="O" disabled></input>
                  </div>
                </div>
                <p className="textoModal"> Ninguna de las letras está en la palabra, en ninguna posición. </p>
                <hr></hr>
                <p className="textoModalInstrucciones"> Las palabras están en español, no se aceptan nombres propios. </p>
                <p className="textoModalInstrucciones"> Las palabras pueden contener Ñ. </p>
                <p className="textoModalInstrucciones"> Se incluyen palabras con tildes, pero se las evita durante el juego. Por ejemplo, <b> avión </b> pasa a ser <b> avion</b>. No se pueden colocar tildes con el teclado. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalOpciones" tabIndex="-1" aria-labelledby="modalOpcionesLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalOpcionesLabel">Opciones</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="textoModal"> --- Próximamente --- </p>
                <hr />
                <p className="textoModal">Un juego creado por <a href="https://www.powerlanguage.co.uk/wordle/"> Josh Wardle </a></p>
                <p className="textoModal">con versión en español hecha por <a href="https://github.com/dariovillar1902"> Darío Villar </a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalGanador" tabIndex="-1" aria-labelledby="modalGanadorLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalGanadorLabel">Ganaste!</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeGanador"></button>
              </div>
              <div className="modal-body">
                <p className="textoModal"> La palabra era </p>
                <div className="rowEjemplo">
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo ejemploVerde" id="boxGanadora1" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo ejemploVerde" id="boxGanadora2" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo ejemploVerde" id="boxGanadora3" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo ejemploVerde" id="boxGanadora4" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo ejemploVerde" id="boxGanadora5" disabled></input>
                  </div>
                </div>
                <br />
                <p className="textoModal"> y la adivinaste en <span id="numeroIntentos"></span> intentos. </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn" id="compartir" data-toggle="tooltip" data-placement="top" title="Copiado al portapapeles">Compartir</button>
                <button type="button" className="btn" id="juegoNuevo">Jugar de nuevo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalPerdedor" tabIndex="-1" aria-labelledby="modalPerdedorLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalPerdedorLabel"> Suerte para la próxima! </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closePerdedor"></button>
              </div>
              <div className="modal-body">
                <p className="textoModal"> La palabra era </p>
                <div className="rowEjemplo">
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" id="boxPerdedora1" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" id="boxPerdedora2" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" id="boxPerdedora3" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" id="boxPerdedora4" disabled></input>
                  </div>
                  <div className="cajaEjemplo">
                    <input className="inputEjemplo" id="boxPerdedora5" disabled></input>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn" id="compartir" data-toggle="tooltip" data-placement="top" title="Copiado al portapapeles">Compartir</button>
                <button type="button" className="btn" id="juegoNuevo">Jugar de nuevo</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

let filaActual = 1;
let letrasIngresadas = 0;
let palabraIngresada = "";
let indiceLetra = 0;
let textoCompartir = "Wordle Español - " + palabra + " - ";
let textoFinal = "";
let emojisCompartir = [];
window.addEventListener("load", function (event) {
  for (var p = 0; p < 5; p++) {
    let boxGanadoraID = "boxGanadora" + (p + 1);
    let boxPerdedoraID = "boxPerdedora" + (p + 1);
    let cajaActual = document.getElementById(boxGanadoraID);
    let cajaActual2 = document.getElementById(boxPerdedoraID);
    let letra = palabra.slice(p, p + 1);
    let letraMayus = letra.toUpperCase();
    cajaActual.value = letraMayus;
    cajaActual2.value = letraMayus;
  }
});
document.addEventListener("keydown", function (event) {
  // var code = event.keyCode || event.which;
  const code = event.key;
  if (code === 'Enter' || code === ' ') {
    if (letrasIngresadas === 5) {
      checkPalabra(palabraIngresada, palabra);
      filaActual += 1;
      letrasIngresadas = 0;
      indiceLetra = 0;
      palabraIngresada = "";
      emojisCompartir.push("\n");
    }
  } else if (code === 'a' || code === 'b' || code === 'c' || code === 'd' || code === 'e' || code === 'f' || code === 'g' || code === 'h' || code === 'i' || code === 'j' || code === 'k' || code === 'l' || code === 'm' || code === 'n' || code === 'ñ' || code === 'o' || code === 'p' || code === 'q' || code === 'r' || code === 's' || code === 't' || code === 'u' || code === 'v' || code === 'w' || code === 'x' || code === 'y' || code === 'z' || code === 'A' || code === 'B' || code === 'C' || code === 'D' || code === 'E' || code === 'F' || code === 'G' || code === 'H' || code === 'I' || code === 'J' || code === 'K' || code === 'L' || code === 'M' || code === 'N' || code === 'Ñ' || code === 'O' || code === 'P' || code === 'Q' || code === 'R' || code === 'S' || code === 'T' || code === 'U' || code === 'V' || code === 'W' || code === 'X' || code === 'Y' || code === 'Z') {
    if (indiceLetra === 5) {
      return false;
    } else {
      indiceLetra += 1;
      letrasIngresadas += 1;
    }
    let boxID = "box" + filaActual.toString() + indiceLetra.toString();
    let cajaActual = document.getElementById(boxID);
    let letra = code;
    let letraMayus = letra.toUpperCase();
    cajaActual.value = letraMayus;
    palabraIngresada += letra.toLowerCase();
  } else if ((code === 'Backspace' || code === 'Delete') && letrasIngresadas !== 0) {
    let boxID = "box" + filaActual.toString() + indiceLetra.toString();
    let cajaActual = document.getElementById(boxID);
    cajaActual.value = '';
    letrasIngresadas -= 1;
    indiceLetra -= 1;
    palabraIngresada = palabraIngresada.slice(0, letrasIngresadas);
  }
  event.preventDefault(); //prevent entry
});
document.addEventListener("click", function (event) {
  let idClick = event.target.id;
  if (idClick === 'enter') {
    if (letrasIngresadas === 5) {
      checkPalabra(palabraIngresada, palabra);
      filaActual += 1;
      letrasIngresadas = 0;
      indiceLetra = 0;
      palabraIngresada = "";
      emojisCompartir.push("\n");
    }
  } else if ((idClick === 'delete') && letrasIngresadas !== 0) {
    let boxID = "box" + filaActual.toString() + indiceLetra.toString();
    let cajaActual = document.getElementById(boxID);
    cajaActual.value = '';
    letrasIngresadas -= 1;
    indiceLetra -= 1;
    palabraIngresada = palabraIngresada.slice(0, letrasIngresadas);
  } else if (idClick === "juegoNuevo") {
    document.location.reload();
  } else if (idClick === "compartir") {
    navigator.clipboard.writeText(textoFinal);
  } else if (idClick === "closeGanador") {
    document.getElementById("modalGanador").classList.remove("show");
    document.getElementById("modalGanador").setAttribute("role", "dialog");
    document.getElementById("modalGanador").style.display = "none";
  } else if (idClick === "closePerdedor") {
    document.getElementById("modalPerdedor").classList.remove("show");
    document.getElementById("modalPerdedor").setAttribute("role", "dialog");
    document.getElementById("modalPerdedor").style.display = "none";
  } else if (idClick === '' || idClick.length !== 1) {
    return false;
  } else {
    if (indiceLetra === 5) {
      return false;
    } else {
      indiceLetra += 1;
      letrasIngresadas += 1;
    }
    let boxID = "box" + filaActual.toString() + indiceLetra.toString();
    let cajaActual = document.getElementById(boxID);
    let letra = idClick;
    let letraMayus = letra.toUpperCase();
    cajaActual.value = letraMayus;
    palabraIngresada += letra;
  }
  event.preventDefault();

});
function checkPalabra(palabraIngresada, palabra) {
  let letraPalabra = [];
  let letraPalabraIngresada = [];
  let estadoLetras = [];
  let filaEmojis = [];
  for (let i = 0; i < 5; i++) {
    letraPalabra[i] = palabra.slice(i, i + 1);
  }
  for (let j = 0; j < 5; j++) {
    letraPalabraIngresada[j] = palabraIngresada.slice(j, j + 1);
    estadoLetras[j] = false;
  }

  for (let k = 0; k < 5; k++) {
    let IDanim = "box" + filaActual.toString() + (k + 1).toString();
    let cajaAnim = document.getElementById(IDanim);
    cajaAnim.classList.add("animate__animated", "animate__flipInX");
    if (letraPalabra[k] === letraPalabraIngresada[k]) {
      let boxID = "box" + filaActual.toString() + (k + 1).toString();
      let cajaActual = document.getElementById(boxID);
      let letraActual = document.getElementById(letraPalabraIngresada[k]);
      cajaActual.style.backgroundColor = "#76B041";
      letraActual.style.backgroundColor = "#76B041";
      estadoLetras[k] = true;
      filaEmojis[k] = "🟩";
    }
    for (let l = 0; l < 5; l++) {
      if (letraPalabra[k] === letraPalabraIngresada[l] && letraPalabra[k] !== letraPalabraIngresada[k]) {
        let boxID = "box" + filaActual.toString() + (l + 1).toString();
        let cajaActual = document.getElementById(boxID);
        let letraActual = document.getElementById(letraPalabraIngresada[l]);
        cajaActual.style.backgroundColor = "#D99830";
        letraActual.style.backgroundColor = "#D99830";
        estadoLetras[l] = true;
        filaEmojis[l] = "🟨";
      }
    }
    for (let m = 0; m < 5; m++) {
      if (estadoLetras[m] === false) {
        let letraActual = document.getElementById(letraPalabraIngresada[m]);
        letraActual.style.backgroundColor = "#000000";
        filaEmojis[m] = "⬛";
      }
    }
  }
  emojisCompartir.push(filaEmojis.join(''));
  if (palabraIngresada === palabra) {
    document.getElementById("numeroIntentos").innerText = filaActual;
    document.getElementById("modalGanador").classList.add("show");
    document.getElementById("modalGanador").setAttribute("role", "dialog");
    document.getElementById("modalGanador").style.display = "block";
    textoFinal = textoCompartir + filaActual + "/6\n\n" + emojisCompartir.join('') + "\n\nwordlees.vercel.app";
  } else {
    if (filaActual === 6) {
      document.getElementById("modalPerdedor").classList.add("show");
      document.getElementById("modalPerdedor").setAttribute("role", "dialog");
      document.getElementById("modalPerdedor").style.display = "block";
      textoFinal = textoCompartir + "X/6\n\n" + emojisCompartir.join('') + "\n\nwordlees.vercel.app";
    }
  }
}
export default App;
