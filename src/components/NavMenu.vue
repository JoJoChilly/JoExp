<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <template v-for="(item, index) in navInfo" :key="item">
      <el-menu-item :index="index.toString()" v-if="!item.subInfo || item.subInfo.length <= 0">
        <router-link v-if="item.link" :to="item.link">{{ item.name }}</router-link>
        <template v-else>{{ item.name }}</template>
      </el-menu-item>
      <el-submenu :index="index.toString()" v-else>
        <template slot="title">{{ item.name }}</template>
        <el-menu-item :index="index.toString()+'-'+subIndex" v-for="(subItem, subIndex) in item.subInfo" :key="subItem">
          <router-link v-if="subItem.link" :to="subItem.link">{{ subItem.name }}</router-link>
          <template v-else>{{ subItem.name }}</template>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    props: ['navInfo'],
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
