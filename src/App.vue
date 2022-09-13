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
        <router-view></router-view>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

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
