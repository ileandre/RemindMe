import Homepage from "./components/Homepage"
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <Homepage />
      </Link>

      <Route path="/calendar">

      </Route>

      <Route path="/:day">
        
      </Route>

      <Route path="/:day/:id">
        
      </Route>
    </div>
  );
}

export default App;
