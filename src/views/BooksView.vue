<script>
import books from '@/assets/books.json'

export default {
  data() {
    return {
      books: books.library,
      rating: 3,
      dialogToAddNewBook: false,
      formLabelWidth: '100px',
      loading: false,


      newBook: {
        title: '',
        author: '',
        genre: '',
        publication_year: '',
        isbn: '',
        status: '',
        rating: ''
      }
    }
  },
  methods: {
    async addBook() {
      // console.log('Adding new book')
      const response = await fetch('https://presonal-library-default-rtdb.firebaseio.com/books.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.newBook.title,
          author: this.newBook.author,
          genre: this.newBook.genre,
          publication_year: this.newBook.publication_year,
          isbn: this.newBook.isbn,
          status: this.newBook.status,
          rating: this.newBook.rating
        })
      })

      const firebaseData = await response.json()
      this.dialogToAddNewBook = false
      console.log(firebaseData)
    },
  },
  mounted() {
    // console.log(books.library)

  }
}
</script>

<template>
  <main>
    <h1>{{ $t("books.main_heading") }}</h1>
    <el-button type="primary" class="addBookButton" @click.prevent="dialogToAddNewBook = true">Add new book</el-button>

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
    <el-drawer
        v-model="dialogToAddNewBook"
        title="Adding new book"
        size="50%"
        direction="ltr"
    >
      <h2 class="dialog__heading">Add new book</h2>
      <div class="demo-drawer__content">
        <el-form :model="newBook">
          <el-form-item label="Book title" :label-width="formLabelWidth">
            <el-input v-model="newBook.title" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Author" :label-width="formLabelWidth">
            <el-input v-model="newBook.author" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Genre" :label-width="formLabelWidth">
            <el-input v-model="newBook.genre" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Year" :label-width="formLabelWidth">
            <el-input v-model="newBook.publication_year" autocomplete="off" type="number" min="1900" max="2099" step="1" value="2024"/>
          </el-form-item>
          <el-form-item label="ISBN" :label-width="formLabelWidth">
            <el-input v-model="newBook.isbn" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Rating" :label-width="formLabelWidth">
            <el-input v-model="newBook.rating" autocomplete="off" />
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button>Cancel</el-button>
          <el-button type="primary" :loading="loading" @click="addBook">
            {{ loading ? 'Submitting ...' : 'Submit'}}
          </el-button>
        </div>
      </div>
    </el-drawer>
  </main>
</template>

<style scoped>
.addBookButton {
  margin-bottom: 10px;
}
.dialog__heading {
  text-align: center;
  margin-bottom: 15px;
}
.demo-drawer__content {
  padding: 10px;
  margin: 20px;
}
.demo-drawer__footer {
  text-align: center;
  margin-top: 20px;
}
</style>
