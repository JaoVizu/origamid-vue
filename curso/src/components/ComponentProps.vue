<template>
  <div>
    <slot :user="user">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ComponentProps',
  data(){
    return{ 
      user: {
        firstName: 'Joao Vitor',
        lastName: 'Vizu'
      }
    }
  }
}
</script>

<style>

</style>