<template>
  <div class="aula">
    <ul
      v-if="filtrarAulas.length > 0" 
      class="aula__lista">
      <li
        class="aula__lista--item" 
        v-for="(aula, indice) in filtrarAulas" 
        :key="indice"
      >
        <h4>Aula de {{aula.nome}}</h4>
        <p>Duração: {{aula.duracao}}</p>
        <button @click="completarAula(aula)">Completar</button>
      </li>
    </ul>
    <p v-else>Nenhuma aula para fazer!</p>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  data(){
    return {
     aulas: [
       {
         nome: "HTML e CSS",
         duracao: 15
       },
       {
         nome: "JavaScript",
         duracao: 30
       },
       {
         nome: "UX Design",
         duracao: 20
       },
       ] 
    }
  },
  methods: {
    ...mapActions(["completarAula"]),
  },
  computed: {
    ...mapState({
      aulasCompletas: state => state.aulasCompletas
    }),
    filtrarAulas(){
      return this.aulas.filter(aula => {
        if (this.aulasCompletas.length > 0){
          if(this.aulasCompletas.indexOf(aula) === -1){
            return this.aulas
          }
        }
        else
          return this.aulas
      })
    }
  }
}
</script>

<style scoped>

.aula__lista {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.aula__lista--item {
  border: 1px solid black;
  margin: 10px;
  padding: 10px; 
  flex: 1 1 400px
}

button {
  cursor: pointer;
}

</style>