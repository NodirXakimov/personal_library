<script>
import books from '@/assets/books.json'

export default {
  data() {
    return {
      books: books.library,
      rating: 3
    }
  },
  methods: {},
  mounted() {
    console.log(books.library)
  }
}
</script>

<template>
  <main>
    <h1>{{ $t("books.main_heading") }}</h1>
    <el-table :data="books" border style="width: 100%">
      <el-table-column prop="title" :label="$t('books.table.title')" width="180"/>
      <el-table-column prop="author" :label="$t('books.table.author')" width="180"/>
      <el-table-column prop="genre" :label="$t('books.table.genre')"/>
      <el-table-column prop="publication_year" :label="$t('books.table.publication_year')"/>
      <el-table-column prop="isbn" :label="$t('books.table.isbn')"/>
      <el-table-column prop="status" :label="$t('books.table.status')">
        <template #default="scope">
          <el-tag class="ml-2"
                  :type="scope.row.status === 'Reading' ? 'warning' : scope.row.status === 'To Read'? 'danger' : 'success'">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="rating" :label="$t('books.table.rating')">
        <template #default="scope">
          <el-rate v-model="scope.row.rating" allow-half/>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>
