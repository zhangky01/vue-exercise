<template>
  <div>
    <input v-model="phone">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data() {
    return {
      phone: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
