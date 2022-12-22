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
    let elMasCercano=3000;
    let anteriorPasado = 3000;
    let listaDelDia = []
    let horariosEnEnteros=[];
    let listaDiferencias = []
    let listaDiferencias2 = [];
    let actual1 = document.getElementById('actual1');
    let actual2 = document.getElementById('actual2');
    let actual3 = document.getElementById('actual3');
    let futuro1 = document.getElementById('futuro1');
    let futuro2 = document.getElementById('futuro2');
    let futuro3 = document.getElementById('futuro3');
   

    if((selector.value == 'florida') && (florida.disabled == false)){
        const opcionbase2 = selector[0]
        const alderetes = selector[1];
        const posse = selector[2];  


        if((selector2.value == 'alderetes')&&(alderetes.disabled == false)){

            const horariosJsonFloAl = [

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
                    "recorrido":"1) Fortin - Banda del Rio Sali || 2) Colonia 10 - Autopista"
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
                    "recorrido":"1) Colonia 4 - B° La Cancha - Autopista || 2) Fortin - Banda del Rio Sali"
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
                    "recorrido":"1) Colonia 4 - B° La Cancha - Autopista || 2) Alternativa"
                },
                {
                    "nombre":"Servicio de las 09:20",
                    "valor":9.2,
                    "recorrido":"Fortin - Banda del Rio Sali"
                },
                {
                    "nombre":"Servicio de las 10:30",
                    "valor":10.30,
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
                    "recorrido":"1) Los Perez - Autopista || 2) Fortin - Colonia 4 - Autopista"
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
                    "recorrido":"1) Fortin - Alternativa || 2) Colonia 4 - B° La Cancha - Autopista"
                },
                {
                    "nombre":"Servicio de las 16:20",
                    "valor":16.2,
                    "recorrido":"La Marta - Colonia 4 - Autopista"
                },
                {
                    "nombre":"Servicios de las 16:50",
                    "valor":16.5,
                    "recorrido":"1) Colonia 4 - Autopista || 2) Colonia 3 - Banda del Rio Sali"
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
            for (i=0; i < horariosJsonFloAl.length; i++){
                listaDelDia.push(horariosJsonFloAl[i].valor)
            }
         
            

    //         const horariosLvFloAl = [4.40,5.35,6.1,6.25,6.4,6.5,7.25,7.4,7.5,8.45,9.2,9.5,10.3,11.3,12.3,12.4,13.15,14,15.5,16.2,16.5,17.5,18.1,18.3,19,20,21,22];/*Horarios de Lunes a Viernes desde Florida/Alderetes/San Miguel*/
    //         const horariosSFloAl = [4.40,5.45,6.1,6.25,6.5,7.18,7.40,7.50,8.45,9.2,10.3,11.40,12.40,13.15,14.50,15.50,16.50,17.5,19];/*Horarios de Sabados desde Florida/Alderetes/San Miguel*/
    //         const horariosDFloAl = [7.40,10.30,12.40,14.50,16.50,17.5,19.1]; /*Horarios de Domingo desde Florida/Alderetes/San Miguel*/
      
    // listaCompletaFloAl.push(horariosDFloAl,horariosLvFloAl,horariosSFloAl);
 
/*Aqui definimos el array dependiendo el dia de la semana*/

// if(dia == 0){
//     listaDelDia = listaCompletaFloAl[0].slice(0,listaCompletaFloAl[0].length)

// }
// if(dia >= 1 && dia <=5){
//     listaDelDia = listaCompletaFloAl[1].slice(0,listaCompletaFloAl[1].length);

// }
// if(dia > 5){
//     listaDelDia = listaCompletaFloAl[2].slice(0,listaCompletaFloAl[2].length);

// }

/*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/

              for(let i=0 ; i < listaDelDia.length ; i++){
              
               let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
                let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
                let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
              horariosEnEnteros.push(horaMinutosEnEnteros);
              }

              
               /*Recorremos el array y buscamos coincidencias con el horario actual*/

              for(i = 0; i < horariosEnEnteros.length; i++){
                
                       let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
                        listaDiferencias.push(difHoraHorarios); 
              }
                       for(i=0; i < listaDiferencias.length; i++){

                            if(listaDiferencias[i] > 0){
                            anteriorPasado = Math.min(anteriorPasado,listaDiferencias[i]);
                            actual1.textContent = `${horariosJsonFloAl[listaDiferencias.indexOf(anteriorPasado)].nombre}`
                            
                            if(anteriorPasado <= 15){
                                actual2.textContent = `Inició su recorrido hace ${Math.ceil(anteriorPasado)} minutos`
                            }
                            else{
                                actual2.textContent = `Pasó hace hace ${Math.ceil(anteriorPasado)} minutos`
                            }
                                
                              actual3.textContent = `Recorrido : ${horariosJsonFloAl[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                            }
                       }

                       for(i = 0; i < horariosEnEnteros.length; i++){
                
                        let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;;
                         listaDiferencias2.push(difHorariosHora); 
               }
                                
            
                        for(i=0; i < listaDiferencias2.length; i++){
                            if(listaDiferencias2[i] >0){
                            elMasCercano = Math.min(elMasCercano,listaDiferencias2[i]);
                           
                            futuro1.textContent = `${horariosJsonFloAl[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
                            if(horariosJsonFloAl[listaDiferencias2.indexOf(elMasCercano)].nombre.indexOf("Servicios")){
                                futuro2.textContent = `Inician sus recorridos dentro de ${Math.floor(elMasCercano)} minutos`;
                            }else{
                                futuro2.textContent = `Inicia su recorrido dentro de ${Math.floor(elMasCercano)} minutos`;
                            }
                            
                        futuro2.textContent = `Inicia su recorrido dentro de ${Math.floor(elMasCercano)} minutos`;
                        
                        futuro3.textContent = `Recorrido : ${horariosJsonFloAl[listaDiferencias2.indexOf(elMasCercano)].recorrido}`;
                        }           
                    }
                
            
                    }
        

        if((selector2.value == 'posse') && (posse.disabled == false)){

        const horariosJsonFloPo = [

            {
                "nombre":"Servicio de las 05:50",
                "valor":5.5,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 06:20",
                "valor":6.2,
                "recorrido":"B° La Cancha"
            },
           
            {
                "nombre":"Servicio de las 06:50",
                "valor":6.5,
                "recorrido":"B° La Cancha"
            },
           
            {
                "nombre":"Servicio de las 07:25",
                "valor":7.25,
                "recorrido":"B° La Cancha"
            },
           
            {
                "nombre":"Servicio de las 07:55",
                "valor":7.55,
                "recorrido":"Fortin"
            },
           
            {
                "nombre":"Servicio de las 08:25",
                "valor":8.25,
                "recorrido":"B° La Cancha - Banda del Rio Sali"
            },
           
            {
                "nombre":"Servicio de las 09:10",
                "valor":9.1,
                "recorrido":"Esquina de Lastra"
            },
           
            {
                "nombre":"Servicio de las 10:05",
                "valor":10.05,
                "recorrido":"B° La Cancha - Banda del Rio Sali"
            },
           
            {
                "nombre":"Servicio de las 10:25",
                "valor":10.25,
                "recorrido":"B° La Cancha - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 11:00",
                "valor":11,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 11:25",
                "valor":11.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 12:00",
                "valor":12,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 12:10",
                "valor":12.10,
                "recorrido":"Esquina de Lastra"
            },
            {
                "nombre":"Servicio de las 12:25",
                "valor":12.25,
                "recorrido":"Fortin hasta Llona"
            },
            {
                "nombre":"Servicio de las 13:30",
                "valor":13.3,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 14:00",
                "valor":14,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 15:00",
                "valor":15,
                "recorrido":"Esquina de Lastra"
            },
            {
                "nombre":"Servicio de las 15:55",
                "valor":15.55,
                "recorrido":"Fortin"
            },
            {
                "nombre":"Servicio de las 16:55",
                "valor":16.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 17:55",
                "valor":17.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 18:55",
                "valor":18.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 20:00",
                "valor":20,
                "recorrido":"Colonia - B° La Cancha"
            },
            {
                "nombre":"Servicio de las 20:25",
                "valor":20.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 21:20",
                "valor":21.2,
                "recorrido":"Fortin - B° La Cancha"
            },
            {
                "nombre":"Servicio de las 22:20",
                "valor":22.20,
                "recorrido":"B° La Cancha"
            },
           
           
        ]
        for (i=0; i < horariosJsonFloPo.length; i++){
            listaDelDia.push(horariosJsonFloPo[i].valor)
        }
        
        for(let i=0 ; i < listaDelDia.length ; i++){
              
            let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
             let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
             let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
           horariosEnEnteros.push(horaMinutosEnEnteros);
           }

           for(i = 0; i < horariosEnEnteros.length; i++){
                
            let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
             listaDiferencias.push(difHoraHorarios); 
   }
            for(i=0; i < listaDiferencias.length; i++){

                 if(listaDiferencias[i] > 0){
                 anteriorPasado = Math.min(anteriorPasado,listaDiferencias[i]);
                 actual1.textContent = `${horariosJsonFloPo[listaDiferencias.indexOf(anteriorPasado)].nombre}`
                    if(anteriorPasado <=15){
                        actual2.textContent = `Inició su recorrido hace ${Math.ceil(anteriorPasado)} minutos`
                    }
                    else{
                        actual2.textContent = `Pasó hace ${Math.ceil(anteriorPasado)} minutos`
                    }
                   actual3.textContent = `Inicio de recorrido : ${horariosJsonFloPo[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                 }
            }

            for(i = 0; i < horariosEnEnteros.length; i++){
                
                let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;;
                 listaDiferencias2.push(difHorariosHora); 
       }
                       
    
                for(i=0; i < listaDiferencias2.length; i++){
                    if(listaDiferencias2[i] >0){
                    elMasCercano = Math.min(elMasCercano,listaDiferencias2[i]);
                    futuro1.textContent = `${horariosJsonFloPo[listaDiferencias2.indexOf(elMasCercano)].nombre}`;
                    futuro2.textContent = `Inicia su recorrido dentro de ${Math.floor(elMasCercano)} minutos`;
                            
                    futuro3.textContent = `Inicio de recorrido : ${horariosJsonFloPo[listaDiferencias2.indexOf(elMasCercano)].recorrido}`;
                    }                             
                }



 
    //         /*Aqui definimos el array dependiendo el dia de la semana*/
            
    //         if(dia == 0){
    //             listaDelDia = listaCompletaFloPo[0].slice(0,listaCompletaFloPo[0].length)
            
    //         }
    //         if(dia >= 1 && dia <=5){
    //             listaDelDia = listaCompletaFloPo[1].slice(0,listaCompletaFloPo[1].length);
            
    //         }
    //         if(dia > 5){
    //             listaDelDia = listaCompletaFloPo[2].slice(0,listaCompletaFloPo[2].length);
            
    //         }
            
    //         /*/Convertimos los horarios en enteros y los mandamos a un nuevo array"*/
            
    //                       for(let i=0 ; i < listaDelDia.length ; i++){
                          
    //                        let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
    //                         let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
    //                         let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
    //                       horariosEnEnteros.push(horaMinutosEnEnteros);
        
    //                        /*Recorremos el array y buscamos coincidencias con el horario actual*/
            
    //                       for(i = 0; i < horariosEnEnteros.length; i++){
                            
    //                         let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
    //                         let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;
    //                         if(difHoraHorarios > 0){
    //                             anteriorPasado = difHoraHorarios;
    //                             // document.resultados.actual.value = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
    //                             actual2.textContent = `El colectivo pasó hace ${Math.ceil(anteriorPasado)} minutos`;
    //                         }
    //                         if(anteriorPasado >= 60){
    //                             // document.resultados.actual.value = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`;
    //                             actual2.textContent = `El colectivo pasó hace 1 hora y ${Math.ceil(anteriorPasado % 60)} minutos`;
    //                         }
    //                         if((difHoraHorarios < 0) && (difHorariosHora < 15)){
    //                             elMasCercano = difHorariosHora;
    //                         }
    //                         if((difHoraHorarios < 0) && (difHorariosHora < 30)){
    //                             elMasCercano = difHorariosHora;
    //                         }
    //                         if((difHoraHorarios < 0) && (difHorariosHora < 45)){
    //                             elMasCercano = difHorariosHora;    
    //                         }
    //                         if((difHoraHorarios < 0) && (difHorariosHora < 60)){
    //                             elMasCercano = difHorariosHora;    
    //                         }
    //                 }
    //             }
    //             // document.resultados.futuro.value = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
    //             futuro2.textContent = `El proximo colectivo viene en ${Math.ceil(elMasCercano)} minutos`
    //     }

    }

}

    if((selector.value == 'sanM') && (sanM.disabled == false)){
        const opcionbase2 = selector[0]
        const alderetes = selector[1];
        const posse = selector[2];  


        if((selector2.value == 'alderetes')&&(alderetes.disabled == false)){

        const horariosJsonSMAl = [

        {
            "nombre":"Servicio de las 05:20",
            "valor":5.2,
            "recorrido":"Terminal - Autopista - B° La Cancha"
        },
        {
            "nombre":"Servicio de las 06:15",
            "valor":6.15,
            "recorrido":"Terminal - Autopista - Los Perez"
        },
        {
            "nombre":"Servicio de las 06:25",
            "valor":6.25,
            "recorrido":"Terminal - Banda del Rio Sali - Mayo"
        },
        {
            "nombre":"Servicio de las 07:15",
            "valor":7.15,
            "recorrido":"Terminal - Banda del Rio Sali - La Marta"
        },
        {
            "nombre":"Servicio de las 08:00",
            "valor":8,
            "recorrido":"Terminal - Banda del Rio Sali - Cochuchal"
        },
        {
            "nombre":"Servicio de las 08:35",
            "valor":8.35,
            "recorrido":"Terminal - Banda del Rio Sali - Fortin"
        },
        {
            "nombre":"Servicio de las 09.00",
            "valor":9,
            "recorrido":"Terminal - Autopista - B° La Cancha - Colonia 4 "
        },
        {
            "nombre":"Servicio de las 09:45",
            "valor":9.45,
            "recorrido":"Terminal - Banda del Rio Sali - Fortin"
        },
        {
            "nombre":"Servicio de las 10:45",
            "valor":10.45,
            "recorrido":"Terminal - Banda del Rio Sali - Fortin"
        },
        {
            "nombre":"Servicio de las 11:15",
            "valor":11.15,
            "recorrido":"Terminal - Autopista - B° La Cancha - Los Perez"
        },
        {
            "nombre":"Servicio de las 11:40",
            "valor":11.4,
            "recorrido":"Terminal - Autopista - Cochuchal - Mayo"
        },
        {
            "nombre":"Servicio de las 12:15",
            "valor":12.15,
            "recorrido":"Terminal - Alternativa - B° La Cancha"
        },
        {
            "nombre":"Servicio de las 12:20",
            "valor":12.2,
            "recorrido":"Terminal - Autopista - B° La Cancha - Colonia 4"
        },
        {
            "nombre":"Servicio de las 12:45",
            "valor":12.45,
            "recorrido":"Terminal - Banda del Rio Sali - Colonia 3"
        },
        {
            "nombre":"Servicio de las 13:15",
            "valor":13.15,
            "recorrido":"Terminal - Banda del Rio Sali - Cochuchal - Colonia 4"
        },
        {
            "nombre":"Servicio de las 13:30",
            "valor":13.3,
            "recorrido":"Terminal - Autopista - B° La Cancha - La Marta"
        },
        {
            "nombre":"Servicio de las 14:00",
            "valor":14,
            "recorrido":"Terminal - Banda del Rio Sali - B° La Cancha"
        },
        {
            "nombre":"Servicios de las 14:50",
            "valor":14.5,
            "recorrido":"1) Terminal - Banda del Rio Sali || 2)Alternativa - B° La Cancha - Colonia 4"
        },
        {
            "nombre":"Servicios de las 15:50",
            "valor":15.5,
            "recorrido":"1) Terminal - Alternativa Colonia 4 || 2) Banda del Rio Sali - Colonia 3"
        },
        {
            "nombre":"Servicio de las 16:50",
            "valor":16.5,
            "recorrido":"Terminal - Banda del Rio Sali - Cochuchal - Fortin"
        },
        {
            "nombre":"Servicio de 17:45",
            "valor":17.45,
            "recorrido":"Terminal - Banda del Rio Sali - B° La Cancha"
        },
        {
            "nombre":"Servicio de las 18:20",
            "valor":18.2,
            "recorrido":"Terminal - Alternativa - B° La Cancha - Colonia 4"
        },
        {
            "nombre":"Servicio de las 18:30",
            "valor":18.3,
            "recorrido":"Terminal - Banda del Rio Sali - Colonia 4"
        },
        {
            "nombre":"Servicio de las 19:00",
            "valor":19,
            "recorrido":"Terminal - Banda del Rio Sali - Colonia 4"
        },
        {
            "nombre":"Servicios de las 19:45",
            "valor":19.45,
            "recorrido":"1) Terminal - Alternativa - Colonia 4 || 2)Banda del Rio Sali - Mayo"
        },
        {
            "nombre":"Servicio de las 20:20",
            "valor":20.2,
            "recorrido":"Terminal - Banda del Rio Sali - Fortin"
        },
        {
            "nombre":"Servicio de las 21:15",
            "valor":21.15,
            "recorrido":"Terminal - Autopista - B° La Cancha"
        }
        
        ]
        for (i=0; i < horariosJsonSMAl.length; i++){
            listaDelDia.push(horariosJsonSMAl[i].valor)
        }

    
    // Convertimos los horarios en enteros y los mandamos a un nuevo array

              for(let i=0 ; i < listaDelDia.length ; i++){
              
               let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
                let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
                let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
              horariosEnEnteros.push(horaMinutosEnEnteros);
              }

              
               /*Recorremos el array y buscamos coincidencias con el horario actual*/

              for(i = 0; i < horariosEnEnteros.length; i++){
                
                       let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
                        listaDiferencias.push(difHoraHorarios); 
              }
                       for(i=0; i < listaDiferencias.length; i++){

                            if(listaDiferencias[i] > 0){
                            anteriorPasado = Math.min(anteriorPasado,listaDiferencias[i]);
                            actual1.textContent = `${horariosJsonSMAl[listaDiferencias.indexOf(anteriorPasado)].nombre}`
                        
                                actual2.textContent = `Salió de terminal hace ${Math.ceil(anteriorPasado)} minutos`
                            
                                
                              actual3.textContent = `Recorrido : ${horariosJsonSMAl[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                            }
                       }

                       for(i = 0; i < horariosEnEnteros.length; i++){
                
                        let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;;
                         listaDiferencias2.push(difHorariosHora); 
               }
                                
            
                        for(i=0; i < listaDiferencias2.length; i++){
                            if(listaDiferencias2[i] >0){
                            elMasCercano = Math.min(elMasCercano,listaDiferencias2[i]);
                           
                            futuro1.textContent = `${horariosJsonSMAl[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
                            if(horariosJsonSMAl[listaDiferencias2.indexOf(elMasCercano)].nombre.indexOf("Servicios")){
                                futuro2.textContent = `Inician sus recorridos dentro de ${Math.floor(elMasCercano)} minutos`;
                            }else{
                                futuro2.textContent = `Sale dentro de ${Math.floor(elMasCercano)} minutos`;
                            }
                            
                        futuro2.textContent = `Sale de terminal dentro de ${Math.floor(elMasCercano)} minutos`;
                        
                        futuro3.textContent = `Recorrido : ${horariosJsonSMAl[listaDiferencias2.indexOf(elMasCercano)].recorrido}`;
                        }           
                    }
                }

                
        if((selector2.value == 'posse') && (posse.disabled == false)){
        
            const horariosJsonSMPo = [
                {
                    "nombre":"Servicio de las 06:00",
                    "valor":6,
                    "recorrido":"Terminal - Colonia 4"
                },
                {
                    "nombre":"Servicio de las 06:40",
                    "valor":6.1,
                    "recorrido":"Terminal - b° La Cancha"
                },
                {
                    "nombre":"Servicio de las 07:00",
                    "valor":7,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 08:15",
                    "valor":8.15,
                    "recorrido":"Terminal - Esquina Lastra"
                },
                {
                    "nombre":"Servicio de las 09:00",
                    "valor":9,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 09:30",
                    "valor":9.30,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 10:00",
                    "valor":10,
                    "recorrido":"Terminal - Colonia 4"
                },
                {
                    "nombre":"Servicio de las 10:30",
                    "valor":10.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 11:00",
                    "valor":11,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 11:20",
                    "valor":11.2,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 11:45",
                    "valor":11.45,
                    "recorrido":"Terminal - Esquina Lastra"
                },
                {
                    "nombre":"Servicio de las 12:30",
                    "valor":12.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 12:40",
                    "valor":12.4,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 13:00",
                    "valor":13,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 13:30",
                    "valor":13.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 14:00",
                    "valor":14,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 14:15",
                    "valor":14.15,
                    "recorrido":"Terminal - Esquina Lastra"
                },
                {
                    "nombre":"Servicio de las 15:00",
                    "valor":15,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 16:00",
                    "valor":16,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 17:00",
                    "valor":17,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 17:10",
                    "valor":17.1,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 17:30",
                    "valor":17.3,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 18:00",
                    "valor":18,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 16:00",
                    "valor":16,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 18:30",
                    "valor":18.3,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 19:10",
                    "valor":19.1,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 19:30",
                    "valor":19.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 20:00",
                    "valor":20,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 20:30",
                    "valor":20.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 21:00",
                    "valor":21,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 21:30",
                    "valor":21.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 22:00",
                    "valor":22.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 22:30",
                    "valor":22.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 23:30",
                    "valor":23.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 00:30",
                    "valor":24.3,
                    "recorrido":"Terminal - B° La Cancha"
                }
                ]
                for (i=0; i < horariosJsonSMPo.length; i++){
                    listaDelDia.push(horariosJsonSMPo[i].valor)
                }
                for(let i=0 ; i < listaDelDia.length ; i++){
              
                    let horasEnEnteros=  (Math.trunc(listaDelDia[i])  * 60);
                     let minutosEnEnteros = ((listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100);
                     let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
                   horariosEnEnteros.push(horaMinutosEnEnteros);
                   }
        
                   for(i = 0; i < horariosEnEnteros.length; i++){
                        
                    let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
                     listaDiferencias.push(difHoraHorarios); 
           }
                    for(i=0; i < listaDiferencias.length; i++){
        
                         if(listaDiferencias[i] > 0){
                         anteriorPasado = Math.min(anteriorPasado,listaDiferencias[i]);
                         actual1.textContent = `${horariosJsonSMPo[listaDiferencias.indexOf(anteriorPasado)].nombre}`
                            if(anteriorPasado <=15){
                                actual2.textContent = `Salió de terminal hace ${Math.ceil(anteriorPasado)} minutos`
                            }
                           
                           actual3.textContent = `Inicio de recorrido : ${horariosJsonSMPo[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                         }
                    }
        
                    for(i = 0; i < horariosEnEnteros.length; i++){
                        
                        let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;;
                         listaDiferencias2.push(difHorariosHora); 
               }
                               
            
                        for(i=0; i < listaDiferencias2.length; i++){
                            if(listaDiferencias2[i] >0){
                            elMasCercano = Math.min(elMasCercano,listaDiferencias2[i]);
                            futuro1.textContent = `${horariosJsonSMPo[listaDiferencias2.indexOf(elMasCercano)].nombre}`;
                            futuro2.textContent = `Sale de la terminal dentro de ${Math.floor(elMasCercano)} minutos`;
                                    
                            futuro3.textContent = `Inicio de recorrido : ${horariosJsonSMPo[listaDiferencias2.indexOf(elMasCercano)].recorrido}`;
                            }                             
                        }


        }

            }

    
})  

})


    
    








