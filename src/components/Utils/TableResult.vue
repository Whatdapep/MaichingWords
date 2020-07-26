<template>
  <div class="container">
    <table class="table-auto shadow-lg border-collapse border-1 border-gray-600">
      <thead>
        <tr class="border border-gray-400 px-4 py-2 text-gray-800" v-for="n in propscolumnName" v-bind:key="n.key">
          <td>{{ n.columnName }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in inmatchingwords" v-bind:key="n.key">
          <td class="border border-gray-300 px-4 py-2"
             v-bind:class="n.color"
          >{{ n.key + 1 }}</td>
        <td class="border border-gray-300 px-4 py-2 "
        v-bind:class="n.color"
        >
        {{ n.column1 }}
        </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableResult',
  data: function () {
    return {
    //   propsdata: null,
    //   propscolumnName: null
    }
  },
  props: ['propsdata','propscolumnName','inmatchingwords']
}
</script>
<style scoped></style>
