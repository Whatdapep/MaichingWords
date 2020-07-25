<template>
  <div class="container">
    <div class="flex">
      <div>
        <button
          @click="Data1FeedData"
          class="rounded bg-orange-200 hover:bg-orange-200"
        >
          data 1
        </button>
        <button
          @click="Data2FeedData"
          class="rounded bg-orange-200 hover:bg-orange-200"
        >
          data 2
        </button>
      </div>
      <div class="flex-1 text-center m-1">
        <label
          for="word"
          class="text-gray-800 text-md px-4 py-2 m-2 bg-orange-500 rounded"
          >Original Words&nbsp;</label
        >

        <textarea
          rows="15"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="words"
          v-model="words"
          id="words"
        />
        <button
          type="button"
          @click="HandlerWordsClick"
          class="rounded bg-orange-400 hover:bg-orange-600 py-2 px-4"
        >
          Ok
        </button>
      </div>
      <br />

      <div class="flex-1 text-center m-1">
        <label for="word" class="text-md px-4 py-2 m-2 bg-orange-500 rounded "
          >Compare Words&nbsp;</label
        >
        <textarea
          rows="15"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="word2"
          v-model="word2"
          id="word2"
        />
        <button
          type="button"
          @click="HandlerWordsClickRight"
          class="rounded bg-orange-400 hover:bg-orange-600 py-2 px-4"
        >
          Ok
        </button>
      </div>
    </div>
    <!-- <div id="wordsOutput">
      {{ outputWords }}
    </div>-->
    <div class="container">
      <div class="flex-row">
        <div v-if="isDataRight">
          <div v-if="isDataLeft">
            <button
              class="bg-green-400 hover:bg-green-600 hover:text-white-500 rounded p-3"
              @click="MatchingTools"
            >
              เทียบข้อมูล
            </button>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex-1">
          <div v-if="isDataLeft">
            <p>มีข้อมูล</p>
            <span>จำนวนแถวทั้งหมด {{ outputWordsLeft.countrow }}</span>
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

        <div class="flex-1">
          <div v-if="isDataRight">
            <p>มีข้อมูล</p>
            <span>จำนวนแถวทั้งหมด {{ outputWordsRight.countrow }}</span>
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
      </div>
      <div class="flex">
        <!--    <label for="percent">จับคู่สำเร็จ</label>
          <input id="percent" v-model="percentSuccess" />
          {{ percentSuccess }} -->
        <div v-if="isMatching">
          <div class="flex-1">
            <table>
              <thead>
                <tr>
                  <td>row left</td>
                </tr>
                <tr v-for="n in columnName" v-bind:key="n.key">
                  <td>{{ n.columnName }}</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in resultMatchingleft" v-bind:key="n.key">
                  <td>{{ n.key + 1 }}</td>
                  <td>{{ n.column1 }}</td>
                  <td>{{ n.column2 }}</td>
                  <td>{{ n.column3 }}</td>
                  <td>{{ n.column4 }}</td>
                  <td>{{ n.column5 }}</td>
                  <td>{{ n.column6 }}</td>
                  <td>{{ n.column7 }}</td>
                  <td>{{ n.column8 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex-1">
            <table>
              <thead>
                <tr>
                  <td>row right</td>
                </tr>
                <tr v-for="n in columnName" v-bind:key="n.key">
                  <td>{{ n.columnName }}</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in resultMatchingright" v-bind:key="n.key">
                  <td>{{ n.key + 1 }}</td>
                  <td>{{ n.column1 }}</td>
                  <td>{{ n.column2 }}</td>
                  <td>{{ n.column3 }}</td>
                  <td>{{ n.column4 }}</td>
                  <td>{{ n.column5 }}</td>
                  <td>{{ n.column6 }}</td>
                  <td>{{ n.column7 }}</td>
                  <td>{{ n.column8 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- <TableResult v-bind:outputWords="outputWords" /> -->
    </div>
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
      countColumn: 0,
      columnName: [],
      countColumn2: 0,
      columnName2: [],
      Mycolumn1: 'column1',
      outputWordsLeft: {
        data: '',
        countrow: 0,
        arr_data: []
      },
      outputWordsRight: {
        data: '',
        countrow: 0,
        arr_data: []
      },
      isDataLeft: false,
      isDataRight: false,

      //  ตัวแปลเทียบข้อมูล
      isMatching: false,
      resultMatchingleft: [],
      resultMatchingright: [],
      percentSuccess: `${0} %`,

      // loop array
      leftdataraw:
        '00017 00042 00044 00054 00055 00087 00098 00100 00101 00114 00171 00173 00186 00189 00190 00191 00194 00220 00226 00228 00230 00242 00260 00285 00290 00313 00334 00337 00338 00356 00382 00430 00438 00476 00486 00491 00494 00500 00504 00523 00534 00540 00542 00549 00552 00567 00570 00571 00577 00583 00600 00626 00638 00646 00650 00661 00675 00676 00693 00696 00706 00713 00722 00730 00744 00786 00793 00797 00806 00808 00810 00812 00820 00824 00837 00841 00851 00854 00897 00915 00934 00936 00950 00956 00961 00968 01031 01037 01052 01055 01060 01064 01083 01099 01103 01107 01112 01146 01177 01193',
      rightdataraw:
        '01193 01177 01146 01112 01107 01103 01099 01083 01064 01060 01055 01052 01037 01031 00968 00961 00956 00950 00936 00934 00915 00897 00854 00851 00841 00837 00824 00820 00812 00810 00808 00806 00797 00793 00786 00744 00730 00722 00713 00706 00696 00693 00676 00675 00661 00650 00646 00638 00626 00600 00583 00577 00571 00570 00567 00552 00549 00542 00540 00534 00523 00504 00500 00494 00491 00486 00476 00438 00430 00382 00356 00338 00337 00334 00313 00290 00285 00260 00242 00230 00228 00226 00220 00194 00191 00190 00189 00186 00173 00171 00114 00101 00100 00098 00087 00055 00054 00044 00042 00017'
    }
  },
  methods: {
    HandlerWordsClick: function () {
      // รับค่ามาจาก input
      var propArr = this.words.split('\n')
      // เอาไว้ push array
      let arr_result = []
      // นับ column
      let ColumnCount = 0
      // นับ column โดยใช้ split
      ColumnCount = propArr[0].split('	').length
      // คำนวณจำนวน column ที่มาจาก input
      this.countColumn = ColumnCount
      // For loop ประมวลชื่อ column ทั้งหมด
      for (let i = 0; i < ColumnCount; i++) {
        this.columnName.push({ key: i, columnName: `column${i + 1}` })
      }
      // For loop เก็บ data มาใส่ Array object แบบมี key ประกาศด้วย
      for (let i = 0; i < propArr.length; i++)
       {
        //  เช็คว่ามี multicolumn ใหม
        if (ColumnCount > 1) {
          // แยก data ของแต่ละ column 
          let multicloumn = propArr[i].split('	')
          // loop เพื่อ การ save แบบ multicolumn ต้องมี เทคนิคนิดนึง
          for (let c = -1; c < ColumnCount; c++) {
            if (c == -1) {
              arr_result[i] = { key: i }
            } else {
              let text = 'column' + (c + 1)
              let scopeArr = { [text]: multicloumn[c] }
              arr_result[i] = { ...arr_result[i], ...scopeArr }
            }
          }
          // 
        } 
        // เป็น Column แบบเดี่ยว
        else {
          arr_result.push({ key: i, column1: propArr[i] })
        }
      }
      // 
      // console.log(arr_result);
      this.outputWordsLeft.arr_data = arr_result
      this.outputWordsLeft.countrow = propArr.length
      this.outputWordsLeft.data = propArr
      this.isDataLeft = true
    },

    HandlerWordsClickRight: function () {
      var propArr = this.word2.split('\n')
      let arr_result = []
      let ColumnCount = 0
      ColumnCount = propArr[0].split('	').length
      this.countColumn2 = ColumnCount

      for (let i = 0; i < ColumnCount; i++) {
        this.columnName2.push({ key: i, columnName: `column${i + 1}` })
      }
      for (let i = 0; i < propArr.length; i++) {
        if (ColumnCount > 1) {
          let multicloumn = propArr[i].split('	')
          for (let c = -1; c < ColumnCount; c++) {
            if (c == -1) {
              arr_result[i] = { key: i }
            } else {
              let text = 'column' + (c + 1)
              let scopeArr = { [text]: multicloumn[c] }
              arr_result[i] = { ...arr_result[i], ...scopeArr }
            }
          }
        } else {
          arr_result.push({ key: i, column1: propArr[i] })
        }
      }
      // console.log(arr_result);
      this.outputWordsRight.arr_data = arr_result
      this.outputWordsRight.countrow = propArr.length
      this.outputWordsRight.data = propArr
      this.isDataRight = true
    },
    Data1FeedData: function () {
      this.words = this.leftdataraw
    },
    Data2FeedData: function () {
      this.word2 = this.rightdataraw
    },

    MatchingTools: function () {
      let leftdata = this.outputWordsLeft.arr_data
      let leftdatafilter = this.outputWordsLeft.arr_data
      let rightdatafilter = this.outputWordsRight.arr_data
      let c_count = 0
      let countrow = 0

      if (this.outputWordsLeft.countrow >= this.outputWordsRight.countrow) {
        countrow = this.outputWordsRight.countrow
      } else {
        countrow = this.outputWordsLeft.countrow
      }
      let percent = countrow / 100
      let percentSuccess = 0
      for (let i = 0; i < countrow; i++) {
        let data1 = leftdata[i].column1.trim().toString()
        for (let c = 0; c < rightdatafilter.length; c++) {
          //  console.log('c',c,data1, rightdatafilter[c].column1.trim().toString(),'c_count',c_count,'round',i)
          if (data1 == rightdatafilter[c].column1.trim().toString()) {
            leftdatafilter = leftdatafilter.filter(el => el.key !== i)
            rightdatafilter = rightdatafilter.filter(
              el => el.key !== rightdatafilter[c].key
            )
            //     if (rightdatafilter.length <= 500) {

            //   // console.log(rightdatafilter);
            // }

            c_count++
            if (parseFloat(c_count) == parseFloat(percent)) {
              console.log(this.percentSuccess)
              percentSuccess++
              c_count = 0
              this.percentSuccess = percentSuccess + ' %'
            }

            continue
          }
        }

        this.resultMatchingleft = leftdatafilter
        this.resultMatchingright = rightdatafilter
      }
      this.isMatching = true
    }
  },
  computed: {}
}
</script>
<style scoped></style>
