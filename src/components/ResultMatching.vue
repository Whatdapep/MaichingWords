<template>
  <div class="container">
    <ResultSuccessBar
      v-bind:dataleft="dataleft"
      v-bind:dataright="dataright"
    />
    <div class="flex mt-3">
      <br />
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
  props: ['dataleft', 'dataright', 'columnName']
}
</script>

<style></style>
