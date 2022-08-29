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
    <p v-if="zero">На ноль делить нельзя!!!!</p>
    <div class="check-panel">
    <input @change="showPanel = !showPanel" type="checkbox" name="test" id="test">
    <label for="test">Показать панель ввода</label>
    </div>
    <div v-if="showPanel" class="panel">
      <button @click="PanelBtnAdd(btn)" v-for="(btn, index) in panelBtn"
      :key="index">{{btn}}</button>
      <div class="switch-value">
      <input type="radio" value="oneOp" name="" id="oneOp" v-model="picked">
      <label for="">1 Операнд</label>
      <input type="radio" value="tuOp" name="" id="tuOp" v-model="picked">
      <label for="">2 Операнд</label>
      <p class="txt-operand" v-if="noChecked">Выберете операнд</p>
      </div>
    </div>
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
    zero: false,
    panelBtn: [1, 2, 3, 4, 5, 6, 7, 8, 9, '<'],
    showPanel: false,
    checkConditionOne: true,
    checkConditiontu: false,
    noChecked: false,
    picked: ''
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
    },
    PanelBtnAdd (btn) {
      if (this.picked === 'oneOp') {
        this.noChecked = false
        this.conditionOne = parseInt(this.conditionOne + String(btn))
        if (btn === '<') {
          this.conditionOne = String(this.conditionOne).split('')
          this.conditionOne.splice(-1, 1).join('')
          console.log(this.conditionOne.join(''))
        }
      } if (this.picked === 'tuOp') {
        this.noChecked = false
        this.conditionTu = parseInt(this.conditionTu + String(btn))
      } else if (this.picked === '') {
        this.noChecked = true
      }
    }
  }
}
</script>

<style>
.panel{
 width: fit-content;
 margin: auto;
}
.check-panel{
  width: fit-content;
  margin: auto;
  padding: 30px 0px 20px 0px;
}
.switch-value{
 width: fit-content;
 margin: auto;
 margin-top: 10px;
}
.txt-operand{
  text-align: center;
}
</style>
