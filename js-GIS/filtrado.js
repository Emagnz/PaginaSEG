
let claseTituloIntegrantes = document.querySelector(".titulo-integrantes");
let claseTituloDirector = document.querySelector(".titulo-director");

function filtrarCartas(clase) {
  
  contenedorPrincipalDeDirector.innerHTML = "";
  contenedorPrincipalDeDirectoresDeLinea.innerHTML = "";
  contenedorPrincipalDeIntegrantes.innerHTML = "";

  let filtradosIntegrantes;
  let filtradosDirectores;
  let filtradosDirector;

  if(clase==="todas"){
     filtradosIntegrantes=todos_los_integrantes;
     filtradosDirectores=todos_los_directores;
    filtradosDirector=director;
  }else{


    filtradosIntegrantes= todos_los_integrantes.filter(p=> p.clase_rol===clase);
    filtradosDirectores=todos_los_directores.filter(p=> p.clase_rol===clase);
    filtradosDirector=director.filter(p => p.clase_rol===clase);

  }

  
  

 
  CrearCartaIntegrantes(filtradosIntegrantes);
  CrearCartaDirectores(filtradosDirectores);
  CrearCartaDirector(filtradosDirector);
  

 
  AOS.refreshHard(); /* se actualizan las animaciones cuando se filtra */
}


let filtroBoton=document.querySelectorAll(".filtro-btn");

filtroBoton.forEach(boton => {

  boton.addEventListener("click", () => {

    let id = boton.id;
    let clase = "";
    

    switch (id) {
      case "todos":
        clase = "todas";
        claseTituloIntegrantes.style.display="block";
        claseTituloDirector.style.display="block";
        break;
      case "director":
        clase = "director";
        claseTituloIntegrantes.style.display="none";
        claseTituloDirector.style.display="block";
       
        break;
      case "investigador":
        clase = "investigador";
        claseTituloDirector.style.display="none";
        claseTituloIntegrantes.style.display="block";
       
        break;
      case "estudiante":
        clase = "estudiante";
        claseTituloDirector.style.display="none";
        claseTituloIntegrantes.style.display="block";
       
        break;
      case "asesorExterno":
        clase = "asesor-externo";
        claseTituloDirector.style.display="none";
        claseTituloIntegrantes.style.display="block";
     
        break;
    }

    filtrarCartas(clase);
  });
});
  

  




