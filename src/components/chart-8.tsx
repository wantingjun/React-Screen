import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const Chart8 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
    }, []);

    return (
        <div className="年龄段-图2">8
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};
