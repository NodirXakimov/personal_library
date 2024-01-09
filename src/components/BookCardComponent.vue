<template>
  <el-card class="book-card">
    <div class="book-image">
<!--      <img :src="book['image']" alt="Book Cover" />-->
      <img src="https://static.vecteezy.com/system/resources/thumbnails/007/509/117/small/sketch-of-a-book-with-a-bookmark-the-book-with-an-abstract-hard-cover-is-closed-an-element-for-education-reading-and-studying-hand-drawn-and-isolated-on-white-black-and-white-illustration-vector.jpg" alt="Book Cover" />
    </div>
    <div class="book-details">
      <h2 class="book-title">{{ book['title'] }}</h2>
      <p><strong>Author:</strong> {{ book['author'] }}</p>
      <p><strong>Genre:</strong> {{ book['genre'] }}</p>
      <p><strong>Publication Year:</strong> {{ book['publication_year'] }}</p>
      <p><strong>ISBN:</strong> {{ book['isbn'] }}</p>
      <p><strong>Status:</strong> {{ book['status'] }}</p>
      <p><strong>Rating:</strong> {{ book['rating'] }}</p>
      <el-button type="primary" @click="openDrawer">Open drawer</el-button>
      <el-drawer v-model="drawer">

      </el-drawer>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    openDrawer() {
      this.drawer = true
      this.$emit('open-drawer', 12, 12, 96)
    }
  }
};
</script>

<style scoped>
.book-card {
  width: 300px;
  margin: 20px;
}

.book-image {
  text-align: center;
}

.book-image img {
  max-width: 100%;
  height: auto;
}

.book-details {
  padding: 15px;
}

.book-title {
  font-size: 1.2em;
  margin-bottom: 10px;
}
</style>
