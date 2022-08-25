<template>
  <div id="app">
    <MyCalculator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyCalculator from './components/MyСanculator.vue'

export default {
  name: 'App',
  components: {
    MyCalculator
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
.container{
  max-width: 600px;
  margin: auto;
}
.title{
  text-align: center;
  margin: 60px 0px;
}
.condition-wrap{
  height: 50px;
  width: 100%;
}
.calculation-btn{
  width: 100%;
  height: 60px;
  font-size: 26px;
  background: beige;
  border: 1px solid #6355e53b;
  cursor: pointer;
}
.calculator-wrap{
  display: flex;
}
</style>
