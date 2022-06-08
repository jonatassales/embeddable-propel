import React from 'react'
import ReactDOM from 'react-dom/client';
import ReactECharts from 'echarts-for-react'
import { GraphQLClient } from 'graphql-request'

import timeSeriesQuery from './graphql/timeSeriesQuery.graphql'


const client = new GraphQLClient('https://api.us-east-2.dev.propeldata.com/graphql')

export default function App ({ account, environment, metricUniqueName, accessToken, color }) {
  const [isLoading, setIsLoading] = React.useState(true)

  const [labels, setLabels] = React.useState([])
  const [values, setValues] = React.useState([])

  const [timeRange, setTimeRange] = React.useState('LAST_YEAR')
  const [granularity, setGranularity] = React.useState('MONTH')

  React.useEffect(() => {
    async function getTimeSeriesData() {
      setIsLoading(true)
      client.setHeader('authorization', 'Bearer ' + accessToken)
      client.setHeader('X-Pro-Account', account)
      client.setHeader('X-Pro-Environment', environment)
      const queryVariables = {
        uniqueName: metricUniqueName,
        input: {
          timeRange: {
            relative: timeRange
          },
          granularity
        }
      }
  
      const response = await client.request(timeSeriesQuery, queryVariables)
  
      setLabels(response?.metricByName?.timeSeries?.labels)
      setValues(response?.metricByName?.timeSeries?.values)

      setIsLoading(false)
    }

    getTimeSeriesData()
  }, [timeRange, granularity])

  const option = {
    xAxis: {
      data: labels,
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: values,
        type: 'bar',
        color: color || 'rgba(64, 152, 215, 0.4)',
        emphasis: {
          itemStyle: {
            color: color || '#4098D7'
          }
        }
      }
    ],
    tooltip: {
      type: 'bar',
      axisPointer: {
        type: 'bar'
      },
      position: (point) => {
        return [point[0] - 100, point[1] - 50]
      }
    }
  }

  if (isLoading) return 'Loading...'

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value)
  }

  const handleGranularityChange = (event) => {
    setGranularity(event.target.value)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <select value={timeRange} onChange={handleTimeRangeChange}>
          <option value="LAST_30_DAYS">Last 30 Days</option>
          <option value="LAST_YEAR">Last Year</option>
          <option value="LAST_5_YEARS">Last 5 Years</option>
        </select>

        <select value={granularity} onChange={handleGranularityChange}>
          <option value="HOUR">Hour</option>
          <option value="DAY">Day</option>
          <option value="MONTH">Month</option>
        </select>
      </div>
      <ReactECharts option={option} />
    </>
  )
}

class TimeSeriesChart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const account = this.getAttribute('account');
    const environment = this.getAttribute('environment');
    const metricUniqueName = this.getAttribute('metric');
    const accessToken = this.getAttribute('accessToken');
    const color = this.getAttribute('color');

    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <App 
        account={account} 
        environment={environment} 
        metricUniqueName={metricUniqueName} 
        accessToken={accessToken}
        color={color}
      />
    );
  }
}

customElements.define('time-series-chart', TimeSeriesChart)