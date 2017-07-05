<template>
  <div id="app">
    <NavMenu :navInfo="navInfo"></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'

export default {
  name: 'app',
  components: {
    NavMenu
  },
  data () {
    return {
      navInfo: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '我的工作台',
          subInfo: [
            {
              name: '选项1'
            },
            {
              name: '选项2'
            },
            {
              name: '选项3'
            }
          ]
        },
        {
          name: 'About',
          link: 'about'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0
}
body {
  overflow-x: hidden
}
a {
  text-decoration: none;
  z-index: 9
}
a:focus {
  outline: 0
}
</style>
