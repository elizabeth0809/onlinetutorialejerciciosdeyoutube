var app = new Vue({
    el : '.vue',
    data: {
        mensaje: 'Aprende Vue.js Facilmente',
        src: '../css/images/ajax-loader.gif'
    },
    methods: {
    	mostrarMensaje: function(){
    		return this.mensaje;
    	}
    }
});
new Vue({
    el:'#vm',
    data:{
        mensaje: 'este es un mensaje'
    },
    beforeCreate : function(){
        console.log('llamando beforeCreate');
    },
    created : function(){
        console.log('llamando create');
    },
    beforeMount : function(){
        console.log('llamando beforeMount');
    },
    beforeUpdate : function(){
        console.log('llamando beforeUpdate');
    },
    updated : function(){
        console.log('llamando updated');
    },
    beforeDestroy : function(){
        console.log('llamando beforeDestroy');
    },
    destroyed : function(){
        console.log('llamando Destroyed');
    },
    methods : {
        destruir : function(){
            this.$destroy();
        }
    }
 });