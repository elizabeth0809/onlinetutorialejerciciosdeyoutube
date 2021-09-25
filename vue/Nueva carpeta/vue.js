new Vue({
    el:'#vm',
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,
        suma: 0
    },
    computed:{
        total: function(){
            return this.primero + this.segundo + this.tercero;
        }
    }
})
new Vue({
    el: '#eventos',
    data: {
        contador: 0
    },
    methods:{
        sumarUno: function(){
            this.contador += 1;
        },
        restarUno: function(){
            this.contador -=1;
        }
    }
})
new Vue({
    el:'#mv',
    data:{
        paises: ['mexico','españa', 'colombia']
    }
})
new Vue({
    el:'#eventoClickAlerta',
    data:{
       contador: 0
    },
    methods:{
        alerta: function(mensaje){
            alert(mensaje);
        }
    }
})
new Vue({
    el:'#eventoMouse',
    data:{
       x: 0,
       y: 0,
       contador: 0
    },
    methods:{
        mostrarUbicacion: function(evento){
            this.x =evento.clientX; //esto es un evento que al mover el mouse se ejecutara
            this.y =evento.clientY;

        },
        sumar: function(cantidad){ //aqui recibo la cantidad que en este caso es 3 y que se ira sumando d 3 en 3
            this.contador+= cantidad;//asi se agrega otro evento en vue
        }
    }
})