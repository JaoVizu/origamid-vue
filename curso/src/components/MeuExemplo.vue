<template>
  <div>
    <h1>Este é meu exemplo!!</h1>
    <p>Abaixo eu utilizo slots e componente dinamico</p>
    <MeuExemploContent>
      <template slot="content">
        <h3>Este é meu exemplo com slots</h3>
        <p>Muito feliz de estar entendendo isso</p>
      </template>
    </MeuExemploContent>
  </div>
</template>

<script>

import MeuExemploContent from './MeuExemploContent'

export default {
  components: {
    MeuExemploContent
  },
 
}
</script>

<style>

</style>