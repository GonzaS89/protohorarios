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
const selector2 = document.menu2.selector;

selector.addEventListener('click', function(){
    const opcionbase = selector[0]
    const florida = selector[1];
    const sanM = selector[2];
   


    if((selector.value == 'florida') && (florida.disabled == false)){
        selector2.addEventListener('click', function(){
            const opcionbase2 = selector2[0];
            const alderetes = selector2[1];
            const posse = selector2[2];

        if(selector2.value == 'alderetes'){

    let horariosFloAl = [4.40,5.35,6.1,6.25,6.4,6.5,7.25,7.4,7.5,8.45,9.2,9.5,10.3,11.3,12.3,12.4,13.15,14,15.5,15.5,16.2,16.5,17.5,18.1,18.3,19,20,21,22];/*Horarios desde Florida/Alderetes/San Miguel*/
    let horariosEnEnterosFloAl=[];
    console.log(horariosFloAl)
 
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();
    let horaEnEnteros = (hora * 60) + minutos;
    
/*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/

      for(let i=0 ; i < horariosFloAl.length ; i++){
               let elMasCercano; 
               let anteriorPasado;
               let horasEnEnteros=  (Math.trunc(horariosFloAl[i])  * 60);
                let minutosEnEnteros = ((horariosFloAl[i] - (Math.trunc(horariosFloAl[i])))*100);
                let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
              horariosEnEnterosFloAl.push(horaMinutosEnEnteros);

              const boton = document.getElementById('boton');

              boton.addEventListener('click',function(){

              

               /*Recorremos el array y buscamos coincidencias con el horario actual*/

              for(i = 0; i < horariosEnEnterosFloAl.length; i++){
                
                let difHoraHorarios = horaEnEnteros - horariosEnEnterosFloAl[i];
                let difHorariosHora = horariosEnEnterosFloAl[i] - horaEnEnteros;
                if(difHoraHorarios > 0){
                    anteriorPasado = difHoraHorarios;
                }
                document.resultados.pasado.value = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`
                
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
                document.resultados.futuro.value = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
           
               }         
            })       

        }
    }
    
        if(selector2.value == 'posse'){
            let horariosFloPo = [5.55,6.20,6.50,7.25,7.55,8.25,9.10,10.05,10.25,11,11.25,12,12.10,12.25,13.3,14,15,15.55,16.55,17.55,18.55,20,21.2,22.2]; /*Horarios desde Florida/Posse/San Miguel*/

          

            let horariosEnEnterosFloPo=[];

            let momentoActual = new Date();
            let hora = momentoActual.getHours();
            let minutos = momentoActual.getMinutes();
            let horaEnEnteros = (hora * 60) + minutos;

           
            
        /*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/
        
              for(let i=0 ; i < horariosFloPo.length ; i++){
                       let elMasCercano; 
                       let anteriorPasado;
                       let horasEnEnteros=  (Math.trunc(horariosFloPo[i])  * 60);
                        let minutosEnEnteros = ((horariosFloPo[i] - (Math.trunc(horariosFloPo[i])))*100);
                        let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
                      horariosEnEnterosFloPo.push(horaMinutosEnEnteros);

                      const boton = document.getElementById('boton');

                      boton.addEventListener('click',function(){
        
                       /*Recorremos el array y buscamos coincidencias con el horario actual*/
        
                      for(i = 0; i < horariosEnEnterosFloPo.length; i++){
                        
                        let difHoraHorarios = horaEnEnteros - horariosEnEnterosFloPo[i];
                        let difHorariosHora = horariosEnEnterosFloPo[i] - horaEnEnteros;
                        if(difHoraHorarios > 0){
                            anteriorPasado = difHoraHorarios;
                        }
                        document.resultados.pasado.value = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`
                        
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
                        document.resultados.futuro.value = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`

                        
                   
                       }           
                    })     
        
                }
        
        }
        })
}
    
})

    
    









