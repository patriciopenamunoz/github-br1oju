import React, { useContext } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CustomGraphSeries from "./custom_graphs/CustomGraphSeries";
import DashboardContext from "../library/DashboardContext";

function Graph(props) {
  let context = useContext(DashboardContext);
  let data = context.graphList
    .getGraph(props.name)
    .getSeries(
      context.categoriesKey.axisName,
      props.serieKey,
      props.series,
      props.typeVars
    );
  let options = {
    chart: { type: props.type, height: 200 },
    title: { text: props.title },
    yAxis: { title: { text: props.yTitle } },
    credits: { text: "Log Solutions" },
    series: data.series,
    xAxis: { categories: data.categories }
  };

  function RenderGraph() {
    switch (props.type) {
      case "c-graph-series":
        return <CustomGraphSeries options={options} />;
      default:
        return <HighchartsReact highcharts={Highcharts} options={options} />;
    }
  }

  return <div className="graph-graph">{RenderGraph()}</div>;
}

export default Graph;
