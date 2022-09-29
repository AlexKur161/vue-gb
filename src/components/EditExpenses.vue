<template>
    <div>
        <input v-model="settings.date" type="text">
        <input v-model="settings.category" type="text">
        <input v-model="settings.value" type="text">
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
    ...mapActions(['fethData'])
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
