<template>
  <div id="app">
    <button @click="handleClick">新增</button>
    <br/>
    <!-- <MyInput v-for="(item, index) in list" :key="index"> -->
    <MyInput v-for="item in list" :key="item">
      <button @click="() => handleDelete(item)">删除</button> <br/>
    </MyInput>
  </div>
</template>

<script>
import MyInput from './components/MyInput.vue'
let key = 1;
export default {
  name: 'App',
  components: {
    MyInput
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleClick() {
      this.list.push(key++)
    },
    handleDelete(item) {
      const index = this.list.findIndex(i => i === item)
      console.log(index);
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
