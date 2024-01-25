<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [
        {
          tg_id: "6416673075",
          firstname: "Dilshod",
          lastname: "Mamurov",
          username: null,
          coin: "0",
          weekly_coin: "0",
          created_time: "2024-01-12T14:55:08.632Z",
          count_answers: "0",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5280697241",
          firstname: "Bunyodbek Anorqulov",
          lastname: null,
          username: null,
          coin: "0",
          weekly_coin: "0",
          created_time: "2024-01-04T16:12:35.133Z",
          count_answers: "0",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5256264837",
          firstname: "🅾🅶‘🅰🅱🅴🅺",
          lastname: null,
          username: "@UZBEK_777_888",
          coin: "1",
          weekly_coin: "0",
          created_time: "2024-01-04T14:59:04.575Z",
          count_answers: "2",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5280697241",
          firstname: "Bunyodbek Anorqulov",
          lastname: null,
          username: null,
          coin: "0",
          weekly_coin: "0",
          created_time: "2024-01-04T16:12:35.133Z",
          count_answers: "0",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5256264837",
          firstname: "🅾🅶‘🅰🅱🅴🅺",
          lastname: null,
          username: "@UZBEK_777_888",
          coin: "1",
          weekly_coin: "0",
          created_time: "2024-01-04T14:59:04.575Z",
          count_answers: "2",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5280697241",
          firstname: "Bunyodbek Anorqulov",
          lastname: null,
          username: null,
          coin: "0",
          weekly_coin: "0",
          created_time: "2024-01-04T16:12:35.133Z",
          count_answers: "0",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5256264837",
          firstname: "🅾🅶‘🅰🅱🅴🅺",
          lastname: null,
          username: "@UZBEK_777_888",
          coin: "1",
          weekly_coin: "0",
          created_time: "2024-01-04T14:59:04.575Z",
          count_answers: "2",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5280697241",
          firstname: "Bunyodbek Anorqulov",
          lastname: null,
          username: null,
          coin: "0",
          weekly_coin: "0",
          created_time: "2024-01-04T16:12:35.133Z",
          count_answers: "0",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
        {
          tg_id: "5256264837",
          firstname: "🅾🅶‘🅰🅱🅴🅺",
          lastname: null,
          username: "@UZBEK_777_888",
          coin: "1",
          weekly_coin: "0",
          created_time: "2024-01-04T14:59:04.575Z",
          count_answers: "2",
          daily_coin: "0",
          level: "1",
          deleted: false,
          blocked: false
        },
      ],
      total: 10,
      currentPage: 3,
      pageSize: 20,
      small: false,
      background: false,
      disabled: false,

    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`)
      this.getUsers()
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
      this.getUsers()
    },
    getUsers() {
      axios.get(`http://192.168.10.220:6006/api/users/${this.pageSize}/${this.currentPage}`)
          .then(response => {
            // Handle the successful response here
            this.users = response.data

            this.tableData = response.data.data
            this.total = Number(response.data.count)

            console.log(response.data)
          })
          .catch(error => {
            // Handle errors here
            console.error('Error fetching users:', error);
          });
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<template>
  <h1>Users list with pagination</h1>
  <el-table :data="tableData" border style="width: 100%; height: 80vh">
    <el-table-column type="index" label="Idx">
    </el-table-column>
    <el-table-column prop="tg_id" label="TG ID" width="150"/>
    <el-table-column prop="firstname" label="Firstname" width="240"/>
    <el-table-column prop="lastname" label="Lastname" width="150"/>
    <el-table-column prop="username" label="username" width="200"/>
    <el-table-column prop="coin" label="coin" width="100"/>
    <el-table-column prop="weekly_coin" label="weekly_coin" width="100"/>
    <el-table-column prop="created_time" label="created_time" width="220"/>
    <el-table-column prop="count_answers" label="count_answers" width="130"/>
    <el-table-column prop="daily_coin" label="daily_coin" width="100"/>
    <el-table-column prop="level" label="level" width="100"/>
    <el-table-column prop="deleted" label="deleted" width="100"/>
    <el-table-column prop="blocked" label="blocked" width="100"/>
  </el-table>

  <div class="users-pagination">
    <el-pagination
        background
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :small="small"
        :disabled="disabled"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>

</template>

<style scoped>
.users-pagination {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: white;

}
</style>