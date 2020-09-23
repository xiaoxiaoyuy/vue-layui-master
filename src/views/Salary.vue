<template>

  <div>
    <lay-block title="员工薪资" style="margin-top: 20px; "></lay-block>
    <lay-table :data="tableData">
      <lay-table-column prop="name" label="姓名"></lay-table-column>
      <lay-table-column prop="salary" label="实发工资"></lay-table-column>
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
    this.axios.get('http://192.168.2.106:18500/xst/salary/countSalary')
        .then(response => {
          console.log(response.data)
          this.tableData = response.data.data
        });
  },
}
</script>

<style scoped>

</style>