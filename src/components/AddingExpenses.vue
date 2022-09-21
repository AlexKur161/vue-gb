<template>
    <div>
      <button class="btn-additem" @click="showForm = !showForm">ADD NEW COST</button>
      <div class="wrap-routeradd">
      <button class="btn-additem" @click="addFood">addFood</button>
      <button class="btn-additem" @click="addTransport">addTransport</button>
      <button class="btn-additem" @click="addEntertainment">addEntertainment</button>
      </div>
      <form class="add-form" v-if="showForm" action="">
        <input placeholder="Date" type="text" v-model="date">
        <select class="select-inp" v-model="category">
          <option value=""> Выберите категорию</option>
          <option
          v-for="(cat, index) in ArrayCategory"
          :key="index">{{cat}}</option>
        </select>
        <input placeholder="Value" type="number" v-model="value">
        <button :disabled="validItem()" class="btn-additem btn-form" @click.prevent="addExpenses"> Add expenses</button>
      </form>
    </div>
</template>
<script>

export default {
  name: 'AddingExpenses',
  props: {
    ArrayCategory: {
      type: Array
    }
  },
  data: () => ({
    showForm: false,
    date: '',
    category: '',
    value: '',
    selectedValue: ''
  }),
  methods: {
    addExpenses () {
      const { date, category, value } = this
      const expensesDay = {
        date: date || this.currentDate,
        category,
        value: Number(value)
      }
      this.date = ''
      this.category = ''
      this.value = ''
      this.$emit('add-expenses', expensesDay)
    },
    addFood () {
      // this.$route({
      //   params: {
      //     categotyRout: 'food',
      //     valueRout: 200
      //   }
      // })
      console.log(this.$route)
      console.log(this.$router)
      this.showForm = true
      this.$route.params.value = 200
      this.$route.params.category = 'food'
      this.category = this.$route.params.category
      this.value = this.$route.params.value
      console.log(this.$route.params)
    },
    addTransport () {
      this.showForm = true
      this.$route.params.value = 50
      this.$route.params.category = 'transport'
      this.category = this.$route.params.category
      this.value = this.$route.params.value
      console.log(this.$route.params)
    },
    addEntertainment () {
      this.showForm = true
      this.$route.params.value = 2000
      this.$route.params.category = 'Entertainment'
      this.category = this.$route.params.category
      this.value = this.$route.params.value
      console.log(this.$route.params)
    },
    validItem () {
      if (this.category === '' || this.value === '') {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    currentDate () {
      const currenDate = new Date()
      let day = currenDate.getDate()
      if (day < 10) {
        day = String(0) + currenDate.getDate()
      }
      let month = currenDate.getMonth() + 1
      if (month < 10) {
        month = String(0) + (currenDate.getMonth() + 1)
      }
      const year = currenDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  }
}
</script>
<style scoped>
.btn-additem{
  padding: 15px 60px;
    border: none;
    outline: none;
    border-radius: 10px;
    background: #008ac1;
    color: #fff;
    display: block;
    cursor: pointer;
}
.add-form{
  margin-top: 30px;
}
.btn-form{
  margin-top: 20px;
  text-transform: uppercase;
}
.btn-form:disabled{
  opacity: 0.5;
}
input{
      height: 40px;
    border: 1px solid #008ac1;
    margin-right: 10px;
    padding-left: 10px;
}
.select-inp{
    height: 40px;
    border: 1px solid #008ac1;
    margin-right: 10px;
    padding: 10px 20px;
-moz-appearance: none;
-webkit-appearance: none;
outline: none;
}
.wrap-routeradd{
  display: flex;
  gap: 30px;
  margin-top: 20px;
}
</style>
