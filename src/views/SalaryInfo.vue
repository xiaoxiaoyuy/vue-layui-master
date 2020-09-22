<template>

  <div>
    <lay-block title="薪资详情" style="margin-top: 20px; "></lay-block>
    <lay-table :data="tableData">
      <lay-table-column prop="name" label="员工姓名"></lay-table-column>
      <lay-table-column prop="days" label="出勤天数"></lay-table-column>
      <lay-table-column prop="absDays" label="矿工天数"></lay-table-column>
      <lay-table-column prop="comeLate" label="迟到次数"></lay-table-column>
      <lay-table-column prop="leaveEarly" label="早退次数"></lay-table-column>
      <lay-table-column prop="overTime" label="加班时长"></lay-table-column>
    </lay-table>
  </div>

</template>

<script>
export default {
  name: "salaryinfo",
  data() {
    return {
      tableData: []
    }
  },
  mounted:function () {
    this.axios.get('http://192.168.2.103:18500/xst/salary/salinfo')
        .then(response => {
          console.log(response)
          this.tableData = response.data.salary
        });
  },
}
</script>

<style scoped>

</style>