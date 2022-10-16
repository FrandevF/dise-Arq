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
          <div class="info8">
          <a href="/assets/galeria1/galeria1.rar" download="foto1">Descargar galeria <span>(.rar)</span></a>
          </div>

      </div>`;
  mainContainer.insertAdjacentHTML("beforeend", box1Content);
}

function showBox2() {
  const hiddenAll = document.querySelector("#flexc");
  hiddenAll.style.display = "none";
  const box1Content = `<div id="box1">
        <h1>Vivienda 2: SANTO TOMÉ, ARGENTINA</h1>
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
          <div class="info8">
          <a href="/assets/galeria1/galeria1.rar" download="foto1">Descargar galeria <span>(.rar)</span></a>
          </div>

      </div>`;
  mainContainer.insertAdjacentHTML("beforeend", box1Content);
}

function showBox3() {
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
          <div class="info8">
          <a href="/assets/galeria1/galeria1.rar" download="foto1">Descargar galeria <span>(.rar)</span></a>
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
