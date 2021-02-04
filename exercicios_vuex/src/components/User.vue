<template>
  <div>
    <p>User</p>
    <label for="">Username</label>
    <input type="text" v-model="username">
    <button @click="changeUsername">Change username</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      username: ''
    }
  },
  methods : {
    ...mapMutations(['changeUser']),
    changeUsername(){
      this.changeUser({ username: this.username })
    }
  }
}
</script>

<style>

</style>