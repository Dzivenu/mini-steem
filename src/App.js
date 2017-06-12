import React from 'react';
import SteemTrending from './Components/SteemTrending'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav className="app-header">
        <div className="top">
          <h1>Mini Steem</h1>
        </div>

        <div className="bottom">
          trending
        </div>
      </nav>

      <section className="trending-discussions">
        <SteemTrending />
      </section>
    </div>
  );
}

export default App;
