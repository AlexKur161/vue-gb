<template>
    <div>
      <button class="btn-additem" @click="showForm = !showForm">ADD NEW COST</button>
      <form class="add-form" v-if="showForm" action="">
        <input placeholder="Date" type="text" v-model="date">
        <input placeholder="Category" type="text" v-model="category">
        <input placeholder="Value" type="number" v-model="value">
        <button :disabled="validItem()" class="btn-additem btn-form" @click.prevent="addExpenses"> Add expenses</button>
      </form>
    </div>
</template>
<script>

export default {
  name: 'AddingExpenses',
  data: () => ({
    showForm: false,
    date: '',
    category: '',
    value: ''
  }),
  methods: {
    addExpenses () {
      const { date, category, value } = this
      const expensesDay = {
        date: date || this.currentDate,
        category,
        value
      }
      this.date = ''
      this.category = ''
      this.value = ''
      this.$emit('add-expenses', expensesDay)
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
</style>
