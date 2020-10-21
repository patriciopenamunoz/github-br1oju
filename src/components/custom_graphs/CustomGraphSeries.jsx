import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function CustomGraphSeries(props) {
    let options = props.options;
    options.chart.type = "area";

    debugger;
    let graph_list = options.series.map(serie => {
        let graph_option = {};
        graph_option.title = serie.name;
        graph_option.options = JSON.parse(JSON.stringify(options));
        graph_option.options.title.text = null;
        graph_option.options.series = [ { data: serie.data, showInLegend: false } ];
        graph_option.custom = {
            total: serie.data.reduce((a,b) => a + b)
        }
        graph_option.options.plotOptions = {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        }
        return graph_option;
    });
    debugger;
    let totalPercent = graph_list.map(graph => graph.custom.total).reduce((a,b) => a + b);
    return (
        <div style={{"display":"flex"}}>
            {graph_list.map(graph => {
                
                return (
                <div style={{"display":"flex","flex-grow": "1","flex-basis": "0"}}>
                    <div style={{"display":"flex","flex-basis":"0","padding":"10px","min-width":"150px","align-items":"center","justify-content":"center"}}>
                        <div style={{"text-align":"center"}}>
                            <h4>{graph.title}</h4>
                            <div style={{"fontSize":"xx-large", "color":"#9ABC32"}}>
                                {Math.round((100*graph.custom.total/(totalPercent))*100)/100}
                            </div>
                        </div>
                    </div>
                    <div style={{"flex-basis":"0","flex-grow":"1"}}>
                        <HighchartsReact highcharts={Highcharts} options={graph.options} />
                    </div>
                </div>);
            })}
        </div>
    );
}

export default CustomGraphSeries;