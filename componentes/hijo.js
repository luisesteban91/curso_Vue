Vue.component('hijo',{
    template://html
    `
        <div class="p-5 bg-success text-white">
            <h3>Hijo:{{numero}}</h3>
        </div>
    `,
    props:['numero'] //recibe array que le esta enviado el padre
})