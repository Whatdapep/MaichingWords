<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <label for="word">insert Words Matching Left&nbsp;</label>
        <input
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="words"
          v-model="words"
          id="words"
        />
        <button type="button" @click="HandlerWordsClick">Ok</button>
      </div>
      <br />

      <div class="col-6">
        <label for="word">insert Words Matching Right&nbsp;</label>
        <input
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="word2"
          v-model="word2"
          id="word2"
        />
        <button type="button" @click="HandlerWordsClickRight">Ok</button>
      </div>
    </div>
    <!-- <div id="wordsOutput">
      {{ outputWords }}
    </div>-->
    <div class="container grid">
      <div v-if="isDataRight">
        <button @click="MatchingTools">เทียบข้อมูล</button>
      </div>
      <div class="grid grid-cols-4">
        <div v-if="isDataLeft">
          <p>มีข้อมูล</p>
          <span>จำนวนแถวทั้งหมด {{ outputWordsLeft.countrow}}</span>
          <!-- <table>
        <thead>
          <tr><td>row</td></tr>
           <tr v-for="n in columnName" v-bind:key="n.key">
          <td> {{n.columnName}} </td>
          </tr>
        </thead>
        <tbody>
        <tr v-for="n in outputWordsLeft.arr_data" v-bind:key="n.key">
        <td> {{n.key+1}} </td>
        <td> {{n.column1}} </td>
        <td> {{n.column2}} </td>
        <td> {{n.column3}} </td>
        <td> {{n.column4}} </td>
        <td> {{n.column5}} </td>
        <td> {{n.column6}} </td>
        <td> {{n.column7}} </td>
        <td> {{n.column8}} </td>
        </tr>
        </tbody>
          </table>-->
        </div>
      </div>

      <div class="grid grid-cols-4">
        <div v-if="isDataRight">
          <p>มีข้อมูล</p>
          <span>จำนวนแถวทั้งหมด {{ outputWordsRight.countrow}}</span>
          <!--  <table>
        <thead>
          <tr><td>row</td></tr>
           <tr v-for="n in columnName" v-bind:key="n.key">
          <td> {{n.columnName}} </td>
          </tr>
        </thead>
        <tbody>
        <tr v-for="n in outputWordsRight.arr_data" v-bind:key="n.key">
        <td> {{n.key+1}} </td>
        <td> {{n.column1}} </td>
        <td> {{n.column2}} </td>
        <td> {{n.column3}} </td>
        <td> {{n.column4}} </td>
        <td> {{n.column5}} </td>
        <td> {{n.column6}} </td>
        <td> {{n.column7}} </td>
        <td> {{n.column8}} </td>
        </tr>
        </tbody>
          </table>-->
        </div>
      </div>
           <div class="grid grid-cols-4">
        <div v-if="isMatching">
           <table>
        <thead>
          <tr><td>row</td></tr>
           <tr v-for="n in columnName" v-bind:key="n.key">
          <td> {{n.columnName}} </td>
          </tr>
        </thead>
        <tbody>
        <tr v-for="n in resultMatchingright.arr_data" v-bind:key="n.key">
        <td> {{n.key+1}} </td>
        <td> {{n.column1}} </td>
        <td> {{n.column2}} </td>
        <td> {{n.column3}} </td>
        <td> {{n.column4}} </td>
        <td> {{n.column5}} </td>
        <td> {{n.column6}} </td>
        <td> {{n.column7}} </td>
        <td> {{n.column8}} </td>
        </tr>
        </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <TableResult v-bind:outputWords="outputWords" /> -->
  </div>
</template>
<script>
// import TableResult from './TableResult';
export default {
  name: "Main",
  components: {
    // TableResult
  },
  data: function() {
    return {
      words: "",
      word2: "",
      countColumn: 0,
      columnName: [],
      countColumn2: 0,
      columnName2: [],
      Mycolumn1: "column1",
      outputWordsLeft: {
        data: "",
        countrow: 0,
        arr_data: []
      },
      outputWordsRight: {
        data: "",
        countrow: 0,
        arr_data: []
      },
      isDataLeft: false,
      isDataRight: false,

      //  ตัวแปลเทียบข้อมูล
      isMatching: false,
      resultMatchingleft: [],
      resultMatchingright: []
    };
  },
  methods: {
    HandlerWordsClick: function() {
      var propArr = this.words.split(" ");
      let arr_result = [];
      let ColumnCount = 0;
      ColumnCount = propArr[0].split("	").length;
      this.countColumn = ColumnCount;

      for (let i = 0; i < ColumnCount; i++) {
        this.columnName.push({ key: i, columnName: `column${i + 1}` });
      }
      for (let i = 0; i < propArr.length; i++) {
        if (ColumnCount > 1) {
          let multicloumn = propArr[i].split("	");
          for (let c = -1; c < ColumnCount; c++) {
            if (c == -1) {
              arr_result[i] = { key: i };
            } else {
              let text = "column" + (c + 1);
              let scopeArr = { [text]: multicloumn[c] };
              arr_result[i] = { ...arr_result[i], ...scopeArr };
            }
          }
        } else {
          arr_result.push({ key: i, column1: propArr[i] });
        }
      }
      // console.log(arr_result);
      this.outputWordsLeft.arr_data = arr_result;
      this.outputWordsLeft.countrow = propArr.length;
      this.outputWordsLeft.data = propArr;
      this.isDataLeft = true;
    },

    HandlerWordsClickRight: function() {
      var propArr = this.word2.split(" ");
      let arr_result = [];
      let ColumnCount = 0;
      ColumnCount = propArr[0].split("	").length;
      this.countColumn2 = ColumnCount;

      for (let i = 0; i < ColumnCount; i++) {
        this.columnName2.push({ key: i, columnName: `column${i + 1}` });
      }
      for (let i = 0; i < propArr.length; i++) {
        if (ColumnCount > 1) {
          let multicloumn = propArr[i].split("	");
          for (let c = -1; c < ColumnCount; c++) {
            if (c == -1) {
              arr_result[i] = { key: i };
            } else {
              let text = "column" + (c + 1);
              let scopeArr = { [text]: multicloumn[c] };
              arr_result[i] = { ...arr_result[i], ...scopeArr };
            }
          }
        } else {
          arr_result.push({ key: i, column1: propArr[i] });
        }
      }
      // console.log(arr_result);
      this.outputWordsRight.arr_data = arr_result;
      this.outputWordsRight.countrow = propArr.length;
      this.outputWordsRight.data = propArr;
      this.isDataRight = true;
    },

    MatchingTools: function() {
      var leftdata = this.outputWordsLeft.arr_data;
      // var rightdata = this.outputWordsRight.arr_data;

      // var leftdatafilter = [];
      // var rightdatafilter = [];
      var leftdatafilter = this.outputWordsLeft.arr_data;
      var rightdatafilter = this.outputWordsRight.arr_data;

      var c_count = 0;

      // var leftdata2 = this.outputWordsLeft.arr_data;
      // var rightdata2 = this.outputWordsRight.arr_data;
      var countrow = 0;

      //         let someArray = getArray();
      // let noJohn = someArray.filter( el => el.name !== "John" );
      if (this.outputWordsLeft.countrow >= this.outputWordsRight.countrow) {
        countrow = this.outputWordsRight.countrow;
      } else {
        countrow = this.outputWordsLeft.countrow;
      }
      // for (let i = 0; i < countrow; i++) {
      //   let data1 = leftdata[i].column1.trim().toString();
      //   let data2 = rightdata[i].column1.trim().toString();
      //   // console.log(i,rightdata[0].key,data1 , data2 , 'true or false',(data1 == data2))
      //   if (data1 == data2) {
      //     // rightdatafilter = leftdata.filter(el => el.key !== i);
      //     // leftdatafilter = rightdata.filter(el => el.key !== i);
      //     rightdatafilter.push({ key: c_count, column1: data1 });
      //     leftdatafilter.push({ key: c_count, column1: data1 });
      //     // rightdatafilter[c_count] = {};
      //     // leftdatafilter[c_count] = rightdata.filter(el => el.key !== i);
      //     c_count++;
      //   }
      //   this.resultMatchingleft = leftdata;
      //   this.resultMatchingright = rightdata;
      // }
           for (let i = 0; i < countrow; i++) {
        let data1 = leftdata[c_count].column1.trim().toString();
        // let data2 = rightdata[i].column1.trim().toString();
        // console.log(i,rightdata[0].key,data1 , data2 , 'true or false',(data1 == data2))
        for(let c = 0;c < rightdatafilter.length;c++)
        {
          if (data1 == rightdatafilter[c].column1.trim().toString()) {
              // console.log(data1,rightdatafilter[c].column1.trim().toString())
              console.log(leftdatafilter.length,rightdatafilter.length)
                  leftdatafilter = leftdatafilter.filter(el => el.key !== i);
                  rightdatafilter = rightdatafilter.filter(el => el.key !== i);
                  // console.log(rightdatafilter)
                  // console.log(leftdatafilter)
                  // rightdatafilter.push({ key: c_count, column1: data1 });
                  // leftdatafilter.push({ key: c_count, column1: data1 });
                  // rightdatafilter[c_count] = {};
                  // leftdatafilter[c_count] = rightdata.filter(el => el.key !== i);
                  c_count++;
                  continue;
          }
        }
        this.resultMatchingleft = leftdatafilter;
        this.resultMatchingright = rightdatafilter;
      }
      this.isMatching = true;
    }
  },
  computed: {}
};
</script>
<style scoped></style>
