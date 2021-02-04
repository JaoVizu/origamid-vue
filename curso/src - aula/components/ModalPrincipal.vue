<template>
  <div class="modal">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalPrincipal',

}
</script>

<style>

</style>