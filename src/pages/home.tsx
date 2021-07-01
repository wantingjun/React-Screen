import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
import {Chart1} from "../components/chart-1";
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";
import {Chart4} from "../components/chart-4";
import {Chart5} from "../components/chart-5";
import {Chart6} from "../components/chart-6";
import {Chart7} from '../components/chart-7';
import {Chart8} from '../components/chart-8';
import {Chart9} from '../components/chart-9';
import {Chart10} from "../components/chart-10";
import {Chart11} from "../components/chart-11";
import {Chart12} from "../components/chart-12";

export const Home = () => {
    const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{backgroundImage:`url(${headerBg})`}}></header>
        <main>
            <section className="section1">
                <Chart1></Chart1>
                <Chart2></Chart2>
            </section>
            <section className="bordered section2">
                <Chart3/>
                <Chart4/>
            </section>
            <section className="bordered section3">
                <Chart5/>
            </section>
            <section className="bordered section4">
                <Chart6/>
                <div className="bordered 年龄段">
                    <h2>犯罪人员年龄段分布</h2>
                    <div className="charts">
                        <Chart7/>
                        <Chart8/>
                        <Chart9/>
                    </div>
                </div>
            </section>
            <section className="section5">
                <div className="bordered row1 案发类型">
                    <h2>案发类型统计</h2>
                    <div className="charts">
                        <Chart10/>
                        <Chart11/>
                    </div>
                </div>
                <div className="bordered row2 案发街道">
                    <h2>案发街道统计</h2>
                    <div className="charts">
                        <Chart12/>
                    </div>
                </div>
                <div className="bordered row3 作案手段">
                    <h2>作案手段分析</h2>
                </div>
            </section>
        </main>
        <footer>
            &copy; wanwan {year} 大屏监控
        </footer>
    </div>
  );
};
