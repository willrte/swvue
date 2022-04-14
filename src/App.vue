<template>
  <div class="page">
    <div class="menu">
      <div class="link" :class="{page_active: CurrentPage==='Home'}" @click="$router.push('/');
      ChangePageActive('Home')">Home</div>
      <div style="margin: 0 1rem 0 1rem">_</div>
      <div class="link" :class="{page_active: CurrentPage==='Personnages'}" @click="$router.push('/personnages');
      ChangePageActive('Personnages')">Personnages</div>
      <div style="margin: 0 1rem 0 1rem">_</div>
      <div class="link" :class="{page_active: CurrentPage==='Perso'}" @click="$router.push('/perso');
      ChangePageActive('Perso')">Perso</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      CurrentPage: 'Home'
    }
  },
  methods: {
    ChangePageActive (name) {
      this.CurrentPage = name
    }
  }
}

</script>
<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.menu{
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
}
.link {
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
}

.link:hover {
  color: #42b983;
  cursor: pointer;
}
button{
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  background-color: #42afb9;
  color: #fff;
  border: 1px solid #42afb9;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover{
  background-color: #2c3e50;
}
input{
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  background-color: #ffffff;
  color: #00544c;
  border: 1px solid #42afb9;
  border-radius: 3px;
  padding: 5px 10px;
}
.page_active{
  font-weight: bold;
  font-size: 2rem;
}
</style>
