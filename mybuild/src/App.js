import './App.css';
import Counter from './components/Counter/Counter';
import CounterWithRedux from './components/Counter/CounterWithRedux';

function App() {
  return (
    <div className='conteiner'>
      <header></header>
      <nav>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </nav>
      <main>
        <div>
          <div><p></p></div>
          <Counter/>
          <CounterWithRedux/>
          <section></section>
        </div>
      </main>
      <footer>
        <div className='footer-head'></div>
        <div className='footer-bottom'></div>
      </footer>
    </div>
  );
}

export default App;
