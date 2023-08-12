import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Counter from './components/Counter/Counter';
import CounterWithRedux from './components/Counter/CounterWithRedux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='conteiner'>
        <header></header>
        <Navigation/>
        <main>
          <div>
            <div><p>nev</p></div>
            <Counter/>
            <CounterWithRedux/>
            <section></section>
          </div>
        </main>
        <footer>
          <div className='footer-head'></div>
          <div className='footer-bottom'></div>
        </footer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
