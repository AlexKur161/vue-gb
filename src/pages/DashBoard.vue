<template>
    <div class="container">
        <h1>My personal costs {{ TotalCost }}</h1>
        <button @click="addModal">test</button>
      <ListExpenses :Arraylistexpenses="ArrayListexpenses" />
    </div>
</template>

<script>
import ListExpenses from '@/components/ListExpenses.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    // ArrayListexpenses: []
  }),
  components: {
    ListExpenses
  },
  computed: {
    ...mapGetters(['ArrayListexpenses', 'TotalCost'])
    // ArrayListexpenses () {
    //   return this.$store.state.ArrayListexpenses
    // }
  },
  methods: {
    ...mapActions(['fetchData']),
    addModal () {
      this.$modal.show({ title: 'Add expenses', content: 'Modal' })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
