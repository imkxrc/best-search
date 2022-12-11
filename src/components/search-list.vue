<template>
  <v-container>
    <v-app-bar app>
      <v-row class="top-bar">
        <v-col cols="2">
          <router-link to="/"><b>Best</b>Search</router-link>
        </v-col>
        <v-col cols="8">
          <div v-on:keyup.enter="search">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-text-field
                  solo
                  hide-details
                  @click:append="search"
                  label="请输入关键词"
                  append-icon="mdi-magnify"
                  v-model="text"
                  class="input-search"
                  autocomplete="off"
                  v-on="on"
                  ref="searchRef"
                ></v-text-field>
                
              </template>
              <v-list v-if="items.length > 0" class="border-list" dense>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  @click="itemClick(item)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
        <v-col cols="2"> </v-col>
      </v-row>
    </v-app-bar>

    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <div class="current-key mb-6">
          <strong>{{ searchKey }}</strong>
          <v-checkbox
                v-model="testObj.checkbox.value"
                :label="`复选框`"
                v-if="showCheckBox"
              ></v-checkbox>
              testObj.checkbox: {{testObj.checkbox}}
        </div>
        <v-row>
          <v-col
            xl="3"
            lg="4"
            md="6"
            sm="12"
            xs="12"
            v-for="(item, index) in chartDataItems"
            :key="Math.random() * index"
          >
            <div class="echart-container">
              <MyChart :echartParentData="item" />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2"></v-col
    ></v-row>
    
    
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import MyChart from "@/components/echarts.vue";

export default {
  data() {
    return {
      showCheckBox:null,
      text: "",
      showSelect: true,
      items: [],
      searchKey: "",
      chartList: [],
      chartDataItems: [],
    };
  },
  created() {
    let that = this;
    this.searchKey = this.$route.params.searchKey.replace(/\+/g, " ");
  },
  mounted() {
   // this.search();
  },
  computed:{
    ...mapState({
      testObj:(state)=>{
        return state.testObj
      }
    }),
  },
  components: {
    MyChart,
  },
  watch: {
    text: "inputHandle",
  },
  methods: {
    itemClick(item) {
      this.text = item.name;
      this.$refs.search.blur();
      // this.$router.push()
    },
    inputHandle(text) {
      if (text.trim() !== "") {
        this.showSelect = true;
        setTimeout(() => {
          this.getEntity();
        }, 300);
      }
    },
    getEntity() {
      // 请求接口更新 items 数据
      this.items = [
        {
          key: "testKey",
          name: "testName",
        },
      ];
    },
    search() {
      this.showCheckBox = true
      this.$store.commit("setCheckBox",true)


      this.$refs.searchRef.blur();
      console.log(this.text);
      // this.$router.push(`/search/${this.text}`);
      let resultEchartList = [
        {
          name: "hat",
          search_msv: [
            { date: "2016-9", sv: 161700 },
            { date: "2015-01", sv: 166950 },
            { date: "2021-6", sv: 353280 },
            { date: "2018-9", sv: 450000 },
          ],
        },
        {
          name: "hat",
          search_msv: [
            { date: "2015-9", sv: 121700 },
            { date: "2016-11", sv: 186950 },
            { date: "2015-6", sv: 323280 },
            { date: "2016-8", sv: 420000 },
          ],
        },
        {
          name: "hat",
          search_msv: [
            { date: "2017-5", sv: 161700 },
            { date: "2018-3", sv: 166950 },
            { date: "2021-6", sv: 351280 },
            { date: "2012-9", sv: 430000 },
          ],
        },
        {
          name: "hat",
          search_msv: [
            { date: "2016-9", sv: 121700 },
            { date: "2017-11", sv: 186950 },
            { date: "2015-4", sv: 323280 },
            { date: "2012-8", sv: 420000 },
          ],
        },
        {
          name: "hat",
          search_msv: [
            { date: "2016-9", sv: 161700 },
            { date: "2014-01", sv: 166950 },
            { date: "2021-3", sv: 353280 },
            { date: "2012-9", sv: 450000 },
          ],
        },
        {
          name: "hat",
          search_msv: [
            { date: "2019-9", sv: 121700 },
            { date: "2014-12", sv: 186950 },
            { date: "2016-3", sv: 323280 },
            { date: "2018-6", sv: 420000 },
          ],
        },
      ].map((item) => {
        item.search_msv.sort((a, b) => a.date.localeCompare(b.date));
        return item;
      });

      let resultChartData = [];
      resultEchartList.forEach((item) => {
        resultChartData.push({
          areaColor1: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)})`,
          areaColor2: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)})`,
          data1: [
            Math.random() * 200,
            Math.random() * 20 + Math.random() * 200,
            Math.random() * 40 + Math.random() * 200,
            Math.random() * 80 + Math.random() * 200,
            Math.random() * 300,
            Math.random() * 800,
            Math.random() * 700,
          ],
          data2: [
            Math.random() * 200,
            Math.random() * 20 + Math.random() * 200,
            Math.random() * 40 + Math.random() * 200,
            Math.random() * 80 + Math.random() * 200,
            Math.random() * 300,
            Math.random() * 800,
            Math.random() * 700,
          ], // item.search_msv.map((m) => m.sv),
          titleText: "Best shoes",
          subTitleText: "Growth 37%",
          xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          bottomTitle: `${item.search_msv[0].date} - ${
            item.search_msv[item.search_msv.length - 1].date
          }`,
        });
      });
      this.chartDataItems = [];
      // 调用数据
      this.$server.getPersonInfo({
        login_token: "INTERVIEW_SIMPLY2021",
        search_phrase: "hat",
      }).then(data=> {
        console.log("data", data)
      }).catch(ero=>{
        console.warn("请求错误",ero)
      });
      setTimeout(() => {
        this.chartDataItems = resultChartData.slice(0, Math.random() * 6);
      }, 3000);
    },
  },
};
</script>
<style scoped>
.echart-container {
  border: 1px solid #ccc;
}
::v-deep .v-input__icon {
  height: 48px;
  width: 48px;
}
::v-deep .theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent;
}
::v-deep .v-text-field.v-text-field--solo .v-input__append-inner {
  position: relative;
  left: 75px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
::v-deep
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  background: none;
  box-shadow: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.v-application a {
  color: #333;
  text-decoration: none;
}
.top-bar {
  justify-content: center;
  align-items: center;
}
.input-search {
  margin: auto;
}
.width-20-percent {
  width: 20%;
}
.img-div {
  margin: 16vh 0 40px 0;
  text-align: center;
}
.v-menu__content {
  box-shadow: none !important;
}
.border-list {
  border: 1px solid #eee !important;
}
</style>
