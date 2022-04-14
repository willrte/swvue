<template>
  <div class="page">
    <div style="display: flex; flex-direction: row; margin-top: 2rem; justify-content: center">
      <div class="link" @click="$router.push('/')">Home</div>
      <div style="margin: 0 1rem 0 1rem">_</div>
      <div class="link" @click="$router.push('/test2emepage')">Star wars machin</div>
    </div>
    <router-view/>
  </div>
</template>

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
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover{
  background-color: #2c3e50;
}
</style>
