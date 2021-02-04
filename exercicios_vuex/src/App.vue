<template>
  <div id="app">
    <ul>
      <li 
        v-for="livro in $store.state.livros.livros"
        :key="livro.nome">
      <p>{{livro.nome}}</p>
      </li>
    </ul>
    <h2>Livros Lidos</h2>
    <ul>
      <li 
        v-for="livro in livrosLidos"
        :key="livro.nome">
      <p>{{livro.nome}}</p>
      </li>
    </ul>
    <h1>Bem Vindo - {{$store.state.user}}</h1>
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from './components/Aluno.vue'
import Curso from './components/Curso.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Aluno, Curso
  },
  computed: {
    ...mapGetters(["livrosLidos"])
  },
  created(){
    console.log(this.$store)
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
