const navegacion = document.querySelector('#principal');
console.log (navegacion.children[0].nodeName);//nodeName regresa el nombre del nodo, en este caso es un div
console.log (navegacion.children[0].nodeType);
const elemtos = document.querySelectorAll('.blogpost');//regresa todos lo nodos
console.log(elemtos);
console.log(elemtos[0].lastElementChild);//regresa el ultimo y el primer elemento
console.log(elemtos[0].firstElementChild);//Regresa el primer elemento
console.log(elemtos[0].parentElement);//selecciona los elemtos padres
//console.log(elemtos[0].ElementSibling);//seleccion los elementos sin hijos que esten en el mismo nivel

const enlace = document.createElement('a');//crear elemento en javascript
enlace.className = 'enlace';// agregar clase al elemento creado
enlace.id = 'nuevo-id'; // agregar id al elemento creado
enlace.setAttribute('href', '#'); //la propiedad que va a tener en este caro es el href porque es un enlace
enlace.textContent = 'Nuevo Enlace'; //Texto que tendra dentro en la etiqueta <a>
 //inyectamos todo lo creado en dom
document.querySelector('.content').appendChild(enlace);//appendChild selecciona el emento y lo agrega en el ultimo hijo
console.log(enlace);

const cajas = document.querySelectorAll('.blogpost');
cajas[0].remove();//remueve el contenido, en la clase direccionada del codigo de arriba
console.log(cajas);
const primerLi = document.querySelector('.blogpost');
let elemeto;
elemeto = primerLi.className;
elemeto = primerLi.classList.add('nueva-clase');//agrega una clase nueva inyectada en .blogpost
elemeto = primerLi.classList.remove('nueva-clase');
elemeto = primerLi.classList;
//leer atributos
elemeto = primerLi.getAttribute('href');//obtienes el atributo
primerLi.setAttribute('href', 'http://facebook.com');//insertas el atributo
primerLi.setAttribute('data-id', 20);
elemeto = primerLi.hasAttribute('data-id');//comprueba que tenga algun atributo
primerLi.removeAttribute('data-id');//remueve los atributos seleccionados
console.log(elemeto);
/* Tipos de nodos
1 = Elementos
2 = Atributos
3 = Text Node
8 = comentarios
9 = documentos
10 = doctype
*/
//muestra una alerta al presionar un boton
document.querySelector('#buscador').addEventListener('click', function(e){
	e.preventDefault();//previene la accion por default de llevarnos a un enlace de #
	alert('Buscando Cursos')
})