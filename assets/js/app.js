//FUNCION PARA EL DESPLEGABLE DEL CONOCEME
window.addEventListener("load", () => {
  let botonHeader = document.querySelector("header h2");
  let botonFooter = document.querySelector("#contactame h2");
  let divHeader = document.querySelector("#conoceme");
  let cerrarHeader = document.querySelector("#conoceme span i");
  let main = document.querySelector("main");
  let subirArriba = document.querySelector(".subirArriba");

  botonHeader.addEventListener("click", () => {
    if (getComputedStyle(divHeader).left == "-700px") {
      divHeader.style.visibility = "visible";
      divHeader.style.left = "0px";
      botonFooter.style.visibility = "hidden";
      subirArriba.style.visibility = "hidden";
    }
  });
  divHeader.addEventListener("mouseleave", () => {
    if (getComputedStyle(divHeader).left == "0px") {
      divHeader.style.left = "-700px";
      botonFooter.style.visibility = "visible";
      subirArriba.style.visibility = "visible";
    }
  });
  cerrarHeader.addEventListener("click", () => {
    if (getComputedStyle(divHeader).left == "0px") {
      divHeader.style.left = "-700px";
      botonFooter.style.visibility = "visible";
      subirArriba.style.visibility = "visible";
    }
  });
  main.addEventListener("click", () => {
    if (getComputedStyle(divHeader).left == "0px") {
      divHeader.style.left = "-700px";
      botonFooter.style.visibility = "visible";
      subirArriba.style.visibility = "visible";
    }
  });
});

//FUNCION PARA EL DESPLEGABLE DEL CONTACTO
window.addEventListener("load", () => {
  let botonHeader = document.querySelector("header h2");
  let botonFooter = document.querySelector("#contactame h2");
  let divFooter = document.querySelector("#contacto");
  let cerrarFooter = document.querySelector("#contacto span i");
  let main = document.querySelector("main");
  let subirArriba = document.querySelector(".subirArriba");

  botonFooter.addEventListener("click", () => {
    if (getComputedStyle(divFooter).right == "-700px") {
      divFooter.style.right = "0px";
      botonHeader.style.visibility = "hidden";
      subirArriba.style.visibility = "hidden";
    }
  });
  divFooter.addEventListener("mouseleave", () => {
    if (getComputedStyle(divFooter).right == "0px") {
      divFooter.style.right = "-700px";
      botonHeader.style.visibility = "visible";
      subirArriba.style.visibility = "visible";
    }
  });
  cerrarFooter.addEventListener("click", () => {
    if (getComputedStyle(divFooter).right == "0px") {
      divFooter.style.right = "-700px";
      botonHeader.style.visibility = "visible";
      subirArriba.style.visibility = "visible";
    }
  });
  main.addEventListener("click", () => {
    if (getComputedStyle(divFooter).right == "0px") {
      divFooter.style.right = "-700px";
      botonHeader.style.visibility = "visible";
      subirArriba.style.visibility = "visible";
    }
  });
});

//FUNCION DE LAS LETRAS QUE SE ESCRIBEN SOLAS
const typed = new Typed(".typed", {
  strings: [
    "HTML5-CSS3",
    "JAVASCRIPT",
    "PHP-MYSQL",
    "WORDPRESS",
    "PRESTASHOP",
    "POSICIONAMIENTO SEO",
    "GIT-GITHUB",
    "GO-HUGO",
  ],
  stringsElement: "#cadenas-texto",
  typeSpeed: 100, //velocidad poner letras
  startDelay: 150, //tiempo de retrase en iniciar animacion
  backSpeed: 100, //velocidad borrar letras
  smartBackspace: true, //elimina las palabras nuevas
  shuffle: false, //palabras aleatorias
  backDelay: 1000, //tiempo de espera entre cada palabra
  loop: true, //boucle
  loopCount: false, // numero de repiticion ex.false=infinito
  showCursor: true, //true = cursor parpadea
  cursorChar: "|",
  contentType: "html",
});

// funcion lazy para las secciones


    let animado_lazy = document.querySelectorAll(".animado-lazy");
    let flechita = document.querySelector(".subirArriba");

    function lazyScroll(){
        let scrollTop =  document.documentElement.scrollTop;
        for (var i=0 ; i<animado_lazy.length ; i++){

            // calculo la altura ke hay hasta el objeto con clase .animado-lazy
            let alturaLazy = animado_lazy[i].offsetTop;
            if(alturaLazy - 600 < scrollTop) {
                animado_lazy[i].style.paddingTop = 0;
                flechita.style.opacity = 1;
            }else if(alturaLazy - 700 < scrollTop) {
                flechita.style.opacity = 0;
            }
        }
        let subir = document.querySelector(".subirArriba");
        if (scrollTop > 400) {
          subir.style.opacity = 1;
        } else if (scrollTop <= 400) {
          subir.style.opacity = 0;
        }
    }
    


window.addEventListener("scroll", lazyScroll);
