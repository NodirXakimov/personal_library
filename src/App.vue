<script>
export default {
  data() {
    return {
      activeIndex: '0',
      loadingStatusButton: false
    }
  },
  methods: {
    async changeLocale() {
      this.loadingStatusButton = true
      setTimeout(() => {
        this.loadingStatusButton = false
        this.$i18n.locale = this.$i18n.locale === 'en' ? 'uz' : 'en'
      }, 200)
    }
    // handleSelect(tab, event) {
    //   console.log(tab, event.target)
    // }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale === 'en' ? 'English' : 'O\'zbekcha'
    }
  }
}
</script>

<template>
  <el-page-header>
    <template #content>
      <el-space :size="10" spacer="|">

      <span class="text-large font-600 mr-5">
        <router-link to="/books">Books</router-link>
      </span>
        <span class="text-large font-600 mr-5">
        <router-link to="/books-card">Books card</router-link>
      </span>
        <span class="text-large font-600 mr-5">
        <router-link to="about">About</router-link>
      </span>
        <span class="text-large font-600 mr-5">
        <router-link to="/users">Users</router-link>
      </span>
        <span class="text-large font-600 mr-5">
        <router-link to="/async-components">Async components</router-link>
      </span>

      </el-space>
    </template>
    <template #extra>
      <el-button
        :loading="loadingStatusButton"
        class="ml-2"
        type="primary"
        @click="changeLocale"
      >
        {{ currentLocale }}
      </el-button>
    </template>
    <RouterView />

  </el-page-header>
</template>