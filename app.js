const box = document.querySelectorAll(".box");

box.forEach((box, index) => {
  box.addEventListener("click", (e) => {
    console.log(index);
    if (index === 0) {
      showBox1();
    } else if (index === 1) {
      showBox2();
    } else if (index === 2) {
      showBox3();
    }
  });
});
const mainContainer = document.querySelector(".main-container");
function showBox1() {
  const hiddenAll = document.querySelector("#flexc");
  hiddenAll.style.display = "none";

  const box1Content = `<div id="box1">
  
        <h1>Vivienda 1: SANTO TOMÉ, ARGENTINA</h1>
        <div class="presentacion">
          <img src="/assets/v1Presentation2.jpg" class="presentation-image" />
          <p class="general-description">
            Se trata de una vivienda para una pareja joven, ubicada en un barrio
            cerrado en las afuera de la ciudad de Santa Fe. El crédito significó
            la oportunidad de impulsar una primera instancia de construcción,
            permitiendo una ocupación temprana del inmueble. A esta primer
            etapa, le sucederían gradualmente una serie de ampliaciones
            coordinadas en cada caso según las prioridades emergentes de sus
            ocupantes. Las particularidades del crédito, por otro lado,
            permitían interpretarlo como un escenario propicio donde
            laboratorizar hipótesis de crecimiento y adaptaciones del espacio
            doméstico a las progresivas re-configuración/es de la escena
            familiar.
          </p>
        </div>
        <div class="info1">
          <img src="/assets/foto1-2.png" alt="" class="img2"/>
          <p>
            La posición del terreno con respecto a la manzana, se puede observar
            que se encuentra en uno de los lados de la misma, por lo que no se
            encuentra en ninguna esquina. La orientación con respecto al ingreso
            parece ser sur-oeste.<br><br>
            La posición del edificio con respecto al ambiente está definida mediante el ingreso a la propiedad, en este caso el ingreso es desde el suroeste, donde podemos observar de frente y darnos cuenta que las ubicaciones de los primeros locales de la vivienda se  intersecan de forma irregular, dándonos una hipótesis de que es una vivienda especial y diferente a las que cotidianamente vemos. Ya definida la ubicación del ingreso nos damos cuenta que el amanecer y el atardecer suceden desde los costados del terreno, además, alrededor del barrio la naturaleza es básica, lo que podemos deducir que se aprovecha al máximo la luz solar.
          </p>
        </div>
        <div class="info2">
        <img src="/assets/celulas.jpg" alt="" class="img2"/>
        <p>  La idea del diseño empleado, es principalmente como si fuera un "Átomo", el cual se divide en "celulas"(siendo estos los locales de la vivienda). Entre estas estan las células sociales o íntimas y células de apoyo tanto para espacios interiores como para los espacios exteriores y semi-cubiertos.  Se buscó conectar cada celula con un espacio exterior(El patio interior), y que a su vez esten casi separadas entre sí, con un vano que las una, definiendo así la privacidad en cada una de estas.
          </p>
        </div>
        <div class="info2-2">
        <p>
        Por qué "celulas" casi separadas? Ya que este proyecto esta sin terminar, es decir que se quiere ampliar en un futuro, se plantea que cada celula tenga su función en particular, y que en la futura ampliación se agreguen nuevas celulas con su respectiva activdad principal.
        <br><br><br>
        El aspecto más significativo de este proyecto es sin duda su forma, la idea de "Átomo", la cual la hace una vivienda muy particular, con techos a distintas alturas, distintas formas, un patio central que reune todos los locales y el propio ingreso, es un proyecto que va a destacar entre las viviendas de sus futuros vecinos.
        </p>
        
        </div>
         <div class="info3"><img src="/assets/cucu.jpg" alt="">
         <p>
         Podemos observar, el ingreso a esta vivienda lleva directamente a una especie de patio interior el cual conecta el interior con el exterior, y a su vez, este patio conecta todas las partes de la casa, en la imagen se observa la composicion de la vivienda.<br><br>
         los espacios de la vivienda estan unidos entre si por el mismo patio interior, este patio interior tiene el ingreso general y se cierra al fondo, haciendo la forma que se ve en la imagen, a su vez cada local esta conectado mediante vanos, los locales que apuntan al patio trasero tienen salida a este.
         </p>
         </div>
          <div class="info4">
          <img src="/assets/estarComedor.jpg" alt="">
          <p>En una de las celulas de esta vivienda podemos observar un Estar-Comedor bastante amplio, con un sofá mirando hacia un televisor, y una mesa comedor , el techo a gran altura y aumentando hacia un lado da una sensacion de que el lugar es más amplio, complementando con el ventanal que da a su patio, por el cual tambien entra mucha luz natural.
</p></div>
          <div class="info5">
          <img src="/assets/cocina1.jpg" alt="">
          <p>En cuanto a la cocina, podemos observar que tiene un aspecto muy moderno, con el techo siguiendo la forma general y rompiendo el paralelismo común de techo-piso.
          <br><br>
          La cocina tiene un buen aprovechamiento del espacio, con una isla con horno, muebles suficientes y espacio para que al menos 2 personas puedan cocinar cómodas.
          </p>
          </div>
          <div class="info6">
          <img src="/assets/galeria1.jpg" alt="">
          
          <p>En su patio se puede observar una galería, no muy amplia, pero con una mesa para compartir actividades en familia o con amigos fuera de un lugar cerrado, esta galería no es la excepción en cuanto al techo lo que permite seguir con la estética de la casa, tiene buena iluminacion de noche y los acabados en madera hacen que se vea agradable.</p>
          <img src="/assets/galeria2.jpg" alt="">
          </div>
          <div class="info7">
          <p>Los recorridos de la vivienda son bastantes dinámicos, se observa bastante comodidad en este aspecto</p>
          <img src="/assets/recorrido1.jpeg" alt="">
          </div>
          <div class="info8 btnD">
          <a href="/assets/galeria1/galeria1.rar" download="Galería vivienda 1.rar">Descargar galeria <span>(.rar)</span></a>
          </div>

      </div>`;
  mainContainer.insertAdjacentHTML("beforeend", box1Content);
}

function showBox2() {
  const hiddenAll = document.querySelector("#flexc");
  hiddenAll.style.display = "none";
  const box1Content = `<div id="box1">
        <h1>Vivienda 2:Casa Ribera</h1>
        <div class="presentacion">
          <img src="/assets/galeria2/1.jpg" class="presentation-image" />
          
        </div>
        <div class="info1">
          <img src="/assets/galeria2/2(planta).jpg" alt="" class="img2"/>
          <p class="general-description">
            Emplazada en una de las más recientes urbanizaciones privadas en la periferia de la ciudad de Santa fe, la vivienda íntegramente desarrollada en una planta, se compone de 2 elementos independientes vinculados entre sí por la circulación de acceso.<br><br>
            El primero ubicado en el frente del lote aloja la doble cochera, y recostada sobre el fondo del terreno buscando la mejor orientación se ubica la casa propiamente dicha. Es básicamente un prisma que alberga el programa habitable con un recibidor, estar - comedor (con superficie para uso alternativo: home cinema, estudio, juegos o habitación extra). Habitación principal en suite, 2 habitaciones secundarias, cocina-comedor diario, núcleo de sanitarios, y galería con asador, depósito y lavadero.
          </p>
        </div>
        <div class="info2">
        <img src="/assets/galeria2/3.jpg" alt="" class="img2"/>
        <p> La idea del proyecto era poder definir bien los espacios privados y los públicos, generando a su vez una relación del interior con la naturaleza del exterior.
          </p>
        </div>
        <div class="info2-2">
        <p>
            Para poder lograr lo mencionado en el punto anterior, el arquitecto parece haber optado por hacer una caja cerrada en el interior de la vivienda que constituye todos los espacios privados, y rodeando esta formando una forma de C los espacios públicos, todos con ventanales que permiten siempre las visuales al exterior, permitiendo tambien el ingreso de luz natural a estos espacios.
        <br><br><br>
            Creemos que el aspecto más significativo es el sector público, una caja de cristal (el área social) que se relaciona visualmente con el terreno en toda su amplitud. Enmarcados todos en una cinta continua en forma de “C” que ata todos los elementos compositivos y se despega del terreno remarcando su carácter geométrico.
Si bien en la vivienda predominan las transparencias por medio de grandes paños vidriados, se la diseño íntegramente con criterios bioclimáticos (orientación, espacios intermedios, sistemas pasivos de control solar y técnicas constructivas) a fin de garantizar el confort ambiental y reducir los consumos de energías no renovables.

        </p>
        
        </div>
         <div class="info3">
         <img src="/assets/galeria2/privPu.jpg" alt="">
        <img src="/assets/galeria2/privPu2.jpg" alt="">
         <p>
        Podemos observar la distribución de espacios publicos y privados, donde se observa lo mencionado anteriormente de la division de espacios. <br><br><br>
Color naranja: Privado
Color amarillo:Publico
Color celeste: Publico en exteriores
         </p>
         </div>
          <div class="info4">
          <img src="/assets/galeria2/4.jpg" alt="">
          <p>A primera vista podemos ver la estructura de hormigón, la cual junto a todos los ventanales con aberturas negras le dan un aspecto moderno y muy limpio. <br><br><br>
Es interesante ver esta estructura, una losa de piso de forma rectangular, levemente levantada del piso lo cual también la hace destacar más, y otra losa con dimensiones mas pequeñas de techo, teniendo entre ellas y con visuales al exterior, los ventanales del espacio público de la vivienda, también teniendo en un costado una galería con lo que parece un asador, en dónde puede colocarse una mesa y compartir momentos en familia o amigos.
En general hay mucha transparencia mediante los paños de cristal que destacan mucho.

</p></div>
          <div class="info5">
          <img src="/assets/galeria2/5.jpg" alt="">
          <p><br><br>Si bien en la vivienda predominan las transparencias por medio de grandes paños vidriados, se la diseño íntegramente con criterios bioclimáticos (orientación, espacios intermedios, sistemas pasivos de control solar y técnicas constructivas) a fin de garantizar el confort ambiental y reducir los consumos de energías no renovables.<br><br><br><br><br>
          El concepto básico de la casa Ribera 1 es la sencillez y transparencia, el desafío radico en transformar una tecnología constructiva económica en recursos y tradicional en ejecución para lograr materializar los preceptos conceptuales que sirvieron como punto de partida en el proyecto.
          <br><br>
          </p>
          </div>
          <div class="info6Styles info6">
        
          <img src="/assets/galeria2/interior1.jpg" alt="" class="XD">
          <img src="/assets/galeria2/cocina.jpg" alt="" class="XD">

          <p><br><br> El interior de la casa esta diseñado con un estilo muy moderno, una buena combinacion con pocos colores, y hermosos acabados en madera.
          <br><br><br><br>La cocina, es pequeña pero muy minimalista, predominando el color blanco y con una isla central con lavadero y lo que parece ser un anafe.</p>
          </div>
          <div class="info7">
          <img src="/assets/galeria2/galeria.jpg" alt="">
          <p>Tambien tenemos una galería, la cual da tambien entrada y vistas a la vivienda gracias a los ventanales, la misma cuenta con espacio suficiente como para una mesa familiar, o para hacer actividades entre familia y amigos, con un asador al costado para el comfort de las personas.<br><br>Esta galería tiene de techo la misma losa que funciona como techo de la vivienda, dandole uniformidad a todo el conjunto, permitiendo tambien vistas al exteriorl.
        </p>
          </div>

          <div class="info8">
          <p>Los recorridos de la vivienda son bastantes dinámicos, la division de sectores publicos y privados ayudan con la comodidad de los recorridos</p>
          <img src="/assets/recorrido2.jpeg" alt="">
          </div>
          <div class="info9 btnD">
          <a href="/assets/galeria2/galeriaRAR.rar" download="Galería Vivienda 2.rar">Descargar galeria <span>(.rar)</span></a>
          </div>

      </div>`;

  mainContainer.insertAdjacentHTML("beforeend", box1Content);
}

function showBox3() {
  const hiddenAll = document.querySelector("#flexc");
  hiddenAll.style.display = "none";
  const box1Content = `<div id="box1">
        <h1>Vivienda 3 Casa Quinta </h1>
        <div class="presentacion">
          <img src="/assets/galeria3/presentacion.jpg" class="presentation-image" />
          <p class="general-description">
            La primera reunión con el comitente se sucedió en el sitio, y en el recorrido por el mismo, se manifestó el anhelo por un espacio en “contacto con la naturaleza”, imaginaban: fin de semana salir de la  ciudad  y arribar a un ambiente en donde predominara el “verde”.   Este espacio se manifestó en una gran galería, y se constituyó en el componente articulador del proyecto.
          </p>
        </div>
        <div class="info1">
          <img src="/assets/galeria3/2.jpg" alt="" class="img2"/>
          <p>
            Se puede observar que el terreno tiene 150 [m2], una forma casi rectangular, ya que en una de las esquinas del mismo es diagonal, y que esta ubicada en la esquina de la manzana<br><br><br> La vivienda tiene forma de un prisma rectangular, es una casa de estructura simple y cotidiana, sus colores entonan desde el negro a marrón madera y un rojo ladrillo en los muros. 
          </p>
        </div>
        <div class="info2">
        <img src="/assets/galeria3/nat.jpg" alt="" class="img2"/>
        <p>La parcela tiene mucha conexión con la naturaleza por el espacio sobrante sin construcción u ocupación, y por la cantidad de vegetación que hay en el terreno. <br><br><br>La posición de la casa se puede observar desde el ingreso de la misma, en este caso el ingreso a la propiedad sería desde el oeste, por lo que podemos deducir que el largo del terreno es de sur a norte.
        <br><br><br>La casa quinta fue pensada en una intensa relación arquitectura/paisaje, manifestándose en una secuencia espacial de jardines, que articulan el conjunto, expresando las características fito-geográficas de la región.
        </div>
        <div class="info2-2">
        <p>
        El aspecto más significativo de esta vivienda es el anhelo por un espacio en contacto con la naturaleza, nos podemos dar una imagen de arribar en un ambiente en donde predominara el “verde”.
        <br><br>
       
        </p>
        
        </div>
         <div class="info3"><img src="/assets/galeria3/04.jpg" alt="">
         <p>
         La geometría de los exteriores de la quinta es interesante, con distintas formas y materiales, mezclados con la naturaleza le dan un aspecto hermoso.
         </p>
         </div>
          
          <div class="info4">
          <img src="/assets/galeria3/galeria.jpg" alt="">
          <p>En la imagen podemos observar una galeria del lado izquierdo, la cual tiene un azador, a su vez este mismo se mezcla con la morfología del techo, dando una forma rara pero agradable, y que se integra con el paisaje.<br><br> La galería tiene focos para iluminar en las noches, y espacio suficiente para las actividades.
          </p>
          </div>
          <div class="info5">
          <img src="/assets/galeria3/galeria2.jpg" alt="">
          <p>la parte más abierta de la galería da una visual a la pileta, y a la naturaleza que rodea la vivienda.
</p></div>
          <div class="info6">
          <img src="/assets/galeria3/galeria3.jpg" alt="">
          
          <p>Otra vista de la galería, se puede observar la pileta, el azador y una cochera.<br><br> El azador con una enredadera lo cual le da un aspecto mas natural, y el techo de la galería inclinado hacia arriba da una sensación de mayor espacio.
          
          </p>
          <img src="/assets/galeria3/entrada.jpg" alt="">
          <p>En la imagen de arriba se ve el ingreso a la quinta, el cual da directamente a la galería, y al costado un patio pequeño</p>
          </div>
          <div class="info7">
          <p>En la imagen se ven los recorridos de la vivienda, desde el ingreso tenemos acceso directo a la galería con asador, y desde allí podemos ir al patio con pileta, o bien al interior de la vivienda</p>
          <img src="/assets/recorrido3.jpeg" heigth="200px">
          </div>
          <div class="info8 btnD">
          <a href="/assets/galeria3/gal3.rar" download="Galería de la vivienda 3.rar">Descargar galeria <span>(.rar)</span></a>
          </div>

      </div>`;
  mainContainer.insertAdjacentHTML("beforeend", box1Content);
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/FrandevF/dise-Arq.git
//
