<template>
  <div class="container">
    <h1 class="title">Калькулятор</h1>
    <div class="calculator-wrap">
    <input class="condition-wrap" v-model.number="conditionOne" type="number">
    <input class="condition-wrap" v-model.number="conditionTu" type="number">
    <input class="condition-wrap" v-model.number="result" type="number">
    </div>
    <div class="calculator-wrap">
    <button @click="addition" class="calculation-btn">+</button>
    <button @click="subtraction" class="calculation-btn">-</button>
    <button @click="division" class="calculation-btn">/</button>
    <button @click="multiplication" class="calculation-btn">*</button>
    <button @click="step" class="calculation-btn">^</button>
    <button @click="wholeDivision" class="calculation-btn">(\)</button>
    </div>
    <p v-if="showTxt">Введите пожалуйста число</p>
    <p v-if="zero">На ноль делить нельзя!!!</p>
  </div>
</template>

<script>
export default {
  name: 'MyCalcuLator',
  data: () => ({
    conditionOne: 0,
    conditionTu: 0,
    result: '',
    showTxt: false,
    zero: false
  }),
  props: {
    msg: String
  },
  methods: {
    addition () {
      if (typeof this.conditionOne !== 'number' || typeof this.conditionTu !== 'number') {
        this.showTxt = true
        console.log(typeof this.result)
      } else {
        this.showTxt = false
        this.zero = false
        this.result = this.conditionOne + this.conditionTu
      }
    },
    subtraction () {
      if (typeof this.conditionOne !== 'number' || typeof this.conditionTu !== 'number') {
        this.showTxt = true
      } else {
        this.showTxt = false
        this.zero = false
        this.result = this.conditionOne - this.conditionTu
      }
    },
    division () {
      if (typeof this.conditionOne !== 'number' || typeof this.conditionTu !== 'number') {
        this.showTxt = true
      } if (this.conditionOne === 0 || this.conditionTu === 0) {
        this.zero = true
      } else {
        this.showTxt = false
        this.zero = false
        this.result = this.conditionOne / this.conditionTu
      }
    },
    multiplication () {
      if (typeof this.conditionOne !== 'number' || typeof this.conditionTu !== 'number') {
        this.showTxt = true
      } else {
        this.showTxt = false
        this.zero = false
        this.result = this.conditionOne * this.conditionTu
      }
    },
    step () {
      if (typeof this.conditionOne !== 'number' || typeof this.conditionTu !== 'number') {
        this.showTxt = true
      } else {
        this.showTxt = false
        this.zero = false
        this.result = this.conditionOne ** this.conditionTu
      }
    },
    wholeDivision () {
      if (typeof this.conditionOne !== 'number' || typeof this.conditionTu !== 'number') {
        this.showTxt = true
      } if (this.conditionOne === 0 || this.conditionTu === 0) {
        this.zero = true
      } else {
        this.showTxt = false
        this.zero = false
        this.result = Math.floor(this.conditionOne / this.conditionTu)
      }
    }
  }
}
</script>

<style>

</style>
