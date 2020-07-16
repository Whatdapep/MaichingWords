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
<li v-for="n in outputWords" v-bind:key="n">{{ n }}</li>
    <TableResult v-bind:outputWords="outputWords" />
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
      outputWords: '',
      isData:false
    }
  },
  methods: {
    HandlerWordsClick: function () {
      var propArr = this.words.split(' ')
    //   var c_count = propArr.length
      this.isData = true;
      this.outputWords = propArr
    }
  }, 
  // computed:{
  //     Wordings: function () {
  //   return this.outputWords;
  //   // .filter(function (number) {
  //   //   return number % 2 === 0
  //   // })
  // }
  // }
}
</script>
<style scoped></style>
