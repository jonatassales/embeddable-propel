import React from 'react'
import ReactDOM from 'react-dom/client';

function App ({ name }) {
  React.useEffect(() => {
    console.log('lifecycle works')
  }, [])
  return <p>Hello {name}</p>
}

class TimeSeriesChart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    const name = this.getAttribute('data-name');
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<App name={name} />);
  }
}

customElements.define('time-series-chart', TimeSeriesChart)