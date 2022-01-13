<template>
  <li class="mli">
    <slot name="item" v-bind="{ checked }"></slot>
    <input type="checkbox" v-model="checked" />
  </li>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
