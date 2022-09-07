<template>
    <div class="wrap-list">
      <div  class="one-block">
        <div v-if="listShow()" class="listshow">
          <div class="wrap-item-list">
            <div class="item-list">
              <div class="mini-item mini-item1"><p>#</p></div>
              <div class="mini-item"><p>Date</p></div>
              <div class="mini-item"><p>Category</p></div>
              <div class="mini-item"><p>Value</p></div>
            </div>
            <div class="item-list"
            v-for="(item,index) in Arraylistexpenses"
            :key="index">
              <div class="mini-item mini-item1"><p>{{index +1}}</p></div>
              <div class="mini-item"><p>{{item.date}}</p></div>
              <div class="mini-item"><p>{{item.category}}</p></div>
              <div class="mini-item"><p>{{item.value}}</p></div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="no-list">You haven't added your expenses yet</p>
        </div>
      </div>
      <div class="tu-block"></div>
    </div>
</template>

<script>
export default {
  name: 'listExpenses',
  props: {
    Arraylistexpenses: {
      type: Array
    }
  },
  methods: {
    listShow () {
      if (this.Arraylistexpenses.length === 0) {
        return false
      } else {
        return true
      }
    }
  }
}

</script>
<style scoped>
.item-list{
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 10px;
}
.wrap-list{
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.one-block{
  background: #008ac1;
  padding: 40px;
  flex-basis: 50%;
  border-radius: 20px;
}
.tu-block{
  flex-basis: 50%;
}
.mini-item{
  flex-basis: 30%;
}
.mini-item1{
flex-basis: 10%;
}
.mini-item p{
  color:#fff;
}
.no-list{
  color: #fff;
}
</style>
