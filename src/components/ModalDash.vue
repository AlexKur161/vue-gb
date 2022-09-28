<template>
    <div>
        <div class="content">
            <!-- <button class="btn-additem" @click="showForm = !showForm">ADD NEW COST</button> -->
            <div class="form-add">
                <div class="wrap-form">
                  <h3>{{title}}</h3>
                    <button class="btn-close">&times;</button>
                <AddingExpenses
      @add-expenses="addExpenses"
      :ArrayCategory = "ArrayCategory"
      v-if="settings.content === 'Modal'"/>
      <AuthReg v-if="settings.content === 'Auth'"/>
      </div>
            </div>
        </div>
    </div>
</template>
<script>

import AddingExpenses from '@/components/AddingExpenses.vue'
import AuthReg from '@/components/AuthReg.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    settings: {
      type: Object,
      default: () => ({
        title: 'Modal window',
        content: ''
      })
    }
  },
  components: {
    AddingExpenses,
    AuthReg
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategory']),
    addExpenses (expensesDay) {
      this.$store.commit('ADD_FETCH_PAYMENT', expensesDay)
    }
  },
  computed: {
    ...mapGetters(['ArrayCategory']),
    title () {
      return this.settings.title
    }
  },
  created () {
    this.fetchData()
    this.fetchCategory()
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
.form-add{
    height: 100vh;
    width: 100vw;
    background: #00000057;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrap-form{
    position: relative;
    background: #fff;
    padding: 20px 30px 30px 30px;
    border-radius: 20px;
}
.btn-close{
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    border-radius: 90px;
    color: #fff;
    font-size: 16px;
    background: #008ac1;
    width: 26px;
    height: 26px;
    cursor: pointer;
}
</style>
