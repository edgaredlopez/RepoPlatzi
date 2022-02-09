
// Constructor Producto
class GastoClass {
    constructor(NombreGasto, PrecioGasto) {
        this.GetNombre = NombreGasto;
        this.GetPrecio = PrecioGasto;
      
    }
}

// Constructor UI (interfaz de usuario) 

class UI {
    //método agregar producto

    AñadirContGasto(GastoAdd) {
        const ClonContenedorSalida = document.getElementById('ContenedorSalida');
        const ElementoNuevoEnClon = document.createElement('div');
        ElementoNuevoEnClon.innerHTML = 
                `
                <div class="ElementoNuevo">
                    <strong>Descripción</strong>: ${GastoAdd.GetNombre} -
                    <strong>Monto</strong>: Q ${GastoAdd.GetPrecio}  
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
                `
            ;
        ClonContenedorSalida.appendChild(ElementoNuevoEnClon);
    }




    //método reiniciar o limpiar formulario
    LimpiarFormulario() {
        document.getElementById('FormularioEntrada').reset();
    }



    //método eliminar datos
    EliminarGasto(ElementoNuevoEnClon) {


        if (ElementoNuevoEnClon.name == 'delete') 
        {
            ElementoNuevoEnClon.parentElement.parentElement.remove();
            //evento mostrar mensaje
            this.MostrarNotificaciones('Elemento eliminado correctamente', 'success');
        }

       


        var PruebaInvestigadora= document.getElementById('ContenedorSalida').children;
           var Longitud=PruebaInvestigadora.length;
           if(Longitud==0)
            {

                
                const ClonContenedorSalida2 = document.getElementById('ContenedorSalida');
        
                ClonContenedorSalida2.innerHTML = 
                `
                <span id="MensajeDefault">No hay datos ingresados aún...</span>
                `
                ;
                Contador=0;
            }


    }







    //método mostrar mensaje 
    MostrarNotificaciones(Mensaje, Estado) 
    {
        //Creamos div para cada mensaje
        const div = document.createElement('div');
        
        /* Al div le agregamos un "nombre de clase" y le concatenamos "adentro" el
        Estado que nos mandó cada mensaje realizado  para saber como se llama
        cada notificaion y darle estilos despues*/
        div.className = `NotiEstado -${Estado}AppEd`;
        div.setAttribute("id","NotiAlerta");

        /* Adentro del div creado le escribimos como texto hijo, el 
        mensaje que nos mando cada notificacion para que se muestre en pantalla */
        div.appendChild(document.createTextNode(Mensaje));
        


                    // Mostrar el  DOM
        /* Creamos un enlace del contenendor que tenga el nombre de clase
        "container", pero este contenendor lo traemos haciendo una busqueda
        en el documento html usando "querySElector('.NombreClase')"  */
        const container = document.querySelector('.ContenedorMain');

        /* Creamos un enlace del contenendor que tenga el nombre de ID
        "app", pero este contenendor lo traemos haciendo una busqueda
        en el documento html usando "querySElector('#NombreID')"  */
        const app = document.querySelector('#Applicacion');
        
        /* Insertamos los contenedores de notificaciones adentro del contenedor
        elegido con la busqueda de query. Asi como tambien el contenedor que contiene todo
        nuestro contenido en html, la volvemos a mandar para que nosea sobre escrita por
        las notificaciones */
        container.insertBefore(div, app);


        // Evento Remover mensaje después de 3 segundos
        //setTimeout es un metodo de JS al que le agregamos una funcion
        setTimeout(function () 
                    {
                        /* En el documento buscamos un elemento que tenga 
                        la palabra ".NotiEstado" en su nombre de clase, cuando 
                        encontremos esa etiqueta con esa clase, la removemos */
                        document.querySelector('.NotiEstado').remove();
                    }, 2500
                  );
    }
}


var Contador=0;

// Eventos DOM 


var AlmacenadorDeRestante=0;
var Prueba=0;
var PresupuestoFueraDeTodo=0;
var CopiaExternaRestante=0;


/*Crear enlace del formulario. A ese enlace le añadimos el metodo "eventlistener"
para "escuchar" cuando obtengamos en el formulario la palabra "submit", 
al escuchar esta palabra, ejecutamos el evento o funcion "e"*/
document.getElementById('FormularioEntrada').addEventListener('submit', function (e)
    {

        /* Trabajando en el presupuesto */
        const PresupuestoEd= document.getElementById('PresupuestoInicial').value;
        /* var RestanteEd;
        RestanteEd= PresupuestoEd- precio;
        console.log(RestanteEd);
        console.log(PresupuestoEd); */
        
        


        const ObjetoInterfaz = new UI();
        if (PresupuestoEd=="0")
        {
            ObjetoInterfaz.MostrarNotificaciones("Ingrese un presupuesto inicial", "danger");
            /* ObjetoInterfaz.LimpiarFormulario(); */
        }

        const precio00 = document.getElementById('CantGastos').value;

        if (precio00=="" || precio00==0)
        {
            ObjetoInterfaz.MostrarNotificaciones("Completa todos los campos", "danger");
            /* ObjetoInterfaz.LimpiarFormulario(); */
        }

        if(PresupuestoEd>0 && precio00>0)
        { 

            var PruebaInvestigadora= document.getElementById('ContenedorSalida').children;
           var Longitud=PruebaInvestigadora.length;
    
           
            
            if(Contador===0)
            {

                //Eliminamos el mansaje por default que habia
                document.querySelector('#MensajeDefault').remove();
                Contador=5;
            }


                /* Creamos enlace con los  input del formulario con ID 
            "nombre" y "precio" para traer sus valores a las otras
            variables en JS */
            const nombre = document.getElementById('NomGastos').value,
                precio = document.getElementById('CantGastos').value;
            
           

            /* Creamos un objeto Llamado ObjetoGasto a partir de la clase "GastosClasss"
            y a este objeto le ingresamos los valores traidos de los inputs
            para que la clase creada tome efecto */
            const ObjetoGasto = new GastoClass(nombre, precio);


            /* Creamos un objeto "ObjetoInterfaz" a partir de la clase
            "IU" */
            const ObjetoInterfaz = new UI();

            
            // validar datos ingresados por usuario
            /* Si la condicion se cumple, usaremos el objeto creado de
            interfaz para llamar la funcion de mostrar notificaciones
            y mandamos una notifcacion  */
            if (nombre === '' || precio === '') {
                ObjetoInterfaz.MostrarNotificaciones("Por favor llene todos los campos", "danger");
            }

            // Guardar gasto añadido
            if(nombre!=''&& precio!='')
            {
            ObjetoInterfaz.AñadirContGasto(ObjetoGasto);
            ObjetoInterfaz.MostrarNotificaciones("Elemento agregado Correctamente", "success");
            ObjetoInterfaz.LimpiarFormulario();
            }

            


            /* Trabajando en el restante */

            var ContenedorRestante=document.getElementById('MontoRestante1');
            var ValorRestanteTraido=document.getElementById('MontoRestante1').textContent;

            if(ValorRestanteTraido=="---")
            {
                var Valor0=0;
                ContenedorRestante.innerHTML = (Valor0);
            }
        

            var ValorRestanteTraido22=document.getElementById('MontoRestante1').textContent;
            var MontoTotalDom=document.getElementById('MontoTotal');

            var CopiaFloatValorRestante= parseFloat(ValorRestanteTraido22);
            var CopiaFloatValorPrecio= parseFloat(precio);
            var CopiaFloatPresupuesto=parseFloat(PresupuestoEd);

    
            CopiaExternaRestante= CopiaExternaRestante+CopiaFloatValorPrecio;
            
            var OperacionRestaPresYRestant=CopiaFloatPresupuesto-CopiaExternaRestante;
            
            
            ContenedorRestante.innerHTML=(OperacionRestaPresYRestant);
            MontoTotalDom.innerHTML=(CopiaExternaRestante);

            /* Evaluando el porcentaje del restante */
            var PorcentajeEd=((CopiaExternaRestante*100)/CopiaFloatPresupuesto);
            console.log(PorcentajeEd);

            if(PorcentajeEd>=50)
            {
                var TraerEstilo=document.getElementById('ConteneodorInputRestante');
                TraerEstilo.style.backgroundColor="#13e713";
            }
            if(PorcentajeEd>=75)
            {
                var TraerEstilo=document.getElementById('ConteneodorInputRestante');
                TraerEstilo.style.backgroundColor="#ff790a";
            }
            if(PorcentajeEd>=100)
            {
                var TraerEstilo=document.getElementById('ConteneodorInputRestante');
                TraerEstilo.style.backgroundColor=" #ff0000";
            }
           
           

        }

       //Detener accion por omision
       e.preventDefault();
        

        

        
    });






    //Ejecución del DOM para detectar cuando se haga clic sobre el boton de eliminar
    //ESCUCHAR cuando se haga click y ejecutar la funcion e
    document.getElementById('ContenedorSalida').addEventListener('click', function (e) 
        {
            //Crear objeto de la clase de intefaz
            const ObjetoInterfazEliminacion = new UI();

            //Usando nuestro objeto, llamamos la funcion de eliminacion,
            //le decimos que la funcion e fue llamada y le mandamos
            ObjetoInterfazEliminacion.EliminarGasto(e.target);

            
            

            //Detenemos la accion de la funcion
            e.preventDefault();
        });