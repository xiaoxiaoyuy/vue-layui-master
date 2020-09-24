<template>
  <div>
    <lay-block>
      具体数据以表格形式展示
    </lay-block>

    <lay-block title="数据详情" style="margin-top: 50px;"></lay-block>
    <table border="1" width="500px">
      <thead >
      <tr>
        <th>员工姓名</th>
        <th>部件名称</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,i) in tableData" :key="i">
        <td>{{item.name}}</td>
        <td>
          <table border="1">
            <tr v-for="(product,index) in item.productEntities" :key="index">
              <td>{{product.pname}}</td>
            </tr>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Table from "@/views/Table";
export default {
  name: "Admin",
  components: {Table},
  data() {
    return {
      tableData: []
    }
  },
  mounted:function () {
    this.axios.get('http://192.168.2.106:18500/xst/user/findAll')
        .then(response => {
          console.log(response)
          this.tableData = response.data.data
        });
  },
}
</script>

<style scoped>

</style>
