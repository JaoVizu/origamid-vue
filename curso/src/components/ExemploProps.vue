<template>
  <div>
    <ComponentProps>
      <template v-slot="{ user }">
        <h1>Exemplo slot com props</h1>
        <p>{{user.firstName}}</p>
        <p>{{user.lastName}}</p>
      </template>
    </ComponentProps>
  </div>
</template>

<script>
import ComponentProps from './ComponentProps'

export default {
  components: {ComponentProps},

}
</script>

<style>

</style>