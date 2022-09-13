<template>
    <div class="container">
        <h1>My personal costs {{ TotalCost }}</h1>
      <AddingExpenses
      @add-expenses="addExpenses"
      :ArrayCategory = "ArrayCategory"
      />
      <ListExpenses :Arraylistexpenses="ArrayListexpenses" />
    </div>
</template>

<script>
import ListExpenses from '@/components/ListExpenses.vue'
import AddingExpenses from '@/components/AddingExpenses.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    // ArrayListexpenses: []
  }),
  components: {
    ListExpenses,
    AddingExpenses
  },
  computed: {
    ...mapGetters(['ArrayListexpenses', 'ArrayCategory', 'TotalCost'])
    // ArrayListexpenses () {
    //   return this.$store.state.ArrayListexpenses
    // }
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategory']),
    addExpenses (expensesDay) {
      this.$store.commit('ADD_FETCH_PAYMENT', expensesDay)
    }
  },
  created () {
    this.fetchData()
    this.fetchCategory()
  }
}
</script>
