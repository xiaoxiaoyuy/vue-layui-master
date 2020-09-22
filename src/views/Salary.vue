<template>

  <div>
    <lay-block title="员工薪资" style="margin-top: 20px; "></lay-block>
    <lay-table :data="tableData">
      <lay-table-column prop="name" label="姓名"></lay-table-column>
      <lay-table-column prop="paymodel" label="计薪模式"></lay-table-column>
      <lay-table-column prop="wage" label="实发工资"></lay-table-column>
    </lay-table>
  </div>

</template>

<script>
export default {
  name: "Salary",
  data() {
    return {
      tableData: []
    }
  },
  mounted:function () {
    this.axios.get('http://192.168.2.103:18500/xst/user/list')
        .then(response => {
          console.log(response)
          this.tableData = response.data.page
        });
  },
}
</script>

<style scoped>

</style>