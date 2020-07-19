<template>
  <div class="container">
  <div class="row">
    <div class="col-6">
    <label for="word">insert Words Matching Left&nbsp;</label>
    <input type="text" name="words" v-model="words" id="words" />
    <button type="button" @click="HandlerWordsClick">
      Ok
    </button>
</div>
<br>

    <div class="col-6">
    <label for="word">insert Words Matching Right&nbsp;</label>
    <input type="text" name="word2" v-model="word2" id="word2" />
    <button type="button" @click="HandlerWordsClickRight">
      Ok
    </button>
</div>
</div>
    <!-- <div id="wordsOutput">
      {{ outputWords }}
    </div> -->
    <div v-if="isDataLeft">
   
        <span>จำนวนแถวทั้งหมด  {{ outputWordsLeft.countrow}}</span>
        <table>
        <thead>
          <th><td>row</td></th>
           <th v-for="n in columnName" v-bind:key="n.key">
          <td> {{n.columnName}} </td>
          </th>
        </thead>
        <tbody>
        <tr v-for="n in outputWordsLeft.arr_data" v-bind:key="n.key">
        <td> {{n.key+1}} </td>
       <!-- <td> {{n.column1}} </td> -->
          <th v-for="column in columnName" v-bind:key="column.key">
         <td> {{ `${n.Mycolumn1}` }} </td>
         <!--{{column.columnName}} --> 
       <!-- {{ outputWordsLeft.arr_data[n.key].[column.columnName] }} -->
          </th> 
        </tr>
        </tbody>
        </table>
    </div>

        <div v-if="isDataRight">
   
        <span>จำนวนแถวทั้งหมด  {{ outputWordsRight.countrow}}</span>
        <table>
        <thead>
          <th ><td>row</td></th>
          <th v-for="n in columnName" v-bind:key="n.key">
          <td> {{n.columnName}} </td>
          </th>
        </thead>
        <tbody>
        <tr v-for="n in outputWordsRight.arr_data" v-bind:key="n.key">
        <td> {{n.key+1}} </td>
        <td> {{n.column1}} </td>
        </tr>
        </tbody>
        </table>
    </div>
    <!-- <TableResult v-bind:outputWords="outputWords" /> -->
  </div>
</template>
<script>
// import TableResult from './TableResult';
export default {
  name: 'Main',
  components: {
    // TableResult
  },
  data: function () {
    return {
      words: '',
       word2: '',
       countColumn:0,
       columnName:[],
       Mycolumn1:"column1",
      outputWordsLeft: {
        data: '',
        countrow: 0,
        arr_data:[],
      },
          outputWordsRight: {
        data: '',
        countrow: 0,
        arr_data:[],
      },
      isDataLeft: false,
       isDataRight: false
    }
  },
  methods: {
    HandlerWordsClick: function () {
      var propArr = this.words.split(' ')
      // console.log('words',this.words)
      // console.log(propArr);
      let arr_result = [];
      // let SubpropArr = propArr.split(' ');
      let ColumnCount = 0;
       ColumnCount = propArr[0].split("	").length;
      this.countColumn =ColumnCount;

      for(let i=0;i<ColumnCount;i++)
      {
          this.columnName.push({"key":i,"columnName":`column${i+1}`})
      }
      for(let i =0;i<propArr.length;i++)
      {
      if(ColumnCount > 1)
      {
        let multicloumn = propArr[i].split("	");
        for (let c=-1;c<ColumnCount;c++)
        {
          if(c == -1)
          {
          arr_result[i]={"key":i};
          }else
          {
            let text = "column"+(c+1);
            let scopeArr = {[text]:multicloumn[c]};
            arr_result[i] = {...arr_result[i],...scopeArr};
          }
        }
          //  arr_result.push({"key":i,"column1":propArr[i]});
          // console.log();
      }
      else
      {
        arr_result.push({"key":i,"column1":propArr[i]});
        // arr_result[i] =[{"key":i,"column1":propArr[i]}];
        }
      }
      console.log(arr_result);



      this.outputWordsLeft.arr_data = arr_result;
      this.outputWordsLeft.countrow = propArr.length
      this.outputWordsLeft.data = propArr
       this.isDataLeft = true
    },

    HandlerWordsClickRight: function()
    {
         var propArr = this.words.split(' ')
      console.log('words',this.words)
      console.log(propArr);
      let arr_result = [];
      for(let i =0;i<propArr.length;i++)
      {
        arr_result.push({"key":i,"column1":propArr[i]});
        // arr_result[i] =[{"key":i,"column1":propArr[i]}];
      }
      this.outputWordsRight.arr_data = arr_result;
      this.outputWordsRight.countrow = propArr.length
      this.outputWordsRight.data = propArr
       this.isDataright = true
    }
  }
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
