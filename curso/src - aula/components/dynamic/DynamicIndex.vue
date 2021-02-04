<template>
  <div>
    <button @click="componenteAtivo = 'Sobre'">Sobre</button>
    <button @click="componenteAtivo = 'Servicos'">Serviços</button>
    <button @click="componenteAtivo = 'Contato'">Contato</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import Sobre from './Sobre'
import Servicos from './Servicos'
import Contato from './Contato'

export default {
  components: {
    Sobre,
    Servicos,
    Contato
  },
  data(){
    return {
      componenteAtivo: Sobre
    }
  }
}
</script>

<style>

</style>