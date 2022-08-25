<template>
  <div class="container">
    <input class="condition-wrap" v-model="condition" type="text">
    <button class="calculation-btn">+</button>
    <button class="calculation-btn">-</button>
    <button class="calculation-btn">/</button>
    <button class="calculation-btn">*</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    condition: '',
    result: ''
  }),
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<style>

</style>
