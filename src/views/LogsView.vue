<template>
  <ElTabs type="card" @tab-click="handleClick">
    <ElTabPane>
      <span slot="label">Trace <DtLabel type="secondary">200</DtLabel></span>
      <ElTable
        :data="tableData"
        border
        style="width: 100%">
        <ElTableColumn
          prop="date"
          label="Date"
          sortable
          width="180"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
          <input type="search"/>
        </ElTableColumn>
        <ElTableColumn
          prop="name"
          label="Name"
          width="180">
        </ElTableColumn>
        <ElTableColumn
          prop="address"
          label="Address"
          :formatter="formatter">
        </ElTableColumn>
        <ElTableColumn
          prop="tag"
          label="Tag"
          width="100"
          :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === 'Home' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}
            </el-tag>
          </template>
        </ElTableColumn>
      </ElTable>

    </ElTabPane>
    <ElTabPane label="Error">Config</ElTabPane>
    <ElTabPane label="Warning">Role</ElTabPane>
    <ElTabPane label="Info">Task</ElTabPane>
    <ElTabPane label="Profile">Task</ElTabPane>
  </ElTabs>

</template>

<script>

  export default {
    name: 'LogsView',
    components: {},
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>
