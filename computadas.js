const app = new Vue({
    el: '#app',
    data: {
        titulo: "Propiedades Computadas",
        mensaje: "Hola soy luis",
        contador: 0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return{
                'bg-danger' : this.contador <=10,
                'bg-warning' : this.contador >10 && this.contador <20,
                'bg-success' : this.contador >=20,
            }
        }
    }
});