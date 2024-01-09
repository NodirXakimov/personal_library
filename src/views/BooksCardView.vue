<script>
import books from '@/assets/books.json'
import BookCardComponent from "@/components/BookCardComponent.vue";


export default {
  components: {BookCardComponent},
  data() {
    return {
      books: books.library,
      rating: 3,
      countOpeningDrawer: 0
    }
  },
  methods: {
    drawOpen(day, month, year) {
      this.countOpeningDrawer++
      console.log("Day:", day)
      console.log("Month:", month)
      console.log("Year:", year)
    }
  },
  mounted() {
    console.log(books.library)
  }
}
</script>

<template>
  <main>
    <h1>{{ $t("books.books_card.heading") }}</h1>
    <h3>Count of opening drawer: {{ countOpeningDrawer }}</h3>
    <div class="book-card-container">
      <BookCardComponent v-for="book in books" :key="book.id" :book="book" @openDrawer="drawOpen"/>
    </div>
  </main>
</template>

<style scoped>
  .book-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>