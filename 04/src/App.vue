<template>
  <div id="app">
    {{ msg }}
    <br/>
    <input v-model="input" />
    <br/>
    {{ current }}
    <br/>
    <button @click="handleClick" :disabled="btnDis">点击购买</button>
    <br/>
    {{ finished }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '',
      input: '',
      btnDis: false,
      current: new Date(),
      limit: new Date(Date.now() + 1000 * 5),
      finished: '',
    }
  },
  methods: {
    handleClick() {
      this.btnDis = true
      clearInterval(this.siv)
      alert("购买成功")
    }
  },
  watch: {
    input(v) {
      clearTimeout(this.msgTimeout)
      this.msgTimeout = setTimeout(() => {
        this.msg = v;
      }, 500)
    },
  },
  created() {
    this.siv = setInterval(() => {
      this.current = new Date()
      if (this.limit.getTime() < this.current.getTime()) {
        this.btnDis = true
        this.finished = '秒杀活动已经结束'
        clearInterval(this.siv)
      }
    }, 1000)
  }
}
</script>

<style>
</style>
