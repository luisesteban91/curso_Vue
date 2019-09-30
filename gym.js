const app = new Vue({
    el: '#app',
    data: {
        titulo: "GYM",
        tareas:[],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea (){
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado:true
            })
            this.nuevaTarea = ''
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));//Guardarlo en localstorage
        },
        editarTarea (index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));//Guardarlo en localstorage
        },
        eliminarTarea (index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));//Guardarlo en localstorage
        }
    },
    computed:{

    },
    created: function(){ //se carga cuando inicia el navegador
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
});