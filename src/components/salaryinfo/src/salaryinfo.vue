<template>

  <div>
    <lay-block title="薪资详情" style="margin-top: 20px; "></lay-block>
    <lay-table :data="tableData">
      <lay-table-column prop="name" label="员工姓名"></lay-table-column>
      <lay-table-column prop="days" label="出勤天数"></lay-table-column>
      <lay-table-column prop="abs_days" label="矿工天数"></lay-table-column>
      <lay-table-column prop="come_days" label="迟到次数"></lay-table-column>
      <lay-table-column prop="leave_days" label="早退次数"></lay-table-column>
      <lay-table-column prop="over_time" label="加班时长"></lay-table-column>
    </lay-table>
  </div>

</template>

<script>
export default {
  name: "SalaryInfo",
  data() {
    return {
      tableData: [{
        name: '张三丰',
        days: '19',
        abs_days: '3',
        come_days: '0',
        leave_days: '1',
        over_time: '10'
      }, {
        name: '貂蝉',
        days: '21',
        abs_days: '1',
        come_days: '1',
        leave_days: '3',
        over_time: '20'
      }
      ]
    }
  }
}
</script>

<style scoped>

</style>
