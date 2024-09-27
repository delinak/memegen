import './App.css'
import Header from './component/Header.js'
import Meme from './component/Meme.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <div className="meme-gallery"></div>
    </div>
  );
}

export default App;
