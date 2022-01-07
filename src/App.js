import logo from './logo.svg';
import './App.css';

const palabrasArray = ["vacas", "novia", "queso", "viejo", "disco", "oveja", "héroe", "rusia", "plata", "dañar", "bajón", "brisa", "hielo", "frase", "toser", "susto", "otoño", "forro", "golpe", "tanga", "peaje", "debut", "plomo", "monje", "genio", "ramal", "tropa", "morse", "llano", "verde", "prado", "barba", "pluma", "solar", "caras", "tropa", "toser", "látex", "oliva", "indio", "sidra", "mover", "pozos", "pillo", "cargo", "puños", "palma", "grado", "ancla", "doler", "señor", "herir", "brote", "ética", "crema", "manta", "vacía", "gallo", "orina", "puros", "pecho", "abrir", "dulce", "ancho", "hueso", "cabra", "horas", "remos", "patas", "salsa", "ataca", "ratas", "tórax", "hacha", "roble", "rueda", "araña", "pesar", "cebra", "buena", "letal", "ondas", "clips", "choza", "panal", "ciego", "madre", "perro", "mujer", "larva", "redes", "animo", "rubor", "tinto", "queso", "lleno", "bella", "orden", "micro", "llano", "super", "diosa", "canoa", "cajón", "leche", "adiós", "hielo", "robot", "pulpo", "salsa", "ático", "fondo", "guapa", "cerca", "valle", "tesis", "peaje", "oasis", "viuda", "comer", "sacar", "rojos", "acero", "borla", "vieja", "arroz", "sobre", "ramal", "pozos", "rigor", "plaza", "hacha", "horas", "tórax", "pesar", "ostra", "sordo", "error", "túnel", "cueva", "fotos", "civil", "salud", "regar", "viaje", "arena", "fruta", "polos", "extra", "venir", "fauna", "corto", "marca", "comer", "mocos", "actor", "cebra", "zorro", "hijos", "pista", "farol", "limón", "pluma", "manos", "cacao", "tutor", "yegua", "marea", "canta", "bella", "ídolo", "curso", "misil", "gasto", "ganar", "señas", "grito", "astro", "metal", "pizza", "vuelo", "recta", "reina", "judía", "hogar", "ratón", "enano", "rizos", "listo", "palos", "bolso", "freno", "jarra", "valle", "tigre", "tenis", "mujer", "bebés"];

  function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

  var unique = palabrasArray.filter(onlyUnique);
  var indice = Math.floor(Math.random()*unique.length);
  var palabra = unique[indice];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="row">
            <div class="cajaLetra">
              <input id="box11" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box12" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box13" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box14" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box15" class="input"></input>
            </div>
          </div>
          <div class="row">
            <div class="cajaLetra">
              <input id="box21" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box22" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box23" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box24" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box25" class="input"></input>
            </div>
          </div>
          <div class="row">
            <div class="cajaLetra">
              <input id="box31" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box32" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box33" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box34" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box35" class="input"></input>
            </div>
          </div>
          <div class="row">
            <div class="cajaLetra">
              <input id="box41" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box42" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box43" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box44" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box45" class="input"></input>
            </div>
          </div>
          <div class="row">
            <div class="cajaLetra">
              <input id="box51" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box52" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box53" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box54" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box55" class="input"></input>
            </div>
          </div>
          <div class="row">
            <div class="cajaLetra">
              <input id="box61" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box62" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box63" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box64" class="input"></input>
            </div>
            <div class="cajaLetra">
              <input id="box65" class="input"></input>
            </div>
          </div>
          <div class="teclado">
            <div class="row">
              <div class="letraTeclado" id="q">
                Q
              </div>
              <div class="letraTeclado" id="w">
                W
              </div>
              <div class="letraTeclado" id="e">
                E
              </div>
              <div class="letraTeclado" id="r">
                R
              </div>
              <div class="letraTeclado" id="t">
                T
              </div>
              <div class="letraTeclado" id="y">
                Y
              </div>
              <div class="letraTeclado" id="u">
                U
              </div>
              <div class="letraTeclado" id="i">
                I
              </div>
              <div class="letraTeclado" id="o">
                O
              </div>
              <div class="letraTeclado" id="p">
                P
              </div>
            </div>
            <div class="row">
              <div class="letraTeclado" id="a">
                A
              </div>
              <div class="letraTeclado" id="s">
                S
              </div>
              <div class="letraTeclado" id="d">
                D
              </div>
              <div class="letraTeclado" id="f">
                F
              </div>
              <div class="letraTeclado" id="g">
                G
              </div>
              <div class="letraTeclado" id="h">
                H
              </div>
              <div class="letraTeclado" id="j">
                J
              </div>
              <div class="letraTeclado" id="k">
                K
              </div>
              <div class="letraTeclado" id="l">
                L
              </div>
              <div class="letraTeclado" id="ñ">
                Ñ
              </div>
            </div>
            <div class="row">
              <div class="letraTecladoGrande">
                ENTER
              </div>
              <div class="letraTeclado" id="z">
                Z
              </div>
              <div class="letraTeclado" id="x">
                X
              </div>
              <div class="letraTeclado" id="c">
                C
              </div>
              <div class="letraTeclado" id="v">
                V
              </div>
              <div class="letraTeclado" id="b">
                B
              </div>
              <div class="letraTeclado" id="n">
                N
              </div>
              <div class="letraTeclado" id="m">
                M
              </div>
              <div class="letraTecladoGrande">
                BORRAR
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4"></div>
      </header>
    </div>
  );
}

console.log(palabra);
let filaActual = 1;
let letrasIngresadas = 0;
let palabraIngresada = "";
document.addEventListener("keypress", function(event) {
  var code = event.keyCode || event.which;

  if(code === 16 || code === 13) {
    if ((letrasIngresadas % 5) === 0 && letrasIngresadas !== 0){
      checkPalabra(palabraIngresada, palabra);
      filaActual += 1;
      letrasIngresadas = 0;
      palabraIngresada = "";
    } else {
      console.log("No se puede cambiar de fila");
    }
  } else {
    letrasIngresadas += 1;
    let indiceLetra = Math.floor(letrasIngresadas % 5);
    if (indiceLetra === 0) {
      indiceLetra = 5;
    }
    let boxID = "box" + filaActual.toString() + indiceLetra.toString();
    let cajaActual = document.getElementById(boxID);
    let letra = String.fromCharCode(code);
    let letraMayus = letra.toUpperCase();
    cajaActual.value = letraMayus;
    palabraIngresada += letra;
  }
  event.preventDefault(); //prevent entry

  function checkPalabra(palabraIngresada, palabra){
    let letraPalabra = [];
    let letraPalabraIngresada = [];
    let estadoLetras = [];
    console.log("La palabra ingresada es: " + palabraIngresada + " y la palabra es: " + palabra);
    for (let i = 0; i < 5; i++) {
      letraPalabra[i] = palabra.slice(i, i+1);
    }
    console.log(letraPalabra);
    for (let j = 0; j < 5; j++) {
      letraPalabraIngresada[j] = palabraIngresada.slice(j, j+1);
      estadoLetras[j] = false;
    }
    console.log(letraPalabraIngresada);
    console.log(estadoLetras);
    
    for (let k = 0; k < 5; k++) {
      if (letraPalabra[k] === letraPalabraIngresada[k]){
        let boxID = "box" + filaActual.toString() + (k + 1).toString();
        let cajaActual = document.getElementById(boxID);
        let letraActual = document.getElementById(letraPalabraIngresada[k]);
        cajaActual.style.backgroundColor = "#76B041";
        letraActual.style.backgroundColor = "#76B041";
        estadoLetras[k] = true;
        console.log("La letra " + (k + 1).toString() + " coincide en ambas palabras.");
      }
      for (let l = 0; l < 5; l++){
        if (letraPalabra[k] === letraPalabraIngresada[l] && letraPalabra[k] !== letraPalabraIngresada[k]){
          let boxID = "box" + filaActual.toString() + (l + 1).toString();
          let cajaActual = document.getElementById(boxID);
          let letraActual = document.getElementById(letraPalabraIngresada[l]);
          cajaActual.style.backgroundColor = "#D99830";
          letraActual.style.backgroundColor = "#D99830";
          estadoLetras[l] = true;
          console.log("La letra " + letraPalabra[k] + " está en la posición incorrecta.");
        }
      }
      for (let m = 0; m < 5; m++){
        if (estadoLetras[m] === false){
          let letraActual = document.getElementById(letraPalabraIngresada[m]);
          letraActual.style.backgroundColor = "#000000";
        }
      }
      
    }
    if (palabraIngresada === palabra){
      console.log("Las palabras coinciden");
    } else {
      console.log("Las palabras no coinciden");
    }
  }
});
export default App;
