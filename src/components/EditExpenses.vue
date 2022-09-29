<template>
    <div>
        <input :value="settings.date" type="text">
        <input :value="settings.category" type="text">
        <input :value="settings.value" type="text">
        <button>save</button>
    </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    settings: {
      type: Object,
      default: () => ({
        title: 'Modal window',
        content: '',
        date: '',
        category: '',
        value: ''
      })
    }
  },
  data () {
    return {
      date: '',
      category: '',
      value: ''
    }
  },
  methods: {
    ...mapActions(['fethData']),
    saveExpenses () {
      const exp = {
        date: this.settings.date,
        category: this.settings.category,
        value: this.settings.value
      }
      this.$store.commit('ADD_FETCH_PAYMENT', exp)
    }
  },
  computed: {
    ...mapGetters(['ArrayListexpenses'])
  },
  created () {
    // this.ArrayListexpenses.forEach(element => console.log(element))
    // const test = this.ArrayListexpenses.find((item) => item.date === this.settings.date && item.category === this.settings.category && item.value === this.settings.value)
    // console.log(test.category)
    // this.category = test.category
    // test.category = this.category
  }
}
</script>
