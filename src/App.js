import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://calendar.google.com/calendar/embed?src=pj4va06gncb1vgv76864hbsh08%40group.calendar.google.com&ctz=Europe%2FMoscow"
          padding-bottom="56%"
          padding-top= "40px"
          height= "0"
          overflow= "hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          Нажми на меня
        </a>
      </header>
    </div>
  );
}

export default App;
