import React, { useState, useEffect } from 'react';
import { memo } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { formatDate } from '/src/utils/core.js';
import fetchDataEndPoint from './FetchDataEndPoint';

const csvs = ['analysis_cal.csv', 'analysis_dist.csv', 'analysis_heart.csv', 'analysis_steps.csv'];
const api_endpoints = ['calories', 'distance', 'heartrate', 'steps'];

const Chart = memo(({ dateRange }) => {
  let [yOptions, setYOptions] = useState([
    {
      name: 'data1',
      data: getRandomData(),
      color: '#5ec9db'
    },
    {
      name: 'data2',
      data: getRandomData(),
      color: '#f5b97a'
    },
    {
      name: 'data3',
      data: getRandomData(),
      color: '#f57a7a'
    },
    {
      name: 'data4',
      data: getRandomData(),
      color: '#d5d97a'
    }
  ].map(({ name, color, type = 'line', data }) => ({
    name,
    data,
    color,
    seriesOption: getSeriesOption({ name, from: color, data, type })
  })));

  useEffect(() => {
      async function fetchData() {
        try {
          // const cal_data = await useFetchAndDisplayCSV(csvs[0]);
          // const dist_data = await useFetchAndDisplayCSV(csvs[1]);
          // const heart_data = await useFetchAndDisplayCSV(csvs[2]);
          // const steps_data = await useFetchAndDisplayCSV(csvs[3]);

          const cal_data = await fetchDataEndPoint(api_endpoints[0]);
          const dist_data = await fetchDataEndPoint(api_endpoints[1]);
          const heart_data = await fetchDataEndPoint(api_endpoints[2]);
          const steps_data = await fetchDataEndPoint(api_endpoints[3]);    
          

        setYOptions([
          {
            name: 'Calories Burned (kcal / 10)',
            data: cal_data.data,
            color: '#5ec9db'
          },
          {
            name: 'Distance Traveled (km)',
            data: dist_data.data,
            color: '#f5b97a'
          },
          {
            name: 'Heart Rate (bpm)',
            data: heart_data.data,
            color: '#f57a7a'
          },
          {
            name: 'Steps Taken (thousands)',
            data: steps_data.data,
            color: '#d5d97a'
          }
        ].map(({ name, color, type = 'line', data }) => ({
          name,
          data,
          color,
          seriesOption: getSeriesOption({ name, from: color, data, type }),
          visible: true
        })));
      } catch (error) {
        console.error('Error fetching and parsing the CSV:', error);
      }
    }

    fetchData();
  }, []);

  const option = {
    color: yOptions.map(({ color }) => color),
    title: {
      text: 'Health data vis'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        axis: 'auto',
        snap: 'true'
      }
    },
    legend: {
      x: 'center',
      y: 'bottom',
    },
    grid: {
      left: '0%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dateRange.map((v) => formatDate(v, 'MM-DD')),
      splitLine: {
        show: false,
        lineStyle: {
          type: 'solid'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        interval: 2
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} units',
        align: 'center'
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          width: 1
        }
      },
      emphasis: {
        focus: 'series'
      },
      legend: {
        selectorLabel: {
          show: true
        },
      },
      min: 0,
      max: 'dataMax'
    },
    series: [...yOptions.map(({ seriesOption }) => seriesOption)]
  }

  function getRandomData(len = dateRange.length || 11) {
    const data = []
    for (let i = 0; i < len; i++) {
      data.push(Math.round(Math.random() * 200))
    }
    return data
  }

  function getSeriesOption(options) {
    return {
      name: options.name,
      type: options.type,
      // areaStyle: {
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //     { offset: 0, color: options.from },
      //     { offset: 1, color: options.to || '#fff' }
      //   ]),
      //   lineStyle: {
      //     width: 1
      //   }
      // },
      label: {
        show: false,
        position: 'top'
      },
      data: options.data,
    }
  }

  function HeartRateAnalysis() {
    const [todayHeartRate, setTodayHeartRate] = useState(0);
    const [weeklyAverageHeartRate, setWeeklyAverageHeartRate] = useState(0);
    const [comparison, setComparison] = useState('');

    const fetchTodaysHeartRate = () => {
      return Math.floor(Math.random() * (100 - 60 + 1) + 60);
    };

    const fetchWeeklyAverageHeartRate = () => {
      return Math.floor(Math.random() * (85 - 65 + 1) + 65);
    };

    useEffect(() => {
      const todayRate = fetchTodaysHeartRate();
      setTodayHeartRate(todayRate);

      const weeklyAverageRate = fetchWeeklyAverageHeartRate();
      setWeeklyAverageHeartRate(weeklyAverageRate);

      if (todayRate > weeklyAverageRate) {
        setComparison('HIGHER');
      } else if (todayRate < weeklyAverageRate) {
        setComparison('LOWER');
      } else {
        setComparison('EQUAL');
      }
    }, []);

    return (
      <div className="heart-rate-analysis">
        <h2 style={{ color: '#1e539e' }}>
          <i className="fas fa-heart" style={{ marginRight: '8px', color: '#e74c3c' }}></i>
          Heart Rate Analysis
        </h2>
        <p style={{ backgroundColor: '#f8f8f8' }}><strong>Today's Resting Heart Rate:</strong> {todayHeartRate}</p>
        <p style={{ backgroundColor: '#f8f8f8' }}><strong>Weekly Average Resting Heart Rate:</strong> {weeklyAverageHeartRate}</p>
        <p style={{ backgroundColor: '#f8f8f8' }}>
          Today's resting heart rate was{' '}
          <strong style={{ color: comparison === 'HIGHER' ? 'green' : comparison === 'LOWER' ? 'red' : 'black' }}>
            {comparison}
          </strong>{' '}
          than your typical resting heart rate average over the week.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ReactECharts option={option} style={{ height: 500 }} />
        <HeartRateAnalysis />
      </div>
    </div>
  );
});

export default Chart;

// CSS for HeartRateAnalysis component
const styles = `
.heart-rate-analysis {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.heart-rate-analysis h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.heart-rate-analysis p {
  margin-bottom: 8px;
}

.heart-rate-analysis strong {
  color: #333;
}

.fas.fa-heart {
  color: #e74c3c;
  margin-right: 8px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
