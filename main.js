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
    let valorSelecionado; 
    let valorSelecionado2;
    let valores = [];
    let valores2= []
    let posicion;
    let posicion2;

   
    boton.addEventListener('click',function(){

        // Definimos la posicion del selector 1

        for(opcion of selector){
            if(opcion.selected && opcion.disabled == false){
                   valorSelecionado = opcion
                }
        }
        for(i=0; i < selector.length;i++){
         valores.push(selector[i])
        }
      
        for(i=0; i< valores.length;i++){
            posicion=valores.indexOf(valorSelecionado)
        }

        // Definimos la posicion del selector 2
       

        for(opcion of selector2){
            if(opcion.selected && opcion.disabled == false){
                   valorSelecionado2 = opcion
                }
        }
        for(i=0; i < selector2.length;i++){
         valores2.push(selector2[i])
        }
      
        for(i=0; i< valores2.length;i++){
            posicion2=valores2.indexOf(valorSelecionado2)
        }
      

        // Definimos las variables globales
        

    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();
    let horaEnEnteros = (hora * 60) + minutos;
    let dia = momentoActual.getDay();
    let elMasCercano=3000;
    let anteriorPasado = 3000;
    let diaRango = []
    let localidad = [];
    let camino = [];
    let listaDelDia = [];
    let horariosEnEnteros=[];
    let listaDiferencias = []
    let listaDiferencias2 = [];
    let actual1 = document.getElementById('actual1');
    let actual2 = document.getElementById('actual2');
    let actual3 = document.getElementById('actual3');
    let futuro1 = document.getElementById('futuro1');
    let futuro2 = document.getElementById('futuro2');
    let futuro3 = document.getElementById('futuro3');
   
   

        const horariosLvFloAl = [

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
                "recorrido":"1) B° La Cancha - Alternativa || 2)Banda del Rio Sali"
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
            },
            {
                "nombre":"Servicio de las 21:15",
                "valor":21.15,
                "recorrido":"El Fortin / B° La Cancha - Banda del Rio Sali"
            }
           
        ]
        const horariosSFloAl = [
            {
                "nombre":"Servicio de las 04:40",
                "valor":4.4,
                "recorrido":"Fortin - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 05:45",
                "valor":5.45,
                "recorrido":"Fortin - Autopista"
            },
            {
                "nombre":"Servicio de las 06:10",
                "valor":6.10,
                "recorrido":"Colonia 10 - B° La Cancha - Autopista"
            },
            {
                "nombre":"Servicio de las 06:25",
                "valor":6.25,
                "recorrido":"Colonia 5 Florida - Fortin"
            },
            {
                "nombre":"Servicio de las 06:50",
                "valor":6.5,
                "recorrido":"Colonia 4 - B° La Cancha - Alternativa"
            },
            {
                "nombre":"Servicio de las 07:18",
                "valor":7.18,
                "recorrido":"Colonia 4 - B° La Cancha - Autopista"
            },
            {
                "nombre":"Servicio de las 07:40",
                "valor":7.4,
                "recorrido":"Finca Mayo - Talar - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 07:50",
                "valor":7.5,
                "recorrido":"Colonia 4 - B° La Cancha - Autopista"
            },
            {
                "nombre":"Servicio de las 08:45",
                "valor":8.45,
                "recorrido":"Colonia 4 - B° La Cancha - Banda del Rio Sali"
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
                "nombre":"Servicio de las 11:40",
                "valor":11.40,
                "recorrido":"Fortin - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 12:40",
                "valor":12.4,
                "recorrido":"Finca Mayo - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 13:15",
                "valor":13.15,
                "recorrido":"Colonia 4 - B° La Cancha - Autopista"
            },
            {
                "nombre":"Servicio de las 14:50",
                "valor":14.5,
                "recorrido":"B° La Cancha - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 15:50",
                "valor":15.5,
                "recorrido":"Colonia 4 - B° La Cancha - Autopista"
            },
            {
                "nombre":"Servicio de las 16:50",
                "valor":16.5,
                "recorrido":"Colonia 3 - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 17:50",
                "valor":17.5,
                "recorrido":"Fortin - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 19:00",
                "valor":19,
                "recorrido":"La Marta - B° La Cancha - Banda del Rio Sali"
            }
        ]
        const horariosDFloAl = [

            {
                "nombre":"Servicio de las 07:40",
                "valor":7.4,
                "recorrido":"Finca Mayo - Talar - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 10:30",
                "valor":10.30,
                "recorrido":"Fortin - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 12:40",
                "valor":12.4,
                "recorrido":"Finca Mayo - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 14:50",
                "valor":14.5,
                "recorrido":"B° La Cancha - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 16:50",
                "valor":16.5,
                "recorrido":"Colonia 3 - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 17:50",
                "valor":17.5,
                "recorrido":"Fortin - Banda del Rio Sali"
            },
            {
                "nombre":"Servicio de las 19:10",
                "valor":19.1,
                "recorrido":"Colonia 10 - Colonia 3 - B° La Cancha - Banda del Rio Sali"
            }
        ]
        const horariosLvFloPo = [

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
        const horariosSFloPo = [
            {
                "nombre":"Servicio de las 04:50",
                "valor":4.5,
                "recorrido":"B° La Cancha"
            },
            
            {
                "nombre":"Servicio de las 05:50",
                "valor":5.5,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 06:25",
                "valor":6.25,
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
                "recorrido":"B° La Cancha"
            },
           
            {
                "nombre":"Servicio de las 09:05",
                "valor":9.05,
                "recorrido":"B° La Cancha"
            },
           
            {
                "nombre":"Servicio de las 09:55",
                "valor":9.55,
                "recorrido":"B° La Cancha"
            },
           
            {
                "nombre":"Servicio de las 10:25",
                "valor":10.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 10:55",
                "valor":10.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 11:25",
                "valor":11.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 11:55",
                "valor":11.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 12:40",
                "valor":12.40,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 12:25",
                "valor":12.25,
                "recorrido":"Fortin hasta Llona"
            },
            {
                "nombre":"Servicio de las 13:25",
                "valor":13.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 13:55",
                "valor":13.55,
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
                "nombre":"Servicio de las 18:55",
                "valor":18.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 19:25",
                "valor":19.25,
                "recorrido":"Fortin"
            },
            {
                "nombre":"Servicio de las 20:25",
                "valor":20.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 20:55",
                "valor":20.55,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 21:25",
                "valor":21.25,
                "recorrido":"B° La Cancha"
            },
            {
                "nombre":"Servicio de las 22:20",
                "valor":22.20,
                "recorrido":"B° La Cancha"
            },
        ]
        const horariosDFloPo = [
    {
        "nombre":"Servicio de las 04:50",
        "valor":4.5,
        "recorrido":"B° La Cancha"
    },
    {
        "nombre":"Servicio de las 05:50",
        "valor":5.5,
        "recorrido":"B° La Cancha"
    },   
    {
        "nombre":"Servicio de las 06:50",
        "valor":6.5,
        "recorrido":"Fortin"
    },
    {
        "nombre":"Servicio de las 07:55",
        "valor":7.55,
        "recorrido":"Fortin"
    },
    {
        "nombre":"Servicio de las 08:55",
        "valor":8.55,
        "recorrido":"Fortin"
    },
    {
        "nombre":"Servicio de las 09:55",
        "valor":9.55,
        "recorrido":"B° La Cancha"
    },
    {
        "nombre":"Servicio de las 10:55",
        "valor":10.55,
        "recorrido":"B° La Cancha"
    },
    {
        "nombre":"Servicio de las 11:55",
        "valor":11.55,
        "recorrido":"B° La Cancha"
    },
    {
        "nombre":"Servicio de las 12:55",
        "valor":12.55,
        "recorrido":"B° La Cancha"
    },
    {
        "nombre":"Servicio de las 13:55",
        "valor":13.55,
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
        "nombre":"Servicio de las 19:25",
        "valor":19.25,
        "recorrido":"Fortin"
    },
    {
        "nombre":"Servicio de las 20:00",
        "valor":20.00,
        "recorrido":"Esquina Lastra"
    },
    {
        "nombre":"Servicio de las 20:55",
        "valor":20.55,
        "recorrido":"B° La Cancha"
    },
    {
        "nombre":"Servicio de las 22:20",
        "valor":22.20,
        "recorrido":"B° La Cancha"
    },
   
        ]
        const horariosLvSMAl = [

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
        const horariosSSMAl = [
                {
                    "nombre":"Servicio de las 05:20",
                    "valor":5.2,
                    "recorrido":"Terminal - Autopista - B° La Cancha"
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
                    "recorrido":"Terminal - Autopista - Cochuchal"
                },
                {
                    "nombre":"Servicio de las 08:35",
                    "valor":8.35,
                    "recorrido":"Terminal - Banda del Rio Sali - Fortin"
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
                    "nombre":"Servicio de las 12:20",
                    "valor":12.2,
                    "recorrido":"Terminal - Autopista - B° La Cancha - Colonia 4"
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
                    "nombre":"Servicio de las 14:50",
                    "valor":14.5,
                    "recorrido":"Terminal - Banda del Rio Sali - B° La Cancha - Colonia 4"
                },
                {
                    "nombre":"Servicio de las 16:00",
                    "valor":16,
                    "recorrido":"Terminal - Banda del Rio Sali - Cochuchal - Fortin - Colonia 3"
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
                    "nombre":"Servicio de las 19:00",
                    "valor":19,
                    "recorrido":"Terminal - Banda del Rio Sali - Colonia 4"
                },
                {
                    "nombre":"Servicio de las 19:45",
                    "valor":19.45,
                    "recorrido":"Terminal - Banda del Rio Sali - Mayo"
                },
                {
                    "nombre":"Servicio de las 20:30",
                    "valor":20.3,
                    "recorrido":"Terminal - Banda del Rio Sali - Fortin"
                },
                {
                    "nombre":"Servicio de las 21:30",
                    "valor":21.30,
                    "recorrido":"Terminal - Autopista - Fortin - Colonia 4"
                }
        ]
        const horariosDSMAl = [
    
                {
                    "nombre":"Servicio de las 06:25",
                    "valor":6.25,
                    "recorrido":"Terminal - Banda del Rio Sali - Mayo"
                },
                {
                    "nombre":"Servicio de las 09:45",
                    "valor":9.45,
                    "recorrido":"Terminal - Banda del Rio Sali - Fortin - Colonia 2"
                },
                {
                    "nombre":"Servicio de las 11:40",
                    "valor":11.40,
                    "recorrido":"Terminal - Banda del Rio Sali - Cochuchal- Fortin - Mayo"
                },
                {
                    "nombre":"Servicio de las 14:00",
                    "valor":14,
                    "recorrido":"Terminal - Banda del Rio Sali - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 16:00",
                    "valor":16,
                    "recorrido":"Terminal - Banda del Rio Sali - Cochuchal - Fortin - Colonia 3"
                },
                {
                    "nombre":"Servicio de 17:45",
                    "valor":17.45,
                    "recorrido":"Terminal - Banda del Rio Sali - Mayo"
                },
                {
                    "nombre":"Servicio de las 19:45",
                    "valor":19.45,
                    "recorrido":"Terminal - Banda del Rio Sali - Mayo"
                },
                {
                    "nombre":"Servicio de las 20:30",
                    "valor":20.3,
                    "recorrido":"Terminal - Banda del Rio Sali - Fortin"
                }
      
        ]
        const horariosLvSMPo = [
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
                    "nombre":"Servicio de las 07:30",
                    "valor":7.3,
                    "recorrido":"Terminal - B° La Cancha"
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
        const horariosSSMPo = [
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
                    "nombre":"Servicio de las 07:30",
                    "valor":7.3,
                    "recorrido":"Terminal - B° La Cancha"
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
                    "nombre":"Servicio de las 13:00",
                    "valor":13,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 13:55",
                    "valor":13.55,
                    "recorrido":"Terminal - Fortin"
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
                    "nombre":"Servicio de las 18:30",
                    "valor":18.3,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 19:15",
                    "valor":19.15,
                    "recorrido":"Terminal - B° La Cancha - Colonia 4"
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
                    "nombre":"Servicio de las 22:30",
                    "valor":22.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 23:30",
                    "valor":23.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
        ]
        const horariosDSMPo = [
                {
                    "nombre":"Servicio de las 06:00",
                    "valor":6,
                    "recorrido":"Terminal - Colonia 4"
                },
                {
                    "nombre":"Servicio de las 07:00",
                    "valor":7,
                    "recorrido":"Terminal - Fortin"
                },

                {
                    "nombre":"Servicio de las 08:00",
                    "valor":8,
                    "recorrido":"Terminal - Fortin"
                },
                {
                    "nombre":"Servicio de las 09:00",
                    "valor":9,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 10:00",
                    "valor":10,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 11:00",
                    "valor":11,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 12:00",
                    "valor":12,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 12:30",
                    "valor":12.3,
                    "recorrido":"Terminal - Esquina Lastra"
                },
                {
                    "nombre":"Servicio de las 13:00",
                    "valor":13,
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
                    "nombre":"Servicio de las 18:00",
                    "valor":18,
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
                    "nombre":"Servicio de las 22:30",
                    "valor":22.3,
                    "recorrido":"Terminal - B° La Cancha"
                },
                {
                    "nombre":"Servicio de las 23:30",
                    "valor":23.3,
                    "recorrido":"Terminal - B° La Cancha"
                }
        ]
        const todosSmAlderetes = [horariosDSMAl,horariosLvSMAl,horariosSSMAl];
        const todosSmPosse = [horariosDSMPo,horariosLvSMPo,horariosSSMPo];    
        const todosFloridaAlderetes = [horariosDFloAl,horariosLvFloAl,horariosSFloAl];
        const todosFloridaPosse = [horariosDFloPo,horariosLvFloPo,horariosSFloPo];
        const todosFlorida = [todosFloridaAlderetes,todosFloridaPosse];
        const todosSanMiguel = [todosSmAlderetes,todosSmPosse];
        const todos = [todosFlorida,todosSanMiguel];
        

        // if((selector2.value == 'alderetes')&&(alderetes.disabled == false)){

                // Aqui definimos donde estamos 

            
           
          localidad = todos[posicion-1];
          camino = localidad[posicion2-1]

    
               /*Aqui definimos el array dependiendo el dia de la semana*/
            
            if(dia == 0){
                diaRango = camino[0].slice(0,camino[0].length)
            
            }
            if(dia >= 1 && dia <=5){
                diaRango = camino[1].slice(0,camino[1].length);
            
            }
            if(dia > 5){
                diaRango = camino[2].slice(0,camino[2].length);
            
            }
           
                          for (i=0; i < diaRango.length; i++){
                        listaDelDia.push(diaRango[i].valor)
            }
       
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
                             actual1.textContent = `${diaRango[listaDiferencias.indexOf(anteriorPasado)].nombre}`
                            
                             if((posicion-1) < 1){
                                if(anteriorPasado>60){
                                    actual2.textContent = 'Inició su recorrido hace mas de 1 hora'
                                }
                                if(anteriorPasado==60){
                                    actual2.textContent = 'Inició su recorrido hace 1 hora'
                                }
                                if(anteriorPasado < 60 && anteriorPasado>5){
                                    actual2.textContent = `Inició su recorrido hace ${Math.floor(anteriorPasado)} minutos`
                                }
                                
                                    if(anteriorPasado < 5){
                                       actual2.textContent = 'Inició su recorrido hace menos de 5 minutos'
                                    }
                             
                            }
                            else{
                                if(anteriorPasado>60){
                                    actual2.textContent = 'Salió de la terminal hace mas de una hora';
                                }
                                if(anteriorPasado == 60){
                                    actual2.textContent = 'Salió de la terminal hace mas de una hora';
                                }
                                if(anteriorPasado<60 && anteriorPasado >= 5){
                                    actual2.textContent = `Salió de la terminal hace ${Math.floor(anteriorPasado)} minutos`
                                }
                               
                               if(anteriorPasado < 5){
                                actual2.textContent = 'Salió de la terminal hace menos de 5 minutos'
                               }
                               if(anteriorPasado == 0){
                                actual2.textContent = 'Está saliendo de la terminal'
                               }
                            }
                                 if((posicion-1 < 1) &&(posicion2-1 == 1))    {
                                    actual3.textContent = `Inicio de reccorido :${diaRango[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                                 }
                                 else{
                                    actual3.textContent = `Recorrido :${diaRango[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                                 }                          
                                
                        } 
                    }
                                
                            
                            
                       

                       for(i = 0; i < horariosEnEnteros.length; i++){
                
                        let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;;
                         listaDiferencias2.push(difHorariosHora); 
               }
                                
                        for(i=0; i < listaDiferencias2.length; i++){
                            if(listaDiferencias2[i] >0){
                            elMasCercano = Math.min(elMasCercano,listaDiferencias2[i]);
                           
                               futuro1.textContent = `${diaRango[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
                               
                                if((posicion-1) < 1){
                                    if(elMasCercano>60){
                                        futuro2.textContent = 'Inica su recorrido en poco mas de 1 hora'
                                    }
                                    if(elMasCercano==60){
                                        futuro2.textContent = 'Inicia su recorrido dentro 1 hora'
                                    }
                                    if(elMasCercano < 60 && elMasCercano>5){
                                        futuro2.textContent = `Inicia su recorrido en ${Math.floor(elMasCercano)} minutos`
                                    }
                                    
                                        if(elMasCercano < 5){
                                           futuro2.textContent = 'Iniciará su recorrido en menos de 5 minutos'
                                        }
                                 
                                
                            }
                                else{
                                    if(elMasCercano>60){
                                        futuro2.textContent = 'Sale de la terminal en mas de una hora';
                                    }
                                    if(elMasCercano == 60){
                                        futuro2.textContent = 'Sale de la terminal en de una hora';
                                    }
                                    if(elMasCercano<60 && elMasCercano >= 5){
                                        futuro2.textContent = `Sale de la terminal en ${Math.floor(elMasCercano)} minutos`
                                    }
                                   
                                   if(elMasCercano < 5){
                                    futuro2.textContent = 'Sale de la terminal en menos de 5 minutos'
                                   }
                                   if(elMasCercano == 0){
                                    futuro2.textContent = 'Está saliendo de la terminal'
                                   }
                                }
                                    
                                 if((posicion-1 < 1) &&(posicion2-1 == 1))    {
                                    futuro3.textContent = `Inicio de reccorido :${diaRango[listaDiferencias2.indexOf(elMasCercano)].recorrido}`
                                 }
                                 else{
                                    futuro3.textContent = `Recorrido :${diaRango[listaDiferencias2.indexOf(elMasCercano)].recorrido}`
                                 }                   
                        }           
                    }
                                  
                       
})  
})


    
    








