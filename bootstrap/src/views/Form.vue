<template>
    <div class="container">
        <h1></h1>

        <b-row>
            <b-col md="3">
                <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                <small>Minimo  3 caracteres</small>
                <p>texto: {{texto}}</p>
            </b-col>
            <b-col md="3">
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>

                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </b-col>
            <b-col md="3">
                <b-form-radio-group v-model="radio" :options="animales"></b-form-radio-group>
                <p>Radio: {{radio}}</p>
            </b-col>
            <b-col md="3">
                <b-form-checkbox-group v-model="check" :options="animales"></b-form-checkbox-group>
                <p>{{check}}</p>
            </b-col>
        </b-row>
        
    </div>
</template>
<script>
export default {
    name:'form',
    data(){
        return{
            texto:'',
            radio: null,
            check:[],
            selected: null,
            options: [
            { value: null, text: 'Please select an option' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            { value: { C: '3PO' }, text: 'This is an option with object value' },
            { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            animales:[
                {value:'perro', text: 'guau'},
                {value:'gato', text: 'miau'},
                {value:'pato', text: 'cuacua'},
            ]
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
    
}
</script>
