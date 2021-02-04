<template>
  <div id="app">
    <button @click="showModal = true">Ativar modal</button>
    <modal-principal v-if="showModal">
      <template v-slot:header>
        <button @click="showModal = false">Fechar</button>
        <h1>Esse é o modal</h1>
      </template>
      
      <template slot="content">
        <p>Conteudo do modal deixa</p>
      </template>

      <template slot="footer">
        <p>Rodape do modal</p>
      </template>
    </modal-principal>

    <modal-aviso></modal-aviso>
    <DynamicIndex></DynamicIndex>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal'
import ModalAviso from './components/ModalAviso'
import DynamicIndex from './components/dynamic/DynamicIndex'


export default {
  name: 'App',
  components: {
    ModalPrincipal,
    ModalAviso,
    DynamicIndex

  },
  data(){
    return {
      showModal: false
    }
  }
  }
</script>

<style>

</style>
