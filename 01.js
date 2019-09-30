const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        autos: [
            {nombre:'Versa', cantidad:5},
            {nombre:'Altima', cantidad:0}, 
            {nombre:'Murano', cantidad:15}
        ],
        nuevoAuto: '',
        totalAutos: 0
    },
    methods:{
        agregarAuto(){
            this.autos.push({
                nombre:this.nuevoAuto, cantidad: this.nuevaCantidad
            })
            this.nuevoAuto = ''//limpiar
        }
    },
    computed:{
        sumarAutos(){
            this.totalAutos = 0;
            for(auto of this.autos){
                this.totalAutos += auto.cantidad;
            }
            return this.totalAutos;
        }
    }
});