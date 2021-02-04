<template>
  <div id="app">
    <ul>
      <li @click="componenteAtivo = 'MeuExemplo'">Slot normal</li>
      <li @click="componenteAtivo = 'ExemploProps'">Slot com props</li>
    </ul>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>

import MeuExemplo from './components/MeuExemplo'
import ExemploProps from './components/ExemploProps'

export default {
  name: 'App',
  components: {
    MeuExemplo,
    ExemploProps

  },
  data(){
    return{
      componenteAtivo: MeuExemplo
    }
  }
  }
</script>

<style>

</style>
