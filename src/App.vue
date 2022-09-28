<template>
  <div id="app">
    <div class="container">
      <header>
      <nav>
        <router-link to="dashboard">dashboard</router-link>
        <router-link to="about">about</router-link>
        <router-link to="notfound">notfound</router-link>
      </nav>
      </header>
      <main>
        <button @click="showModal = !showModal">ADD NEW COST</button>
        <router-view></router-view>
      </main>
       <ModalDash :showModal="showModal" v-if="showModal"/>
      <footer></footer>
    </div>
  </div>
</template>
<script>
import ModalDash from '@/components/ModalDash.vue'

export default {
  data () {
    return {
      showModal: false,
      ModalSettings: {}
    }
  },
  components: {
    ModalDash
  },
  methods: {
    ModalOpen (settings) {
      this.ModalSettings = settings
      this.showModal = true
    },
    ModalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.ModalOpen)
    this.$modal.EventBus.$on('hide', this.ModalClose)
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
nav{
  width: 600px;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: auto;
  margin-top: 60px;
}

</style>
