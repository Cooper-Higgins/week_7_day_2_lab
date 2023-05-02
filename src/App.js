import './App.css';
import FilmBox from "./containers/FilmBox";

function App() {
  return (
    <div>
      <div class="header-container">
        <h1 class="header">Upcoming Film Releases for UK</h1>
      </div>
      <FilmBox/>
    </div>
  );
}

export default App;
