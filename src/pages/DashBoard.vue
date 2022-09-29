<template>
    <div class="container">
        <h1>My personal costs {{ TotalCost }}</h1>
        <div class="wrap-btn">
        <button class="btn-additem" @click="addModal">add expenses</button>
        <button class="btn-additem" @click="addAuthorization">authorization</button>
        </div>
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
    },
    addAuthorization () {
      this.$modal.show({ title: 'Authorization', content: 'Auth' })
    }
  },
  mounted () {
    this.fetchData()
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
.wrap-btn{
  display: flex;
  gap: 30px;
}
</style>
