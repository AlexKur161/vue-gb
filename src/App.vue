<template>
  <div id="app">
    <div class="container">
      <h1>My personal costs</h1>
      <AddingExpenses @add-expenses="addExpenses" />
      <ListExpenses :Arraylistexpenses="ArrayListexpenses" />
    </div>
  </div>
</template>

<script>
import ListExpenses from '@/components/ListExpenses.vue'
import AddingExpenses from '@/components/AddingExpenses.vue'

export default {
  name: 'App',
  data: () => ({
    ArrayListexpenses: []
  }),
  components: {
    ListExpenses,
    AddingExpenses
  },
  methods: {
    addExpenses (expensesDay) {
      this.ArrayListexpenses.push(expensesDay)
    }
  }
}
</script>

<style>

*{
  box-sizing: border-box;
}
.container{
  max-width: 1200px;
  margin: auto;
}

</style>
