<template>
  <div v-if="modal" >
    <button>Fechar</button>
    <h1 :class="{color : classe == true}">Modal de aviso</h1>
    <p>Aviso é que você precisa tomar banho</p>
    <div>
      <h2>Cor 1</h2>
      <input type="color" v-model="cor">
      <p :style="{color: cor}">Estou aqui - {{cor}}</p>
    </div>
    <div>
      <h2>Cor 2</h2>
      <input type="color" v-model="corDois">
      <p :style="{color: corDois}">Estou aqui - {{corDois}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      modal: true,
      classe: true,
      cor: '#000000',
      corDois: '#000000'
    }
  },
  // watch: {
  //   corDois(){
  //     console.log('WATCH : cor mudou')
  //   }
  // },
  // computed: {
  //   colorChange(){
  //     console.log('COMPUTED: COR MUDOU')
  //     return this.cor
  //   }
  // }
}
</script>

<style>
.color {
  color: blue;
}
</style>