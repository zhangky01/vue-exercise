<template>
  <div id="app">
    {{ msg }}
    <br/>
    <input v-model="info" type="text"/> <button @click="handleClick">确定</button>
    <ul>
      <my-li v-for="item in list" :key="item">
        <template v-slot:item="slotProps">
          <span :style="{ color: slotProps.checked ? 'red' : 'blue' }">
            {{ item }}
          </span>
        </template>
      </my-li>
    </ul>
  </div>
</template>

<script>
import MyLi from './components/MyLi.vue'

export default {
  name: 'App',
  components: {
    MyLi
  },
  data() {
    return {
      msg: 'hello zhangsan',
      info: '',
      list: []
    }
  },
  methods: {
    handleClick() {
      this.list.push(this.info)
      this.info = ''
    }
  }
}
</script>

<style>
</style>
