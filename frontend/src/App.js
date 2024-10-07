// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ============================================


// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/data')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Data Visualization Tool: InsightBridge</h1>
//       {data ? (
//         <div>
//           <p>{data.message}</p>
//           <ul>
//             {data.data.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

// export default App;
// ===================================================

// Translated the body content into React JSX:
// src/App.js
// import React, { useEffect } from 'react';
// import './App.css'; // Link your CSS

// const App = () => {

//   // Example of adding a Plotly chart using React's useEffect
//   useEffect(() => {
//     const data = [{
//       x: [1, 2, 3, 4],
//       y: [10, 11, 12, 13],
//       type: 'scatter'
//     }];
//     const layout = {
//       title: 'Sample Plot'
//     };

//     Plotly.newPlot('chart', data, layout);
//   }, []);

//   return (
//     <div>
//       <header>
//         <h1>Data Visualization Tool: Empowering Public Understanding</h1>
//       </header>

//       <nav>
//         <ul>
//           <li><a href="#overview">Overview</a></li>
//           <li><a href="#objectives">Objectives</a></li>
//           <li><a href="#visualizations">Visualizations</a></li>
//           <li><a href="#about">About</a></li>
//         </ul>
//       </nav>

//       <section id="overview">
//         <h2>The Data Gap</h2>
//         <p>Data Inaccessibility, Lack of Context, and Limited Engagement are hindering public understanding of societal issues.</p>
//       </section>

//       <section id="objectives">
//         <h2>Project Objectives</h2>
//         <ul>
//           <li>Data Simplification</li>
//           <li>User Engagement</li>
//           <li>Accessibility</li>
//         </ul>
//       </section>

//       <section id="visualizations">
//         <h2>Interactive Visualizations</h2>
//         <div id="chart"></div>
//         <div id="bar-chart"></div>
//       </section>

//       <section id="about">
//         <h2>About the Project</h2>
//         <p>This project uses data related to economic disparity, healthcare access, and education to provide easy-to-understand visualizations.</p>
//       </section>

//       <footer>
//         <p>&copy; 2024 Data Visualization Tool. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// ============================================

import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js'; // Import Plotly
// import Plotly from 'plotly.js/dist/plotly.js';
import './App.css'; // Link your CSS

function App() {
  const [data, setData] = useState(null);

  // Fetch data from Flask API
  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // UseEffect for Plotly bar chart
  useEffect(() => {
    const barData = [{
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      y: [10, 20, 30, 40, 50],
      type: 'bar'
    }];
    const layout = {
      title: 'Bar Chart Example'
    };

    Plotly.newPlot('bar-chart', barData, layout);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Data Visualization Tool: Empowering Public Understanding</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#objectives">Objectives</a></li>
          <li><a href="#visualizations">Visualizations</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <section id="overview">
        <h2>The Data Gap</h2>
        <p>Data Inaccessibility, Lack of Context, and Limited Engagement are hindering public understanding of societal issues.</p>
      </section>

      <section id="objectives">
        <h2>Project Objectives</h2>
        <ul>
          <li>Data Simplification</li>
          <li>User Engagement</li>
          <li>Accessibility</li>
        </ul>
      </section>

      <section id="visualizations">
        <h2>Interactive Visualizations</h2>
        {data ? (
          <div>
            <p>{data.message}</p>
            <ul>
              {data.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
        {/* Div for the bar chart */}
        <div id="bar-chart" style={{ width: '100%', height: '400px' }}></div>
      </section>

      <section id="about">
        <h2>About the Project</h2>
        <p>This project uses data related to economic disparity, healthcare access, and education to provide easy-to-understand visualizations.</p>
      </section>

      <footer>
        <p>&copy; 2024 Data Visualization Tool. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
