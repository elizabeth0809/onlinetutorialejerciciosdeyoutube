var data = {
titulo: 'lista de tareas',
tareas:[
{
	texto: 'aprender Vue.js',
	terminada: false
},
{
	texto: 'aprender angular.js',
	terminada: false
},
{
	texto: 'aprender ionic.js',
	terminada: false
} 
],
nuevaTarea:''
	}
Vue.component('titulo', {
	template:'<h2>{{titulo}}</h2>',
	data: function(){
		return{titulo: 'Lista de Tareas'}
	}
})
Vue.component('nueva-tarea',{
	template:`<div class="input-group">
		<input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control"
		v-on:keyup.enter="agregarTarea">
		<span class="input-group-btn">
		<button type="button" v-on:click="agregarTarea" class="btn btn-primary">Agregar</button>
		</span>
	</div>`,
	data: function(){
		return data;
	},
	methods: {
		agregarTarea: function(){
	var texto = this.nuevaTarea.trim();
	if(texto){
		this.tareas.push({
			texto:texto,
			terminada: false
		})
			}
			this.nuevaTarea = '';
		}

	}
})
Vue.component('lista-de-tareas',{
	template: `
	<ul class="list-group">
		<li v-for="(tarea, indice) of tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
			<!---Manera de mostrar al array tarea solo mostrando el texto del array--->
			{{tarea.texto}}

		<span class="pull-right">
<!---con la propiedad v-on cambiara la tarea de falso a verdadero al presionar---->
		<button type="button" class="btn btn-sucess btn-xs glyphicon glyphicon-ok"
		v-on:click="tarea.terminada = !tarea.terminada"
		>Ok</button>
		<button type="button" class="btn btn-sucess btn-xs glyphicon glyphicon-remove"
		v-on:click="borrar(indice)"
		>Remover</button>
		</span>
		</li>
	</ul>
	 `,
	 data: function(){
		return data;
	},
	methods: {

		borrar:function(indice){
			this.tareas.splice(indice,1);
	}
}
})
var app = new Vue(
{
	el: '#app',
	data: data,
	methods:{
		}
	}
)
