import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title = "Hello"
  const like = 50
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
        
        
      </div>
    </div>
  );
}

export default App;
