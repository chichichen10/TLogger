<template>
  <div id="app">
    <div id="body">
      <router-view name="header"></router-view>
      <router-view/>
      <sub align="center" id="footer">&copy 2019 CSCI3100 Group 31</sub>
    </div>
  </div>
</template>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#body {
  min-height: 100%;
  position: relative;
}
#footer {
  position: relative;
  bottom: 0;
}
</style>
