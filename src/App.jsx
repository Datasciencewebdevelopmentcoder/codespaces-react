import './App.css';
import Navbar from './Navbar';
function App() {
  const title = "Hello"
  const like = 50
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times</p>
      </div>
    </div>
  );
}

export default App;
