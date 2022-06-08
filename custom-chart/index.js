import React from 'react'
import ReactDOM from 'react-dom/client';

function App ({ name }) {
  return <p>Hello {name}</p>
}

class CustomChart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    const name = this.getAttribute('data-name');
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<App name={name} />);
  }
}

customElements.define('custom-chart', CustomChart)