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

/* Funcion para determinar la localidad de posicion*/

const selector = document.menu.selector;
const boton = document.getElementById('boton');


selector.addEventListener('click', function(){
    const opcionbase = selector[0]
    const florida = selector[1];
    const sanM = selector[2];

    let horariosFlorida = [];
    let horariosSanMiguel = [];
    let listaCompletaFloAl = [];
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();
    let horaEnEnteros = (hora * 60) + minutos;
    let dia = momentoActual.getDay();
    let elMasCercano = 0;   
    let anteriorPasado;
    let listaDelDia;
    let horariosEnEnteros=[];
   

    if((selector.value == 'florida') && (florida.disabled == false)){
      
    const horariosLvFloAl = [4.40,5.35,6.1,6.25,6.4,6.5,7.25,7.4,7.5,8.45,9.2,9.5,10.3,11.3,12.3,12.4,13.15,14,15.5,15.5,16.2,16.5,17.5,18.1,18.3,19,20,21,22];/*Horarios de Lunes a Viernes desde Florida/Alderetes/San Miguel*/
    const horariosSFloAl = [4.40,5.45,6.1,6.25,6.5,7.18,7.40,7.50,8.45,9.2,10.3,11.40,12.40,13.15,14.50,15.50,16.50,17.5,19];/*Horarios de Sabados desde Florida/Alderetes/San Miguel*/
    const horariosDFloAl = [7.40,10.30,12.40,14.50,16.50,17.5,19.1]; /*Horarios de Domingo desde Florida/Alderetes/San Miguel*/
    listaCompletaFloAl.push(horariosDFloAl,horariosLvFloAl,horariosSFloAl);
 
    


    }
              boton.addEventListener('click',function(){

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
                // if(difHoraHorarios > 0){
                //     anteriorPasado = difHoraHorarios;
                // }
                // document.resultados.pasado.value = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
                // if(anteriorPasado >= 60){
                //     document.resultados.pasado.value = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`
                // }
                
                
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
                if(elMasCercano == 0){
                    document.resultados.alderete.value = 'No hay mas colectivos por hoy'
                }         
               else{
                document.resultados.alderete.value = `Por Alderetes, el proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
               }
                }
        }
    }) 


})

    
    









