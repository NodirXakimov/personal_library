<script>
import books from '@/assets/books.json'
export default {
  data() {
    return {
      books: books.library,
      rating: 3
    }
  },
  methods: {

  },
  mounted() {
    console.log(books.library)
  }
}
</script>

<template>
  <main>
    <h1>{{ $t("books.main_heading") }}</h1>
    <el-table :data="books" border style="width: 100%">
      <el-table-column prop="title" label="Book Title" width="180" />
      <el-table-column prop="author" label="Author" width="180" />
      <el-table-column prop="genre" label="Genre" />
      <el-table-column prop="publication_year" label="Publication year" />
      <el-table-column prop="isbn" label="ISBN" />
      <el-table-column prop="status" label="Status">
        <template #default="scope">
          <el-tag class="ml-2" :type="scope.row.status === 'Reading'? 'warning' : scope.row.status === 'To Read'? 'danger' : 'success'">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="rating" label="Rating">
        <template #default="scope">
          <el-rate v-model="scope.row.rating" allow-half />
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>
