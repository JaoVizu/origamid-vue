<template>
  <div>
    <h1>Oi sou aluno e tenho {{this.aulasCompletas.length}} aulas completas</h1>
    <p>São elas:</p>
    <ul>
      <li
        v-for="(aula, indice) in this.aulasCompletas"
        :key="indice"
      >
      {{aula.nome}} - {{aula.duracao}} <span>minutos</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Aluno",
  computed: {
    ...mapState({
      aulasCompletas : state => state.aulasCompletas
    })
  }
}
</script>

<style>

</style>