        //creamos y llenamos la lista de iconos a hacer clic
        let listaDeTriggers = [];
        listaDeTriggers.push(document.querySelector('.a-icon'));
        listaDeTriggers.push(document.querySelector('.b-icon'));
        listaDeTriggers.push(document.querySelector('.c-icon'));

        //creamos y llenamos la lista para las vistas que van a ser desactivadas
        let listaDeVistas = [];
        listaDeVistas.push(document.querySelector('.a-box'));
        listaDeVistas.push(document.querySelector('.b-box'));
        listaDeVistas.push(document.querySelector('.c-box'));

        //a la lista de iconos le asignamos el eventListener de clic y le pasamos una funcion
        for(trigger of listaDeTriggers){
            trigger.addEventListener('click', toggleBox);
        }

        //declaramos la variable que albergara el ultimo elemento apagado
        let lastOff;

        function toggleBox(event){
            //Encontramos el nombre del icono que hicimos clic
            let triggerName = event.target.classList[0];
            //creamos una funcion para ver si dos cadenas son iguales
            let checkStrings = (element) => element.className == triggerName;
            /*usamos el metodo findIndex para encontrar la posicion de nuestro icono, como
            nuestras listas estan en el mismo orden, la posicion del icono es la misma que
            la de nuestra vista a cambiar*/
            let triggerIndex = listaDeTriggers.findIndex(checkStrings);

            //preguntamos si existe una vista ya apagada
            if(lastOff){
                //encendemos la ultima vista apagada
                lastOff.classList.remove('inactive');
                /*si la ultima vista apagada es la que esta vinculada al icono que acaba de recibir el clic
                entonces tenemos que poner a nuestra variable lastOff como undefined y salir del metodo.*/
                if(lastOff == listaDeVistas[triggerIndex]){
                    lastOff = undefined;
                    return;
                }
            }
            /*si aun no existe una vista apagada entonces apagamos la vista vinculada al boton que acaba de
            activar el evento y le decimos all lastOff que la vista que acabamos de apagar es la ultima*/
            
            listaDeVistas[triggerIndex].classList.add('inactive');
            lastOff = listaDeVistas[triggerIndex];
        }


/*Adicionalmente dejo abajo la misma logica, excepto que esta hecho con variables en lugar de listas, la 
 ventaja de usar listas es que podemos usar el mismo metodo para todos los iconos. */

        const aicon = document.querySelector('.a_icon');
        const bicon = document.querySelector('.b_icon');
        const cicon = document.querySelector('.c_icon');

        const abox = document.querySelector('.a_box');
        const bbox = document.querySelector('.b_box');
        const cbox = document.querySelector('.c_box');

        aicon.addEventListener('click', toggleABox);
        bicon.addEventListener('click', toggleBBox);
        cicon.addEventListener('click', toggleCBox);

        let last_Off;

        function toggleABox(event){
            if(last_Off){
                last_Off.classList.remove('inactive');
                if(last_Off == abox) {
                    last_Off = undefined;
                    return;
                }
            } 
            abox.classList.add('inactive');
            last_Off = abox;    
        }
        function toggleBBox(){
            if(last_Off){
                last_Off.classList.remove('inactive');
                if(last_Off == bbox) {
                    last_Off = undefined;
                    return;
                }
            } 
            bbox.classList.add('inactive');
            last_Off = bbox;    
        }
        function toggleCBox(){
            if(last_Off){
                last_Off.classList.remove('inactive');
                if(last_Off == cbox) {
                    last_Off = undefined;
                    return;
                }
            } 
            cbox.classList.add('inactive');
            last_Off = cbox;    
        }