<template>
  <div>
    <label for="word">insert Words Matching</label>
    <input type="text" name="words" v-model="words" id="words" />
    <button type="button" @click="HandlerWordsClick">
      Ok
    </button>

    <div id="wordsOutput">
      {{ outputWords }}
    </div>

    <TableResult v-bind:props="outputWords" />
  </div>
</template>
<script>
import TableResult from './TableResult';
export default {
  name: 'Main',
  components:{
TableResult
  },
  data: function () {
    return {
      words: '',
      outputWords: ''
    }
  },
  methods: {
    HandlerWordsClick: function () {
      var propArr = this.words.split(' ')
    //   var c_count = propArr.length

      this.outputWords = propArr
    }
  }
}
</script>
<style scoped></style>
