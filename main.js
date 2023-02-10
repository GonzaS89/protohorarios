document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    reloj();
    // busquedaManual();
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
       if(fecha <= 9){
        fecha= "0"+fecha;
       }
        
    let diaFecha = document.getElementById('dia')  
    let numeroFecha = document.getElementById('fecha')
    let mesFecha = document.getElementById('mes')
    let  horita = document.getElementById('horas')
    let minutitos = document.getElementById('minutos')
    let segunditos = document.getElementById('segundos')
    let diasDeLaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let mesesDelAño = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    diaFecha.textContent = `${diasDeLaSemana[dia]}`
    numeroFecha.textContent = `${fecha}`;
    mesFecha.textContent = `${mesesDelAño[mes]}`;
    horita.textContent = hora;
    minutitos.textContent = minuto;
    segunditos.textContent = segundo;

    /*MOVER RELOJ A TIEMPO ACTUAL*/
    setTimeout("reloj()",1000)
    /*                          */
}

/* Funcion para determinar la localidad de posicion*/

const selector = document.menu.selector;
const selector2 = document.menu2.selector2;



const boton = document.getElementById('boton');



    const opcionbase = selector[0]
    const opcionbase2 = selector2[0]
    const florida = selector[1];
    const xposse = selector[2]
    const sanM = selector[3];  
    let valorSelecionado; 
    let valorSelecionado2;
    let valores = [];
    let valores2= [];
    let posicion;
    let posicion2;

    const horariosLvFloAl = [

        {
            "nombre":"04:40",
            "valor":4.4,
            "recorrido": "Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"05:35",
            "valor":5.35,
            "recorrido":"Fortin → Talar → Alternativa"
        },
        {
            "nombre":"06:10",
            "valor":6.10,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí",
            "recorrido2":"Colonia 10 → Colonia 4 → B° La Cancha → Cochuchal → Alderetes → Autopista"
        },
        {
            "nombre":"06:20",
            "valor":6.25,
            "recorrido":"Colonia 5 → Fortin → B° La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"06:50",
            "valor":6.5,
            "recorrido":"Colonia 4 → Fonda →  Talar →Alternativa"
        },
        {
            "nombre":"07:20",
            "valor":7.2,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alternativa",
            "recorrido2":"Fortin → Talar →  Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:40",
            "valor":7.4,
            "recorrido":"Finca Mayo → Fortin → Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "valor":7.5,
            "recorrido":"Colonia 4 → Fonda → Talar → Alternativa",
            "recorrido2":"Colonia 4 → B° La Cancha → Alderetes → Autopista"
        },
        {
            "nombre":"08:45",
            "valor":8.45,
            "recorrido":"Colonia 4 → B° La Cancha → Cochuchal → Alderetes → Autopista"
        },
        {
            "nombre":"09:20",
            "valor":9.2,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"09:50",
            "valor":9.5,
            "recorrido":"Colonia 4 → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"10:30",
            "valor":10.3,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"11:40",
            "valor":11.40,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:30",
            "valor":12.3,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"13:15",
            "valor":13.15,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"13:50",
            "valor":13.5,
            "recorrido":"B° La Cancha → Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"14:45",
            "valor":14.45,
            "fin":945,
            "recorrido" : "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
                
        },
        {
            "nombre":"15:47",
            "valor":15.47,
            "recorrido":"Fortin → Talar → Alternativa"
        },
        // {
        //     "nombre":"16:20",
        //     "valor":16.2,
        //     "recorrido":"La Marta → Colonia 4 → Autopista"
        // },
        {
            "nombre":"16:50",
            "valor":16.5,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alternativa",
            "recorrido2":"Colonia 3 → Talar → Alderetes → Banda del Río Salí"
        },
        // {
        //     "nombre":"17:35",
        //     "valor":17.35,
        //     "recorrido":"Colonia 4 → B° La Cancha → Alternativa"
        // },
        {
            "nombre":"17:35",
            "valor":17.35,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alternativa "
        },
        {
            "nombre":"17:50",
            "valor":17.5,
            "recorrido":"Fortin → Talar →  Alderetes → Banda del Río Salí"
        },
        // {
        //     "nombre":"18:10",
        //     "valor":18.1,
        //     "recorrido":"Colonia 4  → Autopista"
        // },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"La Marta → Colonia 3 → B° La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        // {
        //     "nombre":"20:55",
        //     "valor":20.55,
        //     "recorrido":"Mayo → Colonia 4 → Alderetes → Autopista"
        // },
        {
            "nombre":"21:05",
            "valor":21.15,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        }
       
    ]
    const horariosSFloAl = [
        {
            "nombre":"04:40",
            "valor":4.4,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"05:45",
            "valor":5.45,
            "recorrido":"Fortin → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"06:10",
            "valor":6.10,
            "recorrido":"Colonia 10 → B° La Cancha → Cochuchal → Alderetes → Autopista"
        },
        {
            "nombre":"06:25",
            "valor":6.25,
            "recorrido":"Colonia 5 Florida → Fortin(Trasbordo)"
        },
        {
            "nombre":"06:50",
            "valor":6.5,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"07:18",
            "valor":7.18,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"07:40",
            "valor":7.4,
            "recorrido":"Finca Mayo → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "valor":7.5,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"08:45",
            "valor":8.45,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"09:20",
            "valor":9.2,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "valor":10.30,
            "recorrido":"Fortin → Talar  → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"11:40",
            "valor":11.40,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "valor":12.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"13:15",
            "valor":13.15,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"14:50",
            "valor":14.5,
            "recorrido":"B° La Cancha → Talar →  Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"15:50",
            "valor":15.5,
            "recorrido":"Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"16:50",
            "valor":16.5,
            "recorrido":"Colonia 3 → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"17:50",
            "valor":17.5,
            "recorrido":"Fortin → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"La Marta → Colonia 3 → B° La Cancha → Talar → Alderetes → Banda del Río Salí"
        }
    ]
    const horariosDFloAl = [

        {
            "nombre":"07:40",
            "valor":7.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "valor":10.30,
            "recorrido":"Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "valor":12.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"14:50",
            "valor":14.5,
            "recorrido":"B° La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"16:50",
            "valor":16.5,
            "recorrido":"Colonia 3 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"17:50",
            "valor":17.5,
            "recorrido":["B° La Cancha","Talar ","Alderetes","Banda del Río Salí"]
        },
        {
            "nombre":"19:10",
            "valor":19.1,
            "recorrido":"Colonia 10 → Colonia 3 → B° La Cancha → Talar → Alderetes → Banda del Río Salí"
        }
    ]
    const horariosLvFloPo = [

        {
            "nombre":"04:50",
            "valor":4.5,
            "recorrido":"B° La Cancha → Paraiso → Dispensario →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:50",
            "valor":5.5,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:20",
            "valor":6.2,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"06:50",
            "valor":6.5,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:25",
            "valor":7.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:55",
            "valor":7.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"08:25",
            "valor":8.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:05",
            "valor":9.05,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:55",
            "valor":9.55,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"10:25",
            "valor":10.25,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:55",
            "valor":10.55,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:25",
            "valor":11.25,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:55",
            "valor":11.55,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "valor":12.40,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        // {
        //     "nombre":"12:25",
        //     "valor":12.25,
        //     "recorrido":"Fortin hasta  Esquina Llona"
        // },
        {
            "nombre":"13:25",
            "valor":13.25,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:50",
            "valor":13.5,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:55",
            "valor":14.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:55",
            "valor":15.55,
            "recorrido":"Fortin → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:55",
            "valor":16.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:55",
            "valor":17.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:55",
            "valor":18.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:25",
            "valor":19.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:25",
            "valor":20.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:20",
            "valor":21.2,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:20",
            "valor":22.20,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
       
       
    ]
    const horariosSFloPo = [
        {
            "nombre":"04:50",
            "valor":4.5,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        
        {
            "nombre":"05:50",
            "valor":5.5,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "valor":6.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"06:50",
            "valor":6.5,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:25",
            "valor":7.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:55",
            "valor":7.55,
            "recorrido":"Fortin → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"08:25",
            "valor":8.25,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:05",
            "valor":9.05,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:55",
            "valor":9.55,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"10:25",
            "valor":10.25,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:55",
            "valor":10.55,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:25",
            "valor":11.25,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:55",
            "valor":11.55,
            "recorrido":"B° La Cancha → Paraiso →  Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "valor":12.40,
            "recorrido":"B° La Cancha → Paraiso → Esquina  Llona → Cevil Pozo → Banda del Río Salí"
        },
        // {
        //     "nombre":"12:25",
        //     "valor":12.25,
        //     "recorrido":"Fortin hasta Esquina Llona"
        // },
        {
            "nombre":"13:25",
            "valor":13.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:55",
            "valor":13.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "valor":15,
            "recorrido":"Esquina de Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:55",
            "valor":15.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:55",
            "valor":16.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:55",
            "valor":18.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:25",
            "valor":19.25,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:25",
            "valor":20.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:55",
            "valor":20.55,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:25",
            "valor":21.25,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:20",
            "valor":22.20,
            "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const horariosDFloPo = [
{
    "nombre":"04:50",
    "valor":4.5,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"05:50",
    "valor":5.5,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},   
{
    "nombre":"06:50",
    "valor":6.5,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"07:55",
    "valor":7.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"08:55",
    "valor":8.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"09:55",
    "valor":9.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"10:55",
    "valor":10.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"11:55",
    "valor":11.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"12:55",
    "valor":12.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"13:55",
    "valor":13.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"15:00",
    "valor":15,
    "recorrido":"Esquina de Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"15:55",
    "valor":15.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"16:55",
    "valor":16.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"17:55",
    "valor":17.55,
    "recorrido":"B° La Cancha → Paraiso → Dispensario → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"18:55",
    "valor":18.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"19:25",
    "valor":19.25,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"20:00",
    "valor":20.00,
    "recorrido":"Esquina Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"20:55",
    "valor":20.55,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"22:20",
    "valor":22.20,
    "recorrido":"B° La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},

    ]
    const horariosLvSMAl = [

        {
            "nombre":"05:20",
            "valor":5.2,
            "recorrido":"Terminal → Autopista → Talar → B° La Cancha"
        },
        // {
        //     "nombre":"06:15",
        //     "valor":6.15,
        //     "recorrido":"Terminal → Autopista → Los Perez"
        // },
        {
            "nombre":"06:25",
            "valor":6.25,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin → Mayo"
        },
        {
            "nombre":"07:15",
            "valor":7.15,
            "recorrido":"Terminal → Banda del Río Salí → Talar → La Marta"
        },
        {
            "nombre":"08:00",
            "valor":8,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Colonia 4"
        },
        {
            "nombre":"08:35",
            "valor":8.35,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
        },
        {
            "nombre":"09:00",
            "valor":9,
            "recorrido":"Terminal → Autopista → Talar → B° La Cancha → Colonia 4 "
        },
        {
            "nombre":"09:45",
            "valor":9.45,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
        },
        {
            "nombre":"10:45",
            "valor":10.45,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
        },
        {
            "nombre":"11:15",
            "valor":11.15,
            "recorrido":"Terminal → Autopista → Talar → B° La Cancha → Los Perez"
        },
        // {
        //     "nombre":"11:40",
        //     "valor":11.4,
        //     "recorrido":"Terminal → Autopista → Cochuchal → Mayo"
        // },
        // {
        //     "nombre":"12:15",
        //     "valor":12.15,
        //     "recorrido":"Terminal → Alternativa → B° La Cancha"
        // },
        {
            "nombre":"12:20",
            "valor":12.2,
            "recorrido":"Terminal → Catalinas Park → Autopista →Talar →  B° La Cancha → Colonia 4"
        },
        {
            "nombre":"12:45",
            "valor":12.45,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Colonia 3"
        },
        {
            "nombre":"13:15",
            "valor":13.15,
            "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Colonia 4"
        },
        {
            "nombre":"13:30",
            "valor":13.3,
            "recorrido":"Terminal → Autopista →Talar →  B° La Cancha → La Marta"
        },
        {
            "nombre":"14:00",
            "valor":14,
            "recorrido":"Terminal → Banda del Río Salí → Talar → B° La Cancha"
        },
        {
            "nombre":"14:50",
            "valor":14.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha"
        },
        {
            "nombre":"15:50",
            "valor":15.5,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Colonia 3"
        },
        {
            "nombre":"16:50",
            "valor":16.5,
            "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin"
        },
        {
            "nombre":"17:45",
            "valor":17.45,
            "recorrido":"Terminal → Talar → Banda del Río Salí → B° La Cancha"
        },
        // {
        //     "nombre":"18:20",
        //     "valor":18.2,
        //     "recorrido":"Terminal → Alternativa → B° La Cancha → Colonia 4"
        // },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Colonia 4"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Colonia 4"
        },
        {
            "nombre":"19:45",
            "valor":19.45,
            "recorrido":"Terminal → Banda del Río Salí → Talar →  Mayo"
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
        },
        {
            "nombre":"21:00",
            "valor":21,
            "recorrido":"Terminal → Autopista → Talar → B° La Cancha"
        },
        {
            "nombre":"21:30",
            "valor":21.30,
            "recorrido":"Terminal → Autopista → Talar → B° La Cancha"
        },
        {
            "nombre":"22:30",
            "valor":22.30,
            "recorrido":"Terminal → Autopista → Talar → Fortin"
        }

        
    ]
    const horariosSSMAl = [
            {
                "nombre":"05:20",
                "valor":5.2,
                "recorrido":"Terminal → Autopista → Talar → B° La Cancha"
            },
            {
                "nombre":"06:25",
                "valor":6.25,
                "recorrido":"Terminal → Banda del Río Salí →  Talar → Mayo"
            },
            {
                "nombre":"07:15",
                "valor":7.15,
                "recorrido":"Terminal → Banda del Río Salí → Talar → La Marta"
            },
            {
                "nombre":"08:00",
                "valor":8,
                "recorrido":"Terminal → Autopista → Cochuchal"
            },
            {
                "nombre":"08:35",
                "valor":8.35,
                "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
            },
            {
                "nombre":"09:45",
                "valor":9.45,
                "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
            },
            {
                "nombre":"10:45",
                "valor":10.45,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            },
            {
                "nombre":"12:20",
                "valor":12.2,
                "recorrido":"Terminal → Autopista → B° La Cancha → Colonia 4"
            },
            {
                "nombre":"13:30",
                "valor":13.3,
                "recorrido":"Terminal → Autopista → B° La Cancha → La Marta"
            },
            {
                "nombre":"14:00",
                "valor":14,
                "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
            },
            {
                "nombre":"14:50",
                "valor":14.5,
                "recorrido":"Terminal → Banda del Río Salí → B° La Cancha → Colonia 4"
            },
            {
                "nombre":"16:00",
                "valor":16,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Colonia 3"
            },
            {
                "nombre":"16:50",
                "valor":16.5,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin"
            },
            {
                "nombre":"17:45",
                "valor":17.45,
                "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
            },
            {
                "nombre":"19:00",
                "valor":19,
                "recorrido":"Terminal → Banda del Río Salí → Colonia 4"
            },
            {
                "nombre":"19:45",
                "valor":19.45,
                "recorrido":"Terminal → Banda del Río Salí → Mayo"
            },
            {
                "nombre":"20:30",
                "valor":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            },
            {
                "nombre":"21:30",
                "valor":21.30,
                "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
            },
            // {
            //     "nombre":"22:00",
            //     "valor":22,
            //     "recorrido":"Terminal → Alternativa → Colonia 4"
            // },
            {
                "nombre":"22:30",
                "valor":22.30,
                "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
            }
    ]
    const horariosDSMAl = [

            {
                "nombre":"06:25",
                "valor":6.25,
                "recorrido":"Terminal → Banda del Río Salí → Mayo"
            },
            {
                "nombre":"09:45",
                "valor":9.45,
                "recorrido":"Terminal → Banda del Río Salí → Fortin → Colonia 2"
            },
            {
                "nombre":"11:40",
                "valor":11.40,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Mayo"
            },
            {
                "nombre":"14:00",
                "valor":14,
                "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
            },
            {
                "nombre":"16:00",
                "valor":16,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Colonia 3"
            },
            {
                "nombre":"17:45",
                "valor":17.45,
                "recorrido":"Terminal → Banda del Río Salí → Fortin → Mayo"
            },
            {
                "nombre":"19:45",
                "valor":19.45,
                "recorrido":"Terminal → Banda del Río Salí → Mayo"
            },
            {
                "nombre":"20:30",
                "valor":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            }
  
    ]
    const horariosLvSMPo = [
            {
                "nombre":"06:00",
                "valor":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Colonia 4"
            },
            {
                "nombre":"06:40",
                "valor":6.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"07:00",
                "valor":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"07:30",
                "valor":7.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"08:15",
                "valor":8.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"09:00",
                "valor":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"09:30",
                "valor":9.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"10:00",
                "valor":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Colonia 4"
            },
            {
                "nombre":"10:30",
                "valor":10.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"11:00",
                "valor":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            // {
            //     "nombre":"11:20",
            //     "valor":11.2,
            //     "recorrido":"Terminal → Fortin"
            // },
            {
                "nombre":"11:45",
                "valor":11.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"12:30",
                "valor":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            // {
            //     "nombre":"12:40",
            //     "valor":12.4,
            //     "recorrido":"Terminal - Fortin"
            // },
            {
                "nombre":"13:00",
                "valor":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"13:30",
                "valor":13.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            // {
            //     "nombre":"14:00",
            //     "valor":14,
            //     "recorrido":"Terminal → B° La Cancha"
            // },
            {
                "nombre":"14:20",
                "valor":14.2,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "valor":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "valor":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"17:00",
                "valor":17,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            // {
            //     "nombre":"17:10",
            //     "valor":17.1,
            //     "recorrido":"Terminal → B° La Cancha"
            // },
            {
                "nombre":"17:30",
                "valor":17.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"18:00",
                "valor":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"18:30",
                "valor":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:15",
                "valor":19.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"19:30",
                "valor":19.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"20:00",
                "valor":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso  → B° La Cancha"
            },
            {
                "nombre":"20:30",
                "valor":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"21:00",
                "valor":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"21:30",
                "valor":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"22:00",
                "valor":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"22:30",
                "valor":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"23:30",
                "valor":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"00:30",
                "valor":24.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            }
    ]
    const horariosSSMPo = [
            {
                "nombre":"06:00",
                "valor":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Colonia 4"
            },
            {
                "nombre":"06:40",
                "valor":6.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"07:00",
                "valor":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"07:30",
                "valor":7.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"08:15",
                "valor":8.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"09:00",
                "valor":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"09:30",
                "valor":9.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"10:00",
                "valor":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Colonia 4"
            },
            {
                "nombre":"10:30",
                "valor":10.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"11:00",
                "valor":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"11:45",
                "valor":11.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"12:30",
                "valor":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"13:00",
                "valor":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"13:55",
                "valor":13.55,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"14:15",
                "valor":14.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "valor":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "valor":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"17:00",
                "valor":17,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso →B° La Cancha"
            },
            {
                "nombre":"17:30",
                "valor":17.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"18:00",
                "valor":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"18:30",
                "valor":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:15",
                "valor":19.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha → Colonia 4"
            },
            {
                "nombre":"19:30",
                "valor":19.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"20:00",
                "valor":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"20:30",
                "valor":20.3,
                "recorrido":"Terminal →  Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"21:00",
                "valor":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"21:30",
                "valor":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"22:30",
                "valor":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"23:30",
                "valor":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
    ]
    const horariosDSMPo = [
            {
                "nombre":"06:00",
                "valor":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Colonia 4"
            },
            {
                "nombre":"07:00",
                "valor":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },

            {
                "nombre":"08:00",
                "valor":8,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"09:00",
                "valor":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"10:00",
                "valor":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"11:00",
                "valor":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"12:00",
                "valor":12,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"12:30",
                "valor":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"13:00",
                "valor":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"14:15",
                "valor":14.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "valor":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "valor":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"17:00",
                "valor":17,
                "recorrido":"Terminal Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"18:00",
                "valor":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Dispensario → Paraiso → B° La Cancha"
            },
            {
                "nombre":"18:30",
                "valor":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:10",
                "valor":19.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"20:00",
                "valor":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"20:30",
                "valor":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"21:00",
                "valor":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"21:30",
                "valor":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"22:30",
                "valor":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            },
            {
                "nombre":"23:30",
                "valor":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → B° La Cancha"
            }
    ]
    const posseTerminalLaV = [
        {
            "nombre":"06:00",
            "valor":6,
            "recorrido":"Dispensario → FIla del Medio → Cevil Pozo"
        },
        {
            "nombre":"06:08",
            "valor":6.08,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo"
        },
        {
            "nombre":"06:35",
            "valor":6.35,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"07:05",
            "valor":7.05,
            "recorrido":"Dispensario → Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"07:40",
            "valor":7.4,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"08:10",
            "valor":8.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"08:10",
            "valor":8.1,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo"
        },
        {
            "nombre":"09:10",
            "valor":9.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"10:10",
            "valor":10.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"13:10",
            "valor":13.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"15:10",
            "valor":15.1,
            "recorrido":"Bosque → Fila de la orilla → Esquina Llona →Cevil Pozo"
        },
        {
            "nombre":"16:00",
            "valor":16,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo"
        },
        {
            "nombre":"16:10",
            "valor":16.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"17:10",
            "valor":17.1,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo"
        },
        {
            "nombre":"18:10",
            "valor":18.1,
            "recorrido":"Bosque → Fila de la orilla → Esquina Llona → Cevil Pozo"
        },
        
       

    ]
    const posseTerminalS = [
        {
            "nombre":"06:05",
            "valor":6.05,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        }, 
        {
            "nombre":"07:05",
            "valor":7.05,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"08:10",
            "valor":8.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"09:10",
            "valor":9.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"10:10",
            "valor":10.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"13:00",
            "valor":13,
            "recorrido":"Dispensario→ Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"16:10",
            "valor":16.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"17:10",
            "valor":17.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"18:05",
            "valor":18.05,
            "recorrido":"Dispensario → Fila dela orilla → Esquina Llona → Cevil Pozo"
        },
    ]
    const posseTerminalD = [];
    const terminalPosseLaV = [
        {
            "nombre":"05:25",
            "valor":5.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"08:30",
            "valor":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Dispensario"
        },
        {
            "nombre":"13:00",
            "valor":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
        },
        {
            "nombre":"13:30",
            "valor":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"15:00",
            "valor":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"15:30",
            "valor":15.3,
            "recorrido":" Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"16:30",
            "valor":16.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"17:25",
            "valor":17.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
        },
        {
            "nombre":"18:25",
            "valor":18.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"20:20",
            "valor":20.2,
            "recorrido":"Terminal →  Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"21:00",
            "valor":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
    ]
    const terminalPosseS = [
        {
            "nombre":"05:25",
            "valor":5.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Bosque → Dispensario"
        },
        {
            "nombre":"08:30",
            "valor":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"11:35",
            "valor":11.35,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        },
        {
            "nombre":"12:15",
            "valor":12.15,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"13:30",
            "valor":13.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"15:30",
            "valor":15.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"16:30",
            "valor":16.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"21:00",
            "valor":21,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
    ]
    const terminalPosseD = [];

    const ralosTerminalLaV = [
        {
            "nombre":"04:40",
            "valor":4.4,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:25",
            "valor":5.25,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"Villa Tercera → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:05",
            "valor":6.05,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:15",
            "valor":6.15,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "valor":6.25,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:40",
            "valor":6.4,
            "recorrido":"Villa Tercera → Escuela 330 → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:40",
            "valor":6.4,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Lolita → Cerco 2 → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:50",
            "valor":6.5,
            "recorrido":"Las Vias → Barrio Trigal → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:30",
            "valor":7.3,
            "recorrido":"Lolita → Los Ralos → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:20",
            "valor":8.2,
            "recorrido":"Los Ralos → Barrio Trigal → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:25",
            "valor":8.25,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;10",
            "valor":9.1,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:20",
            "valor":10.2,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:10",
            "valor":11.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:00",
            "valor":12,
            "recorrido":"Lolita → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "valor":12.15,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:45",
            "valor":12.45,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "valor":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "valor":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:10",
            "valor":15.1,
            "recorrido":"Lolita → Los Ralos → Barrio Trigal → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "valor":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:10",
            "valor":16.1,
            "recorrido":"Los Ralos → Barrio Trigal → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:25",
            "valor":16.25,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:30",
            "valor":16.3,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:20",
            "valor":17.2,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:30",
            "valor":17.3,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:15",
            "valor":18.15,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:05",
            "valor":19.05,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Lolita → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:10",
            "valor":21.1,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:00",
            "valor":22,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosTerminalS = [
        {
            "nombre":"04:40",
            "valor":4.4,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"Villa Tercera → El Infierno → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "valor":6.25,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:50",
            "valor":6.5,
            "recorrido":"Las Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:30",
            "valor":7.3,
            "recorrido":"Lolita Sur → Los Ralos → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "valor":8.1,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:25",
            "valor":8.25,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "valor":9.25,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:20",
            "valor":10.2,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:10",
            "valor":11.1,
            "recorrido":"Alabama → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:00",
            "valor":12,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "valor":12.15,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "valor":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "valor":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "valor":15,
            "recorrido":"Lolita Sur → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "valor":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:25",
            "valor":16.25,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:30",
            "valor":16.3,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "valor":17.15,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:20",
            "valor":17.2,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "valor":18.1,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:05",
            "valor":19.05,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Lolita → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:10",
            "valor":21.1,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:30",
            "valor":21.3,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosTerminalD = [
        {
            "nombre":"05:00",
            "valor":5,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"Villa Tercera → El Infierno → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:00",
            "valor":7,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "valor":8.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:30",
            "valor":8.3,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "valor":9.25,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "valor":10.3,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí",
        },
        {
            "nombre":"11:10",
            "valor":11.1,
            "recorrido":"Alabama → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "valor":12.15,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "valor":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "valor":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "valor":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:50",
            "valor":15.5,
            "recorrido":"Las Cejas → Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "valor":17.15,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "valor":18.1,
            "recorrido":"Los Ralos → Villa Tercera → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "valor":19.50,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Lolita → Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Los Ralos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:30",
            "valor":21.3,
            "recorrido":"Mayo → Los Ralos → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalRalosLaV = [
        {
            "nombre":"06.00",
            "valor":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"07:00",
            "valor":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"08:00",
            "valor":8,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo"
        },
        {
            "nombre":"08:30",
            "valor":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"09:15",
            "valor":9.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"09:30",
            "valor":9.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"10:00",
            "valor":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:40",
            "valor":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita"
        },
        {
            "nombre":"11:15",
            "valor":11.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo"
        },
        {
            "nombre":"11:50",
            "valor":11.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"12:10",
            "valor":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:30",
            "valor":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"13:00",
            "valor":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"13:30",
            "valor":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera → Lolita"
        },
        {
            "nombre":"13:50",
            "valor":13.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"14:00",
            "valor":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita"
        },
        {
            "nombre":"14:30",
            "valor":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
            "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:15",
            "valor":15.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"15:30",
            "valor":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo",
        },
        {
            "nombre":"16:00",
            "valor":16,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"16:30",
            "valor":16.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo",
        },
        {
            "nombre":"17:00",
            "valor":17,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"17:30",
            "valor":17.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"17:50",
            "valor":17.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },        
        {
            "nombre":"18:00",
            "valor":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo",
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita Sur",
        },
        {
            "nombre":"19:30",
            "valor":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:15",
            "valor":20.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"21:00",
            "valor":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"21:30",
            "valor":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:00",
            "valor":22,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"22:30",
            "valor":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "valor":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        }
    ]
    const terminalRalosS = [
        {
            "nombre":"06.00",
            "valor":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"06.30",
            "valor":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita Sur"
        },
        {
            "nombre":"07:00",
            "valor":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"07:45",
            "valor":7.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"08:30",
            "valor":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"09:30",
            "valor":9.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"10:00",
            "valor":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:40",
            "valor":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "valor":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo Cruce"
        },
        {
            "nombre":"11:50",
            "valor":11.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"12:10",
            "valor":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:30",
            "valor":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"13:00",
            "valor":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"13:30",
            "valor":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → VIlla Tercera →Lolita"
        },
        {
            "nombre":"13:50",
            "valor":13.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"14:00",
            "valor":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita"
        }, 
        {
            "nombre":"14:20",
            "valor":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Las Cejas"
        },
        {
            "nombre":"14:30",
            "valor":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"15:15",
            "valor":15.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"15:30",
            "valor":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo",
        },
        {
            "nombre":"16:05",
            "valor":16.05,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"16:15",
            "valor":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"17:10",
            "valor":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"18:00",
            "valor":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Las Cejas"
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita"
        },
        {
            "nombre":"19:30",
            "valor":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Las Cejas",
        },
        {
            "nombre":"20:20",
            "valor":20.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"21:00",
            "valor":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"21:30",
            "valor":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:00",
            "valor":22,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"22:30",
            "valor":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "valor":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        }
    ]
    const terminalRalosD = [
        {
            "nombre":"06.00",
            "valor":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"07:00",
            "valor":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"08:30",
            "valor":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos"
        },
        {
            "nombre":"10:00",
            "valor":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:30",
            "valor":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "valor":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:10",
            "valor":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"13:00",
            "valor":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"14:30",
            "valor":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"15:30",
            "valor":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Las Cejas → 7 de Abril",
        },
        {
            "nombre":"16:15",
            "valor":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"17:10",
            "valor":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"18:00",
            "valor":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"19:00",
            "valor":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Lolita"
        },
        {
            "nombre":"19:30",
            "valor":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Cruz Alta",
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos",
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Mayo → Las Cejas",
        },
        {
            "nombre":"21:30",
            "valor":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:30",
            "valor":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "valor":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Villa Tercera",
        }
    ]
    const ralosCruzAltaTerminalLaV = [
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:20",
            "valor":7.2,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:45",
            "valor":7.45,
            "recorrido":"Britos → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "valor":8.1,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:50",
            "valor":11.5,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:15",
            "valor":14.15,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Colonia 9 → Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },

    ]
    const ralosCruzAltaTerminalS = [
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:15",
            "valor":7.15,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:40",
            "valor":8.4,
            "recorrido":"Colonia 9 → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:50",
            "valor":11.5,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:15",
            "valor":14.15,
            "recorrido":"Los Ralos → Cruz Alta → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosCruzAltaTerminalD = []
    
    const terminalCruzAltaRalosLaV = [
        {
            "nombre":"07:30",
            "valor":7.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"10:45",
            "valor":10.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"12:00",
            "valor":12,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"13:15",
            "valor":13.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"17:30",
            "valor":17.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Colonia 9"
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
        }
    ]
    const terminalCruzAltaRalosS = [
            {
                "nombre":"10:45",
                "valor":10.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
            },
            {
                "nombre":"13:15",
                "valor":13.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
            },
            {
                "nombre":"19:30",
                "valor":19.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Cruz Alta → Los Ralos"
            }
    ];
    const terminalCruzAltaRalosD = []
    const sieteDeAbrilTerminalLaV = [
        {
            "nombre":"04:40",
            "valor":4.4,
            "recorrido":"7 de Abril → Las Cejas → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:20",
            "valor":16.2,
            "recorrido":"7 de Abril → Las Cejas → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const sieteDeAbrilTerminalS = [
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const sieteDeAbrilTerminalD = [
        {
            "nombre":"18:00",
            "valor":18,
            "recorrido":"7 de Abril → Las Cejas → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalSieteDeAbrilLaV = [
        {
            "nombre":"12:30",
            "valor":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"15:45",
            "valor":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const terminalSieteDeAbrilS = [
        {
            "nombre":"15:45",
            "valor":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const terminalSieteDeAbrilD = [
        {
            "nombre":"15:00",
            "valor":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const lasCejasTerminalLaV = [
        {
            "nombre":"05:30",
            "valor":5.3,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:30",
            "valor":6.3,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "valor":7.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:10",
            "valor":12.1,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:40",
            "valor":15.4,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "valor":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const lasCejasTerminalS = [
        {
            "nombre":"06:25",
            "valor":6.25,
            "recorrido":"Las Cejas → Los Ralos → (Trasbordo)"
        },
        {
            "nombre":"12:00",
            "valor":12,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:40",
            "valor":15.4,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "valor":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const lasCejasTerminalD = [
        {
            "nombre":"12:20",
            "valor":12.2,
            "recorrido":"Las Cejas → Los Ralos → Esquina Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const terminalLasCejasLaV = [
        {
            "nombre":"06:30",
            "valor":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "valor":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"12:30",
            "valor":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"14:30",
            "valor":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:45",
            "valor":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
    ]
    const terminalLasCejasS = [
        {
            "nombre":"10:40",
            "valor":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"14:30",
            "valor":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:45",
            "valor":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"20:00",
            "valor":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
    ]
    const terminalLasCejasD = [
        {
            "nombre":"06:30",
            "valor":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"10:30",
            "valor":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"18:30",
            "valor":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"20:30",
            "valor":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
    ]
    const floridaAldTucuman = [horariosDFloAl,horariosLvFloAl,horariosSFloAl];
    const terminalAldFlorida = [horariosDSMAl,horariosSSMAl, horariosLvSMAl];
    const floridaPosseTucuman = [horariosDFloPo,horariosLvFloPo,horariosSFloPo];
    const terminalPosseFlorida = [horariosDSMPo, horariosSSMPo, horariosLvSMPo];
    const posseLTerminal = [posseTerminalD,posseTerminalLaV,posseTerminalS];
    const terminalPosseL = [terminalPosseD,terminalPosseLaV,terminalPosseS];
    const ralosTerminal = [ ralosTerminalD,ralosTerminalLaV,ralosTerminalS]; 
    const terminalRalos = [terminalRalosD, terminalRalosLaV, terminalRalosS];
    const ralosCruzAltaTerminal = [ralosCruzAltaTerminalD,ralosCruzAltaTerminalLaV,ralosCruzAltaTerminalS];
    const terminalCruzAltaRalos = [terminalCruzAltaRalosD,terminalCruzAltaRalosLaV,terminalCruzAltaRalosS];
    const sieteDeAbrilTerminal = [sieteDeAbrilTerminalD,sieteDeAbrilTerminalLaV,sieteDeAbrilTerminalS]
    const terminalSieteDeAbril = [terminalSieteDeAbrilD,terminalSieteDeAbrilLaV,terminalSieteDeAbrilS]
    const lasCejasTerminal = [lasCejasTerminalD,lasCejasTerminalLaV,lasCejasTerminalS]
    const terminalLasCejas = [terminalLasCejasD,terminalLasCejasLaV,terminalLasCejasS]
    const todosDestinoTucuman = [floridaAldTucuman,floridaPosseTucuman,posseLTerminal,ralosTerminal,ralosCruzAltaTerminal,sieteDeAbrilTerminal,lasCejasTerminal];
    const todosTucumanDestino = [terminalAldFlorida,terminalPosseFlorida, terminalPosseL,terminalRalos,terminalCruzAltaRalos,terminalSieteDeAbril,terminalLasCejas];
    


    
    const botonDeCambio = document.querySelector('.botonDeCambio');
    const botonDeCambio2 = document.querySelector('.botonDeCambio2');
    const mensaje2 = document.querySelector('.mensaje2');
    let titulo = document.getElementById('titulo')
    botonDeCambio.addEventListener('click', function (){
        $('.menu2').css('display','flex');
        $('.origen').css('display','flex');
        $('.botonDeCambio2').css('display','flex');
        $('.destino').css('display','none');
        $('.menu').css('display','none');
        $('.botonDeCambio').css('display','none');
        opcionbase.selected = true;

    })
    botonDeCambio2.addEventListener('click', function (){
        $('.menu2').css('display','none');
        $('.origen').css('display','none');
        $('.botonDeCambio2').css('display','none');
        $('.destino').css('display','flex');
        $('.menu').css('display','flex');
        $('.botonDeCambio').css('display','flex');
        opcionbase2.selected = true;
    })
    selector.addEventListener('click', function(){
        if(opcionbase.selected == false){
            boton.disabled = false;
           }
    })
   
    
    boton.addEventListener('click',function(){

        // Definimos la posicion del selector 1

        for(opcion of selector){
            if(opcion.selected){
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
            if(opcion.selected){
                   valorSelecionado2 = opcion;
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
    let ruta = [];
    let listaDelDia = [];
    let horariosEnEnteros=[];
    let listaDiferencias = []
    let listaDiferencias2 = [];
    let actual1 = document.getElementById('actual1');
    let actual2 = document.getElementById('actual2');
    let actual3 = document.getElementById('actual3');
    let actual4 = document.getElementById('actual4');
    let futuro1 = document.getElementById('futuro1');
    let futuro2 = document.getElementById('futuro2');
    let futuro3 = document.getElementById('futuro3');
    let futuro4 = document.getElementById('futuro4');
    
    
       
 // Aqui definimos donde localidad de salida y camino

          if(opcionbase.selected == true && opcionbase2.selected == false)  {
          ruta = todosTucumanDestino[posicion2-1]
          }
          if(opcionbase2.selected == true && opcionbase.selected == false){
            ruta = todosDestinoTucuman[posicion-1]
          }
              
 //    Aqui definimos el array dependiendo el dia de la semana
        
    
        if(dia == 0){
            diaRango = ruta[0].slice(0,ruta[0].length)
        
        }
        if(dia >= 1 && dia <=5){
            diaRango = ruta[1].slice(0,ruta[1].length);
        
        }
        if(dia > 5){
            diaRango = ruta[2].slice(0,ruta[2].length);
        }
        
            // Aqui extraemos del array de arriba los valores de cada horario y lo agregamos a la lista del dia
           
                          for (i=0; i < diaRango.length; i++){
                        listaDelDia.push(diaRango[i].valor)
            }

                // Aqui usamos la lista con los valores y las pasamos a numero enteros junto con los minutos
       
                          for(let i=0 ; i < listaDelDia.length ; i++){
              
                      let horasEnEnteros=  (Math.trunc(listaDelDia[i]))  * 60;
                            let minutosEnEnteros = (listaDelDia[i] - (Math.trunc(listaDelDia[i])))*100;
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
                            }
                        }
                    
                             
                                
                //  Aqui definimos los mensajes a mostrar en el primer campo       
                if(anteriorPasado < 3000){

                    if(Object.keys(diaRango[listaDiferencias.indexOf(anteriorPasado)]).length > 3){

                        actual1.textContent = `Bondis de las ${diaRango[listaDiferencias.indexOf(anteriorPasado)].nombre}`

                        if(anteriorPasado >= 120){
                            actual2.textContent = 'Iniciaron sus recorridos hace un par horas'
                        }
                        if(anteriorPasado>60 && anteriorPasado < 120){
                            actual2.textContent = 'Iniciaron sus recorridos hace mas de 1 hora'
                        }
                        if(anteriorPasado==60){
                            actual2.textContent = 'Iniciaron sus recorridos hace 1 hora'
                        }
                        if(anteriorPasado < 60 && anteriorPasado>5){
                            actual2.textContent = `Iniciaron sus recorridos hace ${Math.floor(anteriorPasado)} minutos`
                        }
                         if(anteriorPasado < 5){
                            actual2.textContent = 'Iniciaron sus recorridos hace menos de 5 minutos'
                        }
                        actual4.textContent = `2° Recorrido : ${diaRango[listaDiferencias.indexOf(anteriorPasado)].recorrido2}`
                        actual3.textContent = `1° Recorrido : ${diaRango[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                    }
                    else{

                        actual1.textContent = `Bondi de las ${diaRango[listaDiferencias.indexOf(anteriorPasado)].nombre}`
                if(anteriorPasado >= 120){
                    actual2.textContent = 'Inició su recorrido hace un par horas'
                }
                if(anteriorPasado>60 && anteriorPasado < 120){
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
                actual3.textContent = `Recorrido : ${diaRango[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
                    }
                }
                     
                        

                    else{
                        actual1.textContent = '';
                        actual2.textContent = 'No pasó ningun bondi aún'
                        actual3.textContent =''
                    }
                    
                
                        //   Aqui en el segundo campo  
                       

                       for(i = 0; i < horariosEnEnteros.length; i++){
                
                        let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;;
                         listaDiferencias2.push(difHorariosHora); 
               }
            
                        for(i=0; i < listaDiferencias2.length; i++){
                            if(listaDiferencias2[i] >0){
                            elMasCercano = Math.min(elMasCercano,listaDiferencias2[i]);
                            }
                        }
                        if(elMasCercano < 3000){

                            if(Object.keys(diaRango[listaDiferencias2.indexOf(elMasCercano)]).length > 3){

                                futuro1.textContent = ` Próximos bondis a las ${diaRango[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
    
                                if(elMasCercano >= 120){
                                    futuro2.textContent = 'Iniciarán sus recorridos en un par horas'
                                }   
                                if(elMasCercano>60 && elMasCercano < 120){
                                    futuro2.textContent = 'Iniciarán sus recorridos en poco más de 1 hora'
                                }
                                if(elMasCercano==60){
                                    futuro2.textContent = 'Iniciarán sus recorridos dentro 1 hora'
                                }
                                if(elMasCercano < 60 && elMasCercano>5){
                                    futuro2.textContent = `Iniciarán sus recorridos en ${Math.floor(elMasCercano)} minutos`
                                }
                                    if(elMasCercano < 5){
                                       futuro2.textContent = 'Iniciarán sus recorridos en menos de 5 minutos'
                                    }
                                    if(elMasCercano == 0){
                                        futuro2.textContent = 'Están iniciando sus recorridos'
                                    }
                                    futuro3.textContent = `1° Recorrido : ${diaRango[listaDiferencias2.indexOf(elMasCercano)].recorrido}`
                                    futuro4.textContent = `2° Recorrido : ${diaRango[listaDiferencias2.indexOf(elMasCercano)].recorrido2}`
                            }
    
                                else{
                                    futuro1.textContent = ` Próximo bondi a las ${diaRango[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
                              
                                        if(elMasCercano >= 120){
                                            futuro2.textContent = 'Inicia su recorrido en un par horas'
                                        }   
                                        if(elMasCercano>60 && elMasCercano < 120){
                                            futuro2.textContent = 'Inicia su recorrido en poco más de 1 hora'
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
                                            if(elMasCercano == 0){
                                                futuro2.textContent = 'Está iniciando su recorrido'
                                            }
                                            futuro3.textContent = `Recorrido : ${diaRango[listaDiferencias2.indexOf(elMasCercano)].recorrido}`
                                }
                                
                        }
                        else{
                            futuro1.textContent ="";
                            futuro2.textContent = "No hay más colectivos por hoy por ésta ruta"
                            futuro3.textContent="";
                        }

                      
                                  
                           
         
    
    $('.resultados').css('display','flex')
    $('.resultados2').css('display','flex')     
    $('.mensaje2').css('display', 'flex')   
   mensaje2.addEventListener('click', function(){
    $('.mensaje2').css('display', 'none')  
    opcionbase.selected = true;
    opcionbase2.selected = true;
})
    
})
mensaje2.addEventListener('click', function(){
    $('.mensaje2').css('display', 'none')  
    opcionbase.selected = true;
    opcionbase2.selected = true;
})



// function busquedaManual(){
    
//     const horariosLvFloAl = [

//         {
//             "nombre":"04:40",
//                 "valor":4.4,
//                 "recorrido": ["Fortin","Terminal"]
//         },
//         {
//             "nombre":"05:35",
//             "valor":5.35,
//             "recorrido":"Fortin → Alternativa"
//         },
//         {
//             "nombre":"06:10",
//             "valor":6.10,
//             "recorrido":"1) Fortin → Banda del Río Salí || 2) Colonia 10 → Autopista"
//         },
//         {
//             "nombre":"06:20",
//             "valor":6.25,
//             "recorrido":"Colonia 5 hasta Banda del Río Salí"
//         },
//         // {
//         //     "nombre":"06:40",
//         //     "valor":6.4,
//         //     "recorrido":"B° La Cancha → Alternativa"
//         // },
//         {
//             "nombre":"06:50",
//             "valor":6.5,
//             "recorrido":"Colonia 4 → Fonda → Alternativa"
//         },
//         {
//             "nombre":"07:20",
//             "valor":7.2,
//             "recorrido":"1) Colonia 4 → B° La Cancha → Autopista || 2) Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"07:40",
//             "valor":7.4,
//             "recorrido":"Finca Mayo → Cochuchal → Banda del Río Salí"
//         },
//         {
//             "nombre":"07:50",
//             "valor":7.5,
//             "recorrido":"1) Colonia 4 → B° La Cancha → Autopista || 2) Alternativa"
//         },
//         {
//             "nombre":"08:45",
//             "valor":8.45,
//             "recorrido":"Colonia 4 → B° La Cancha → Cochuchal → Autopista"
//         },
//         {
//             "nombre":"09:20",
//             "valor":9.2,
//             "recorrido":"Fortin → Talar → Banda del Río Salí"
//         },
//         {
//             "nombre":"09:50",
//             "valor":9.5,
//             "recorrido":"Colonia 4 → B° La Cancha →Talar → Autopista"
//         },
//         {
//             "nombre":"10:30",
//             "valor":10.3,
//             "recorrido":"Fortin → Talar → Banda del Río Salí"
//         },
//         {
//             "nombre":"11:40",
//             "valor":11.30,
//             "recorrido":"Fortin → Talar → Banda del Río Salí"
//         },
//         {
//             "nombre":"12:30",
//             "valor":12.3,
//             "recorrido":"Colonia 4 → B° La Cancha →Talar → Autopista"
//         },
//         // {
//         //     "nombre":"12:40",
//         //     "valor":12.4,
//         //     "recorrido":"Finca Mayo → Talar → Banda del Río Salí"
//         // },
//         {
//             "nombre":"13:15",
//             "valor":13.15,
//             "recorrido":"Colonia 4 → B° La Cancha → Talar → Autopista"
//         },
//         {
//             "nombre":"13:50",
//             "valor":13.5,
//             "recorrido":"B° La Cancha → Cochuchal → Banda del Río Salí"
//         },
//         {
//             "nombre":"14:45",
//             "valor":14.45,
//             "recorrido":"Colonia 4 → B° La Cancha → Talar → Banda del Río Salí"
//         },
//         {
//             "nombre":"15:50",
//             "valor":15.5,
//             "recorrido":"1) Fortin → Alternativa || 2) Colonia 4 → B° La Cancha → Autopista"
//         },
//         // {
//         //     "nombre":"16:20",
//         //     "valor":16.2,
//         //     "recorrido":"La Marta → Colonia 4 → Autopista"
//         // },
//         {
//             "nombre":"16:50",
//             "valor":16.5,
//             "recorrido":"1) Colonia 4 → Autopista || 2) Colonia 3 → Banda del Río Salí"
//         },
//         // {
//         //     "nombre":"17:35",
//         //     "valor":17.35,
//         //     "recorrido":"Colonia 4 → B° La Cancha → Alternativa"
//         // },
//         {
//             "nombre":"17:35",
//             "valor":17.35,
//             "recorrido":"Colonia 4 → B° La Cancha → Alternativa "
//         },
//         {
//             "nombre":"17:50",
//             "valor":17.5,
//             "recorrido":"Fortin → Talar →  Banda del Río Salí"
//         },
//         // {
//         //     "nombre":"18:10",
//         //     "valor":18.1,
//         //     "recorrido":"Colonia 4  → Autopista"
//         // },
//         {
//             "nombre":"18:30",
//             "valor":18.3,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"19:00",
//             "valor":19,
//             "recorrido":"La Marta → B° La Cancha → Banda del Río Salí"
//         },
//         // {
//         //     "nombre":"20:55",
//         //     "valor":20.55,
//         //     "recorrido":"Mayo → Colonia 4 → Alderetes → Autopista"
//         // },
//         {
//             "nombre":"21:05",
//             "valor":21.15,
//             "recorrido":"Colonia 4 → B° La Cancha → Autopis"
//         }
       
//     ]
//     const horariosSFloAl = [
//         {
//             "nombre":"04:40",
//             "valor":4.4,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"05:45",
//             "valor":5.45,
//             "recorrido":"Fortin → Autopista"
//         },
//         {
//             "nombre":"06:10",
//             "valor":6.10,
//             "recorrido":"Colonia 10 → B° La Cancha → Cochuchal→ Autopista"
//         },
//         {
//             "nombre":"06:25",
//             "valor":6.25,
//             "recorrido":"Colonia 5 Florida → Fortin(Trasbordo)"
//         },
//         {
//             "nombre":"06:50",
//             "valor":6.5,
//             "recorrido":"Colonia 4 → B° La Cancha → Alternativa"
//         },
//         {
//             "nombre":"07:18",
//             "valor":7.18,
//             "recorrido":"Colonia 4 → B° La Cancha → Autopista"
//         },
//         {
//             "nombre":"07:40",
//             "valor":7.4,
//             "recorrido":"Finca Mayo → Talar → Banda del Río Salí"
//         },
//         {
//             "nombre":"07:50",
//             "valor":7.5,
//             "recorrido":"Colonia 4 → B° La Cancha → Autopista"
//         },
//         {
//             "nombre":"08:45",
//             "valor":8.45,
//             "recorrido":"Colonia 4 → B° La Cancha → Banda del Río Salí"
//         },
//         {
//             "nombre":"09:20",
//             "valor":9.2,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"10:30",
//             "valor":10.30,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"11:40",
//             "valor":11.40,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"12:40",
//             "valor":12.4,
//             "recorrido":"Finca Mayo → Banda del Río Salí"
//         },
//         {
//             "nombre":"13:15",
//             "valor":13.15,
//             "recorrido":"Colonia 4 → B° La Cancha → Autopista"
//         },
//         {
//             "nombre":"14:50",
//             "valor":14.5,
//             "recorrido":"B° La Cancha → Banda del Río Salí"
//         },
//         {
//             "nombre":"15:50",
//             "valor":15.5,
//             "recorrido":"Colonia 4 → B° La Cancha → Autopista"
//         },
//         {
//             "nombre":"16:50",
//             "valor":16.5,
//             "recorrido":"Colonia 3 → Banda del Río Salí"
//         },
//         {
//             "nombre":"17:50",
//             "valor":17.5,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"19:00",
//             "valor":19,
//             "recorrido":"La Marta → B° La Cancha → Banda del Río Salí"
//         }
//     ]
//     const horariosDFloAl = [

//         {
//             "nombre":"07:40",
//             "valor":7.4,
//             "recorrido":"Finca Mayo → Talar → Banda del Río Salí"
//         },
//         {
//             "nombre":"10:30",
//             "valor":10.30,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"12:40",
//             "valor":12.4,
//             "recorrido":"Finca Mayo → Banda del Río Salí"
//         },
//         {
//             "nombre":"14:50",
//             "valor":14.5,
//             "recorrido":"B° La Cancha → Banda del Río Salí"
//         },
//         {
//             "nombre":"16:50",
//             "valor":16.5,
//             "recorrido":"Colonia 3 → Banda del Río Salí"
//         },
//         {
//             "nombre":"17:50",
//             "valor":17.5,
//             "recorrido":"Fortin → Banda del Río Salí"
//         },
//         {
//             "nombre":"19:10",
//             "valor":19.1,
//             "recorrido":"Colonia 10 → Colonia 3 → B° La Cancha → Banda del Río Salí"
//         }
//     ]
//     const horariosLvFloPo = [

//         {
//             "nombre":"04:50",
//             "valor":4.5,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"05:50",
//             "valor":5.5,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"06:20",
//             "valor":6.2,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"06:50",
//             "valor":6.5,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"07:25",
//             "valor":7.25,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"07:55",
//             "valor":7.55,
//             "recorrido":"Fortin"
//         },
       
//         {
//             "nombre":"08:25",
//             "valor":8.25,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"09:05",
//             "valor":9.05,
//             "recorrido":"Esquina de Lastra"
//         },
       
//         {
//             "nombre":"09:55",
//             "valor":9.55,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"10:25",
//             "valor":10.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"10:55",
//             "valor":10.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"11:25",
//             "valor":11.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"11:55",
//             "valor":11.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"12:40",
//             "valor":12.40,
//             "recorrido":"B° La Cancha"
//         },
//         // {
//         //     "nombre":"12:25",
//         //     "valor":12.25,
//         //     "recorrido":"Fortin hasta Esquina Esquina Llona"
//         // },
//         {
//             "nombre":"13:25",
//             "valor":13.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"13:50",
//             "valor":13.5,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"14:55",
//             "valor":14.55,
//             "recorrido":"Esquina de Lastra"
//         },
//         {
//             "nombre":"15:55",
//             "valor":15.55,
//             "recorrido":"Fortin"
//         },
//         {
//             "nombre":"16:55",
//             "valor":16.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"17:55",
//             "valor":17.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"18:55",
//             "valor":18.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"19:25",
//             "valor":19.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"20:25",
//             "valor":20.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"21:20",
//             "valor":21.2,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"22:20",
//             "valor":22.20,
//             "recorrido":"B° La Cancha"
//         },
       
       
//     ]
//     const horariosSFloPo = [
//         {
//             "nombre":"04:50",
//             "valor":4.5,
//             "recorrido":"B° La Cancha"
//         },
        
//         {
//             "nombre":"05:50",
//             "valor":5.5,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"06:25",
//             "valor":6.25,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"06:50",
//             "valor":6.5,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"07:25",
//             "valor":7.25,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"07:55",
//             "valor":7.55,
//             "recorrido":"Fortin"
//         },
       
//         {
//             "nombre":"08:25",
//             "valor":8.25,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"09:05",
//             "valor":9.05,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"09:55",
//             "valor":9.55,
//             "recorrido":"B° La Cancha"
//         },
       
//         {
//             "nombre":"10:25",
//             "valor":10.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"10:55",
//             "valor":10.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"11:25",
//             "valor":11.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"11:55",
//             "valor":11.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"12:40",
//             "valor":12.40,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"12:25",
//             "valor":12.25,
//             "recorrido":"Fortin hasta Esquina Esquina Llona"
//         },
//         {
//             "nombre":"13:25",
//             "valor":13.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"13:55",
//             "valor":13.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"15:00",
//             "valor":15,
//             "recorrido":"Esquina de Lastra"
//         },
//         {
//             "nombre":"15:55",
//             "valor":15.55,
//             "recorrido":"Fortin"
//         },
//         {
//             "nombre":"16:55",
//             "valor":16.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"18:55",
//             "valor":18.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"19:25",
//             "valor":19.25,
//             "recorrido":"Fortin"
//         },
//         {
//             "nombre":"20:25",
//             "valor":20.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"20:55",
//             "valor":20.55,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"21:25",
//             "valor":21.25,
//             "recorrido":"B° La Cancha"
//         },
//         {
//             "nombre":"22:20",
//             "valor":22.20,
//             "recorrido":"B° La Cancha"
//         },
//     ]
//     const horariosDFloPo = [
// {
//     "nombre":"04:50",
//     "valor":4.5,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"05:50",
//     "valor":5.5,
//     "recorrido":"B° La Cancha"
// },   
// {
//     "nombre":"06:50",
//     "valor":6.5,
//     "recorrido":"Fortin"
// },
// {
//     "nombre":"07:55",
//     "valor":7.55,
//     "recorrido":"Fortin"
// },
// {
//     "nombre":"08:55",
//     "valor":8.55,
//     "recorrido":"Fortin"
// },
// {
//     "nombre":"09:55",
//     "valor":9.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"10:55",
//     "valor":10.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"11:55",
//     "valor":11.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"12:55",
//     "valor":12.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"13:55",
//     "valor":13.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"15:00",
//     "valor":15,
//     "recorrido":"Esquina de Lastra"
// },
// {
//     "nombre":"15:55",
//     "valor":15.55,
//     "recorrido":"Fortin"
// },
// {
//     "nombre":"16:55",
//     "valor":16.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"17:55",
//     "valor":17.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"18:55",
//     "valor":18.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"19:25",
//     "valor":19.25,
//     "recorrido":"Fortin"
// },
// {
//     "nombre":"20:00",
//     "valor":20.00,
//     "recorrido":"Esquina Lastra"
// },
// {
//     "nombre":"20:55",
//     "valor":20.55,
//     "recorrido":"B° La Cancha"
// },
// {
//     "nombre":"22:20",
//     "valor":22.20,
//     "recorrido":"B° La Cancha"
// },

//     ]
//     const horariosLvSMAl = [

//         {
//             "nombre":"05:20",
//             "valor":5.2,
//             "recorrido":"Terminal → Autopista → B° La Cancha"
//         },
//         // {
//         //     "nombre":"06:15",
//         //     "valor":6.15,
//         //     "recorrido":"Terminal → Autopista → Los Perez"
//         // },
//         {
//             "nombre":"06:25",
//             "valor":6.25,
//             "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin → Mayo"
//         },
//         {
//             "nombre":"07:15",
//             "valor":7.15,
//             "recorrido":"Terminal → Banda del Río Salí → La Marta"
//         },
//         {
//             "nombre":"08:00",
//             "valor":8,
//             "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Colonia 4"
//         },
//         {
//             "nombre":"08:35",
//             "valor":8.35,
//             "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
//         },
//         {
//             "nombre":"09:00",
//             "valor":9,
//             "recorrido":"Terminal → Autopista → B° La Cancha → Colonia 4 "
//         },
//         {
//             "nombre":"09:45",
//             "valor":9.45,
//             "recorrido":"Terminal → Banda del Río Salí → Fortin"
//         },
//         {
//             "nombre":"10:45",
//             "valor":10.45,
//             "recorrido":"Terminal → Banda del Río Salí → Fortin"
//         },
//         {
//             "nombre":"11:15",
//             "valor":11.15,
//             "recorrido":"Terminal → Autopista → B° La Cancha → Los Perez"
//         },
//         // {
//         //     "nombre":"11:40",
//         //     "valor":11.4,
//         //     "recorrido":"Terminal → Autopista → Cochuchal → Mayo"
//         // },
//         // {
//         //     "nombre":"12:15",
//         //     "valor":12.15,
//         //     "recorrido":"Terminal → Alternativa → B° La Cancha"
//         // },
//         {
//             "nombre":"12:20",
//             "valor":12.2,
//             "recorrido":"Terminal → Catalinas Park → Autopista → B° La Cancha → Colonia 4"
//         },
//         {
//             "nombre":"12:45",
//             "valor":12.45,
//             "recorrido":"Terminal → Banda del Río Salí → Colonia 3"
//         },
//         {
//             "nombre":"13:15",
//             "valor":13.15,
//             "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Colonia 4"
//         },
//         {
//             "nombre":"13:30",
//             "valor":13.3,
//             "recorrido":"Terminal → Autopista → B° La Cancha → La Marta"
//         },
//         {
//             "nombre":"14:00",
//             "valor":14,
//             "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
//         },
//         {
//             "nombre":"14:50",
//             "valor":14.5,
//             "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha"
//         },
//         {
//             "nombre":"15:50",
//             "valor":15.5,
//             "recorrido":"Terminal → Banda del Río Salí → Colonia 3"
//         },
//         {
//             "nombre":"16:50",
//             "valor":16.5,
//             "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin"
//         },
//         {
//             "nombre":"17:45",
//             "valor":17.45,
//             "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
//         },
//         // {
//         //     "nombre":"18:20",
//         //     "valor":18.2,
//         //     "recorrido":"Terminal → Alternativa → B° La Cancha → Colonia 4"
//         // },
//         {
//             "nombre":"18:30",
//             "valor":18.3,
//             "recorrido":"Terminal → Banda del Río Salí → Colonia 4"
//         },
//         {
//             "nombre":"19:00",
//             "valor":19,
//             "recorrido":"Terminal → Banda del Río Salí → Colonia 4"
//         },
//         {
//             "nombre":"19:45",
//             "valor":19.45,
//             "recorrido":"Terminal → Banda del Río Salí → Mayo"
//         },
//         {
//             "nombre":"20:30",
//             "valor":20.3,
//             "recorrido":"Terminal → Banda del Río Salí → Fortin"
//         },
//         {
//             "nombre":"21:00",
//             "valor":21,
//             "recorrido":"Terminal → Autopista → B° La Cancha"
//         },
//         {
//             "nombre":"21:30",
//             "valor":21.30,
//             "recorrido":"Terminal → Autopista → B° La Cancha"
//         },
//         {
//             "nombre":"22:30",
//             "valor":22.30,
//             "recorrido":"Terminal → Autopista → Fortin"
//         }

        
//     ]
//     const horariosSSMAl = [
//             {
//                 "nombre":"05:20",
//                 "valor":5.2,
//                 "recorrido":"Terminal → Autopista → B° La Cancha"
//             },
//             {
//                 "nombre":"06:25",
//                 "valor":6.25,
//                 "recorrido":"Terminal → Banda del Río Salí → Mayo"
//             },
//             {
//                 "nombre":"07:15",
//                 "valor":7.15,
//                 "recorrido":"Terminal → Banda del Río Salí → La Marta"
//             },
//             {
//                 "nombre":"08:00",
//                 "valor":8,
//                 "recorrido":"Terminal → Autopista → Cochuchal"
//             },
//             {
//                 "nombre":"08:35",
//                 "valor":8.35,
//                 "recorrido":"Terminal → Banda del Río Salí → Fortin"
//             },
//             {
//                 "nombre":"09:45",
//                 "valor":9.45,
//                 "recorrido":"Terminal → Banda del Río Salí → Fortin"
//             },
//             {
//                 "nombre":"10:45",
//                 "valor":10.45,
//                 "recorrido":"Terminal → Banda del Río Salí → Fortin"
//             },
//             {
//                 "nombre":"12:20",
//                 "valor":12.2,
//                 "recorrido":"Terminal → Autopista → B° La Cancha → Colonia 4"
//             },
//             {
//                 "nombre":"13:30",
//                 "valor":13.3,
//                 "recorrido":"Terminal → Autopista → B° La Cancha → La Marta"
//             },
//             {
//                 "nombre":"14:00",
//                 "valor":14,
//                 "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
//             },
//             {
//                 "nombre":"14:50",
//                 "valor":14.5,
//                 "recorrido":"Terminal → Banda del Río Salí → B° La Cancha → Colonia 4"
//             },
//             {
//                 "nombre":"16:00",
//                 "valor":16,
//                 "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Colonia 3"
//             },
//             {
//                 "nombre":"16:50",
//                 "valor":16.5,
//                 "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin"
//             },
//             {
//                 "nombre":"17:45",
//                 "valor":17.45,
//                 "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
//             },
//             {
//                 "nombre":"19:00",
//                 "valor":19,
//                 "recorrido":"Terminal → Banda del Río Salí → Colonia 4"
//             },
//             {
//                 "nombre":"19:45",
//                 "valor":19.45,
//                 "recorrido":"Terminal → Banda del Río Salí → Mayo"
//             },
//             {
//                 "nombre":"20:30",
//                 "valor":20.3,
//                 "recorrido":"Terminal → Banda del Río Salí → Fortin"
//             },
//             {
//                 "nombre":"21:30",
//                 "valor":21.30,
//                 "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
//             },
//             // {
//             //     "nombre":"22:00",
//             //     "valor":22,
//             //     "recorrido":"Terminal → Alternativa → Colonia 4"
//             // },
//             {
//                 "nombre":"22:30",
//                 "valor":22.30,
//                 "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
//             }
//     ]
//     const horariosDSMAl = [

//             {
//                 "nombre":"06:25",
//                 "valor":6.25,
//                 "recorrido":"Terminal → Banda del Río Salí → Mayo"
//             },
//             {
//                 "nombre":"09:45",
//                 "valor":9.45,
//                 "recorrido":"Terminal → Banda del Río Salí → Fortin → Colonia 2"
//             },
//             {
//                 "nombre":"11:40",
//                 "valor":11.40,
//                 "recorrido":"Terminal → Banda del Río Salí → Cochuchal→ Fortin → Mayo"
//             },
//             {
//                 "nombre":"14:00",
//                 "valor":14,
//                 "recorrido":"Terminal → Banda del Río Salí → B° La Cancha"
//             },
//             {
//                 "nombre":"16:00",
//                 "valor":16,
//                 "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Colonia 3"
//             },
//             {
//                 "nombre":"17:45",
//                 "valor":17.45,
//                 "recorrido":"Terminal → Banda del Río Salí → Mayo"
//             },
//             {
//                 "nombre":"19:45",
//                 "valor":19.45,
//                 "recorrido":"Terminal → Banda del Río Salí → Mayo"
//             },
//             {
//                 "nombre":"20:30",
//                 "valor":20.3,
//                 "recorrido":"Terminal → Banda del Río Salí → Fortin"
//             }
  
//     ]
//     const horariosLvSMPo = [
//             {
//                 "nombre":"06:00",
//                 "valor":6,
//                 "recorrido":"Terminal → Colonia 4"
//             },
//             {
//                 "nombre":"06:40",
//                 "valor":6.1,
//                 "recorrido":"Terminal → b° La Cancha"
//             },
//             {
//                 "nombre":"07:00",
//                 "valor":7,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"07:30",
//                 "valor":7.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"08:15",
//                 "valor":8.15,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"09:00",
//                 "valor":9,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"09:30",
//                 "valor":9.30,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"10:00",
//                 "valor":10,
//                 "recorrido":"Terminal → Colonia 4"
//             },
//             {
//                 "nombre":"10:30",
//                 "valor":10.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"11:00",
//                 "valor":11,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             // {
//             //     "nombre":"11:20",
//             //     "valor":11.2,
//             //     "recorrido":"Terminal → Fortin"
//             // },
//             {
//                 "nombre":"11:45",
//                 "valor":11.45,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"12:30",
//                 "valor":12.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             // {
//             //     "nombre":"12:40",
//             //     "valor":12.4,
//             //     "recorrido":"Terminal → Fortin"
//             // },
//             {
//                 "nombre":"13:00",
//                 "valor":13,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"13:30",
//                 "valor":13.3,
//                 "recorrido":"Terminal → Esquina de Lastra"
//             },
//             // {
//             //     "nombre":"14:00",
//             //     "valor":14,
//             //     "recorrido":"Terminal → B° La Cancha"
//             // },
//             {
//                 "nombre":"14:20",
//                 "valor":14.2,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"15:00",
//                 "valor":15,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"16:00",
//                 "valor":16,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"17:00",
//                 "valor":17,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             // {
//             //     "nombre":"17:10",
//             //     "valor":17.1,
//             //     "recorrido":"Terminal → B° La Cancha"
//             // },
//             {
//                 "nombre":"17:30",
//                 "valor":17.3,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"18:00",
//                 "valor":18,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"18:30",
//                 "valor":18.3,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"19:15",
//                 "valor":19.15,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"19:30",
//                 "valor":19.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"20:00",
//                 "valor":20,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"20:30",
//                 "valor":20.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"21:00",
//                 "valor":21,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"21:30",
//                 "valor":21.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"22:00",
//                 "valor":22.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"22:30",
//                 "valor":22.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"23:30",
//                 "valor":23.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"00:30",
//                 "valor":24.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             }
//     ]
//     const horariosSSMPo = [
//             {
//                 "nombre":"06:00",
//                 "valor":6,
//                 "recorrido":"Terminal → Colonia 4"
//             },
//             {
//                 "nombre":"06:40",
//                 "valor":6.1,
//                 "recorrido":"Terminal → b° La Cancha"
//             },
//             {
//                 "nombre":"07:00",
//                 "valor":7,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"07:30",
//                 "valor":7.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"08:15",
//                 "valor":8.15,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"09:00",
//                 "valor":9,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"09:30",
//                 "valor":9.30,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"10:00",
//                 "valor":10,
//                 "recorrido":"Terminal → Colonia 4"
//             },
//             {
//                 "nombre":"10:30",
//                 "valor":10.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"11:00",
//                 "valor":11,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"11:45",
//                 "valor":11.45,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"12:30",
//                 "valor":12.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"13:00",
//                 "valor":13,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"13:55",
//                 "valor":13.55,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"14:15",
//                 "valor":14.15,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"15:00",
//                 "valor":15,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"16:00",
//                 "valor":16,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"17:00",
//                 "valor":17,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"17:30",
//                 "valor":17.3,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"18:00",
//                 "valor":18,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"18:30",
//                 "valor":18.3,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"19:15",
//                 "valor":19.15,
//                 "recorrido":"Terminal → B° La Cancha → Colonia 4"
//             },
//             {
//                 "nombre":"19:30",
//                 "valor":19.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"20:00",
//                 "valor":20,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"20:30",
//                 "valor":20.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"21:00",
//                 "valor":21,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"21:30",
//                 "valor":21.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"22:30",
//                 "valor":22.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"23:30",
//                 "valor":23.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//     ]
//     const horariosDSMPo = [
//             {
//                 "nombre":"06:00",
//                 "valor":6,
//                 "recorrido":"Terminal → Colonia 4"
//             },
//             {
//                 "nombre":"07:00",
//                 "valor":7,
//                 "recorrido":"Terminal → Fortin"
//             },

//             {
//                 "nombre":"08:00",
//                 "valor":8,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"09:00",
//                 "valor":9,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"10:00",
//                 "valor":10,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"11:00",
//                 "valor":11,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"12:00",
//                 "valor":12,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"12:30",
//                 "valor":12.3,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"13:00",
//                 "valor":13,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"14:15",
//                 "valor":14.15,
//                 "recorrido":"Terminal → Esquina Lastra"
//             },
//             {
//                 "nombre":"15:00",
//                 "valor":15,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"16:00",
//                 "valor":16,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"17:00",
//                 "valor":17,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"18:00",
//                 "valor":18,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"18:30",
//                 "valor":18.3,
//                 "recorrido":"Terminal → Fortin"
//             },
//             {
//                 "nombre":"19:10",
//                 "valor":19.1,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"20:00",
//                 "valor":20,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"20:30",
//                 "valor":20.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"21:00",
//                 "valor":21,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"21:30",
//                 "valor":21.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"22:30",
//                 "valor":22.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             },
//             {
//                 "nombre":"23:30",
//                 "valor":23.3,
//                 "recorrido":"Terminal → B° La Cancha"
//             }
//     ]
//     const todosSmAlderetes = [horariosLvSMAl,horariosSSMAl,horariosDSMAl];
//     const todosSmPosse = [horariosLvSMPo,horariosSSMPo,horariosDSMPo];    
//     const todosFloridaAlderetes = [horariosLvFloAl,horariosSFloAl,horariosDFloAl];
//     const todosFloridaPosse = [horariosLvFloPo,horariosSFloPo,horariosDFloPo];
//     const todosFlorida = [todosFloridaAlderetes,todosFloridaPosse];
//     const todosSanMiguel = [todosSmAlderetes,todosSmPosse];
//     const todos = [todosFlorida,todosSanMiguel];
    


    

//     const selector3 = document.menu3.selector3;
//     const opcionbase3 = selector3[0]
//     const inputHora = document.getElementById('busquedaInput2');  
//     const botonAuto = document.getElementById('botonAuto');
// botonAuto.addEventListener('click', function(){
//     $('.busquedaManual-cont').css('display', 'none');
//     $('.botonAuto-cont').css('display', 'none');
//     $('.boton-cont2').css('display','none')
//     $('.resultados3').css('display','none')
//     $('.busquedaAuto-cont').css('display', 'flex');
//     $('.botonManual-cont').css('display', 'flex');
//     $('.boton-cont').css('display','flex')
//     $('.resultados-cont').css('height','200')
//     opcionbase.selected=true;
//     opcionbase2.selected=true;
//     opcionbase3.selected=true;
//     inputHora.value = ""
// })

// const botonManual = document.getElementById('botonManual');
// botonManual.addEventListener('click', function(){
//     $('.botonManual-cont').css('display', 'none');
//     $('.boton-cont').css('display','none')
//     $('.resultados2').css('display','none')
//     $('.resultados').css('display','none')
//     $('.busquedaManual-cont').css('display', 'flex');
//     $('.botonAuto-cont').css('display', 'flex');
//     $('.boton-cont2').css('display','flex')
//     $('.resultados-cont').css('height','100')
//     opcionbase.selected=true;
//     opcionbase2.selected=true;
// })   
// const boton2 = document.getElementById('boton2');
// boton2.addEventListener('click',function(){
    


//     const selector = document.menu.selector;
//     const opcionbase = selector[0]
//     const selector2 = document.menu2.selector2;
//     const opcionbase2 = selector2[0]
      

//     let valorSelecionado; 
//     let valorSelecionado2;
//     let valores = [];
//     let valores2= [];
//     let posicion;
//     let posicion2;
//     let actual1 = document.getElementById('actual1');
//     let actual3 = document.getElementById('actual3');
//     let textoInicio = document.getElementById('textoInicio');
//     let textoFin = document.getElementById('textoFin');


//      // Definimos la posicion del selector 1
    
        
        
//         for(opcion of selector){
//             if(opcion.selected && opcion.disabled == false){
//                    valorSelecionado = opcion
//                 }
//         }
//         for(i=0; i < selector.length;i++){
//             valores.push(selector[i])
//            }
         
//            for(i=0; i< valores.length;i++){
//                posicion=valores.indexOf(valorSelecionado)
//            }
           
    
//        // Definimos la posicion del selector 2

//         for(opcion of selector2){
//             if(opcion.selected && opcion.disabled == false){
//                    valorSelecionado2 = opcion
//                 }
//         }
//         for(i=0; i < selector2.length;i++){
//             valores2.push(selector2[i])
//            }
         
//            for(i=0; i< valores2.length;i++){
//                posicion3=valores2.indexOf(valorSelecionado2)
//            }
           
    

//     //  Definimos el dia 

 
//     let valorSelecionado3;
//     let valores3 = [];
//     let posicion3;
    

        
//         for(opcion of selector3){
//             if(opcion.selected && opcion.disabled == false){
//                    valorSelecionado3 = opcion
//                 }
//         }
        
//         for(i=0; i < selector3.length;i++){
//             valores3.push(selector3[i])
//            }
         
//            for(i=0; i< valores3.length;i++){
//                posicion3=valores3.indexOf(valorSelecionado3)
//            }
   
   

   
//       // Aqui definimos donde localidad de salida y camino

       
//       let localidad = todos[posicion-1];
//       let camino = localidad[(posicion3)-1];
//       let dia = camino[posicion3-1];
//       let listaDelDia = [];
//       let horariosEnEnteros = [];

   
    
//        // Aqui extraemos del array de arriba los valores de cada horario y lo agregamos a la lista del dia
       
//        for (i=0; i < dia.length; i++){
//         listaDelDia.push(dia[i].valor)
// }




// // Aqui usamos la lista con los valores y las pasamos a numero enteros junto con los minutos

//           for(let i=0 ; i < listaDelDia.length ; i++){

//             let horasEnEnteros = ((Math.trunc(listaDelDia[i]))*60);
//             let minutosEnEnteros = (listaDelDia[i] - Math.trunc(listaDelDia[i]))*100;
//             let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
//             horariosEnEnteros.push(horaMinutosEnEnteros);
         
// }



// const mensajeError = document.getElementById('mensaje');
// let hora = inputHora.value;
// if(hora < 0 || hora > 23|| hora == "" ){
//     $('.mensajeError').css('display','flex')
//     mensajeError.textContent = 'Ingresa un valor entre 0 y 23';   
// }
// else{
//     let horaEnEnteros =  hora * 60;
//     let masCercano= 3000;
//     let diferencias = [];




// for(i=0;i<horariosEnEnteros.length;i++){
//     diferencias.push(horariosEnEnteros[i]- horaEnEnteros)
// }


// for(i=0;i<diferencias.length;i++){
// if(diferencias[i]>=0){
    
    
//     masCercano= Math.min(masCercano,diferencias[i])
//     textoInicio.textContent = dia[diferencias.indexOf(masCercano)].recorrido[0]
//     textoFin.textContent = dia[diferencias.indexOf(masCercano)].recorrido[1]
//     mostrar1.textContent = `El bondi más cercano al horario que indicaste es el de las ${dia[diferencias.indexOf(masCercano)].nombre}`
//     if(posicion == 1 && posicion3 == 2){
//         mostrar2.textContent = `Inicio de recorrido: ${dia[diferencias.indexOf(masCercano)].recorrido}`
//     }
//     if(posicion == 1 && posicion3 == 1){
//         mostrar2.textContent = `Recorrido: ${dia[diferencias.indexOf(masCercano)].recorrido}`
       
        
//     }
    
   
    

//     $('.mensajeError').css('display','none')
//     $('.resultados3').css('display','flex')
//     $('.mensaje2').css('display', 'flex')  
//     const mensaje2 = document.querySelector('.mensaje2');
//     mensaje2.addEventListener('click', function(){
//     $('.mensaje2').css('display', 'none')  
//     // opcionbase.selected = true;
//     // opcionbase2.selected= true;
//     // inputHora.value = "";
// })

// }
// else{
//     mostrar1.textContent = 'No hay bondis cercanos al horario que pusiste';
//     mostrar2.textContent = "";
//     $('.resultados3').css('display','flex')
//     $('.mensaje2').css('display', 'flex')  
//     const mensaje2 = document.querySelector('.mensaje2');
//     mensaje2.addEventListener('click', function(){
//     $('.mensaje2').css('display', 'none')  
//     // opcionbase.selected = true;
//     // opcionbase2.selected= true;
// })
// }
    

// }

   


// }
// inputHora.addEventListener('click',function(){
//     $('.mensajeError').css('display','none')
//  })

 
// })

// }






    
    








