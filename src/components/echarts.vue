<template>
  <div class="echart-wrap">
    <v-chart
      :option="option_column"
      autoresize
      style="height: 300px; width: auto"
    ></v-chart>
    <div class="botom-title">{{ echartParentData.bottomTitle }}</div>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line"; //绘制不同的图表要引入不同的chart和component
import "echarts/lib/component/polar";
export default {
  props: {
    echartParentData: {
      type: Object,
      default() {
        return {
          areaColor1: "#b66047",
          areaColor2: "#6199be",
          data1: [0, 20, 40, 80, 300, 800, 700],
          data2: [0, 250, 450, 750, 450, 30, 5],
          titleText: "Best shoes",
          subTitleText: "Growth 37%",
          xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        };
      },
    },
  },
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      option_column: {
        title: {
          text: this.echartParentData.titleText,
          top: "5%",
          left: "10%",
          subtext: this.echartParentData.subTitleText,
        },
        color: ["#6199be", "#b66047", "#61b845", "#cf6aac"],
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        legend: {
          show: false,
          bottom: 10,
          textStyle: {
            fontSize: 10,
            color: "rgba(255,255,255)",
          },
          data: ["厦门第一医院", "厦门中山医院", "厦门中医院", "厦门第五医院"],
          //circle圆形,rect长方形,roundRect圆角长方形,triangle三角形,diamond菱形,pin不规则圆,arrow不规则三角形,none没有图标
          // icon:'arrow'
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}<br/>{c}人",
        },
        grid: {
          left: 0,
          right: 0,
          top: 60,
          bottom: 0,
        },
        xAxis: [
          {
            name: "",
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.9)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.9)",
              },
            },
            axisLabel: {
              color: "rgba(255,255,255)",
              //文本数据倾斜
              rotate: 30,
            },
            data: this.echartParentData.xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 1500,
            interval: 300,
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.5)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.01)",
              },
            },
            axisLabel: {
              formatter: "{value} ",
              color: "#fff",
            },
          },
        ],
        series: [
          {
            name: "厦门第一医院",
            type: "line",
            color: this.echartParentData.areaColor1,
            // 折线图变曲线图
            z: 2,
            smooth: true,
            data: this.echartParentData.data1,
            symbol: "none",
            showSymbol: false,
            // 区域面积样式
            areaStyle: {
              color: this.echartParentData.areaColor1,
              opacity: 1,
            },
          },
          {
            name: "厦门中山医院",
            type: "line",
            color: this.echartParentData.areaColor2,
            smooth: true,
            z: 1,
            data: this.echartParentData.data2,
            symbol: "none",
            showSymbol: false,
            areaStyle: {
              color: this.echartParentData.areaColor2,
              opacity: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.botom-title {
  background-color: #fff;
  text-align: center;
  padding: 12px 0;
}
</style>
