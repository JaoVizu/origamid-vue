<template>
  <div>
    <p>Aula {{aulasCompletas}} completas, esse é o usuário: {{user}}</p>
    <button @click="completarAula">Completar Aula</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data(){
    return {

    }
  },
  methods: {
    ...mapMutations(['completarAula']),
  },
  computed: {
    ...mapState(['user', 'aulasCompletas'])
  }
}
</script>

<style>

</style>