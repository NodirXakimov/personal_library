<script>
export default {
  data() {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect(tab, event) {
      console.log(tab, event.target)
    }
  }
}
</script>

<template>
  <el-page-header>
    <template #content>
      <span class="text-large font-600 mr-5">
        <router-link to="/books">Books</router-link>
      </span>
      <span class="text-large font-600 mr-5">
        <router-link to="about">About</router-link>
      </span>
    </template>

    <RouterView />

  </el-page-header>
</template>