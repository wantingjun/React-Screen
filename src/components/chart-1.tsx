import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/px";
import {baseEchartOptions} from "../shared/base-echart-options";
import {createEchartsOptions} from "../shared/create-echarts-options";


export const Chart1=()=>{
    const divRef = useRef(null)
    useEffect(()=>{
        console.log(divRef.current)
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {
                data: ['兰州新区', '2兰州新区', '3兰州新区', '4兰州新区', '5兰州新区', '6兰州新区','7','8','9'],
                axisTick:false,
                axisLabel:{
                    fontSize:px(6),
                    formatter(val){
                        console.log(val)
                        if(val.length > 2){
                            const arr = val.split('')
                            arr.splice(2,0,'\n')
                            return arr.join('')
                        } else{
                            return val;
                        }

                    }
                }
            },
            yAxis: {
                splitLine: {show: false},
                axisLabel:{
                    fontSize:6
                },
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },

            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 30, 20,39,17,19]
            }]
        }));
    },[])
    return (
        <div className="管辖统计 bordered">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    )

}
