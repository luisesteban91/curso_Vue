<template>
    <div class="container">
        <h1></h1>

        <form>
            <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
        </form>
        <p>texto: {{texto}}</p>
    </div>
</template>
<script>
export default {
    name:'form',
    data(){
        return{
            texto:''
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
    
}
</script>
