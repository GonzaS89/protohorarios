document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    reloj();
};

function reloj(){

    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();
    let fecha = momentoActual.getDate();
    let dia = momentoActual.getDay()
    let mes = momentoActual.getMonth()

       if(minuto <=9){
        minuto = "0"+minuto
       } 
       if(segundo <= 9){
        segundo= "0"+segundo;
       }
       if(hora <= 9){
        hora= "0"+hora;
       }
       let horaImprimible = hora + " : " + minuto + " : " + segundo;  
    let f = document.getElementById('fecha')   
    let diasDeLaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let mesesDelAño = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    f.textContent = `${diasDeLaSemana[dia]}, ${fecha} de ${mesesDelAño[mes]} ~~ ${horaImprimible}`;
   
    /*MOVER RELOJ A TIEMPO ACTUAL*/
    setTimeout("reloj()",1000)
    /*                          */
}

let carros = [
    {
        "color" : "morado",
        "tipo" : "minivan"

    }
];


const horariosJsonFloAl = {

          "lunesAViernes": [
              {
                  "nombre":"Servicio de las 04:40",
                  "valor":4.4,
                  "recorrido":"Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 05:35",
                  "valor":5.35,
                  "recorrido":"Fortin - Alternativa"
              },
              {
                  "nombre":"Servicios de las 06:10",
                  "valor":6.10,
                  "recorrido":"Fortin - Banda del Rio Sali / Colonia 10 - Autopista"
              },
              {
                  "nombre":"Servicio de las 06:25",
                  "valor":6.25,
                  "recorrido":"Colonia 5 hasta Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 06:40",
                  "valor":6.4,
                  "recorrido":"B° La Cancha - Alternativa"
              },
              {
                  "nombre":"Servicio de las 06:50",
                  "valor":6.5,
                  "recorrido":"Colonia 4 - Fonda - Alternativa"
              },
              {
                  "nombre":"Servicios de las 07:20",
                  "valor":7.2,
                  "recorrido":"Colonia 4 - B° La Cancha - Autopista / Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 07:40",
                  "valor":7.4,
                  "recorrido":"Finca Mayo - Cochuchal - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicios de las 07:50",
                  "valor":7.5,
                  "recorrido":"Colonia 4 - B° La Cancha - Autopista"
              },
              {
                  "nombre":"Servicios de las 08:45",
                  "valor":8.45,
                  "recorrido":"Colonia 4 - B° La Cancha - Autopista/Alternativa"
              },
              {
                  "nombre":"Servicio de las 09:20",
                  "valor":9.2,
                  "recorrido":"Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 10:30",
                  "valor":10.3,
                  "recorrido":"Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 11:30",
                  "valor":11.30,
                  "recorrido":"Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicios de las 12:30",
                  "valor":12.3,
                  "recorrido":"Los Perez - Autopista / Fortin - Colonia 4 - Autopista"
              },
              {
                  "nombre":"Servicio de las 12:40",
                  "valor":12.4,
                  "recorrido":"Finca Mayo - Talar - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 13:15",
                  "valor":13.15,
                  "recorrido":"Colonia 4 - B° La Cancha - Autopista"
              },
              {
                  "nombre":"Servicio de las 14:00",
                  "valor":14,
                  "recorrido":"B° La Cancha - Cochuchal - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicios de las 14:50",
                  "valor":14.5,
                  "recorrido":"B° La Cancha - Alternativa/Banda del Rio Sali"
              },
              {
                  "nombre":"Servicios de las 15:50",
                  "valor":15.5,
                  "recorrido":"Fortin - Alternativa / Colonia 4 - B° La Cancha - Autopista"
              },
              {
                  "nombre":"Servicio de las 16:20",
                  "valor":16.2,
                  "recorrido":"La Marta - Colonia 4 - Autopista"
              },
              {
                  "nombre":"Servicios de las 16:50",
                  "valor":16.5,
                  "recorrido":"Colonia 4 - Autopista / Colonia 3 - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 17:50",
                  "valor":17.5,
                  "recorrido":"Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 18:10",
                  "valor":18.1,
                  "recorrido":"Colonia 4  - Autopista"
              },
              {
                  "nombre":"Servicio de las 18:30",
                  "valor":18.3,
                  "recorrido":"Fortin - Banda del Rio Sali"
              },
              {
                  "nombre":"Servicio de las 19:00",
                  "valor":19,
                  "recorrido":"La Marta - B° La Cancha - Banda del Rio Sali"
              }   
          ]
      }
  
  
  console.log(horariosJsonFloAl)    
/* Funcion para determinar la localidad de posicion*/

const selector = document.menu.selector;
const selector2 = document.menu2.selector2;

const boton = document.getElementById('boton');


selector.addEventListener('click', function(){
    const opcionbase = selector[0]
    const florida = selector[1];
    const sanM = selector[2];   
    boton.addEventListener('click',function(){
 
    let horariosFlorida = [];
    let horariosSanMiguel = [];
    let listaCompletaFloAl = [];
    let listaCompletaFloPo = []
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();
    let horaEnEnteros = (hora * 60) + minutos;
    let dia = momentoActual.getDay();
    let elMasCercano = 0;   
    let anteriorPasado;
    let listaDelDia;
    let horariosEnEnteros=[];
    let actual2 = document.getElementById('actual2');
    let futuro2 = document.getElementById('futuro2');
   

    if((selector.value == 'florida') && (florida.disabled == false)){
        const opcionbase2 = selector[0]
        const alderetes = selector[1];
        const posse = selector[2];  

        if((selector2.value == 'alderetes')&&(alderetes.disabled == false)){

            const horariosJson = {
                "horariosFloAl": [
                  {
                      "lunesAViernes": [
                          {
                              "nombre":"Servicio de las 04:40",
                              "valor":4.4,
                              "recorrido":"Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 05:35",
                              "valor":5.35,
                              "recorrido":"Fortin - Alternativa"
                          },
                          {
                              "nombre":"Servicios de las 06:10",
                              "valor":6.10,
                              "recorrido":"Fortin - Banda del Rio Sali / Colonia 10 - Autopista"
                          },
                          {
                              "nombre":"Servicio de las 06:25",
                              "valor":6.25,
                              "recorrido":"Colonia 5 hasta Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 06:40",
                              "valor":6.4,
                              "recorrido":"B° La Cancha - Alternativa"
                          },
                          {
                              "nombre":"Servicio de las 06:50",
                              "valor":6.5,
                              "recorrido":"Colonia 4 - Fonda - Alternativa"
                          },
                          {
                              "nombre":"Servicios de las 07:20",
                              "valor":7.2,
                              "recorrido":"Colonia 4 - B° La Cancha - Autopista / Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 07:40",
                              "valor":7.4,
                              "recorrido":"Finca Mayo - Cochuchal - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicios de las 07:50",
                              "valor":7.5,
                              "recorrido":"Colonia 4 - B° La Cancha - Autopista"
                          },
                          {
                              "nombre":"Servicios de las 08:45",
                              "valor":8.45,
                              "recorrido":"Colonia 4 - B° La Cancha - Autopista/Alternativa"
                          },
                          {
                              "nombre":"Servicio de las 09:20",
                              "valor":9.2,
                              "recorrido":"Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 10:30",
                              "valor":10.3,
                              "recorrido":"Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 11:30",
                              "valor":11.30,
                              "recorrido":"Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicios de las 12:30",
                              "valor":12.3,
                              "recorrido":"Los Perez - Autopista / Fortin - Colonia 4 - Autopista"
                          },
                          {
                              "nombre":"Servicio de las 12:40",
                              "valor":12.4,
                              "recorrido":"Finca Mayo - Talar - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 13:15",
                              "valor":13.15,
                              "recorrido":"Colonia 4 - B° La Cancha - Autopista"
                          },
                          {
                              "nombre":"Servicio de las 14:00",
                              "valor":14,
                              "recorrido":"B° La Cancha - Cochuchal - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicios de las 14:50",
                              "valor":14.5,
                              "recorrido":"B° La Cancha - Alternativa/Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicios de las 15:50",
                              "valor":15.5,
                              "recorrido":"Fortin - Alternativa / Colonia 4 - B° La Cancha - Autopista"
                          },
                          {
                              "nombre":"Servicio de las 16:20",
                              "valor":16.2,
                              "recorrido":"La Marta - Colonia 4 - Autopista"
                          },
                          {
                              "nombre":"Servicios de las 16:50",
                              "valor":16.5,
                              "recorrido":"Colonia 4 - Autopista / Colonia 3 - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 17:50",
                              "valor":17.5,
                              "recorrido":"Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 18:10",
                              "valor":18.1,
                              "recorrido":"Colonia 4  - Autopista"
                          },
                          {
                              "nombre":"Servicio de las 18:30",
                              "valor":18.3,
                              "recorrido":"Fortin - Banda del Rio Sali"
                          },
                          {
                              "nombre":"Servicio de las 19:00",
                              "valor":19,
                              "recorrido":"La Marta - B° La Cancha - Banda del Rio Sali"
                          }   
                      ]
                  }
              ]
              } 
              console.log(horariosJson)           
          
          
            

            const horariosLvFloAl = [4.40,5.35,6.1,6.25,6.4,6.5,7.25,7.4,7.5,8.45,9.2,9.5,10.3,11.3,12.3,12.4,13.15,14,15.5,16.2,16.5,17.5,18.1,18.3,19,20,21,22];/*Horarios de Lunes a Viernes desde Florida/Alderetes/San Miguel*/
            const horariosSFloAl = [4.40,5.45,6.1,6.25,6.5,7.18,7.40,7.50,8.45,9.2,10.3,11.40,12.40,13.15,14.50,15.50,16.50,17.5,19];/*Horarios de Sabados desde Florida/Alderetes/San Miguel*/
            const horariosDFloAl = [7.40,10.30,12.40,14.50,16.50,17.5,19.1]; /*Horarios de Domingo desde Florida/Alderetes/San Miguel*/
      
    listaCompletaFloAl.push(horariosDFloAl,horariosLvFloAl,horariosSFloAl);
 
/*Aqui definimos el array dependiendo el dia de la semana*/

if(dia == 0){
    listaDelDia = listaCompletaFloAl[0].slice(0,listaCompletaFloAl[0].length)

}
if(dia >= 1 && dia <=5){
    listaDelDia = listaCompletaFloAl[1].slice(0,listaCompletaFloAl[1].length);

}
if(dia > 5){
    listaDelDia = listaCompletaFloAl[2].slice(0,listaCompletaFloAl[2].length);

}

/*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/

              for(let i=0 ; i < listaDelDia.length ; i++){
              
               let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
                let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
                let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
              horariosEnEnteros.push(horaMinutosEnEnteros);

              

              
               /*Recorremos el array y buscamos coincidencias con el horario actual*/

              for(i = 0; i < horariosEnEnteros.length; i++){
                
                let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
                let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;
                if(difHoraHorarios > 0){
                    anteriorPasado = difHoraHorarios;
                    // document.resultados.actual.value = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
                    actual2.textContent = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
                }
                if(anteriorPasado >= 60){
                    // document.resultados.actual.value = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`
                    actual2.textContent = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`
                }
                
                
                if((difHoraHorarios < 0) && (difHorariosHora < 15)){
                    elMasCercano = difHorariosHora;
                }
                if((difHoraHorarios < 0) && (difHorariosHora < 30)){
                    elMasCercano = difHorariosHora;
                }
                if((difHoraHorarios < 0) && (difHorariosHora < 45)){
                    elMasCercano = difHorariosHora;    
                }
                if((difHoraHorarios < 0) && (difHorariosHora < 60)){
                    elMasCercano = difHorariosHora;    
                }
        }
    }
    // document.resultados.futuro.value = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
    futuro2.textContent = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
  
   
        }

        if((selector2.value == 'posse') && (posse.disabled == false)){

            const horariosLvFloPo = [4.50,5.5,6.25,6.5,7.25,7.55,8.25,9.05,9.55,10.25,10.55,11.25,11.55,12.4,13.25,13.55,14.55,15.55,16.55,17.55,18.55,19.25,19.55,20.55,21.2,22.2]
            const horariosSFloPo = [4.5,5.5,6.25,6.5,7.25,7.55,8.25,9.05,9.55,10.25,10.55,11.25,11.55,12.4,13.25,13.55,15,15.55,16.55,18.55,19.25,20.25,21.25,22.2]
            const horariosDFloPo = [4.5,5.5,6.5,7.55,8.1,8.55,9.55,10.55,11.55,12.55,13.55,15,15.55,16.55,17.55,18.55,19.25,20,20.55,22.2];
            listaCompletaFloPo.push(horariosDFloPo,horariosLvFloPo,horariosSFloPo);
 
            /*Aqui definimos el array dependiendo el dia de la semana*/
            
            if(dia == 0){
                listaDelDia = listaCompletaFloPo[0].slice(0,listaCompletaFloPo[0].length)
            
            }
            if(dia >= 1 && dia <=5){
                listaDelDia = listaCompletaFloPo[1].slice(0,listaCompletaFloPo[1].length);
            
            }
            if(dia > 5){
                listaDelDia = listaCompletaFloPo[2].slice(0,listaCompletaFloPo[2].length);
            
            }
            
            /*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/
            
                          for(let i=0 ; i < listaDelDia.length ; i++){
                          
                           let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
                            let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
                            let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
                          horariosEnEnteros.push(horaMinutosEnEnteros);
        
                           /*Recorremos el array y buscamos coincidencias con el horario actual*/
            
                          for(i = 0; i < horariosEnEnteros.length; i++){
                            
                            let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
                            let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;
                            if(difHoraHorarios > 0){
                                anteriorPasado = difHoraHorarios;
                                // document.resultados.actual.value = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
                                actual2.textContent = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
                            }
                            if(anteriorPasado >= 60){
                                // document.resultados.actual.value = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`;
                                actual2.textContent = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`;
                            }
                            if((difHoraHorarios < 0) && (difHorariosHora < 15)){
                                elMasCercano = difHorariosHora;
                            }
                            if((difHoraHorarios < 0) && (difHorariosHora < 30)){
                                elMasCercano = difHorariosHora;
                            }
                            if((difHoraHorarios < 0) && (difHorariosHora < 45)){
                                elMasCercano = difHorariosHora;    
                            }
                            if((difHoraHorarios < 0) && (difHorariosHora < 60)){
                                elMasCercano = difHorariosHora;    
                            }
                    }
                }
                // document.resultados.futuro.value = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
                futuro2.textContent = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
        }
}
    
})  

})


    
    









