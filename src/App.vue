<template>
  <div id="app">
    <Calculator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
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
.condition-wrap{
  width: 100%;
  height: 100px;
  margin: auto;
  display: block;
}
.calculation-btn{
  width: 100px;
  height: 60px;
  font-size: 26px;
  background: beige;
  border: 1px solid #6355e53b;
  cursor: pointer;
}
</style>
