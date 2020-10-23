<template>
  <div>
    <h2>amcharts 라이브러리를 이용해서 차트 그리기</h2>
    <div id="chart-section"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadChart();
  },
  methods: {
    loadChart() {
      const { am4core, am4charts, am4themes_animated } = this.$am4core_module();
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create('chart-section', am4charts.XYChart);

      chart.data = [{
        "date": new Date(2018, 3, 20),
        "value": 90
      }, {
        "date": new Date(2018, 3, 21),
        "value": 102
      }, {
        "date": new Date(2018, 3, 22),
        "value": 65
      }, {
        "date": new Date(2018, 3, 23),
        "value": 62
      }, {
        "date": new Date(2018, 3, 24),
        "value": 55
      }, {
        "date": new Date(2018, 3, 25),
        "value": 81,
        "disabled": false
      }];

      // Create Axis
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.valueY = "value";
      lineSeries.dataFields.dateX = "date";
      lineSeries.name = "Sales";
      lineSeries.strokeWidth = 3;
      lineSeries.strokeDasharray = "5,4";

      // Create bullet
      let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      bullet.disabled = true;
      bullet.propertyFields.disabled = "disabled";

      let secondCircle = bullet.createChild(am4core.Circle);
      secondCircle.radius = 6;
      secondCircle.fill = chart.colors.getIndex(8);

      bullet.events.on("inited", function(event) {
        animateBullet(event.target.circle);
      })
      function animateBullet(bullet) {
        let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function(event){
          animateBullet(event.target.object);
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  color: $colorDark;
  text-align: center;
}

#chart-section {
  width: 100%;
  height: 600px;
}
</style>