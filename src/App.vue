<script>
export default {
  data() {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'uz' : 'en'
    },
    handleSelect(tab, event) {
      console.log(tab, event.target)
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale === 'en' ? "English" : "O'zbekcha"
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
      </el-space>
    </template>
    <template #extra>
      <el-button @click="changeLocale" type="primary" class="ml-2">{{ currentLocale }}</el-button>
    </template>
    <div>
      <RouterView/>

    </div>

  </el-page-header>
</template>