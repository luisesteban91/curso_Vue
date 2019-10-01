<template>
  <v-layout :wrap="true">
    <v-flex xs12>

      <v-card>
        <v-date-picker v-model="fecha" :min="minimo" full-width locale="es-mx"
          @change="getDolar(fecha)"
        >
        </v-date-picker>
      </v-card>

      <v-card color="error" dark>
        <v-card-text class="display-1 text-center">
          {{valor}}
        </v-card-text>
      </v-card>
      
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios';
  import { mapMutations } from 'vuex';
export default {
  
  data(){
    return{
      fecha: '',
      minimo: '1984',
      maximo: new Date().toString().substr(0,10),
      valor: null
    }
  },
  methods: {
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),
    async getDolar(dia){
      let arrayFecha = dia.split(['-'])
      let ddmmaa = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]
      
       try {

         this.mostrarLoading({titulo:'Accediendo a informacion', color:'secondary'})

          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmaa}`)
          if(datos.data.serie.length > 0){
            this.valor = await datos.data.serie[0].valor

          }else{
            this.valor = 'Sin Valor'
          }
          console.log(datos.data);
          
       } catch (error) {
         console.log(error);
       }
       finally{
         this.ocultarLoading()
       }
    }
  },
  created(){
    this.getDolar(this.fecha)
  }
};
</script>
