<script>
// import { getLibrary } from '@/services/api';
import data from '@/assets/books.json'
export default {
  data() {
    return {
      name: "Personal Library"
    }
  },
  async beforeMount() {
    // const books = await getLibrary()
    // console.log(books)
    console.log(data)
    this.name = data
  }
}
</script>

<template>
  <div class="about">
    <h1>{{ name }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
