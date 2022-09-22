<template>
    <div class="container">
        <h1>My personal costs {{ TotalCost }}</h1>
        <ModalDash />
      <ListExpenses :Arraylistexpenses="ArrayListexpenses" />
    </div>
</template>

<script>
import ListExpenses from '@/components/ListExpenses.vue'
import ModalDash from '@/components/ModalDash.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    // ArrayListexpenses: []
  }),
  components: {
    ListExpenses,
    ModalDash
  },
  computed: {
    ...mapGetters(['ArrayListexpenses', 'TotalCost'])
    // ArrayListexpenses () {
    //   return this.$store.state.ArrayListexpenses
    // }
  }
}
</script>
