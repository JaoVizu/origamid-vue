<template>
  <div id="app">
    <h1>Bem Vindo - {{$store.state.user}}</h1>
    <User />
    <Curso />
  </div>
</template>

<script>
import User from './components/User.vue'
import Curso from './components/Curso.vue'

export default {
  name: 'App',
  components: {
    Curso, User
  }
}
</script>

<style>

</style>
