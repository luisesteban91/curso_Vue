
Vue.component('saludo',{
    template: //html
    `
    <div>
        <h1>{{titulo}}</h1>
        <h2>{{saludo}}</h2>
    </div>
    `,
    data(){
        return {
            titulo: "Componentes Vue",
            saludo: 'Hola desde Vue'
        }
    }
})