
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    reloj();
    busquedaManual();
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
            "salida":4.4,
            "recorrido": "Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"05:35",
            "salida":5.35,
            "recorrido":"Fortin → Talar → Alternativa"
        },
        {
            "nombre":"06:10",
            "salida":6.10,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí",
            "recorrido2":"Colonia 10 → Colonia 4 → Barrio La Cancha → Cochuchal → Alderetes → Autopista"
        },
        {
            "nombre":"06:20",
            "salida":6.2,
            "recorrido":"Colonia 5 → Fortin → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Colonia 4 → Fonda →  Talar →Alternativa"
        },
        {
            "nombre":"07:20",
            "salida":7.2,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa",
            "recorrido2":"Fortin → Talar →  Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Finca Mayo → Fortin → Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "salida":7.5,
            "recorrido":"Colonia 4 → Fonda → Talar → Alternativa",
            "recorrido2":"Colonia 4 → Barrio La Cancha → Alderetes → Autopista"
        },
        {
            "nombre":"08:45",
            "salida":8.45,
            "recorrido":"Colonia 4 → Barrio La Cancha → Cochuchal → Alderetes → Autopista",
            "recorrido2":"Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"09:20",
            "salida":9.2,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"09:50",
            "salida":9.5,
            "recorrido":"Colonia 4 → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
            
        },
        {
            "nombre":"11:40",
            "salida":11.40,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:20",
            "salida":12.2,
            "recorrido":"Fortin → Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Los Perez → Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Barrio La Cancha"
        },
        {
            "nombre":"13:50",
            "salida":13.5,
            "recorrido":"Barrio La Cancha → Cochuchal → Alderetes → Banda del Río Salí",
        },
        {
            "nombre":"14:45",
            "salida":14.45,
            "recorrido" : "Colonia 4 → Barrio La Cancha → Talar → Alderetes → Alternativa",
            "recorrido2":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"15:47",
            "salida":15.47,
            "recorrido":"Fortin → Talar → Alternativa"
        },
        {
            "nombre":"16:20",
            "salida":16.2,
            "recorrido":"La Marta → Colonia 4 → Barrio La Cancha → Alternativa"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Colonia 4 → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"17:35",
            "salida":17.35,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa "
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":"Fortin → Talar →  Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"La Marta → Colonia 3 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"21:05",
            "salida":21.15,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        }
       
    ]
    const horariosSFloAl = [
        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
            
        },
        {
            "nombre":"05:45",
            "salida":5.45,
            "recorrido":"Fortin → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"06:10",
            "salida":6.10,
            "recorrido":"Colonia 10 → Barrio La Cancha → Cochuchal→ Alderetes → Autopista"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Colonia 5 Florida → Fortin(Trasbordo)"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"07:18",
            "salida":7.18,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Finca Mayo → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "salida":7.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"08:45",
            "salida":8.45,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"09:20",
            "salida":9.2,
            "recorrido":"Fortin →Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "salida":10.30,
            "recorrido":"Fortin → Talar  → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"11:40",
            "salida":11.40,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
            
        },
        {
            "nombre":"12:40",
            "salida":12.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Barrio La Cancha → Talar →  Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"15:50",
            "salida":15.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
            
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Colonia 3 → Talar → Alderetes → Banda del Río Salí"
            
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":"Fortin → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"La Marta → Colonia 3 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        }
    ]
    const horariosDFloAl = [

        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "salida":10.30,
            "recorrido":"Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "salida":12.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Colonia 3 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":["Barrio La Cancha","Talar ","Alderetes","Banda del Río Salí"]
        },
        {
            "nombre":"19:10",
            "salida":19.1,
            "recorrido":"Colonia 10 → Colonia 3 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        }
    ]
    const horariosLvFloPo = [

        {
            "nombre":"04:50",
            "salida":4.5,
            "recorrido":"Barrio La Cancha → Paraiso → Dispensario → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:50",
            "salida":5.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:20",
            "salida":6.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:20",
            "salida":7.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:55",
            "salida":7.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"08:20",
            "salida":8.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:05",
            "salida":9.05,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:55",
            "salida":9.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"10:20",
            "salida":10.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:50",
            "salida":10.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:20",
            "salida":11.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:50",
            "salida":11.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "salida":12.40,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:20",
            "salida":13.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:50",
            "salida":13.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:55",
            "salida":15.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:55",
            "salida":17.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:50",
            "salida":18.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:20",
            "salida":19.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:50",
            "salida":20.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:20",
            "salida":21.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:20",
            "salida":22.20,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"23:20",
            "salida":23.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const horariosSFloPo = [
        {
            "nombre":"04:50",
            "salida":4.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        
        {
            "nombre":"05:50",
            "salida":5.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:25",
            "salida":7.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:55",
            "salida":7.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"08:25",
            "salida":8.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:05",
            "salida":9.05,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:55",
            "salida":9.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"10:25",
            "salida":10.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:55",
            "salida":10.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:25",
            "salida":11.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:55",
            "salida":11.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "salida":12.40,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        // {
        //     "nombre":"12:25",
        //     "salida":12.25,
        //     "recorrido":"Fortin hasta Esquina Llona"
        // },
        {
            "nombre":"13:25",
            "salida":13.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:55",
            "salida":13.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Esquina de Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:55",
            "salida":15.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:55",
            "salida":16.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:55",
            "salida":18.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:25",
            "salida":19.25,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:25",
            "salida":20.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:55",
            "salida":20.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:25",
            "salida":21.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:20",
            "salida":22.20,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const horariosDFloPo = [
{
    "nombre":"04:50",
    "salida":4.5,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"05:50",
    "salida":5.5,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},   
{
    "nombre":"06:50",
    "salida":6.5,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"07:55",
    "salida":7.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"08:55",
    "salida":8.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"09:55",
    "salida":9.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"10:55",
    "salida":10.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"11:55",
    "salida":11.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"12:55",
    "salida":12.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"13:55",
    "salida":13.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"15:00",
    "salida":15,
    "recorrido":"Esquina de Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"15:55",
    "salida":15.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"16:55",
    "salida":16.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"17:55",
    "salida":17.55,
    "recorrido":["Barrio La Cancha","Paraiso","Dispensario","Esquina Llona","Cevil Pozo","Banda del Río Salí"]
},
{
    "nombre":"18:55",
    "salida":18.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"19:25",
    "salida":19.25,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"20:00",
    "salida":20.00,
    "recorrido":"Esquina Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"20:55",
    "salida":20.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"22:20",
    "salida":22.20,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},

    ]
    const horariosLvSMAl = [

        {
            "nombre":"05:20",
            "salida":5.2,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Talar → Barrio La Cancha"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin → Mayo(por abajo)"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Alternativa → Talar → Colonia 4 → La Marta"
        },
        {
            "nombre":"07:15",
            "salida":7.15,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fonda → Colonia 4 → Los Perez"
        },
        {
            "nombre":"08:00",
            "salida":8,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Colonia 4"
        },
        {
            "nombre":"08:35",
            "salida":8.35,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
        },
        {
            "nombre":"09:00",
            "salida":9,
            "recorrido":"Terminal → Catalinas Park → Autopista → Talar → Barrio La Cancha → Colonia 4 "
        },
        {
            "nombre":"09:45",
            "salida":9.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
        },
        {
            "nombre":"10:45",
            "salida":10.45,
            "recorrido":"Terminal → Alternativa → Talar → Fortin"
        },
        {
            "nombre":"11:15",
            "salida":11.15,
            "recorrido":"Terminal → Catalinas Park → Autopista → Talar → Barrio La Cancha → La Marta"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Terminal → Catalinas Park → Alternativa → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"12:20",
            "salida":12.2,
            "recorrido":"Terminal → Catalinas Park → Autopista → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"12:45",
            "salida":12.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 3"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Terminal → Banda del Río Salí →  Alderetes → Cochuchal → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Talar → Barrio La Cancha → Mayo → La Marta"
        },
        {
            "nombre":"14:00",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha",
            "recorrido2":"Terminal → Alternativa → Talar → Fortin"
        },
        {
            "nombre":"15:50",
            "salida":15.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Colonia 4",
            "recorrido2":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin → Colonia 4"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Cochuchal → Fortin",
            "recorrido2":"Terminal → Alternativa → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"17:40",
            "salida":17.4,
            "recorrido":"Terminal → Alternativa → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"17:45",
            "salida":17.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Mayo → La Marta"
        },
        {
            "nombre":"18:20",
            "salida":18.2,
            "recorrido":"Terminal → Alternativa → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"19:45",
            "salida":19.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Mayo(por abajo)"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha"
        },
        {
            "nombre":"21:30",
            "salida":21.30,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"22:30",
            "salida":22.30,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"23:30",
            "salida":23.30,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        }
    ]
    const horariosSSMAl = [
            {
                "nombre":"05:20",
                "salida":5.2,
                "recorrido":"Terminal → Autopista → Talar → Barrio La Cancha"
            },
            {
                "nombre":"06:25",
                "salida":6.25,
                "recorrido":"Terminal → Banda del Río Salí →  Talar → Mayo"
            },
            {
                "nombre":"07:15",
                "salida":7.15,
                "recorrido":"Terminal → Banda del Río Salí → Talar → La Marta"
            },
            {
                "nombre":"08:00",
                "salida":8,
                "recorrido":"Terminal → Autopista → Cochuchal"
            },
            {
                "nombre":"08:35",
                "salida":8.35,
                "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
            },
            {
                "nombre":"09:45",
                "salida":9.45,
                "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
            },
            {
                "nombre":"10:45",
                "salida":10.45,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            },
            {
                "nombre":"12:20",
                "salida":12.2,
                "recorrido":"Terminal → Autopista → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"13:30",
                "salida":13.3,
                "recorrido":"Terminal → Autopista → Barrio La Cancha → La Marta"
            },
            {
                "nombre":"14:00",
                "salida":14,
                "recorrido":"Terminal → Banda del Río Salí → Barrio La Cancha"
            },
            {
                "nombre":"14:50",
                "salida":14.5,
                "recorrido":"Terminal → Banda del Río Salí → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Colonia 3"
            },
            {
                "nombre":"16:50",
                "salida":16.5,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin"
            },
            {
                "nombre":"17:45",
                "salida":17.45,
                "recorrido":"Terminal → Banda del Río Salí → Barrio La Cancha"
            },
            {
                "nombre":"19:00",
                "salida":19,
                "recorrido":"Terminal → Banda del Río Salí → Colonia 4"
            },
            {
                "nombre":"19:45",
                "salida":19.45,
                "recorrido":"Terminal → Banda del Río Salí → Mayo"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            },
            {
                "nombre":"21:30",
                "salida":21.30,
                "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
            },
            // {
            //     "nombre":"22:00",
            //     "salida":22,
            //     "recorrido":"Terminal → Alternativa → Colonia 4"
            // },
            {
                "nombre":"22:30",
                "salida":22.30,
                "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
            }
    ]
    const horariosDSMAl = [

            {
                "nombre":"06:25",
                "salida":6.25,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Mayo"
            },
            {
                "nombre":"09:45",
                "salida":9.45,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin → Colonia 2"
            },
            {
                "nombre":"11:40",
                "salida":11.40,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Cochuchal → Fortin → Mayo"
            },
            {
                "nombre":"14:00",
                "salida":14,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Cochuchal → Fortin → Colonia 3"
            },
            {
                "nombre":"17:45",
                "salida":17.45,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin → Mayo"
            },
            {
                "nombre":"19:45",
                "salida":19.45,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Mayo"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
            }
  
    ]
    const horariosLvSMPo = [
            {
                "nombre":"06:00",
                "salida":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"06:30",
                "salida":6.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"07:00",
                "salida":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"07:30",
                "salida":7.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"08:15",
                "salida":8.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"09:00",
                "salida":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"09:30",
                "salida":9.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"10:00",
                "salida":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"10:30",
                "salida":10.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:00",
                "salida":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:20",
                "salida":11.2,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"11:45",
                "salida":11.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"12:25",
                "salida":12.25,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"12:30",
                "salida":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:00",
                "salida":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:30",
                "salida":13.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"14:05",
                "salida":14.05,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"14:30",
                "salida":14.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "salida":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:00",
                "salida":17,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:30",
                "salida":17.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"18:00",
                "salida":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"18:30",
                "salida":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:10",
                "salida":19.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"19:30",
                "salida":19.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:00",
                "salida":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:45",
                "salida":20.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:00",
                "salida":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del Medio → Bosque → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:30",
                "salida":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:00",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:30",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"23:30",
                "salida":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Fortin → Colonia 4"
            },
            {
                "nombre":"00:30",
                "salida":24.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            }
    ]
    const horariosSSMPo = [
            {
                "nombre":"06:00",
                "salida":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"06:40",
                "salida":6.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"07:00",
                "salida":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"07:30",
                "salida":7.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"08:15",
                "salida":8.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"09:00",
                "salida":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"09:30",
                "salida":9.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"10:00",
                "salida":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"10:30",
                "salida":10.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:00",
                "salida":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:45",
                "salida":11.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"12:30",
                "salida":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:00",
                "salida":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:55",
                "salida":13.55,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"14:15",
                "salida":14.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "salida":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:00",
                "salida":17,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:30",
                "salida":17.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"18:00",
                "salida":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"18:30",
                "salida":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:15",
                "salida":19.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"19:30",
                "salida":19.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:00",
                "salida":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:00",
                "salida":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:30",
                "salida":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:30",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"23:30",
                "salida":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
    ]
    const horariosDSMPo = [
            {
                "nombre":"06:00",
                "salida":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"07:00",
                "salida":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },

            {
                "nombre":"08:00",
                "salida":8,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"09:00",
                "salida":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"10:00",
                "salida":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:00",
                "salida":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"12:00",
                "salida":12,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"12:30",
                "salida":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"13:00",
                "salida":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"14:15",
                "salida":14.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "salida":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:00",
                "salida":17,
                "recorrido":["Terminal","Barrio La Cancha"]
            },
            {
                "nombre":"18:00",
                "salida":18,
                "recorrido":["Terminal","Banda del Río Salí","Cevil Pozo","Esquina Llona", "Dispensario","Paraiso","Barrio La Cancha"]
            },
            {
                "nombre":"18:30",
                "salida":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:10",
                "salida":19.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:00",
                "salida":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:00",
                "salida":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:30",
                "salida":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:30",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"23:30",
                "salida":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            }
    ]
    const posseTerminalLaV = [
        {
            "nombre":"05:00",
            "salida":6,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:55",
            "salida":5.55,
            "recorrido":"Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:00",
            "salida":6,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:08",
            "salida":6.08,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:35",
            "salida":6.35,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:08",
            "salida":7.08,
            "recorrido":"Dispensario → Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09:10",
            "salida":9.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:10",
            "salida":10.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:50",
            "salida":12.5,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:40",
            "salida":14.4,
            "recorrido":"Dispensario → Bosque → Fila del medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:10",
            "salida":15.1,
            "recorrido":"Bosque → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:00",
            "salida":16,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:10",
            "salida":16.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:00",
            "salida":17,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:45",
            "salida":17.45,
            "recorrido":"Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const posseTerminalS = [
        {
            "nombre":"06:05",
            "salida":6.05,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        }, 
        {
            "nombre":"07:05",
            "salida":7.05,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09:10",
            "salida":9.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:10",
            "salida":10.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Dispensario→ Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"16:10",
            "salida":16.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:05",
            "salida":18.05,
            "recorrido":"Dispensario → Fila dela orilla → Esquina Llona → Cevil Pozo"
        },
    ]
    const posseTerminalD = [
        {
            "nombre":"09:05",
            "salida":9.05,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ];
    const terminalPosseLaV = [
        {
            "nombre":"05:25",
            "salida":5.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Dispensario"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":" Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"17:25",
            "salida":17.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Florida"
        },
    ]
    const terminalPosseS = [
        {
            "nombre":"05:25",
            "salida":5.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Bosque → Dispensario"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"11:35",
            "salida":11.35,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
    ]
    const terminalPosseD = [
        {
            "nombre":"21:20",
            "salida":21.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        },
        {
            "nombre":"22:20",
            "salida":22.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        }
    ];
    const ralosTerminalLaV = [
        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:25",
            "salida":5.25,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Las Cejas → Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:05",
            "salida":6.05,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:10",
            "salida":6.1,
            "recorrido":"Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:15",
            "salida":6.15,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:40",
            "salida":6.4,
            "recorrido":"Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Las Vias → Barrio Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:25",
            "salida":7.25,
            "recorrido":"Lolita Sur → Lolita Norte → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:30",
            "salida":7.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:15",
            "salida":8.15,
            "recorrido":"La Marta → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:20",
            "salida":8.2,
            "recorrido":"Los Ralos → Barrio Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:25",
            "salida":8.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "salida":9.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:20",
            "salida":10.2,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:10",
            "salida":11.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:50",
            "salida":12.5,
            "recorrido":"Lolita Sur → Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "salida":13.1,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:05",
            "salida":14.05,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Lolita Sur → Los Ralos → Barrio Trigal → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:10",
            "salida":16.1,
            "recorrido":"Los Ralos → Barrio Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:25",
            "salida":16.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "salida":17.15,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:20",
            "salida":17.2,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:20",
            "salida":18.2,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:10",
            "salida":19.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:10",
            "salida":21.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:00",
            "salida":22,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosTerminalS = [
        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Villa Tercera → El Infierno → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Las Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:30",
            "salida":7.3,
            "recorrido":"Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:25",
            "salida":8.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "salida":9.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:20",
            "salida":10.2,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:10",
            "salida":11.1,
            "recorrido":"Alabama → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:00",
            "salida":12,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "salida":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "salida":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:25",
            "salida":16.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "salida":17.15,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:20",
            "salida":17.2,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:05",
            "salida":19.05,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:10",
            "salida":21.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosTerminalD = [
        {
            "nombre":"05:00",
            "salida":5,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Villa Tercera → El Infierno → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "salida":9.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
        },
        {
            "nombre":"11:10",
            "salida":11.1,
            "recorrido":"Alabama → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "salida":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "salida":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:50",
            "salida":15.5,
            "recorrido":"Las Cejas → Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "salida":17.15,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.50,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalRalosLaV = [
        {
            "nombre":"06.00",
            "salida":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"06.30",
            "salida":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Norte → Lolita Sur"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → La Marta"
        },
        {
            "nombre":"08:00",
            "salida":8,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"09:15",
            "salida":9.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"09:30",
            "salida":9.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"10:00",
            "salida":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"10:40",
            "salida":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → Piedrabuena"
        },
        {
            "nombre":"11:15",
            "salida":11.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo"
        },
        {
            "nombre":"11:30",
            "salida":11.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo"
        },
        {
            "nombre":"11:45",
            "salida":11.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita Sur"
        },
        // {
        //     "nombre":"11:50",
        //     "salida":11.5,
        //     "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        // },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita Sur",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"14:00",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        // {
        //     "nombre":"14:00",
        //     "salida":14,
        //     "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        // },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
            "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"15:15",
            "salida":15.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Cruce"
        },
        {
            "nombre":"16:00",
            "salida":16,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"16:15",
            "salida":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"17:30",
            "salida":17.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },        
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"19:30",
            "salida":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"20:20",
            "salida":20.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"21:20",
            "salida":21.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"22:00",
            "salida":22,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"22:30",
            "salida":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Barrio Trigal"
        },
        {
            "nombre":"23:30",
            "salida":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercer → Barrio Trigal"
        }
    ]
    const terminalRalosS = [
        {
            "nombre":"06.00",
            "salida":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"06.30",
            "salida":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"07:45",
            "salida":7.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"09:30",
            "salida":9.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"10:00",
            "salida":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:40",
            "salida":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo Cruce"
            
        },
        {
            "nombre":"11:50",
            "salida":11.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera →Lolita"
        },
        {
            "nombre":"13:50",
            "salida":13.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"14:00",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        }, 
        {
            "nombre":"14:20",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"15:15",
            "salida":15.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo",
        },
        {
            "nombre":"16:05",
            "salida":16.05,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"16:15",
            "salida":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        },
        {
            "nombre":"19:30",
            "salida":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
        },
        {
            "nombre":"20:20",
            "salida":20.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:00",
            "salida":22,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"22:30",
            "salida":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "salida":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        }
    ]
    const terminalRalosD = [
        {
            "nombre":"06.00",
            "salida":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"10:00",
            "salida":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril",
        },
        {
            "nombre":"16:15",
            "salida":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        },
        {
            "nombre":"19:30",
            "salida":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Cruz Alta",
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Las Cejas",
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:30",
            "salida":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "salida":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        }
    ]
    const ralosCruzAltaTerminalLaV = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:20",
            "salida":7.2,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        // {
        //     "nombre":"07:45",
        //     "salida":7.45,
        //     "recorrido":"Britos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        // },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:15",
            "salida":14.15,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Colonia 9 → Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },

    ]
    const ralosCruzAltaTerminalS = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:15",
            "salida":7.15,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:40",
            "salida":8.4,
            "recorrido":"Colonia 9 → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:50",
            "salida":11.5,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:15",
            "salida":14.15,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosCruzAltaTerminalD = []
    
    const terminalCruzAltaRalosLaV = [
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"10:45",
            "salida":10.45,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"12:00",
            "salida":12,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"17:30",
            "salida":17.3,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Colonia 9"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        }
    ]
    const terminalCruzAltaRalosS = [
            {
                "nombre":"10:45",
                "salida":10.45,
                "recorrido":"Terminal → Banda del Río Salí →  Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
            },
            {
                "nombre":"13:15",
                "salida":13.15,
                "recorrido":"Terminal → Banda del Río Salí →  Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
            },
            {
                "nombre":"19:30",
                "salida":19.30,
                "recorrido":"Terminal → Banda del Río Salí →  Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
            }
    ];
    const terminalCruzAltaRalosD = [
        {
            "nombre":"19:30",
            "valor":19.3,
            "recorrido":"Terminal → Banda del Rio Sali → Cevil Pozo → Cruz Alta → Los Ralos"
        }
    ]
    const sieteDeAbrilTerminalLaV = [
        {
            "nombre":"04:30",
            "salida":4.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:30",
            "salida":11.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:20",
            "salida":16.2,
            "recorrido":"7 de Abril → Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const sieteDeAbrilTerminalS = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const sieteDeAbrilTerminalD = [
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalSieteDeAbrilLaV = [
        {
            "nombre":"06:15",
            "salida":6.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const terminalSieteDeAbrilS = [
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const terminalSieteDeAbrilD = [
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const lasCejasTerminalLaV = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Las Cejas → Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "salida":7.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:20",
            "salida":13.2,
            "recorrido":"Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:40",
            "salida":15.4,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:20",
            "salida":18.2,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const lasCejasTerminalS = [
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Las Cejas → Los Ralos → (Trasbordo)"
        },
        {
            "nombre":"12:00",
            "salida":12,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:40",
            "salida":15.4,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const lasCejasTerminalD = [
        {
            "nombre":"12:20",
            "salida":12.2,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalLasCejasLaV = [
        {
            "nombre":"06:15",
            "salida":6.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → Piedrabuena"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
    ]
    const terminalLasCejasS = [
        {
            "nombre":"10:40",
            "salida":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
    ]
    const terminalLasCejasD = [
        {
            "nombre":"06:30",
            "salida":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
    ]
    const floridaAldTucuman = [horariosDFloAl,horariosLvFloAl,horariosSFloAl];
    const terminalAldFlorida = [horariosDSMAl,horariosSSMAl, horariosLvSMAl];
    const floridaPosseTucuman = [horariosDFloPo,horariosLvFloPo,horariosSFloPo];
    const terminalPosseFlorida = [horariosDSMPo,horariosLvSMPo,horariosSSMPo];
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
    let fecha = momentoActual.getDate();
    let mes = momentoActual.getMonth();
    let diasDeLaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let diaSemana = diasDeLaSemana[dia]
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
    let tituloResultado = document.getElementById('tituloResultado')

     // Aqui definimos donde localidad de salida y camino

    if(opcionbase.selected == true && opcionbase2.selected == false)  {
        ruta = todosTucumanDestino[posicion2-1]
        }
        if(opcionbase2.selected == true && opcionbase.selected == false){
          ruta = todosDestinoTucuman[posicion-1]
        }

    if((fecha == 20 || fecha == 21)  && mes == 1){
        tituloResultado.textContent =`${diasDeLaSemana[dia]} feriado ( horarios reducidos )`;
        diaRango = ruta[0];
    }
    else{

        tituloResultado.textContent =`Hoy, ${diaSemana}, tenés éstos servicios`
    
 //    Aqui definimos el array dependiendo el dia de la semana
        
        if(dia == 0){
            diaRango = ruta[0].slice(0,ruta[0].length);
        }
        if(dia >= 1 && dia <=5){
            diaRango = ruta[1].slice(0,ruta[1].length);
        }
        if(dia == 6){
            diaRango = ruta[2].slice(0,ruta[2].length);
        }
    }   

    console.log(diaRango)

    
        
            // Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia
           
                          for (i=0; i < diaRango.length; i++){
                        listaDelDia.push(diaRango[i].salida);
            }

                // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos
       
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

                        actual1.textContent = `Servicios de las ${diaRango[listaDiferencias.indexOf(anteriorPasado)].nombre}`

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

                        actual1.textContent = `Servicio de las ${diaRango[listaDiferencias.indexOf(anteriorPasado)].nombre}`
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
                        actual2.textContent = 'Ninguna unidad inició su recorrido aún'
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

                                futuro1.textContent = ` Próximos servicios a las ${diaRango[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
    
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
                                    futuro1.textContent = ` Próximo servicio a las ${diaRango[listaDiferencias2.indexOf(elMasCercano)].nombre}`;  
                              
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
                            futuro2.textContent = "No hay más unidades por hoy, al menos por ésta ruta"
                            futuro3.textContent="";
                        }

    $('.resultados').css('display','flex')
    $('.resultados2').css('display','flex')     
    $('.mensaje2').css('display', 'flex')   
   mensaje2.addEventListener('click', function(){
    $('.mensaje2').css('display', 'none') 
    $('.resultados').css('display','none')
    $('.resultados2').css('display','none')   
    opcionbase.selected = true;
    opcionbase2.selected = true;

})
// let salidaHEnteros = Math.trunc(diaRango[listaDiferencias.indexOf(anteriorPasado)].salida)  * 60;
// let salidaMEnteros = ((diaRango[listaDiferencias.indexOf(anteriorPasado)].salida) - (Math.trunc(diaRango[listaDiferencias.indexOf(anteriorPasado)].salida)))  * 100;
// let llegadaHEnteros = Math.trunc(diaRango[listaDiferencias.indexOf(anteriorPasado)].llegada)  * 60;
// let llegadaMEnteros = ((diaRango[listaDiferencias.indexOf(anteriorPasado)].llegada) - (Math.trunc(diaRango[listaDiferencias.indexOf(anteriorPasado)].llegada)))  * 100;
// let salidaEnEnteros = salidaHEnteros + salidaMEnteros;
// let llegadaEnEnteros = llegadaHEnteros + llegadaMEnteros;
// let difSalidaLlegada = llegadaEnEnteros - salidaEnEnteros;
// let avance = (Math.floor(anteriorPasado) / difSalidaLlegada) * 100;
// console.log(salidaEnEnteros,llegadaEnEnteros)
//     const progreso = document.getElementById('progreso')
//     progreso.style.width = `${avance}%`;

    
    
})
mensaje2.addEventListener('click', function(){
    $('.mensaje2').css('display', 'none')  
    opcionbase.selected = true;
    opcionbase2.selected = true;
})




function busquedaManual(){

    // Horarios 

    const horariosLvFloAl = [

        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido": "Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"05:35",
            "salida":5.35,
            "recorrido":"Fortin → Talar → Alternativa"
        },
        {
            "nombre":"06:10",
            "salida":6.10,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí",
            "recorrido2":"Colonia 10 → Colonia 4 → Barrio La Cancha → Cochuchal → Alderetes → Autopista"
        },
        {
            "nombre":"06:20",
            "salida":6.2,
            "recorrido":"Colonia 5 → Fortin → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Colonia 4 → Fonda →  Talar →Alternativa"
        },
        {
            "nombre":"07:20",
            "salida":7.2,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa",
            "recorrido2":"Fortin → Talar →  Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Finca Mayo → Fortin → Cochuchal → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "salida":7.5,
            "recorrido":"Colonia 4 → Fonda → Talar → Alternativa",
            "recorrido2":"Colonia 4 → Barrio La Cancha → Alderetes → Autopista"
        },
        {
            "nombre":"08:45",
            "salida":8.45,
            "recorrido":"Colonia 4 → Barrio La Cancha → Cochuchal → Alderetes → Autopista",
            "recorrido2":"Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"09:20",
            "salida":9.2,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"09:50",
            "salida":9.5,
            "recorrido":"Colonia 4 → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
          
        },
        {
            "nombre":"11:40",
            "salida":11.40,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:20",
            "salida":12.2,
            "recorrido":"Fortin → Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Los Perez → Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Barrio La Cancha"
        },
        {
            "nombre":"13:50",
            "salida":13.5,
            "recorrido":"Barrio La Cancha → Cochuchal → Alderetes → Banda del Río Salí",
        },
        {
            "nombre":"14:45",
            "salida":14.45,
            "recorrido" : "Colonia 4 → Barrio La Cancha → Talar → Alderetes → Alternativa",
            "recorrido2":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"15:47",
            "salida":15.47,
            "recorrido":"Fortin → Talar → Alternativa"
        },
        {
            "nombre":"16:20",
            "salida":16.2,
            "recorrido":"La Marta → Colonia 4 → Barrio La Cancha → Alternativa"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Colonia 4 → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"17:35",
            "salida":17.35,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa "
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":"Fortin → Talar →  Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"La Marta → Colonia 3 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"21:05",
            "salida":21.15,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        }
       
    ]
    const horariosSFloAl = [
        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
           
        },
        {
            "nombre":"05:45",
            "salida":5.45,
            "recorrido":"Fortin → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"06:10",
            "salida":6.10,
            "recorrido":"Colonia 10 → Barrio La Cancha → Cochuchal→ Alderetes → Autopista"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Colonia 5 Florida → Fortin(Trasbordo)"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alternativa"
        },
        {
            "nombre":"07:18",
            "salida":7.18,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Finca Mayo → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "salida":7.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"08:45",
            "salida":8.45,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"09:20",
            "salida":9.2,
            "recorrido":"Fortin →Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "salida":10.30,
            "recorrido":"Fortin → Talar  → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"11:40",
            "salida":11.40,
            "recorrido":"Fortin → Talar → Alderetes → Banda del Río Salí"
        
        },
        {
            "nombre":"12:40",
            "salida":12.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Barrio La Cancha → Talar →  Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"15:50",
            "salida":15.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Talar → Alderetes → Autopista"
            
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Colonia 3 → Talar → Alderetes → Banda del Río Salí"
            
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":"Fortin → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"La Marta → Colonia 3 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        }
    ]
    const horariosDFloAl = [

        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "salida":10.30,
            "recorrido":"Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "salida":12.4,
            "recorrido":"Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Colonia 3 → Fortin → Talar → Alderetes → Banda del Río Salí"
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":["Barrio La Cancha","Talar ","Alderetes","Banda del Río Salí"]
        },
        {
            "nombre":"19:10",
            "salida":19.1,
            "recorrido":"Colonia 10 → Colonia 3 → Barrio La Cancha → Talar → Alderetes → Banda del Río Salí"
        }
    ]
    const horariosLvFloPo = [

        {
            "nombre":"04:50",
            "salida":4.5,
            "recorrido":"Barrio La Cancha → Paraiso → Dispensario → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:50",
            "salida":5.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:20",
            "salida":6.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:20",
            "salida":7.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:55",
            "salida":7.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"08:20",
            "salida":8.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:05",
            "salida":9.05,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:55",
            "salida":9.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"10:20",
            "salida":10.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:50",
            "salida":10.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:20",
            "salida":11.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:50",
            "salida":11.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "salida":12.40,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:20",
            "salida":13.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:50",
            "salida":13.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:55",
            "salida":15.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:55",
            "salida":17.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:50",
            "salida":18.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:20",
            "salida":19.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Colonia 4 → Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:50",
            "salida":20.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:20",
            "salida":21.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:20",
            "salida":22.20,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"23:20",
            "salida":23.2,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const horariosSFloPo = [
        {
            "nombre":"04:50",
            "salida":4.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        
        {
            "nombre":"05:50",
            "salida":5.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:25",
            "salida":7.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"07:55",
            "salida":7.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"08:25",
            "salida":8.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:05",
            "salida":9.05,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"09:55",
            "salida":9.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
       
        {
            "nombre":"10:25",
            "salida":10.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:55",
            "salida":10.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:25",
            "salida":11.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:55",
            "salida":11.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:40",
            "salida":12.40,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        // {
        //     "nombre":"12:25",
        //     "salida":12.25,
        //     "recorrido":"Fortin hasta Esquina Llona"
        // },
        {
            "nombre":"13:25",
            "salida":13.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:55",
            "salida":13.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Esquina de Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:55",
            "salida":15.55,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:55",
            "salida":16.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:55",
            "salida":18.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:25",
            "salida":19.25,
            "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:25",
            "salida":20.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:55",
            "salida":20.55,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:25",
            "salida":21.25,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:20",
            "salida":22.20,
            "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const horariosDFloPo = [
{
    "nombre":"04:50",
    "salida":4.5,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"05:50",
    "salida":5.5,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},   
{
    "nombre":"06:50",
    "salida":6.5,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"07:55",
    "salida":7.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"08:55",
    "salida":8.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"09:55",
    "salida":9.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"10:55",
    "salida":10.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"11:55",
    "salida":11.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"12:55",
    "salida":12.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"13:55",
    "salida":13.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"15:00",
    "salida":15,
    "recorrido":"Esquina de Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"15:55",
    "salida":15.55,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"16:55",
    "salida":16.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"17:55",
    "salida":17.55,
    "recorrido":["Barrio La Cancha","Paraiso","Dispensario","Esquina Llona","Cevil Pozo","Banda del Río Salí"]
},
{
    "nombre":"18:55",
    "salida":18.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"19:25",
    "salida":19.25,
    "recorrido":"Fortin → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"20:00",
    "salida":20.00,
    "recorrido":"Esquina Lastra → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"20:55",
    "salida":20.55,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},
{
    "nombre":"22:20",
    "salida":22.20,
    "recorrido":"Barrio La Cancha → Paraiso → Esquina Llona → Cevil Pozo → Banda del Río Salí"
},

    ]
    const horariosLvSMAl = [

        {
            "nombre":"05:20",
            "salida":5.2,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Talar → Barrio La Cancha"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin → Mayo(por abajo)"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Alternativa → Talar → Colonia 4 → La Marta"
        },
        {
            "nombre":"07:15",
            "salida":7.15,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fonda → Colonia 4 → Los Perez"
        },
        {
            "nombre":"08:00",
            "salida":8,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Colonia 4"
        },
        {
            "nombre":"08:35",
            "salida":8.35,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
        },
        {
            "nombre":"09:00",
            "salida":9,
            "recorrido":"Terminal → Catalinas Park → Autopista → Talar → Barrio La Cancha → Colonia 4 "
        },
        {
            "nombre":"09:45",
            "salida":9.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
        },
        {
            "nombre":"10:45",
            "salida":10.45,
            "recorrido":"Terminal → Alternativa → Talar → Fortin"
        },
        {
            "nombre":"11:15",
            "salida":11.15,
            "recorrido":"Terminal → Catalinas Park → Autopista → Talar → Barrio La Cancha → La Marta"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Terminal → Catalinas Park → Alternativa → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"12:20",
            "salida":12.2,
            "recorrido":"Terminal → Catalinas Park → Autopista → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"12:45",
            "salida":12.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 3"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Terminal → Banda del Río Salí →  Alderetes → Cochuchal → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Catalinas Park → Autopista → Alderetes → Talar → Barrio La Cancha → Mayo → La Marta"
        },
        {
            "nombre":"14:00",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha"
        },
        {
            "nombre":"14:50",
            "salida":14.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha",
            "recorrido2":"Terminal → Alternativa → Talar → Fortin"
        },
        {
            "nombre":"15:50",
            "salida":15.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Colonia 4",
            "recorrido2":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin → Colonia 4"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Cochuchal → Fortin",
            "recorrido2":"Terminal → Alternativa → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"17:40",
            "salida":17.4,
            "recorrido":"Terminal → Alternativa → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"17:45",
            "salida":17.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Mayo → La Marta"
        },
        {
            "nombre":"18:20",
            "salida":18.2,
            "recorrido":"Terminal → Alternativa → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"19:45",
            "salida":19.45,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Mayo(por abajo)"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha"
        },
        {
            "nombre":"21:30",
            "salida":21.30,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"22:30",
            "salida":22.30,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        },
        {
            "nombre":"23:30",
            "salida":23.30,
            "recorrido":"Terminal → Autopista → Alderetes → Talar → Barrio La Cancha → Colonia 4"
        }
    ]
    const horariosSSMAl = [
            {
                "nombre":"05:20",
                "salida":5.2,
                "recorrido":"Terminal → Autopista → Talar → Barrio La Cancha"
            },
            {
                "nombre":"06:25",
                "salida":6.25,
                "recorrido":"Terminal → Banda del Río Salí →  Talar → Mayo"
            },
            {
                "nombre":"07:15",
                "salida":7.15,
                "recorrido":"Terminal → Banda del Río Salí → Talar → La Marta"
            },
            {
                "nombre":"08:00",
                "salida":8,
                "recorrido":"Terminal → Autopista → Cochuchal"
            },
            {
                "nombre":"08:35",
                "salida":8.35,
                "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
            },
            {
                "nombre":"09:45",
                "salida":9.45,
                "recorrido":"Terminal → Banda del Río Salí → Talar → Fortin"
            },
            {
                "nombre":"10:45",
                "salida":10.45,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            },
            {
                "nombre":"12:20",
                "salida":12.2,
                "recorrido":"Terminal → Autopista → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"13:30",
                "salida":13.3,
                "recorrido":"Terminal → Autopista → Barrio La Cancha → La Marta"
            },
            {
                "nombre":"14:00",
                "salida":14,
                "recorrido":"Terminal → Banda del Río Salí → Barrio La Cancha"
            },
            {
                "nombre":"14:50",
                "salida":14.5,
                "recorrido":"Terminal → Banda del Río Salí → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin → Colonia 3"
            },
            {
                "nombre":"16:50",
                "salida":16.5,
                "recorrido":"Terminal → Banda del Río Salí → Cochuchal → Fortin"
            },
            {
                "nombre":"17:45",
                "salida":17.45,
                "recorrido":"Terminal → Banda del Río Salí → Barrio La Cancha"
            },
            {
                "nombre":"19:00",
                "salida":19,
                "recorrido":"Terminal → Banda del Río Salí → Colonia 4"
            },
            {
                "nombre":"19:45",
                "salida":19.45,
                "recorrido":"Terminal → Banda del Río Salí → Mayo"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Fortin"
            },
            {
                "nombre":"21:30",
                "salida":21.30,
                "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
            },
            // {
            //     "nombre":"22:00",
            //     "salida":22,
            //     "recorrido":"Terminal → Alternativa → Colonia 4"
            // },
            {
                "nombre":"22:30",
                "salida":22.30,
                "recorrido":"Terminal → Autopista → Fortin → Colonia 4"
            }
    ]
    const horariosDSMAl = [

            {
                "nombre":"06:25",
                "salida":6.25,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Mayo"
            },
            {
                "nombre":"09:45",
                "salida":9.45,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin → Colonia 2"
            },
            {
                "nombre":"11:40",
                "salida":11.40,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Cochuchal → Fortin → Mayo"
            },
            {
                "nombre":"14:00",
                "salida":14,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Barrio La Cancha"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Cochuchal → Fortin → Colonia 3"
            },
            {
                "nombre":"17:45",
                "salida":17.45,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin → Mayo"
            },
            {
                "nombre":"19:45",
                "salida":19.45,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Mayo"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Alderetes → Talar → Fortin"
            }
  
    ]
    const horariosLvSMPo = [
            {
                "nombre":"06:00",
                "salida":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"06:30",
                "salida":6.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"07:00",
                "salida":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"07:30",
                "salida":7.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"08:15",
                "salida":8.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"09:00",
                "salida":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"09:30",
                "salida":9.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"10:00",
                "salida":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"10:30",
                "salida":10.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:00",
                "salida":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:20",
                "salida":11.2,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"11:45",
                "salida":11.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"12:25",
                "salida":12.25,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"12:30",
                "salida":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:00",
                "salida":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:30",
                "salida":13.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"14:05",
                "salida":14.05,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"14:30",
                "salida":14.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "salida":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:00",
                "salida":17,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:30",
                "salida":17.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"18:00",
                "salida":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"18:30",
                "salida":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:10",
                "salida":19.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"19:30",
                "salida":19.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:00",
                "salida":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:45",
                "salida":20.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:00",
                "salida":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del Medio → Bosque → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:30",
                "salida":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:00",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:30",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"23:30",
                "salida":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Fortin → Colonia 4"
            },
            {
                "nombre":"00:30",
                "salida":24.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            }
    ]
    const horariosSSMPo = [
            {
                "nombre":"06:00",
                "salida":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"06:40",
                "salida":6.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"07:00",
                "salida":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"07:30",
                "salida":7.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"08:15",
                "salida":8.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"09:00",
                "salida":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"09:30",
                "salida":9.30,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"10:00",
                "salida":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"10:30",
                "salida":10.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:00",
                "salida":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:45",
                "salida":11.45,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"12:30",
                "salida":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:00",
                "salida":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"13:55",
                "salida":13.55,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"14:15",
                "salida":14.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "salida":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:00",
                "salida":17,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:30",
                "salida":17.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"18:00",
                "salida":18,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"18:30",
                "salida":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:15",
                "salida":19.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"19:30",
                "salida":19.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:00",
                "salida":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:00",
                "salida":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:30",
                "salida":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:30",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"23:30",
                "salida":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
    ]
    const horariosDSMPo = [
            {
                "nombre":"06:00",
                "salida":6,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha → Colonia 4"
            },
            {
                "nombre":"07:00",
                "salida":7,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },

            {
                "nombre":"08:00",
                "salida":8,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"09:00",
                "salida":9,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"10:00",
                "salida":10,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"11:00",
                "salida":11,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"12:00",
                "salida":12,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"12:30",
                "salida":12.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"13:00",
                "salida":13,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"14:15",
                "salida":14.15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Esquina Lastra"
            },
            {
                "nombre":"15:00",
                "salida":15,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"16:00",
                "salida":16,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"17:00",
                "salida":17,
                "recorrido":["Terminal","Barrio La Cancha"]
            },
            {
                "nombre":"18:00",
                "salida":18,
                "recorrido":["Terminal","Banda del Río Salí","Cevil Pozo","Esquina Llona", "Dispensario","Paraiso","Barrio La Cancha"]
            },
            {
                "nombre":"18:30",
                "salida":18.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Fortin"
            },
            {
                "nombre":"19:10",
                "salida":19.1,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:00",
                "salida":20,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"20:30",
                "salida":20.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:00",
                "salida":21,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"21:30",
                "salida":21.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"22:30",
                "salida":22.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            },
            {
                "nombre":"23:30",
                "salida":23.3,
                "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraiso → Barrio La Cancha"
            }
    ]
    const posseTerminalLaV = [
        {
            "nombre":"05:00",
            "salida":6,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:55",
            "salida":5.55,
            "recorrido":"Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:00",
            "salida":6,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:08",
            "salida":6.08,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:35",
            "salida":6.35,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:08",
            "salida":7.08,
            "recorrido":"Dispensario → Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:40",
            "salida":7.4,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09:10",
            "salida":9.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:10",
            "salida":10.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:50",
            "salida":12.5,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:40",
            "salida":14.4,
            "recorrido":"Dispensario → Bosque → Fila del medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:10",
            "salida":15.1,
            "recorrido":"Bosque → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:00",
            "salida":16,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:10",
            "salida":16.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:00",
            "salida":17,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:45",
            "salida":17.45,
            "recorrido":"Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const posseTerminalS = [
        {
            "nombre":"06:05",
            "salida":6.05,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        }, 
        {
            "nombre":"07:05",
            "salida":7.05,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09:10",
            "salida":9.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:10",
            "salida":10.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Dispensario→ Fila del Medio → Cevil Pozo"
        },
        {
            "nombre":"16:10",
            "salida":16.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:05",
            "salida":18.05,
            "recorrido":"Dispensario → Fila dela orilla → Esquina Llona → Cevil Pozo"
        },
    ]
    const posseTerminalD = [
        {
            "nombre":"09:05",
            "salida":9.05,
            "recorrido":"Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ];
    const terminalPosseLaV = [
        {
            "nombre":"05:25",
            "salida":5.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Dispensario"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":" Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"17:25",
            "salida":17.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Florida"
        },
    ]
    const terminalPosseS = [
        {
            "nombre":"05:25",
            "salida":5.25,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Bosque → Dispensario"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"11:35",
            "salida":11.35,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Boque → Dispensario"
        },
    ]
    const terminalPosseD = [
        {
            "nombre":"21:20",
            "salida":21.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        },
        {
            "nombre":"22:20",
            "salida":22.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
        }
    ];
    const ralosTerminalLaV = [
        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:25",
            "salida":5.25,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Las Cejas → Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:05",
            "salida":6.05,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:10",
            "salida":6.1,
            "recorrido":"Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:15",
            "salida":6.15,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:40",
            "salida":6.4,
            "recorrido":"Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Las Vias → Barrio Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:25",
            "salida":7.25,
            "recorrido":"Lolita Sur → Lolita Norte → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:30",
            "salida":7.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:15",
            "salida":8.15,
            "recorrido":"La Marta → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:20",
            "salida":8.2,
            "recorrido":"Los Ralos → Barrio Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:25",
            "salida":8.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "salida":9.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:20",
            "salida":10.2,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:10",
            "salida":11.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:50",
            "salida":12.5,
            "recorrido":"Lolita Sur → Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "salida":13.1,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:05",
            "salida":14.05,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Lolita Sur → Los Ralos → Barrio Trigal → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:10",
            "salida":16.1,
            "recorrido":"Los Ralos → Barrio Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:25",
            "salida":16.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "salida":17.15,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:20",
            "salida":17.2,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:20",
            "salida":18.2,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:10",
            "salida":19.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:10",
            "salida":21.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"22:00",
            "salida":22,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosTerminalS = [
        {
            "nombre":"04:40",
            "salida":4.4,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Villa Tercera → El Infierno → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Las Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:30",
            "salida":7.3,
            "recorrido":"Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:25",
            "salida":8.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "salida":9.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:20",
            "salida":10.2,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
            "recorrido2":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:10",
            "salida":11.1,
            "recorrido":"Alabama → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:00",
            "salida":12,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "salida":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "salida":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:25",
            "salida":16.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "salida":17.15,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:20",
            "salida":17.2,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:05",
            "salida":19.05,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:10",
            "salida":21.1,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosTerminalD = [
        {
            "nombre":"05:00",
            "salida":5,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Villa Tercera → El Infierno → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"09;25",
            "salida":9.25,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí",
        },
        {
            "nombre":"11:10",
            "salida":11.1,
            "recorrido":"Alabama → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:15",
            "salida":12.15,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:10",
            "salida":13.1,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:10",
            "salida":14.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:25",
            "salida":15.25,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:50",
            "salida":15.5,
            "recorrido":"Las Cejas → Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"17:15",
            "salida":17.15,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:10",
            "salida":18.1,
            "recorrido":"Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Alabama → Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.50,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalRalosLaV = [
        {
            "nombre":"06.00",
            "salida":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"06.30",
            "salida":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Norte → Lolita Sur"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → La Marta"
        },
        {
            "nombre":"08:00",
            "salida":8,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"09:15",
            "salida":9.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"09:30",
            "salida":9.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"10:00",
            "salida":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"10:40",
            "salida":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → Piedrabuena"
        },
        {
            "nombre":"11:15",
            "salida":11.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo"
        },
        {
            "nombre":"11:30",
            "salida":11.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo"
        },
        {
            "nombre":"11:45",
            "salida":11.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita Sur"
        },
        // {
        //     "nombre":"11:50",
        //     "salida":11.5,
        //     "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        // },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita Sur",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"14:00",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        // {
        //     "nombre":"14:00",
        //     "salida":14,
        //     "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        // },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
            "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"15:15",
            "salida":15.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Cruce"
        },
        {
            "nombre":"16:00",
            "salida":16,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"16:15",
            "salida":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"16:30",
            "salida":16.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"16:50",
            "salida":16.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"17:30",
            "salida":17.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"17:50",
            "salida":17.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },        
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"19:30",
            "salida":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"20:20",
            "salida":20.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"21:20",
            "salida":21.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"22:00",
            "salida":22,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"22:30",
            "salida":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Barrio Trigal"
        },
        {
            "nombre":"23:30",
            "salida":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercer → Barrio Trigal"
        }
    ]
    const terminalRalosS = [
        {
            "nombre":"06.00",
            "salida":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"06.30",
            "salida":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"07:45",
            "salida":7.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"09:30",
            "salida":9.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"10:00",
            "salida":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:40",
            "salida":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo Cruce"
            
        },
        {
            "nombre":"11:50",
            "salida":11.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"13:30",
            "salida":13.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera →Lolita"
        },
        {
            "nombre":"13:50",
            "salida":13.5,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Barrio Trigal"
        },
        {
            "nombre":"14:00",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        }, 
        {
            "nombre":"14:20",
            "salida":14,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
        },
        {
            "nombre":"15:15",
            "salida":15.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo",
        },
        {
            "nombre":"16:05",
            "salida":16.05,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"16:15",
            "salida":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        },
        {
            "nombre":"19:30",
            "salida":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
        },
        {
            "nombre":"20:20",
            "salida":20.2,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"21:00",
            "salida":21,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:00",
            "salida":22,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"22:30",
            "salida":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "salida":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        }
    ]
    const terminalRalosD = [
        {
            "nombre":"06.00",
            "salida":6,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"07:00",
            "salida":7,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"08:30",
            "salida":8.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        },
        {
            "nombre":"10:00",
            "salida":10,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama"
        },
        {
            "nombre":"13:00",
            "salida":13,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → VIlla Tercera"
        },
        {
            "nombre":"15:30",
            "salida":15.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril",
        },
        {
            "nombre":"16:15",
            "salida":16.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"17:10",
            "salida":17.1,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Alabama",
        },
        {
            "nombre":"19:00",
            "salida":19,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita"
        },
        {
            "nombre":"19:30",
            "salida":19.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Cruz Alta",
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Mayo → Las Cejas",
        },
        {
            "nombre":"21:30",
            "salida":21.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"22:30",
            "salida":22.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        },
        {
            "nombre":"23:30",
            "salida":23.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        }
    ]
    const ralosCruzAltaTerminalLaV = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:20",
            "salida":7.2,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        // {
        //     "nombre":"07:45",
        //     "salida":7.45,
        //     "recorrido":"Britos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        // },
        {
            "nombre":"08:10",
            "salida":8.1,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:15",
            "salida":14.15,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Colonia 9 → Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },

    ]
    const ralosCruzAltaTerminalS = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:15",
            "salida":7.15,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"08:40",
            "salida":8.4,
            "recorrido":"Colonia 9 → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:50",
            "salida":11.5,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"14:15",
            "salida":14.15,
            "recorrido":"Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const ralosCruzAltaTerminalD = []
    
    const terminalCruzAltaRalosLaV = [
        {
            "nombre":"06:50",
            "salida":6.5,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"10:45",
            "salida":10.45,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"12:00",
            "salida":12,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"13:15",
            "salida":13.15,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        },
        {
            "nombre":"17:30",
            "salida":17.3,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Colonia 9"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
        }
    ]
    const terminalCruzAltaRalosS = [
            {
                "nombre":"10:45",
                "salida":10.45,
                "recorrido":"Terminal → Banda del Río Salí →  Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
            },
            {
                "nombre":"13:15",
                "salida":13.15,
                "recorrido":"Terminal → Banda del Río Salí →  Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
            },
            {
                "nombre":"19:30",
                "salida":19.30,
                "recorrido":"Terminal → Banda del Río Salí →  Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
            }
    ];
    const terminalCruzAltaRalosD = [
        {
            "nombre":"19:30",
            "valor":19.3,
            "recorrido":"Terminal → Banda del Rio Sali → Cevil Pozo → Cruz Alta → Los Ralos"
        }
    ]
    const sieteDeAbrilTerminalLaV = [
        {
            "nombre":"04:30",
            "salida":4.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"11:30",
            "salida":11.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"16:20",
            "salida":16.2,
            "recorrido":"7 de Abril → Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const sieteDeAbrilTerminalS = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const sieteDeAbrilTerminalD = [
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalSieteDeAbrilLaV = [
        {
            "nombre":"06:15",
            "salida":6.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const terminalSieteDeAbrilS = [
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const terminalSieteDeAbrilD = [
        {
            "nombre":"15:00",
            "salida":15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
        }
    ]
    const lasCejasTerminalLaV = [
        {
            "nombre":"05:30",
            "salida":5.3,
            "recorrido":"Las Cejas → Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"07:50",
            "salida":7.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"12:10",
            "salida":12.1,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"13:20",
            "salida":13.2,
            "recorrido":"Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:40",
            "salida":15.4,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:20",
            "salida":18.2,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const lasCejasTerminalS = [
        {
            "nombre":"06:25",
            "salida":6.25,
            "recorrido":"Las Cejas → Los Ralos → (Trasbordo)"
        },
        {
            "nombre":"12:00",
            "salida":12,
            "recorrido":"Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"15:40",
            "salida":15.4,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"19:50",
            "salida":19.5,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
    ]
    const lasCejasTerminalD = [
        {
            "nombre":"12:20",
            "salida":12.2,
            "recorrido":"Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        },
        {
            "nombre":"18:00",
            "salida":18,
            "recorrido":"7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí"
        }
    ]
    const terminalLasCejasLaV = [
        {
            "nombre":"06:15",
            "salida":6.15,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"11:00",
            "salida":11,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → Piedrabuena"
        },
        {
            "nombre":"12:30",
            "salida":12.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
            "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
    ]
    const terminalLasCejasS = [
        {
            "nombre":"10:40",
            "salida":10.4,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
        },
        {
            "nombre":"14:30",
            "salida":14.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"15:45",
            "salida":15.45,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"20:00",
            "salida":20,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
    ]
    const terminalLasCejasD = [
        {
            "nombre":"06:30",
            "salida":6.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"10:30",
            "salida":10.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
        },
        {
            "nombre":"18:30",
            "salida":18.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
        {
            "nombre":"20:30",
            "salida":20.3,
            "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
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

    const botonOrigenCapital = document.getElementById('origenCapital');
    const botonCapitalDestino = document. getElementById('capitalDestino')
    const botonManual = document.getElementById('busquedaManual')
    const botonAuto = document.getElementById('busquedaAuto')
    const selector3 = document.menu3.selector3;
    const selector4 = document.menu4.selector4;
    const selector5 = document.menu5.selector5;
    const ingHora = document.getElementById('ingHora')
    const boton2 = document.getElementById('boton2')
    let mostrar1 = document.getElementById('mostrar1')
    let mostrar2 = document.getElementById('mostrar2')
    const opcionbase3 = selector3[0];
    const opcionbase4 = selector4[0];
    const opcionbase5 = selector5[0];
    let posicion3;
    let posicion4;
    let posicion5;
    let ruta2 =[]
    let valorSelecionado3;
    let valorSelecionado4;
    let valorSelecionado5;
    let valores3 = []
    let valores4 = []
    let valores5 = []
    let diaRango2 = []
    let horaInputAMinutos
    const mensaje2 = document.querySelector('.mensaje2');
    let mensajeError = document.getElementById('mensajeError')
  
    botonManual.addEventListener('click', function(){
        $('.botonesBusquedaCont2').css('display','flex');
        $('.botonesBusquedaCont').css('display','none');
        $('.topside2').css('display', 'flex');
        $('.busquedaAuto').css('display', 'none')
        $('.boton-cont').css('display','none');
        $('.boton-cont2').css('display','flex');

    })
    botonAuto.addEventListener('click', function(){
        $('.botonesBusquedaCont2').css('display','none');
        $('.botonesBusquedaCont').css('display','flex');
        $('.busquedaAuto').css('display', 'flex')
        $('.topside2').css('display', 'none');
        $('.boton-cont').css('display','flex');
        $('.boton-cont2').css('display','none');
        
    })


    botonOrigenCapital.addEventListener('click', function(){
        $('#selector3').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector4').css('display', 'none');
        $('#origenCapital').css('background-color', 'black');
        $('#origenCapital').css('color', 'var(--rojo2');
        $('#capitalDestino').css('background-color', 'var(--blanco');
        $('#capitalDestino').css('color', 'var(--black');
        opcionbase4.selected = true;
        opcionbase5.selected = true;
        ingHora.value =  ''
        
    })
    botonCapitalDestino.addEventListener('click', function(){
        $('#selector4').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector3').css('display', 'none');
        $('#capitalDestino').css('background-color', 'black');
        $('#capitalDestino').css('color', 'var(--rojo2');
        $('#origenCapital').css('background-color', 'var(--blanco');
        $('#origenCapital').css('color', 'var(--black');
        opcionbase3.selected = true;
        opcionbase5.selected = true;
        ingHora.value =  ''
    })

    boton2.addEventListener('click', function(){

    let listaDelDia2 = []
    let listaDiferencias3 = [];
    let horariosEnEnteros2 = [];
    let proximo = 3000;

    // Definimos la posicion del selector 3
    if(opcionbase3.selected == true){
        posicion3=0
    }

    for(opcion of selector3){
        if(opcion.selected){
               valorSelecionado3 = opcion
            }
    }
    for(i=0; i < selector3.length;i++){
     valores3.push(selector3[i])
    }
  
    for(i=0; i< valores3.length;i++){
        posicion3=valores3.indexOf(valorSelecionado3)
    }

    // Definimos la posicion del selector 4

    if(opcionbase4.selected == true){
        posicion4 = 0;
    }    
    for(opcion of selector4){
        if(opcion.selected){
               valorSelecionado4 = opcion;
            }
    }
    for(i=0; i < selector4.length;i++){
     valores4.push(selector4[i])
    }
  
    for(i=0; i< valores4.length;i++){
        posicion4=valores4.indexOf(valorSelecionado4)
    }
    // Definimos la posicion del selector 5

    if(opcionbase5.selected == true){
        posicion5 = 0;
    }    
    for(opcion of selector5){
        if(opcion.selected){
               valorSelecionado5 = opcion;
            }
    }
    for(i=0; i < selector5.length;i++){
     valores5.push(selector5[i])
    }
  
    for(i=0; i< valores5.length;i++){
        posicion5=valores5.indexOf(valorSelecionado5)
    }
    // Aqui definimos donde localidad de salida y camino

    if(opcionbase4.selected == true && opcionbase3.selected == false)  {
        ruta2 = todosDestinoTucuman[posicion3-1]
        
        }
        if(opcionbase3.selected == true && opcionbase4.selected == false){
            ruta2 = todosTucumanDestino[posicion4-1]
        }
        
      
        //    Aqui definimos el array dependiendo el dia de la semana
        
        if((posicion5 - 1) == 0){
            diaRango2 = ruta2[1].slice(0,ruta2[1].length);
        }
        if((posicion5-1) == 1){
            diaRango2 = ruta2[2].slice(0,ruta2[2].length);
        }
        if((posicion5 - 1) == 2){
            diaRango2 = ruta2[0].slice(0,ruta2[0].length);
        }
       

        // / Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia

        
           
                          for (i=0; i < diaRango2.length; i++){
                        listaDelDia2.push(diaRango2[i].salida);
            }
           
 
                // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos
       
                          for(let i=0 ; i < listaDelDia2.length ; i++){
              
                      let horasEnEnteros=  (Math.trunc(listaDelDia2[i]))  * 60;
                      let minutosEnEnteros = (listaDelDia2[i] - (Math.trunc(listaDelDia2[i])))*100;
                      let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
                       horariosEnEnteros2.push(horaMinutosEnEnteros);
              }

              
         if(ingHora.value == '' || ingHora.value > 23){
            mensajeError.textContent = 'Ingresa un número entre 0 y 23'
            $('#mensajeError').css('display', 'flex')
            setTimeout(()=>{
                mensajeError.remove(),ingHora.value = '';
            },2000)
            
         }
          else{
            horaInputAMinutos = (ingHora.value) * 60
            
            for(let i = 0; i < horariosEnEnteros2.length; i++){
                listaDiferencias3.push (horariosEnEnteros2[i] - horaInputAMinutos)
          }
          for(let i = 0; i < listaDiferencias3.length; i++){
            if(listaDiferencias3[i] > 0){
            proximo = Math.min(proximo, listaDiferencias3[i])
          }

          if(proximo < 3000){
            
            mostrar1.textContent = `El servicio más cercano al horario que indicaste, es él de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre}Hrs`;
            mostrar2.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`
    }
        else{
            console.log(proximo)
            mostrar1.textContent = 'No hay más servicios en éste horario ni en lo que resta del día';
        }
        }

        $('.resultados3').css('display','flex')     
        $('.mensaje2').css('display', 'flex')
        }
        })
       

        mensaje2.addEventListener('click', function(){
            $('.mensaje2').css('display', 'none') 
            $('.resultados3').css('display','none')
            $('#selector3').css('display','none')      
            $('#selector4').css('display','none') 
            $('#selector5').css('display','none') 
            $('#ingHora').css('display','none')
            $('#capitalDestino').css('background-color', 'var(--blanco');
            $('#capitalDestino').css('color', 'var(--black');
            $('#origenCapital').css('background-color', 'var(--blanco');
            $('#origenCapital').css('color', 'var(--black'); 
            opcionbase3.selected = true;
            opcionbase4.selected = true;
            opcionbase5.selected = true;
            ingHora.value = '';
            botonOrigenCapital.selected = false;
            botonCapitalDestino.selected = false;
            })
}








    
    








