<template>
  <div class="w-full">
    <ResultSuccessBar v-bind:dataleft="dataleft" v-bind:dataright="dataright" />
    <div class="text-center text-red-600"><b>จับคู่ไม่สำเร็จ</b></div>
    <div class="flex mt-3">
      <div class="flex-1">
        <div>
          <TableResult
            v-bind:inmatchingwords="dataleftunmatching"
            v-bind:propscolumnName="columnName"
            v-bind:propsdata="dataleftunmatching"
          />
        </div>
      </div>

      <div class="flex-1">
        <div>
          <TableResult
            v-bind:inmatchingwords="datarightunmatching"
            v-bind:propscolumnName="columnName"
            v-bind:propsdata="datarightunmatching"
          />
        </div>
      </div>
    </div>
    <p class="text-center text-green-600"><b>ทั้งหมด</b></p>
    <div class="flex mt-3">
      <div class="flex-1">
        <div>
          <TableResult
            v-bind:inmatchingwords="dataleft"
            v-bind:propscolumnName="columnName"
            v-bind:propsdata="dataleft"
          />
        </div>
      </div>

      <div class="flex-1">
        <div>
          <TableResult
            v-bind:inmatchingwords="dataright"
            v-bind:propscolumnName="columnName"
            v-bind:propsdata="dataright"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableResult from './Utils/TableResult'
import ResultSuccessBar from './Utils/ResultSuccessBar'
export default {
  name: 'ResultMatching',
  components: { TableResult, ResultSuccessBar },
  data: function () {
    return {
      //   propsdata: null,
      //   propscolumnName: null
    }
  },
  props: ['dataleft', 'dataright', 'columnName','dataleftunmatching','datarightunmatching']
}
</script>

<style></style>
