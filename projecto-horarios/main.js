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
    document.form_reloj.reloj.value = horaImprimible;
    /*MOVER RELOJ A TIEMPO ACTUAL*/
    setTimeout("reloj()",1000)
    /*                          */
}

/* Funcion para determinar la localidad de posicion*/

const selector = document.menu.selector;

selector.addEventListener('click', function(){
    const florida = selector[1];
    const sanM = selector[2];

    if((selector.value == 'florida') && (florida.disabled == false)){
       

    let horariosFloPo = [5.55,6.20,6.50,7.25,7.55,8.25,9.10,10.05,10.25,11,11.25,12,12.10,12.25,13.3,14,15,15.55,16.55,17.55,18.55,20,21.2,22.2]; /*Horarios desde Florida/Posse/San Miguel*/
    const horariosFloAl = [4.40,5.35,6.1,6.25,6.4,6.5,7.25,7.4,7.5,8.45,9.2,9.5,10.3,11.3,12.3,12.4,13.15,14,15.5,15.5,16.2,16.5,17.5,18.1,18.3,19];/*Horarios desde Florida/Alderetes/San Miguel*/
    let horariosEnEnterosFloAl= [];
    let horariosEnEnterosFloPo= [];
   
    

        /* Funcion para  comparar la hora con los horarios */
    const boton = document.getElementById('boton')

    boton.addEventListener('click', function(){
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();
    let horaEnEnteros = (hora * 60) + minutos;
    

/*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/

    for(horario of horariosFloAl){
      horariosEnEnterosFloAl.push(horario)
      console.log(horariosEnEnterosFloAl[1])
    }
    for(horario of horariosFloPo){
            let horaEnEnteros=  (Math.trunc(horario)  * 60);
            let minutosEnEnteros = ((horario - (Math.trunc(horario)))*100);
            let horaMinutosEnEnteros = horaEnEnteros + minutosEnEnteros;
            horariosEnEnterosFloPo.push(horaMinutosEnEnteros)
    }
    /* ---------------------------------------------------------------------*/
    
    /*Recorremos el array y buscamos coincidencias con el horario actual*/

    for(horarioEnEnterosFloAl of horariosEnEnterosFloAl){
        let difHoraHorario = horaEnEnteros - horarioEnEnterosFloAl;
        let difHorarioHora = horarioEnEnterosFloAl - horaEnEnteros;
        let listaHorarios = [];
        listaHorarios.push(horariosEnEnterosFloAl);
        console.log(listaHorarios)
    }
})
    }
})

    
    









